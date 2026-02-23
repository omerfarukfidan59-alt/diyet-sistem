"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../utils/supabase";

export default function ClientMenuPage() {
    const [user, setUser] = useState<any>(null);
    const [diet, setDiet] = useState<any>(null);
    const [activeDay, setActiveDay] = useState(0);
    const [progress, setProgress] = useState<{ [day: number]: { completed: boolean, note: string } }>({});
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const { data: { user: authUser } } = await supabase.auth.getUser();

            if (!authUser) {
                router.push("/login");
                return;
            }

            // 1. Kullanıcı Bilgilerini Çek
            const { data: profile } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', authUser.id)
                .single();

            if (profile) setUser(profile);

            // 2. Diyeti Çek
            const { data: dietData } = await supabase
                .from('diets')
                .select('*')
                .eq('client_id', authUser.id)
                .eq('is_active', true)
                .maybeSingle();

            if (dietData && dietData.content) {
                setDiet(dietData.content);
            }

            // 3. İlerlemeyi Çek
            const { data: progressData } = await supabase
                .from('diet_progress')
                .select('*')
                .eq('client_id', authUser.id);

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
    }, [router]);

    const handleSaveProgress = async () => {
        if (!user) return;
        setLoading(true);

        const currentProg = progress[activeDay] || { completed: false, note: "" };

        // 1. Bu gün için daha önce bir değerlendirme var mı kontrol et
        const { data: existingProgress } = await supabase
            .from('diet_progress')
            .select('id')
            .eq('client_id', user.id)
            .eq('day_number', activeDay + 1)
            .maybeSingle();

        let saveError;
        if (existingProgress) {
            // Varsa güncelle
            const { error } = await supabase
                .from('diet_progress')
                .update({
                    is_completed: currentProg.completed,
                    note: currentProg.note
                })
                .eq('id', existingProgress.id);
            saveError = error;
        } else {
            // Yoksa yeni ekle
            const { error } = await supabase
                .from('diet_progress')
                .insert({
                    client_id: user.id,
                    day_number: activeDay + 1,
                    is_completed: currentProg.completed,
                    note: currentProg.note
                });
            saveError = error;
        }

        if (saveError) {
            alert("Değerlendirme gönderilemedi: " + saveError.message);
        } else {
            alert("Değerlendirmeniz başarıyla kaydedildi! Diyetisyeniniz bunu görebilecektir.");
        }
        setLoading(false);
    };

    if (loading) return <div>Yükleniyor...</div>;
    if (!user) return <div>Yükleniyor...</div>;

    return (
        <>
            {/* Client Menu wrapper responsive padding */}
            <div className="menu-page-wrapper" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <style jsx>{`
                    .menu-page-wrapper {
                        padding: 50px;
                    }
                    @media (max-width: 1024px) {
                        .menu-page-wrapper {
                            padding: 20px;
                        }
                    }
                `}</style>
                <div style={{ marginBottom: "40px" }}>
                    <h1 style={{ fontSize: "32px", fontWeight: 700, color: "#333" }}>Günlük Diyet Listem</h1>
                    <p style={{ color: "#666" }}>Diyetisyeniniz tarafından size özel hazırlanan beslenme programı.</p>
                </div>

                {diet && diet.length > 0 ? (
                    <>
                        {/* Day Navigation Tabs */}
                        <div style={{ display: "flex", gap: "10px", marginBottom: "25px", overflowX: "auto", paddingBottom: "10px" }}>
                            {diet.map((d: any, idx: number) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveDay(idx)}
                                    style={{
                                        padding: "12px 25px",
                                        background: activeDay === idx ? "#79a33d" : "white",
                                        color: activeDay === idx ? "white" : "#333",
                                        border: `1px solid ${activeDay === idx ? "#79a33d" : "#e0e0e0"}`,
                                        borderRadius: "10px",
                                        fontWeight: 700,
                                        cursor: "pointer",
                                        transition: "all 0.2s"
                                    }}
                                >
                                    {d.day || idx + 1}. Gün
                                </button>
                            ))}
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
                            {[
                                { key: "breakfast", label: "Kahvaltı" },
                                { key: "lunch", label: "Öğle Yemeği" },
                                { key: "snacks", label: "Ara Öğünler" },
                                { key: "dinner", label: "Akşam Yemeği" }
                            ].map((meal) => (
                                <div key={meal.key} style={{ background: "white", padding: "25px", borderRadius: "15px", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
                                    <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#3d5a2d", marginBottom: "15px" }}>{meal.label}</h3>
                                    {diet[activeDay] && diet[activeDay][meal.key] && diet[activeDay][meal.key].length > 0 ? (
                                        <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                            <thead>
                                                <tr style={{ textAlign: "left", fontSize: "12px", color: "#888", borderBottom: "1px solid #f0f0f0" }}>
                                                    <th style={{ padding: "10px" }}>Besin</th>
                                                    <th style={{ padding: "10px" }}>Porsiyon</th>
                                                    <th style={{ padding: "10px", textAlign: "right" }}>Kalori</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {diet[activeDay][meal.key].map((item: any, idx: number) => (
                                                    <tr key={idx} style={{ borderBottom: "1px solid #f9f9f9" }}>
                                                        <td style={{ padding: "12px 10px", fontWeight: 600, color: "#333" }}>{item.food}</td>
                                                        <td style={{ padding: "12px 10px", color: "#666" }}>{item.portion}</td>
                                                        <td style={{ padding: "12px 10px", color: "#79a33d", fontWeight: 700, textAlign: "right" }}>{item.cal} kcal</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <p style={{ color: "#999", fontSize: "14px" }}>Bu öğün için program belirtilmemiş.</p>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Gün Sonu Değerlendirmesi */}
                        <div style={{ marginTop: "40px", background: "white", padding: "30px", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
                            <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#2c3e50", marginBottom: "20px" }}>Gün Sonu Değerlendirmesi</h3>
                            <p style={{ color: "#7f8c8d", fontSize: "14px", marginBottom: "20px" }}>Diyetisyeninize bu günü nasıl geçirdiğinizi bildirin.</p>

                            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px", padding: "15px", background: "#f8f9fa", borderRadius: "10px" }}>
                                <input
                                    type="checkbox"
                                    id="completedCheck"
                                    checked={progress[activeDay]?.completed || false}
                                    onChange={(e) => {
                                        const newProg = { ...progress };
                                        if (!newProg[activeDay]) newProg[activeDay] = { completed: false, note: "" };
                                        newProg[activeDay].completed = e.target.checked;
                                        setProgress(newProg);
                                    }}
                                    style={{ width: "20px", height: "20px", cursor: "pointer", accentColor: "#79a33d" }}
                                />
                                <label htmlFor="completedCheck" style={{ fontWeight: 600, color: "#333", cursor: "pointer", fontSize: "15px" }}>
                                    Bugünkü listemi eksiksiz uyguladım ✅
                                </label>
                            </div>

                            <div style={{ marginBottom: "20px" }}>
                                <label style={{ display: "block", fontWeight: 600, color: "#333", marginBottom: "10px", fontSize: "15px" }}>Diyetisyeninize bir not bırakın (İsteğe bağlı)</label>
                                <textarea
                                    value={progress[activeDay]?.note || ""}
                                    onChange={(e) => {
                                        const newProg = { ...progress };
                                        if (!newProg[activeDay]) newProg[activeDay] = { completed: false, note: "" };
                                        newProg[activeDay].note = e.target.value;
                                        setProgress(newProg);
                                    }}
                                    placeholder="Örn: Akşam yemeğinde doyduğum için salatayı yarım bıraktım..."
                                    style={{
                                        width: "100%",
                                        padding: "15px",
                                        borderRadius: "10px",
                                        border: "1px solid #ddd",
                                        minHeight: "100px",
                                        fontFamily: "inherit",
                                        fontSize: "14px",
                                        resize: "vertical"
                                    }}
                                />
                            </div>

                            <button
                                onClick={handleSaveProgress}
                                style={{
                                    background: "#79a33d",
                                    color: "white",
                                    border: "none",
                                    padding: "15px 30px",
                                    borderRadius: "10px",
                                    fontWeight: 700,
                                    fontSize: "15px",
                                    cursor: "pointer",
                                    width: "100%",
                                    transition: "background 0.3s"
                                }}
                            >
                                Değerlendirmeyi Kaydet
                            </button>
                        </div>
                    </>
                ) : (
                    <div style={{ background: "white", padding: "100px", borderRadius: "20px", textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
                        <div style={{ fontSize: "50px", marginBottom: "20px" }}></div>
                        <h2 style={{ color: "#3d5a2d" }}>Henüz Diyet Listeniz Hazır Değil</h2>
                        <p style={{ color: "#888", maxWidth: "400px", margin: "10px auto" }}>Diyetisyeniniz listenizi tamamladığında burada anlık olarak görebileceksiniz.</p>
                    </div>
                )}
            </div>
        </>
    );
}
