"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "../../../../utils/supabase";
import { calculateCalories } from "../../../../utils/calorieCalculator";

interface MealItem { food: string; portion: string; cal: number; }
interface Meal { id: string; label: string; items: MealItem[]; }
interface DietDay { day: number; meals: Meal[]; notes: string; }

let _c = 0;
const uid = () => `m${Date.now()}${++_c}`;

function defaultDay(n: number): DietDay {
    return { day: n, meals: [{ id: uid(), label: "Kahvaltı", items: [] }, { id: uid(), label: "Öğle Yemeği", items: [] }, { id: uid(), label: "Akşam Yemeği", items: [] }], notes: "" };
}

function migrateDayFormat(d: any): DietDay {
    if (d.meals && Array.isArray(d.meals)) return d as DietDay;
    const meals: Meal[] = [];
    if (d.breakfast?.length) meals.push({ id: uid(), label: "Kahvaltı", items: d.breakfast });
    if (d.lunch?.length) meals.push({ id: uid(), label: "Öğle Yemeği", items: d.lunch });
    if (d.dinner?.length) meals.push({ id: uid(), label: "Akşam Yemeği", items: d.dinner });
    if (d.snacks?.length) meals.push({ id: uid(), label: "Ara Öğün", items: d.snacks });
    if (meals.length === 0) meals.push({ id: uid(), label: "Kahvaltı", items: [] }, { id: uid(), label: "Öğle Yemeği", items: [] }, { id: uid(), label: "Akşam Yemeği", items: [] });
    return { day: d.day ?? 1, meals, notes: d.notes || "" };
}

function getDayTotal(day: DietDay) {
    return day.meals.reduce((s, m) => s + m.items.reduce((ss, it) => ss + (Number(it.cal) || 0), 0), 0);
}

