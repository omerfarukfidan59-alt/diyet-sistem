"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "../../../../../utils/supabase";
import { calculateCalories } from "../../../../../utils/calorieCalculator";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface MealItem { food: string; portion: string; cal: number; }
interface Meal { id: string; label: string; items: MealItem[]; }
interface DietDay { day: number; meals: Meal[]; notes: string; }

let _idCounter = 0;
const uid = () => `m${Date.now()}${++_idCounter}`;

function defaultDay(dayNum: number): DietDay {
    return {
        day: dayNum,
        meals: [
            { id: uid(), label: "Kahvalti", items: [] },
            { id: uid(), label: "Ogle Yemegi", items: [] },
            { id: uid(), label: "Aksam Yemegi", items: [] },
        ],
        notes: "",
    };
}

function migrateDayFormat(d: any): DietDay {
    if (d.meals && Array.isArray(d.meals)) return d as DietDay;
    const meals: Meal[] = [];
    if (d.breakfast?.length) meals.push({ id: uid(), label: "Kahvalti", items: d.breakfast });
    if (d.lunch?.length) meals.push({ id: uid(), label: "Ogle Yemegi", items: d.lunch });
    if (d.dinner?.length) meals.push({ id: uid(), label: "Aksam Yemegi", items: d.dinner });
    if (d.snacks?.length) meals.push({ id: uid(), label: "Ara Ogun", items: d.snacks });
    if (meals.length === 0) {
        meals.push(
            { id: uid(), label: "Kahvalti", items: [] },
            { id: uid(), label: "Ogle Yemegi", items: [] },
            { id: uid(), label: "Aksam Yemegi", items: [] },
        );
    }
    return { day: d.day ?? 1, meals, notes: d.notes || "" };
}

function getDayTotal(day: DietDay): number {
    return day.meals.reduce((s, m) => s + m.items.reduce((ss, it) => ss + (Number(it.cal) || 0), 0), 0);
}

/* =======================================================
   PDF YAZDIRMA ALANI
   Her gun alt alta, 2 sutunlu tablo (ogun | besinler)
   Gün sayisina gore font/padding otomatik kuculu r
   ======================================================= */
