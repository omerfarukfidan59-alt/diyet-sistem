"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../utils/supabase";

export default function ProfilePage() {
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        email: "",
        height: "",
        weight: "",
        age: "",
        targetWeight: ""
    });
    const [saved, setSaved] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        async function fetchProfile() {
            const { data: authData } = await supabase.auth.getUser();
            if (!authData.user) {
                // Fallback / legacy check
                const loggedInUser = localStorage.getItem("currentUser");
                if (loggedInUser) setFormData(JSON.parse(loggedInUser));
                return;
            }

            const { data: profile } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', authData.user.id)
                .single();

            if (profile) {
                setFormData({
                    id: profile.id,
                    name: profile.full_name,
                    email: "", // Artık kullanılmıyor
                    height: profile.height,
                    weight: profile.weight,
                    age: profile.age,
                    targetWeight: profile.target_weight
                });
            }
        }

        fetchProfile();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setSaved(false);
    };

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (formData.id) {
            // Supabase Update
            const { error } = await supabase
                .from('profiles')
                .update({
                    full_name: formData.name,
                    height: Number(formData.height),
                    weight: Number(formData.weight),
                    age: Number(formData.age),
                    target_weight: Number(formData.targetWeight)
                })
                .eq('id', formData.id);

            if (error) {
                alert("Güncelleme hatası: " + error.message);
                setLoading(false);
                return;
            }
        }

        // Aktif oturumu güncelle (Fallback/Legacy cache)
        localStorage.setItem("currentUser", JSON.stringify(formData));

        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const updatedUsers = users.map((u: any) => u.id === (formData as any).id ? formData : u);
        localStorage.setItem("users", JSON.stringify(updatedUsers));

        setSaved(true);
        setLoading(false);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <>
            <div style={{ flex: 1, padding: "50px 20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: "100%", maxWidth: "1000px" }}>
                    <div style={{ marginBottom: "40px", textAlign: "center" }}>
                        <h1 style={{ fontSize: "32px", fontWeight: 700, color: "#333" }}>Hesap Ayarları</h1>
                        <p style={{ color: "#666" }}>Profil bilgilerinizi ve fiziksel verilerinizi dilediğiniz zaman güncelleyebilirsiniz.</p>
                    </div>

                    <form onSubmit={handleUpdate} style={{ background: "white", padding: "40px", borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", gap: "30px", width: "100%" }}>

                        <div style={{ borderBottom: "1px solid #f0f0f0", paddingBottom: "15px" }}>
                            <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#3d5a2d" }}>Vücut Verilerini Güncelle</h3>
                        </div>

                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: "25px",
                            width: "100%"
                        }} className="stats-grid-mobile">
                            <div style={inputGroup}>
                                <label style={labelStyle}>Boy (cm)</label>
                                <input type="number" name="height" value={formData.height} onChange={handleChange} style={inputStyle} />
                            </div>
                            <div style={inputGroup}>
                                <label style={labelStyle}>Güncel Kilo (kg)</label>
                                <input type="number" name="weight" value={formData.weight} onChange={handleChange} style={inputStyle} />
                            </div>
                            <div style={inputGroup}>
                                <label style={labelStyle}>Yaş</label>
                                <input type="number" name="age" value={formData.age} onChange={handleChange} style={inputStyle} />
                            </div>
                            <div style={inputGroup}>
                                <label style={labelStyle}>Hedef Kilo (kg)</label>
                                <input type="number" name="targetWeight" value={formData.targetWeight} onChange={handleChange} style={inputStyle} />
                            </div>
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginTop: "20px" }}>
                            <button
                                type="submit"
                                style={{
                                    background: "#79a33d",
                                    color: "white",
                                    padding: "15px 40px",
                                    borderRadius: "10px",
                                    border: "none",
                                    fontSize: "16px",
                                    fontWeight: 700,
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                    boxShadow: "0 10px 20px rgba(121, 163, 61, 0.15)"
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = "#3d5a2d"}
                                onMouseLeave={(e) => e.currentTarget.style.background = "#79a33d"}
                            >
                                Bilgileri Güncelle
                            </button>

                            {saved && (
                                <span style={{ color: "#27ae60", fontWeight: 600, animation: "fadeIn 0.5s" }}>
                                    Değişiklikler başarıyla kaydedildi!
                                </span>
                            )}
                        </div>
                    </form>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateX(-10px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @media (max-width: 1024px) {
                    form { padding: 25px !important; }
                    .stats-grid-mobile { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </>
    );
}

const inputGroup: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
};

const labelStyle: React.CSSProperties = {
    fontSize: "14px",
    fontWeight: 700,
    color: "#555"
};

const inputStyle: React.CSSProperties = {
    padding: "14px 18px",
    borderRadius: "10px",
    border: "1px solid #e0e0e0",
    outline: "none",
    fontSize: "15px",
    color: "#333",
    fontWeight: 600,
    transition: "border-color 0.3s",
    background: "#fff"
};