export default function TemplateEditorPage() {
    const params = useParams();
    const router = useRouter();
    const templateId = params?.id && params.id !== "new" ? (params.id as string) : null;

    const [foods, setFoods] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [activeDay, setActiveDay] = useState(0);
    const [templateTitle, setTemplateTitle] = useState("");
    const [templateDescription, setTemplateDescription] = useState("");
    const [diet, setDiet] = useState<DietDay[]>([defaultDay(1)]);
    const [editingMealId, setEditingMealId] = useState<string | null>(null);

    useEffect(() => {
        async function load() {
            setLoading(true);
            const { data: fd } = await supabase.from('food_library').select('*');
            if (fd) setFoods(fd);
            if (templateId) {
                const { data: tpl } = await supabase.from('diet_templates').select('*').eq('id', templateId).single();
                if (tpl) {
                    setTemplateTitle(tpl.title);
                    setTemplateDescription(tpl.description || "");
                    if (Array.isArray(tpl.content) && tpl.content.length > 0) setDiet(tpl.content.map(migrateDayFormat));
                }
            }
            setLoading(false);
        }
        load();
    }, [templateId]);

    const addDay = () => { setDiet(p => [...p, defaultDay(p.length + 1)]); setActiveDay(diet.length); };
    const removeDay = (idx: number) => {
        if (diet.length === 1) return alert("En az 1 gün olmalı!");
        setDiet(p => p.filter((_, i) => i !== idx).map((d, i) => ({ ...d, day: i + 1 })));
        setActiveDay(p => Math.min(p, diet.length - 2));
    };
    const addMealAfter = (ai: number) => setDiet(prev => prev.map((d, i) => { if (i !== activeDay) return d; const meals = [...d.meals]; meals.splice(ai + 1, 0, { id: uid(), label: "Ara Öğün", items: [] }); return { ...d, meals }; }));
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
        if (!templateTitle.trim()) return alert("Lütfen şablon adı girin.");
        setSaving(true);
        const payload = { title: templateTitle.trim(), description: templateDescription.trim(), content: diet };
        let error;
        if (templateId) {
            const res = await supabase.from('diet_templates').update(payload).eq('id', templateId);
            error = res.error;
        } else {
            const res = await supabase.from('diet_templates').insert([payload]);
            error = res.error;
        }
        setSaving(false);
        if (error) alert("Kayıt hatası: " + error.message);
        else { alert(templateId ? "Şablon güncellendi!" : "Şablon kaydedildi!"); router.push("/admin/templates"); }
    };

    if (loading) return <div style={{ padding: "50px", color: "#95a5a6" }}>Yükleniyor...</div>;

    const currentDay = diet[activeDay];
    const totalCal = getDayTotal(currentDay);

    return (
        <>
            <div style={{ flex: 1, padding: "50px", display: "flex", flexDirection: "column" }}>
                <div style={{ marginBottom: "35px" }}>
                    <Link href="/admin/templates" style={{ color: "#79a33d", textDecoration: "none", fontSize: "14px", fontWeight: 700 }}>← Şablonlara Dön</Link>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "15px", flexWrap: "wrap", gap: "15px" }}>
                        <h1 style={{ fontSize: "26px", fontWeight: 700, color: "#2c3e50", margin: 0 }}>{templateId ? "Şablonu Düzenle" : "Yeni Şablon"}</h1>
                        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                            <div style={{ background: totalCal > 0 ? "#eaf4e0" : "#f8f9fa", border: `1.5px solid ${totalCal > 0 ? "#79a33d" : "#ddd"}`, borderRadius: "10px", padding: "9px 16px", textAlign: "center" }}>
                                <div style={{ fontSize: "11px", color: "#7f8c8d", fontWeight: 600 }}>BU GÜN</div>
                                <div style={{ fontSize: "18px", fontWeight: 800, color: totalCal > 0 ? "#79a33d" : "#bdc3c7" }}>{totalCal} <span style={{ fontSize: "12px" }}>kcal</span></div>
                            </div>
                            <button onClick={handleSave} disabled={saving} style={{ ...saveBtn, opacity: saving ? 0.7 : 1, cursor: saving ? "not-allowed" : "pointer" }}>
                                {saving ? "Kaydediliyor..." : `💾 Şablonu Kaydet (${diet.length} Günlük)`}
                            </button>
                        </div>
                    </div>
                </div>

                <div style={{ background: "white", padding: "24px", borderRadius: "14px", marginBottom: "22px", boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}>
                    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                        <div style={{ flex: 2, minWidth: "200px" }}>
                            <label style={labelStyle}>Şablon Adı *</label>
                            <input value={templateTitle} onChange={e => setTemplateTitle(e.target.value)} placeholder="Örn: 1400 Kcal Program..." style={inputStyle} />
                        </div>
                        <div style={{ flex: 3, minWidth: "200px" }}>
                            <label style={labelStyle}>Açıklama (isteğe bağlı)</label>
                            <input value={templateDescription} onChange={e => setTemplateDescription(e.target.value)} placeholder="Kısa açıklama..." style={inputStyle} />
                        </div>
                    </div>
                </div>

                <div style={{ display: "flex", gap: "10px", marginBottom: "22px", overflowX: "auto", flexWrap: "wrap" }}>
                    {diet.map((_, idx) => (
                        <div key={idx} style={{ position: "relative" }}>
                            <button onClick={() => setActiveDay(idx)} style={{ padding: "10px 20px", background: activeDay === idx ? "#79a33d" : "white", color: activeDay === idx ? "white" : "#2c3e50", border: `1px solid ${activeDay === idx ? "#79a33d" : "#e0e0e0"}`, borderRadius: "10px", fontWeight: 700, cursor: "pointer" }}>{idx + 1}. Gün</button>
                            {diet.length > 1 && <button onClick={() => removeDay(idx)} style={{ position: "absolute", top: "-8px", right: "-8px", background: "#e74c3c", color: "white", border: "none", borderRadius: "50%", width: "20px", height: "20px", fontSize: "9px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>X</button>}
                        </div>
                    ))}
                    <button onClick={addDay} style={{ padding: "10px 20px", background: "transparent", color: "#79a33d", border: "2px dashed #79a33d", borderRadius: "10px", fontWeight: 700, cursor: "pointer" }}>+ Yeni Gün Ekle</button>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    {currentDay.meals.map((meal, mealIdx) => (
                        <React.Fragment key={meal.id}>
                            <div style={{ background: "white", padding: "24px", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.04)", marginBottom: "10px" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                        {editingMealId === meal.id ? (
                                            <input autoFocus value={meal.label} onChange={e => renameMeal(meal.id, e.target.value)} onBlur={() => setEditingMealId(null)} onKeyDown={e => e.key === "Enter" && setEditingMealId(null)} style={{ fontSize: "16px", fontWeight: 700, color: "#3d5a2d", border: "1px solid #79a33d", borderRadius: "6px", padding: "4px 10px", outline: "none", width: "180px" }} />
                                        ) : (
                                            <><h3 style={{ fontSize: "16px", fontWeight: 700, color: "#3d5a2d", margin: 0 }}>{meal.label}</h3><button onClick={() => setEditingMealId(meal.id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "13px", color: "#bdc3c7" }}>✏️</button></>
                                        )}
                                    </div>
                                    <div style={{ display: "flex", gap: "8px" }}>
                                        <button onClick={() => addRow(meal.id)} style={addBtnStyle}>+ Satır Ekle</button>
                                        {currentDay.meals.length > 1 && <button onClick={() => removeMeal(meal.id)} style={{ ...addBtnStyle, borderColor: "#e74c3c", color: "#e74c3c" }}>✕ Kaldır</button>}
                                    </div>
                                </div>
                                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                    <thead><tr style={{ fontSize: "12px", color: "#95a5a6", textTransform: "uppercase", textAlign: "left" }}>
                                        <th style={{ padding: "8px", width: "40%" }}>Besin</th><th style={{ padding: "8px", width: "30%" }}>Porsiyon</th><th style={{ padding: "8px", width: "20%" }}>Kalori</th><th style={{ padding: "8px", width: "10%" }}></th>
                                    </tr></thead>
                                    <tbody>
                                        {meal.items.map((row, ri) => (
                                            <tr key={ri}>
                                                <td style={{ padding: "5px" }}><input value={row.food} onChange={e => handleFoodChange(meal.id, ri, e.target.value)} list="food-suggestions" style={inputStyle} placeholder="Besin adı..." /></td>
                                                <td style={{ padding: "5px" }}><input value={row.portion} onChange={e => updateRow(meal.id, ri, "portion", e.target.value)} style={inputStyle} placeholder="100g..." /></td>
                                                <td style={{ padding: "5px" }}><input type="number" value={row.cal} onChange={e => updateRow(meal.id, ri, "cal", e.target.value)} style={inputStyle} /></td>
                                                <td style={{ padding: "5px", textAlign: "center" }}><button onClick={() => removeRow(meal.id, ri)} style={{ background: "none", border: "none", color: "#e74c3c", cursor: "pointer", fontWeight: 700 }}>Sil</button></td>
                                            </tr>
                                        ))}
                                        {meal.items.length === 0 && <tr><td colSpan={4} style={{ padding: "16px", textAlign: "center", color: "#95a5a6", fontSize: "13px" }}>Bu öğüne henüz besin eklenmedi.</td></tr>}
                                    </tbody>
                                </table>
                            </div>
                            {mealIdx < currentDay.meals.length - 1 && (
                                <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
                                    <button onClick={() => addMealAfter(mealIdx)} style={{ background: "white", border: "1.5px dashed #e67e22", color: "#e67e22", padding: "6px 16px", borderRadius: "20px", fontSize: "12px", fontWeight: 700, cursor: "pointer" }}>+ Ara Öğün Ekle</button>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
                        <button onClick={() => addMealAfter(currentDay.meals.length - 1)} style={{ background: "white", border: "1.5px dashed #e67e22", color: "#e67e22", padding: "6px 16px", borderRadius: "20px", fontSize: "12px", fontWeight: 700, cursor: "pointer" }}>+ En Alta Ara Öğün Ekle</button>
                    </div>
                    <div style={{ background: "white", padding: "24px", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.04)", marginTop: "8px" }}>
                        <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#3d5a2d", marginBottom: "10px" }}>Notlar ({activeDay + 1}. Gün)</h3>
                        <textarea value={currentDay.notes || ""} onChange={e => handleNotesChange(e.target.value)} rows={4} style={{ ...inputStyle, resize: "vertical", height: "auto" }} placeholder="Örn: Gün içinde 3 litre su içmeyi unutmayın..." />
                    </div>
                </div>
                <datalist id="food-suggestions">{foods.map((f, i) => <option key={i} value={f.name} />)}</datalist>
            </div>
        </>
    );
}

const labelStyle: React.CSSProperties = { display: "block", marginBottom: "6px", fontSize: "13px", fontWeight: 600, color: "#34495e" };
const inputStyle: React.CSSProperties = { width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #e0e0e0", fontSize: "14px", color: "#333", fontWeight: 500, boxSizing: "border-box", outline: "none" };
const addBtnStyle: React.CSSProperties = { background: "none", border: "1px solid #79a33d", color: "#79a33d", padding: "7px 14px", borderRadius: "8px", fontWeight: 700, cursor: "pointer", fontSize: "13px" };
const saveBtn: React.CSSProperties = { background: "#79a33d", color: "white", border: "none", padding: "12px 22px", borderRadius: "10px", fontSize: "14px", fontWeight: 700, cursor: "pointer", boxShadow: "0 8px 15px rgba(121,163,61,0.25)" };