function PrintableTable({ diet, clientName }: { diet: DietDay[]; clientName: string }) {
    const n = diet.length;
    const fs = n <= 2 ? 12 : n <= 4 ? 11 : n <= 6 ? 10 : n <= 9 ? 9 : n <= 12 ? 8 : 7;
    const pad = n <= 3 ? "5px 9px" : n <= 6 ? "4px 7px" : n <= 9 ? "3px 6px" : "2px 5px";
    const mb = n <= 4 ? "7px" : n <= 7 ? "5px" : n <= 10 ? "3px" : "2px";
    const hFs = Math.min(fs + 2, 14);

    return (
        <div id="printable-diet" style={{
            display: "none", position: "absolute", left: "-9999px", top: 0,
            width: "188mm",  // Dikey A4 genisligi
            padding: "8mm 8mm 6mm 8mm",
            background: "#ffffff",
            fontFamily: "Arial, Helvetica, sans-serif",
            color: "#2c3e50", boxSizing: "border-box"
        }}>
            {/* Belge Basligi */}
            <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                marginBottom: "8px", borderBottom: "2px solid #4a7c2d", paddingBottom: "5px"
            }}>
                <div>
                    <div style={{ fontSize: `${hFs + 2}px`, fontWeight: 800, color: "#2c3e50" }}>
                        {clientName} --- {n} Gunluk Diyet Programi
                    </div>
                    <div style={{ fontSize: `${fs - 1}px`, color: "#7f8c8d", marginTop: "2px" }}>
                        Sumeyye Hanim --- Kisisel Beslenme Danismanligi
                    </div>
                </div>
                <div style={{ background: "#4a7c2d", color: "white", padding: "3px 12px", borderRadius: "6px", fontSize: `${hFs}px`, fontWeight: 800 }}>
                    {n} GUN
                </div>
            </div>

            {/* Her Gun Alt Alta */}
            {diet.map((day, di) => (
                <div key={di} style={{ marginBottom: mb }}>
                    {/* Gun Basligi */}
                    <div style={{
                        background: "#4a7c2d", color: "white",
                        padding: `${fs <= 8 ? "2px" : "3px"} 8px`,
                        fontSize: `${fs}px`, fontWeight: 800, letterSpacing: "0.5px"
                    }}>
                        {day.day}. GUN
                    </div>

                    {/* Ogun Tablosu */}
                    <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
                        <colgroup>
                            <col style={{ width: "20%" }} />
                            <col style={{ width: "80%" }} />
                        </colgroup>
                        <tbody>
                            {day.meals.filter(m => m.items.length > 0).map((meal, mi) => (
                                <tr key={mi} style={{ background: mi % 2 === 0 ? "#f9fcf6" : "#ffffff" }}>
                                    <td style={{
                                        background: "#d6e5c5", color: "#2c4a1a",
                                        padding: pad, fontSize: `${fs}px`, fontWeight: 700,
                                        border: "1px solid #c0d9a5",
                                        verticalAlign: "top", lineHeight: 1.3
                                    }}>
                                        {meal.label}
                                    </td>
                                    <td style={{
                                        padding: pad, fontSize: `${fs}px`, color: "#2c3e50",
                                        border: "1px solid #e0e0e0",
                                        verticalAlign: "top", lineHeight: 1.35
                                    }}>
                                        {meal.items.map((item, ii) => (
                                            <span key={ii}>
                                                {ii > 0 && <span style={{ color: "#bbb", margin: "0 4px" }}>|</span>}
                                                <span style={{ fontWeight: 700 }}>{item.portion}</span> {item.food}
                                            </span>
                                        ))}
                                    </td>
                                </tr>
                            ))}
                            {day.meals.every(m => m.items.length === 0) && (
                                <tr><td colSpan={2} style={{ padding: pad, fontSize: `${fs}px`, color: "#bbb", border: "1px solid #eee", textAlign: "center" }}>---</td></tr>
                            )}
                            {day.notes?.trim() && (
                                <tr style={{ background: "#fff8f0" }}>
                                    <td style={{
                                        background: "#f5deb3", color: "#7a4f00",
                                        padding: pad, fontSize: `${fs - 1}px`, fontWeight: 700,
                                        border: "1px solid #e8c97a", verticalAlign: "top"
                                    }}>Not</td>
                                    <td style={{
                                        padding: pad, fontSize: `${fs - 1}px`, color: "#7a4f00",
                                        border: "1px solid #e8c97a",
                                        fontStyle: "italic", lineHeight: 1.3
                                    }}>{day.notes}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            ))}

            <div style={{ marginTop: "5px", textAlign: "center", fontSize: `${fs - 2}px`, color: "#aaa", borderTop: "1px solid #eee", paddingTop: "3px" }}>
                Bu diyet listesi kisisel olarak hazirlanmistir.
            </div>
        </div>
    );
}

