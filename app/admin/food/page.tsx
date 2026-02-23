"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import { supabase } from "../../../utils/supabase";

export default function FoodLibrary() {
    const [foods, setFoods] = useState<any[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editId, setEditId] = useState<number | null>(null);
    const [formData, setFormData] = useState({ name: "", unit: "100g", cal: "", protein: "", carb: "", fat: "" });
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchFoods();
    }, []);

    const fetchFoods = async () => {
        const { data, error } = await supabase
            .from('food_library')
            .select('*')
            .order('name', { ascending: true });

        if (error) {
            console.error("Besinler çekilemedi:", error);
        } else {
            setFoods(data || []);
        }
    };

    const handleSave = async () => {
        if (!formData.name) return alert("Lütfen besin adı girin.");
        setLoading(true);

        const foodData = {
            name: formData.name,
            unit: formData.unit,
            cal: Number(formData.cal),
            protein: Number(formData.protein),
            carb: Number(formData.carb),
            fat: Number(formData.fat)
        };

        if (editId) {
            const { error } = await supabase
                .from('food_library')
                .update(foodData)
                .eq('id', editId);

            if (error) alert("Güncelleme hatası: " + error.message);
        } else {
            const { error } = await supabase
                .from('food_library')
                .insert([foodData]);

            if (error) alert("Kaydetme hatası: " + error.message);
        }

        setLoading(false);
        fetchFoods();
        closeModal();
    };

    const handleDelete = async (id: number) => {
        if (window.confirm("Bu besini silmek istediğinize emin misiniz?")) {
            const { error } = await supabase
                .from('food_library')
                .delete()
                .eq('id', id);

            if (error) {
                alert("Silme hatası: " + error.message);
            } else {
                fetchFoods();
            }
        }
    };

    const openEditModal = (food: any) => {
        setFormData({
            name: food.name,
            unit: food.unit,
            cal: food.cal.toString(),
            protein: food.protein.toString(),
            carb: food.carb.toString(),
            fat: food.fat.toString()
        });
        setEditId(food.id);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditId(null);
        setFormData({ name: "", unit: "100g", cal: "", protein: "", carb: "", fat: "" });
    };

    const filteredFoods = foods.filter(f => f.name && f.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <>
            <div style={{ flex: 1, padding: "50px", display: "flex", flexDirection: "column", position: "relative" }}>



                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
                    <div>
                        <h1 style={{ fontSize: "32px", fontWeight: 700, color: "#2c3e50" }}>Besin Kütüphanesi</h1>
                        <p style={{ color: "#7f8c8d" }}>Diyet listelerinde kullanacağınız ürünlerin değerlerini buradan yönetin.</p>
                    </div>
                    <button onClick={() => setIsModalOpen(true)} style={{
                        background: "#79a33d",
                        color: "white",
                        border: "none",
                        padding: "12px 25px",
                        borderRadius: "10px",
                        fontWeight: 700,
                        cursor: "pointer",
                        boxShadow: "0 10px 20px rgba(121, 163, 61, 0.2)"
                    }}>+ Yeni Besin Ekle</button>
                </div>

                {/* Search Bar */}
                <div style={{ marginBottom: "30px" }}>
                    <input
                        type="text"
                        placeholder="Besin ismi ile ara..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "15px 20px",
                            borderRadius: "12px",
                            border: "1px solid #ddd",
                            outline: "none",
                            fontSize: "15px",
                            color: "#333",
                            fontWeight: 600
                        }}
                    />
                </div>

                {/* Food Table */}
                <div style={{ background: "white", borderRadius: "20px", overflowX: "auto", boxShadow: "0 10px 20px rgba(0,0,0,0.02)" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead style={{ background: "#fcfdfe" }}>
                            <tr style={{ textAlign: "left" }}>
                                <th style={thStyle}>Besin Adı</th>
                                <th style={thStyle}>Birim</th>
                                <th style={thStyle}>Kalori (kcal)</th>
                                <th style={thStyle}>Protein (g)</th>
                                <th style={thStyle}>Karbonhidrat (g)</th>
                                <th style={thStyle}>Yağ (g)</th>
                                <th style={thStyle}>İşlemler</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredFoods.map((food) => (
                                <tr key={food.id} style={{ borderBottom: "1px solid #f1f1f1" }}>
                                    <td style={tdStyle}><strong>{food.name}</strong></td>
                                    <td style={tdStyle}>{food.unit}</td>
                                    <td style={tdStyle}>{food.cal}</td>
                                    <td style={tdStyle}>{food.protein}</td>
                                    <td style={tdStyle}>{food.carb}</td>
                                    <td style={tdStyle}>{food.fat}</td>
                                    <td style={tdStyle}>
                                        <div style={{ display: "flex", gap: "10px" }}>
                                            <button onClick={() => openEditModal(food)} style={{ ...actionBtn, color: "#3498db" }}>Düzenle</button>
                                            <button onClick={() => handleDelete(food.id)} style={{ ...actionBtn, color: "#e74c3c" }}>Sil</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filteredFoods.length === 0 && (
                                <tr>
                                    <td colSpan={7} style={{ textAlign: "center", padding: "40px", color: "#95a5a6" }}>
                                        Arama kriterlerine uygun besin bulunamadı.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Add/Edit Modal */}
                {isModalOpen && (
                    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>
                        <div style={{ background: "white", padding: "40px", borderRadius: "20px", width: "500px", maxWidth: "90%", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
                            <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#2c3e50", marginBottom: "25px" }}>
                                {editId ? "Besini Düzenle" : "Yeni Besin Ekle"}
                            </h2>

                            <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginBottom: "30px" }}>
                                <input placeholder="Besin Adı" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} style={inputStyle} />
                                <input placeholder="Birim (örn: 100g, 1 Porsiyon)" value={formData.unit} onChange={e => setFormData({ ...formData, unit: e.target.value })} style={inputStyle} />
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
                                    <input type="number" placeholder="Kalori (kcal)" value={formData.cal} onChange={e => setFormData({ ...formData, cal: e.target.value })} style={inputStyle} />
                                    <input type="number" placeholder="Protein (g)" value={formData.protein} onChange={e => setFormData({ ...formData, protein: e.target.value })} style={inputStyle} />
                                    <input type="number" placeholder="Karbonhidrat (g)" value={formData.carb} onChange={e => setFormData({ ...formData, carb: e.target.value })} style={inputStyle} />
                                    <input type="number" placeholder="Yağ (g)" value={formData.fat} onChange={e => setFormData({ ...formData, fat: e.target.value })} style={inputStyle} />
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: "15px", justifyContent: "flex-end" }}>
                                <button onClick={closeModal} style={{ padding: "12px 20px", background: "#f0f0f0", color: "#666", border: "none", borderRadius: "10px", fontWeight: 600, cursor: "pointer" }}>İptal</button>
                                <button onClick={handleSave} style={{ padding: "12px 25px", background: "#79a33d", color: "white", border: "none", borderRadius: "10px", fontWeight: 600, cursor: "pointer" }}>Kaydet</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

const thStyle: React.CSSProperties = {
    padding: "20px",
    color: "#95a5a6",
    fontSize: "13px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontWeight: 700
};

const tdStyle: React.CSSProperties = {
    padding: "20px",
    color: "#2c3e50",
    fontSize: "15px"
};

const actionBtn: React.CSSProperties = {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: 700,
    padding: "5px 10px",
    borderRadius: "5px",
    transition: "background 0.3s"
};


const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 15px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px",
    color: "#333",
    outline: "none",
    fontWeight: 500
};
