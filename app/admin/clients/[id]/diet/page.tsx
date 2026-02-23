"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "../../../../../utils/supabase";
import { calculateCalories } from "../../../../../utils/calorieCalculator";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function DietAssignmentPage() {
    const params = useParams();
    const router = useRouter();
    const userId = params?.id;

    const [client, setClient] = useState<any>(null);
    const [activeDay, setActiveDay] = useState(0);
    const [foods, setFoods] = useState<any[]>([]);
    const [progress, setProgress] = useState<{ [day: number]: { completed: boolean, note: string } }>({});
    const [loading, setLoading] = useState(true);
    const [diet, setDiet] = useState<any[]>([
        {
            day: 1,
            breakfast: [],
            lunch: [],
            dinner: [],
            snacks: [],
            notes: ""
        }
    ]);

    useEffect(() => {
        if (!userId) return;

        async function fetchData() {
            setLoading(true);

            // 1. Danışan Profilini Çek
            const { data: profile } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', userId)
                .single();

            if (profile) setClient(profile);

            // 2. Mevcut Diyeti Çek
            const { data: dietData } = await supabase
                .from('diets')
                .select('*')
                .eq('client_id', userId)
                .eq('is_active', true)
                .maybeSingle();

            if (dietData && dietData.content) {
                const sanitizedDiet = dietData.content.map((d: any) => ({
                    ...d,
                    notes: d.notes || ""
                }));
                setDiet(sanitizedDiet);
            }

            // 3. Besin Kütüphanesini Çek
            const { data: foodData } = await supabase
                .from('food_library')
                .select('*');

            if (foodData) setFoods(foodData);

            // 4. İlerlemeyi Çek
            const { data: progressData } = await supabase
                .from('diet_progress')
                .select('*')
                .eq('client_id', userId);

            if (progressData) {
                const progObj: any = {};
                progressData.forEach(p => {
                    progObj[p.day_number - 1] = { completed: p.is_completed, note: p.note };
                });
                setProgress(progObj);
            }

            setLoading(false);
        }

        fetchData();
    }, [userId]);

    const addDay = () => {
        setDiet([
            ...diet,
            {
                day: diet.length + 1,
                breakfast: [],
                lunch: [],
                dinner: [],
                snacks: [],
                notes: "" // Yeni gün için boş not alanı
            }
        ]);
        setActiveDay(diet.length);
    };

    const removeDay = (indexToRemove: number) => {
        if (diet.length === 1) return alert("En az 1 gün olmalı!");
        const newDiet = diet.filter((_, idx) => idx !== indexToRemove).map((d, idx) => ({ ...d, day: idx + 1 }));
        setDiet(newDiet);
        setActiveDay(Math.min(activeDay, newDiet.length - 1));
    };

    const addRow = (meal: string) => {
        setDiet(prevDiet => prevDiet.map((d, index) => {
            if (index === activeDay) {
                const existingMeals = (d as any)[meal] || [];
                return {
                    ...d,
                    [meal]: [...existingMeals, { food: "", portion: "", cal: 0 }]
                };
            }
            return d;
        }));
    };

    const updateRow = (meal: string, index: number, field: string, value: any) => {
        setDiet(prevDiet => prevDiet.map((d, dayIndex) => {
            if (dayIndex === activeDay) {
                const newMealArr = [...((d as any)[meal] || [])];
                newMealArr[index] = { ...newMealArr[index], [field]: value };

                // If portion is updated, try to auto-calculate calories
                if (field === "portion") {
                    const currentFoodName = newMealArr[index].food;
                    const baseFood = foods.find(f => f.name.toLowerCase() === String(currentFoodName).toLowerCase());

                    if (baseFood) {
                        const calculatedCal = calculateCalories(String(value), baseFood);
                        if (calculatedCal !== null) {
                            newMealArr[index].cal = calculatedCal;
                        }
                    }
                }

                return { ...d, [meal]: newMealArr };
            }
            return d;
        }));
    };

    const handleNotesChange = (value: string) => {
        setDiet(prevDiet => prevDiet.map((d, dayIndex) => {
            if (dayIndex === activeDay) {
                return { ...d, notes: value };
            }
            return d;
        }));
    };

    const handleFoodChange = (meal: string, index: number, value: string) => {
        const selectedFood = foods.find(f => f.name.toLowerCase() === String(value).toLowerCase());

        setDiet(prevDiet => prevDiet.map((d, dayIndex) => {
            if (dayIndex === activeDay) {
                const newMealArr = [...((d as any)[meal] || [])];
                newMealArr[index] = { ...newMealArr[index], food: value };

                if (selectedFood) {
                    newMealArr[index].portion = selectedFood.unit;
                    newMealArr[index].cal = selectedFood.cal;
                }

                return { ...d, [meal]: newMealArr };
            }
            return d;
        }));
    };

    const removeRow = (meal: string, index: number) => {
        setDiet(prevDiet => prevDiet.map((d, dayIndex) => {
            if (dayIndex === activeDay) {
                const newMealArr = [...((d as any)[meal] || [])];
                newMealArr.splice(index, 1);
                return { ...d, [meal]: newMealArr };
            }
            return d;
        }));
    };

    const handleSave = async () => {
        if (!userId) return;
        setLoading(true);

        // Önce eski aktif diyetleri pasife çek (İsteğe bağlı, biz burada tek bir aktif diyet tutuyoruz)
        await supabase
            .from('diets')
            .update({ is_active: false })
            .eq('client_id', userId);

        // Yeni diyeti ekle
        const { error } = await supabase
            .from('diets')
            .insert([{
                client_id: userId,
                title: `${diet.length} Günlük Program`,
                content: diet,
                is_active: true
            }]);

        if (error) {
            alert("Diyet kaydedilemedi: " + error.message);
        } else {
            alert("Diyet listesi Supabase'e başarıyla kaydedildi!");
            // router.push("/admin/clients");
        }
        setLoading(false);
    };

    const handlePrint = async () => {
        const element = document.getElementById("printable-diet");
        if (!element) return;

        // Geçici olarak görünür yapalım ki resmini çekebilelim
        element.style.display = "block";

        try {
            const canvas = await html2canvas(element, {
                scale: 2, // Yüksek çözünürlük
                useCORS: true,
                backgroundColor: "#f9fbf9"
            });

            const imgData = canvas.toDataURL("image/png");

            // A4 format
            const pdf = new jsPDF("p", "mm", "a4");
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save(`${client.full_name || client.name}_Diyet_Listesi.pdf`);

        } catch (err) {
            console.error("PDF oluşturulurken hata:", err);
            alert("PDF oluşturulamadı.");
        } finally {
            element.style.display = "none";
        }
    };

    if (loading) return <div>Veriler yükleniyor...</div>;
    if (!client || !diet[activeDay]) return <div>Hata: Danışan bulunamadı.</div>;

    return (
        <>
            {/* Diet Assignment wrapper responsive padding */}
            <div className="diet-page-wrapper" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <style jsx>{`
                    .diet-page-wrapper {
                        padding: 50px;
                    }
                    @media (max-width: 1024px) {
                        .diet-page-wrapper {
                            padding: 20px;
                        }
                    }
                `}</style>

                <div style={{ marginBottom: "40px" }}>
                    <Link href="/admin/clients" style={{ color: "#79a33d", textDecoration: "none", fontSize: "14px", fontWeight: 700 }}>← Listeye Dön</Link>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
                        <div>
                            <h1 style={{ fontSize: "32px", fontWeight: 700, color: "#2c3e50" }}>Diyet Hazırla: {client.full_name || client.name}</h1>
                            <p style={{ color: "#7f8c8d" }}>Danışan için öğün detaylarını gün gün planlayabilirsiniz.</p>
                        </div>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <button onClick={handlePrint} style={{ ...saveBtn, background: '#f39c12', boxShadow: "0 10px 20px rgba(243, 156, 18, 0.2)" }}> PDF Olarak Yazdır</button>
                            <button onClick={handleSave} style={saveBtn}>Diyet Listesini {diet.length} Günlük Kaydet</button>
                        </div>
                    </div>
                </div>

                {/* Day Navigation Tabs */}
                <div style={{ display: "flex", gap: "10px", marginBottom: "25px", overflowX: "auto", paddingBottom: "10px" }}>
                    {diet.map((d, idx) => (
                        <div key={idx} style={{ position: "relative" }}>
                            <button
                                onClick={() => setActiveDay(idx)}
                                style={{
                                    padding: "12px 25px",
                                    background: activeDay === idx ? "#79a33d" : "white",
                                    color: activeDay === idx ? "white" : "#2c3e50",
                                    border: `1px solid ${activeDay === idx ? "#79a33d" : "#e0e0e0"} `,
                                    borderRadius: "10px",
                                    fontWeight: 700,
                                    cursor: "pointer",
                                    transition: "all 0.2s"
                                }}
                            >
                                {idx + 1}. Gün
                            </button>
                            {diet.length > 1 && (
                                <button
                                    onClick={() => removeDay(idx)}
                                    style={{
                                        position: "absolute",
                                        top: "-8px",
                                        right: "-8px",
                                        background: "#e74c3c",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "50%",
                                        width: "22px",
                                        height: "22px",
                                        fontSize: "10px",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                    title="Günü Sil"
                                >
                                    X
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        onClick={addDay}
                        style={{
                            padding: "12px 25px",
                            background: "transparent",
                            color: "#79a33d",
                            border: "2px dashed #79a33d",
                            borderRadius: "10px",
                            fontWeight: 700,
                            cursor: "pointer"
                        }}
                    >
                        + Yeni Gün Ekle
                    </button>
                </div>

                {/* Danışan Geri Bildirimi Panosu */}
                <div style={{ marginBottom: "30px", background: progress[activeDay]?.completed ? "#eaf2e3" : "white", padding: "20px 30px", borderRadius: "15px", border: `1px solid ${progress[activeDay]?.completed ? "#79a33d" : "#eee"} `, display: "flex", alignItems: "flex-start", gap: "20px" }}>
                    <div style={{
                        fontSize: "24px",
                        background: progress[activeDay]?.completed ? "#79a33d" : "#f0f0f0",
                        color: progress[activeDay]?.completed ? "white" : "#ccc",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        {progress[activeDay]?.completed ? "✓" : "!"}
                    </div>
                    <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: "16px", fontWeight: 700, color: progress[activeDay]?.completed ? "#3d5a2d" : "#7f8c8d", marginBottom: "5px" }}>
                            {progress[activeDay]?.completed ? "Danışan bu günü eksiksiz uyguladı!" : "Bu gün için henüz onay verilmedi."}
                        </h3>
                        {progress[activeDay]?.note ? (
                            <div style={{ marginTop: "10px", padding: "15px", background: "white", borderRadius: "10px", fontSize: "14px", color: "#555", fontStyle: "italic", borderLeft: "4px solid #79a33d" }}>
                                "{progress[activeDay].note}"
                            </div>
                        ) : (
                            <p style={{ fontSize: "13px", color: "#95a5a6", marginTop: "5px" }}>Danışan herhangi bir not bırakmadı.</p>
                        )}
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                    {["breakfast", "lunch", "dinner", "snacks"].map((meal) => (
                        <div key={meal} style={{ background: "white", padding: "30px", borderRadius: "20px", boxShadow: "0 10px 20px rgba(0,0,0,0.02)" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#3d5a2d", textTransform: "capitalize" }}>
                                    {meal === "breakfast" ? "Kahvaltı" : meal === "lunch" ? "Öğle Yemeği" : meal === "dinner" ? "Akşam Yemeği" : "Ara Öğünler"}
                                </h3>
                                <button onClick={() => addRow(meal)} style={addBtn}>+ Satır Ekle</button>
                            </div>

                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                <thead>
                                    <tr style={{ textAlign: "left", fontSize: "13px", color: "#95a5a6", textTransform: "uppercase" }}>
                                        <th style={{ padding: "10px", width: "40%" }}>Besin</th>
                                        <th style={{ padding: "10px", width: "30%" }}>Porsiyon</th>
                                        <th style={{ padding: "10px", width: "20%" }}>Kalori</th>
                                        <th style={{ padding: "10px", width: "10%" }}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {((diet[activeDay] as any)[meal] || []).map((row: any, idx: number) => (
                                        <tr key={idx}>
                                            <td style={{ padding: "5px" }}>
                                                <input value={row.food} onChange={e => handleFoodChange(meal, idx, e.target.value)} list="food-suggestions" style={inputStyle} placeholder="Besin adı..." />
                                            </td>
                                            <td style={{ padding: "5px" }}>
                                                <input value={row.portion} onChange={e => updateRow(meal, idx, "portion", e.target.value)} style={inputStyle} placeholder="100g, 1 porsiyon..." />
                                            </td>
                                            <td style={{ padding: "5px" }}>
                                                <input type="number" value={row.cal} onChange={e => updateRow(meal, idx, "cal", e.target.value)} style={inputStyle} />
                                            </td>
                                            <td style={{ padding: "5px", textAlign: "center" }}>
                                                <button onClick={() => removeRow(meal, idx)} style={{ background: "none", border: "none", color: "#e74c3c", cursor: "pointer", fontWeight: 700 }}>Sil</button>
                                            </td>
                                        </tr>
                                    ))}
                                    {((diet[activeDay] as any)[meal] || []).length === 0 && (
                                        <tr>
                                            <td colSpan={4} style={{ padding: "20px", textAlign: "center", color: "#95a5a6", fontSize: "14px" }}>
                                                Bu öğüne henüz besin eklenmedi.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    ))}

                    {/* Notlar Alanı Ekleme Yeri */}
                    <div style={{ background: "white", padding: "30px", borderRadius: "20px", boxShadow: "0 10px 20px rgba(0,0,0,0.02)" }}>
                        <div style={{ marginBottom: "15px" }}>
                            <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#3d5a2d" }}>
                                Notlar ve Tavsiyeler ({activeDay + 1}. Gün)
                            </h3>
                            <p style={{ color: "#7f8c8d", fontSize: "13px", marginTop: "5px" }}>Güne özel danışana iletmek istediğiniz ekstra tavsiyeler, notlar veya su tüketimi gibi detayları buraya yazabilirsiniz.</p>
                        </div>
                        <textarea
                            value={diet[activeDay]?.notes || ""}
                            onChange={(e) => handleNotesChange(e.target.value)}
                            rows={4}
                            style={{ ...inputStyle, resize: "vertical" }}
                            placeholder="Örn: Gün içerisinde 3 litre su içmeyi unutmayın..."
                        />
                    </div>
                </div>

                <datalist id="food-suggestions">
                    {foods.map((food, idx) => (
                        <option key={idx} value={food.name} />
                    ))}
                </datalist>

                {/* --- YAZDIRILABİLİR GİZLİ ALAN --- */}
                <div id="printable-diet" style={{
                    display: "none",
                    position: "absolute",
                    left: "-9999px",
                    top: 0,
                    width: "210mm", /* A4 Genişliği */
                    minHeight: "297mm", /* A4 Yüksekliği */
                    padding: "40mm 20mm 20mm 20mm",
                    background: "#f9fcf9",
                    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
                    color: "#2c3e50",
                    boxSizing: "border-box"
                }}>
                    {/* Arka plan efekti kaldırıldı (CORS/load hatası nedeniyle) */}
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        {/* Header */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px', borderBottom: '2px solid #e0ebd4', paddingBottom: '20px' }}>
                            <div>
                                <h1 style={{ fontSize: "16px", letterSpacing: "3px", color: "#5a7a3b", margin: 0, fontWeight: 600, textTransform: "uppercase" }}>
                                    KİŞİYE ÖZEL
                                </h1>
                                <h2 style={{ fontSize: "36px", margin: "5px 0 0 0", color: "#2c3e50", fontWeight: 300, letterSpacing: "1px" }}>
                                    DİYET LİSTESİ
                                </h2>
                                <p style={{ margin: "5px 0 0 0", fontSize: "15px", color: "#7f8c8d", fontWeight: 500 }}>
                                    Danışan: {client.full_name || client.name}
                                </p>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <div style={{ background: '#79a33d', color: 'white', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', fontSize: '30px', fontWeight: 'bold' }}>
                                    D
                                </div>
                                <div style={{ fontSize: "14px", fontWeight: 600, color: "#2d3436" }}>Sümeyye Hanım</div>
                                <div style={{ fontSize: "12px", color: "#95a5a6", marginTop: "2px" }}>Diyetisyen</div>
                            </div>
                        </div>

                        {/* Seçili Günün Listesi */}
                        <div style={{ marginBottom: "20px" }}>
                            <h3 style={{ fontSize: "20px", color: "#79a33d", borderBottom: "1px dashed #ccc", paddingBottom: "10px", marginBottom: "25px" }}>
                                {activeDay + 1}. Gün Programı
                            </h3>

                            {["breakfast", "lunch", "snacks", "dinner"].map((meal) => {
                                const mealItems = (diet[activeDay] as any)[meal] || [];
                                if (mealItems.length === 0) return null;

                                return (
                                    <div key={meal} style={{ marginBottom: "25px" }}>
                                        <div style={{
                                            background: "#d6e5c5",
                                            padding: "10px 15px",
                                            fontSize: "16px",
                                            fontWeight: 600,
                                            color: "#3d5a2d",
                                            textTransform: "uppercase",
                                            letterSpacing: "1px",
                                            borderLeft: "5px solid #79a33d"
                                        }}>
                                            {meal === "breakfast" ? "Kahvaltı" : meal === "lunch" ? "Öğle Yemeği" : meal === "snacks" ? "Ara Öğün" : "Akşam Yemeği"}
                                        </div>
                                        <div style={{ background: "white", padding: "15px 20px", border: "1px solid #e0e0e0", borderTop: "none" }}>
                                            <ul style={{ margin: 0, paddingLeft: "15px", color: "#34495e", fontSize: "15px", lineHeight: "1.6" }}>
                                                {mealItems.map((item: any, idx: number) => (
                                                    <li key={idx} style={{ marginBottom: "8px" }}>
                                                        <span style={{ fontWeight: 600 }}>{item.portion}</span> {item.food}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Notlar */}
                        {diet[activeDay]?.notes && diet[activeDay].notes.trim() !== "" && (
                            <div style={{ marginTop: "40px" }}>
                                <div style={{
                                    background: "#dae5cc",
                                    padding: "10px 15px",
                                    fontSize: "16px",
                                    fontWeight: 600,
                                    color: "#3d5a2d",
                                    textTransform: "uppercase",
                                    letterSpacing: "1px",
                                    borderLeft: "5px solid #79a33d"
                                }}>
                                    NOTLAR VE TAVSİYELER
                                </div>
                                <div style={{ background: "white", padding: "15px 20px", border: "1px solid #e0e0e0", borderTop: "none", fontSize: "14px", color: "#7f8c8d", lineHeight: "1.6", whiteSpace: "pre-line" }}>
                                    {diet[activeDay].notes}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div style={{ marginTop: "50px", textAlign: "center", fontSize: "13px", color: "#95a5a6", borderTop: "1px solid #eee", paddingTop: "20px" }}>
                        merhaba@diyetisyen.web.tr | Bu diyet listesi kişiye özel olarak hazırlanmıştır.
                    </div>
                </div>
            </div>
        </>
    );
}

const inputStyle = {
    width: "100%",
    padding: "10px 15px",
    borderRadius: "8px",
    border: "1px solid #eee",
    fontSize: "14px",
    color: "#333",
    fontWeight: 600
};

const addBtn = {
    background: "none",
    border: "1px solid #79a33d",
    color: "#79a33d",
    padding: "8px 15px",
    borderRadius: "8px",
    fontWeight: 700,
    cursor: "pointer"
};

const saveBtn = {
    background: "#79a33d",
    color: "white",
    border: "none",
    padding: "15px 40px",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 10px 20px rgba(121, 163, 61, 0.2)"
};