/* ======================================================= */
export default function DietAssignmentPage() {
    const params = useParams();
    const router = useRouter();
    const userId = params?.id;

    const [client, setClient] = useState<any>(null);
    const [foods, setFoods] = useState<any[]>([]);
    const [progress, setProgress] = useState<{ [day: number]: { completed: boolean; note: string } }>({});
    const [loading, setLoading] = useState(true);
    const [activeDay, setActiveDay] = useState(0);
    const [diet, setDiet] = useState<DietDay[]>([defaultDay(1)]);
    const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);
    const [templates, setTemplates] = useState<any[]>([]);
    const [templatesLoading, setTemplatesLoading] = useState(false);
    const [editingMealId, setEditingMealId] = useState<string | null>(null);

    useEffect(() => {
        if (!userId) return;
        async function fetchData() {
            setLoading(true);
            const { data: profile } = await supabase.from('profiles').select('*').eq('id', userId).single();
            if (profile) setClient(profile);
            const { data: dietData } = await supabase.from('diets').select('*').eq('client_id', userId).eq('is_active', true).maybeSingle();
            if (dietData?.content) setDiet((dietData.content as any[]).map(migrateDayFormat));
            const { data: foodData } = await supabase.from('food_library').select('*');
            if (foodData) setFoods(foodData);
            const { data: progressData } = await supabase.from('diet_progress').select('*').eq('client_id', userId);
            if (progressData) {
                const obj: any = {};
                progressData.forEach(p => { obj[p.day_number - 1] = { completed: p.is_completed, note: p.note }; });
                setProgress(obj);
            }
            setLoading(false);
        }
        fetchData();
    }, [userId]);

    const addDay = () => { setDiet(prev => [...prev, defaultDay(prev.length + 1)]); setActiveDay(d => d + 1); };
    const removeDay = (idx: number) => {
        if (diet.length === 1) return alert("En az 1 gun olmali!");
        setDiet(prev => prev.filter((_, i) => i !== idx).map((d, i) => ({ ...d, day: i + 1 })));
        setActiveDay(prev => Math.min(prev, diet.length - 2));
    };
    const addMealAfter = (ai: number) => setDiet(prev => prev.map((d, i) => { if (i !== activeDay) return d; const meals = [...d.meals]; meals.splice(ai + 1, 0, { id: uid(), label: "Ara Ogun", items: [] }); return { ...d, meals }; }));
    const removeMeal = (mid: string) => setDiet(prev => prev.map((d, i) => { if (i !== activeDay) return d; if (d.meals.length <= 1) return d; return { ...d, meals: d.meals.filter(m => m.id !== mid) }; }));
    const renameMeal = (mid: string, label: string) => setDiet(prev => prev.map((d, i) => i !== activeDay ? d : { ...d, meals: d.meals.map(m => m.id === mid ? { ...m, label } : m) }));
    const addRow = (mid: string) => setDiet(prev => prev.map((d, i) => i !== activeDay ? d : { ...d, meals: d.meals.map(m => m.id === mid ? { ...m, items: [...m.items, { food: "", portion: "", cal: 0 }] } : m) }));
    const removeRow = (mid: string, ri: number) => setDiet(prev => prev.map((d, i) => { if (i !== activeDay) return d; return { ...d, meals: d.meals.map(m => { if (m.id !== mid) return m; const items = [...m.items]; items.splice(ri, 1); return { ...m, items }; }) }; }));
    const handleFoodChange = (mid: string, ri: number, value: string) => {
        const sel = foods.find(f => f.name.toLowerCase() === value.toLowerCase());
        setDiet(prev => prev.map((d, i) => { if (i !== activeDay) return d; return { ...d, meals: d.meals.map(m => { if (m.id !== mid) return m; const items = [...m.items]; items[ri] = { ...items[ri], food: value }; if (sel) { items[ri].portion = sel.unit; items[ri].cal = sel.cal; } return { ...m, items }; }) }; }));
    };
    const updateRow = (mid: string, ri: number, field: string, value: any) => {
        setDiet(prev => prev.map((d, i) => { if (i !== activeDay) return d; return { ...d, meals: d.meals.map(m => { if (m.id !== mid) return m; const items = [...m.items]; items[ri] = { ...items[ri], [field]: value }; if (field === "portion") { const base = foods.find(f => f.name.toLowerCase() === String(items[ri].food).toLowerCase()); if (base) { const c = calculateCalories(String(value), base); if (c !== null) items[ri].cal = c; } } return { ...m, items }; }) }; }));
    };
    const handleNotesChange = (value: string) => setDiet(prev => prev.map((d, i) => i === activeDay ? { ...d, notes: value } : d));

    const handleSave = async () => {
        if (!userId) return;
        setLoading(true);
        await supabase.from('diets').update({ is_active: false }).eq('client_id', userId);
        const { error } = await supabase.from('diets').insert([{ client_id: userId, title: `${diet.length} Gunluk Program`, content: diet, is_active: true }]);
        setLoading(false);
        if (error) alert("Diyet kaydedilemedi: " + error.message);
        else alert("Diyet listesi basariyla kaydedildi!");
    };

    const handleOpenTemplateModal = async () => {
        setIsTemplateModalOpen(true);
        setTemplatesLoading(true);
        const { data } = await supabase.from('diet_templates').select('*').order('created_at', { ascending: false });
        setTemplates(data || []);
        setTemplatesLoading(false);
    };

    const handleLoadTemplate = (tpl: any) => {
        if (!Array.isArray(tpl.content) || tpl.content.length === 0) return;
        if (!window.confirm("Mevcut diyetin uzerine yazilacak. Devam?")) return;
        setDiet(tpl.content.map((d: any, i: number) => ({ ...migrateDayFormat(d), day: i + 1 })));
        setActiveDay(0);
        setIsTemplateModalOpen(false);
    };

    /* PDF: her zaman PORTRAIT, tek sayfaya sigdir */
    const handlePrint = async () => {
        const el = document.getElementById("printable-diet");
        if (!el) return;
        el.style.display = "block";
        await new Promise(r => setTimeout(r, 200));
        try {
            const canvas = await html2canvas(el, { scale: 2, useCORS: true, backgroundColor: "#ffffff" });
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");  // PORTRAIT
            const pdfW = pdf.internal.pageSize.getWidth();
            const pdfH = pdf.internal.pageSize.getHeight();
            // Tek sayfaya sigdir
            const ratio = canvas.width / canvas.height;
            const pdfRatio = pdfW / pdfH;
            let drawW = pdfW, drawH = pdfH;
            if (ratio > pdfRatio) { drawH = pdfW / ratio; } else { drawW = pdfH * ratio; }
            pdf.addImage(imgData, "PNG", (pdfW - drawW) / 2, (pdfH - drawH) / 2, drawW, drawH);
            pdf.save(`${client?.full_name || "Danisan"}_Diyet.pdf`);
        } catch {
            alert("PDF olusturulamadi.");
        } finally {
            el.style.display = "none";
        }
    };

    if (loading) return <div style={{ padding: "50px", color: "#95a5a6" }}>Yukleniyor...</div>;
    if (!client) return <div style={{ padding: "50px", color: "#e74c3c" }}>Danisan bulunamadi.</div>;

    const currentDay = diet[activeDay];
    const totalCal = getDayTotal(currentDay);

    return (
        <>
            <div style={{ flex: 1, padding: "50px", display: "flex", flexDirection: "column" }}>

                {/* Ust Bar */}
                <div style={{ marginBottom: "40px" }}>
                    <Link href="/admin/clients" style={{ color: "#79a33d", textDecoration: "none", fontSize: "14px", fontWeight: 700 }}>Listeye Don</Link>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px", flexWrap: "wrap", gap: "15px" }}>
                        <div>
                            <h1 style={{ fontSize: "28px", fontWeight: 700, color: "#2c3e50", margin: 0 }}>Diyet Hazirla: {client.full_name}</h1>
                            <p style={{ color: "#7f8c8d", marginTop: "4px" }}>Danisan icin ogun detaylarini gun gun planlayabilirsiniz.</p>
                        </div>
                        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
                            {/* Kalori Badge */}
                            <div style={{ background: totalCal > 0 ? "#eaf4e0" : "#f8f9fa", border: `1.5px solid ${totalCal > 0 ? "#79a33d" : "#ddd"}`, borderRadius: "10px", padding: "10px 18px", textAlign: "center" }}>
                                <div style={{ fontSize: "11px", color: "#7f8c8d", fontWeight: 600 }}>BU GUN TOPLAM</div>
                                <div style={{ fontSize: "20px", fontWeight: 800, color: totalCal > 0 ? "#79a33d" : "#bdc3c7" }}>
                                    {totalCal} <span style={{ fontSize: "13px" }}>kcal</span>
                                </div>
                            </div>
                            <button onClick={handleOpenTemplateModal} style={{ ...saveBtn, background: '#8e44ad' }}>Sablondan Yukle</button>
                            <button onClick={handlePrint} style={{ ...saveBtn, background: '#f39c12' }}>PDF Yazdir</button>
                            <button onClick={handleSave} style={saveBtn}>{diet.length} Gunluk Kaydet</button>
                        </div>
                    </div>
                </div>

                {/* Gun Sekmeleri */}
                <div style={{ display: "flex", gap: "10px", marginBottom: "25px", overflowX: "auto", flexWrap: "wrap" }}>
                    {diet.map((_, idx) => (
                        <div key={idx} style={{ position: "relative" }}>
                            <button onClick={() => setActiveDay(idx)} style={{ padding: "11px 22px", background: activeDay === idx ? "#79a33d" : "white", color: activeDay === idx ? "white" : "#2c3e50", border: `1px solid ${activeDay === idx ? "#79a33d" : "#e0e0e0"}`, borderRadius: "10px", fontWeight: 700, cursor: "pointer" }}>
                                {idx + 1}. Gun
                            </button>
                            {diet.length > 1 && (
                                <button onClick={() => removeDay(idx)} style={{ position: "absolute", top: "-8px", right: "-8px", background: "#e74c3c", color: "white", border: "none", borderRadius: "50%", width: "20px", height: "20px", fontSize: "9px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>X</button>
                            )}
                        </div>
                    ))}
                    <button onClick={addDay} style={{ padding: "11px 22px", background: "transparent", color: "#79a33d", border: "2px dashed #79a33d", borderRadius: "10px", fontWeight: 700, cursor: "pointer" }}>+ Yeni Gun Ekle</button>
                </div>

                {/* Danisan Geri Bildirimi */}
                <div style={{ marginBottom: "30px", background: progress[activeDay]?.completed ? "#eaf2e3" : "white", padding: "20px 30px", borderRadius: "15px", border: `1px solid ${progress[activeDay]?.completed ? "#79a33d" : "#eee"}`, display: "flex", alignItems: "flex-start", gap: "20px" }}>
                    <div style={{ fontSize: "18px", background: progress[activeDay]?.completed ? "#79a33d" : "#f0f0f0", color: progress[activeDay]?.completed ? "white" : "#ccc", width: "42px", height: "42px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        {progress[activeDay]?.completed ? "v" : "!"}
                    </div>
                    <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: "14px", fontWeight: 700, color: progress[activeDay]?.completed ? "#3d5a2d" : "#7f8c8d", marginBottom: "4px" }}>
                            {progress[activeDay]?.completed ? "Danisan bu gunu tamamladi!" : "Bu gun icin henuz onay verilmedi."}
                        </h3>
                        {progress[activeDay]?.note
                            ? <div style={{ padding: "10px", background: "white", borderRadius: "8px", fontSize: "13px", color: "#555", fontStyle: "italic", borderLeft: "4px solid #79a33d" }}>"{progress[activeDay].note}"</div>
                            : <p style={{ fontSize: "13px", color: "#95a5a6" }}>Danisan herhangi bir not birakmadi.</p>
                        }
                    </div>
                </div>

                {/* Ogunler */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    {currentDay.meals.map((meal, mealIdx) => (
                        <React.Fragment key={meal.id}>
                            <div style={{ background: "white", padding: "28px", borderRadius: "18px", boxShadow: "0 6px 16px rgba(0,0,0,0.04)", marginBottom: "10px" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                        {editingMealId === meal.id ? (
                                            <input autoFocus value={meal.label} onChange={e => renameMeal(meal.id, e.target.value)} onBlur={() => setEditingMealId(null)} onKeyDown={e => e.key === "Enter" && setEditingMealId(null)} style={{ fontSize: "17px", fontWeight: 700, color: "#3d5a2d", border: "1px solid #79a33d", borderRadius: "6px", padding: "4px 10px", outline: "none", width: "200px" }} />
                                        ) : (
                                            <><h3 style={{ fontSize: "17px", fontWeight: 700, color: "#3d5a2d", margin: 0 }}>{meal.label}</h3><button onClick={() => setEditingMealId(meal.id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "13px", color: "#bdc3c7" }}>✏️</button></>
                                        )}
                                    </div>
                                    <div style={{ display: "flex", gap: "8px" }}>
                                        <button onClick={() => addRow(meal.id)} style={addBtnStyle}>+ Satir Ekle</button>
                                        {currentDay.meals.length > 1 && <button onClick={() => removeMeal(meal.id)} style={{ ...addBtnStyle, borderColor: "#e74c3c", color: "#e74c3c" }}>x Kaldir</button>}
                                    </div>
                                </div>
                                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                    <thead><tr style={{ fontSize: "12px", color: "#95a5a6", textTransform: "uppercase", textAlign: "left" }}>
                                        <th style={{ padding: "8px", width: "40%" }}>Besin</th>
                                        <th style={{ padding: "8px", width: "30%" }}>Porsiyon</th>
                                        <th style={{ padding: "8px", width: "20%" }}>Kalori</th>
                                        <th style={{ padding: "8px", width: "10%" }}></th>
                                    </tr></thead>
                                    <tbody>
                                        {meal.items.map((row, ri) => (
                                            <tr key={ri}>
                                                <td style={{ padding: "5px" }}><input value={row.food} onChange={e => handleFoodChange(meal.id, ri, e.target.value)} list="food-suggestions" style={inputStyle} placeholder="Besin adi..." /></td>
                                                <td style={{ padding: "5px" }}><input value={row.portion} onChange={e => updateRow(meal.id, ri, "portion", e.target.value)} style={inputStyle} placeholder="100g..." /></td>
                                                <td style={{ padding: "5px" }}><input type="number" value={row.cal} onChange={e => updateRow(meal.id, ri, "cal", e.target.value)} style={inputStyle} /></td>
                                                <td style={{ padding: "5px", textAlign: "center" }}><button onClick={() => removeRow(meal.id, ri)} style={{ background: "none", border: "none", color: "#e74c3c", cursor: "pointer", fontWeight: 700 }}>Sil</button></td>
                                            </tr>
                                        ))}
                                        {meal.items.length === 0 && <tr><td colSpan={4} style={{ padding: "18px", textAlign: "center", color: "#95a5a6", fontSize: "13px" }}>Bu ogune henuz besin eklenmedi.</td></tr>}
                                    </tbody>
                                </table>
                            </div>
                            {mealIdx < currentDay.meals.length - 1 && (
                                <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
                                    <button onClick={() => addMealAfter(mealIdx)} style={{ background: "white", border: "1.5px dashed #e67e22", color: "#e67e22", padding: "7px 18px", borderRadius: "20px", fontSize: "12px", fontWeight: 700, cursor: "pointer" }}>+ Ara Ogun Ekle</button>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
                        <button onClick={() => addMealAfter(currentDay.meals.length - 1)} style={{ background: "white", border: "1.5px dashed #e67e22", color: "#e67e22", padding: "7px 18px", borderRadius: "20px", fontSize: "12px", fontWeight: 700, cursor: "pointer" }}>+ En Alta Ara Ogun Ekle</button>
                    </div>
                    <div style={{ background: "white", padding: "28px", borderRadius: "18px", boxShadow: "0 6px 16px rgba(0,0,0,0.04)", marginTop: "8px" }}>
                        <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#3d5a2d", marginBottom: "10px" }}>Notlar ({activeDay + 1}. Gun)</h3>
                        <textarea value={currentDay.notes || ""} onChange={e => handleNotesChange(e.target.value)} rows={4} style={{ ...inputStyle, resize: "vertical", height: "auto" }} placeholder="Ornegin: Gun icinde 3 litre su icmeyi unutmayin..." />
                    </div>
                </div>

                <datalist id="food-suggestions">{foods.map((f, i) => <option key={i} value={f.name} />)}</datalist>

                {/* Sablon Modal */}
                {isTemplateModalOpen && (
                    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.55)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
                        <div style={{ background: 'white', padding: '35px', borderRadius: '18px', width: '90%', maxWidth: '640px', maxHeight: '80vh', overflowY: 'auto', boxShadow: '0 15px 35px rgba(0,0,0,0.25)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                <h2 style={{ margin: 0, color: '#2c3e50' }}>Sablondan Yukle</h2>
                                <button onClick={() => setIsTemplateModalOpen(false)} style={{ background: 'none', border: 'none', fontSize: '22px', cursor: 'pointer', color: '#95a5a6' }}>x</button>
                            </div>
                            {templatesLoading ? <div style={{ textAlign: 'center', padding: '40px' }}>Yukleniyor...</div>
                                : templates.length === 0 ? (
                                    <div style={{ textAlign: 'center', padding: '40px' }}>
                                        <p style={{ color: '#95a5a6' }}>Henuz sablon yok.</p>
                                        <a href="/admin/templates/new" target="_blank" style={{ color: '#8e44ad', fontWeight: 700 }}>Sablon Olustur</a>
                                    </div>
                                ) : (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        {templates.map(tpl => (
                                            <div key={tpl.id} style={{ border: '1px solid #eee', borderRadius: '12px', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15px' }}>
                                                <div>
                                                    <div style={{ fontWeight: 700, color: '#2c3e50' }}>{tpl.title}</div>
                                                    {tpl.description && <div style={{ fontSize: '12px', color: '#7f8c8d', marginTop: '3px' }}>{tpl.description}</div>}
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                                                    <span style={{ background: '#f0e6fa', color: '#8e44ad', padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 700 }}>{Array.isArray(tpl.content) ? tpl.content.length : 0} Gun</span>
                                                    <button onClick={() => handleLoadTemplate(tpl)} style={{ background: '#8e44ad', color: 'white', border: 'none', padding: '9px 16px', borderRadius: '9px', fontWeight: 700, cursor: 'pointer', fontSize: '13px' }}>Yukle</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                        </div>
                    </div>
                )}

                {/* Gizli PDF Tablo Alani */}
                <PrintableTable diet={diet} clientName={client?.full_name || "Danisan"} />
            </div>
        </>
    );
}

const inputStyle: React.CSSProperties = { width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #eee", fontSize: "14px", color: "#333", fontWeight: 500, boxSizing: "border-box", outline: "none" };
const addBtnStyle: React.CSSProperties = { background: "none", border: "1px solid #79a33d", color: "#79a33d", padding: "7px 14px", borderRadius: "8px", fontWeight: 700, cursor: "pointer", fontSize: "13px" };
const saveBtn: React.CSSProperties = { background: "#79a33d", color: "white", border: "none", padding: "12px 22px", borderRadius: "10px", fontSize: "14px", fontWeight: 700, cursor: "pointer", boxShadow: "0 8px 15px rgba(121,163,61,0.25)" };
