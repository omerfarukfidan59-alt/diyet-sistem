"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
        <div style={{ minHeight: "100vh", background: "#f9faf5", display: "flex", fontFamily: "var(--font-body)" }}>

            {/* Sidebar (Copy of Dashboard for consistency) */}
            <div style={{ width: "260px", background: "#3d5a2d", color: "white", padding: "30px", display: "flex", flexDirection: "column", gap: "40px" }}>
                <div>
                    <h2 style={{ fontSize: "20px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px" }}>Sümeyye Gencal</h2>
                    <p style={{ fontSize: "12px", opacity: 0.7, marginTop: "5px" }}>Danışan Paneli</p>
                </div>

                <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <Link href="/dashboard" style={navLink}>Özet ve Analiz</Link>
                    <Link href="/dashboard/menu" style={navLink}>Diyet Listem</Link>
                    <Link href="/dashboard/profile" style={activeNavLink}>Profilim</Link>
                    <Link href="/dashboard/progress" style={navLink}>Gelişim Grafiği</Link>
                    <Link href="#" style={navLink}>Ayarlar</Link>
                </nav>

                <div style={{ marginTop: "auto" }}>
                    <button onClick={async () => {
                        await supabase.auth.signOut();
                        localStorage.removeItem("currentUser");
                        router.push("/");
                    }} style={{ background: "none", border: "none", color: "white", cursor: "pointer", fontSize: "14px", opacity: 0.8, padding: 0 }}>Çıkış Yap</button>
                </div>
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, padding: "50px 20px", overflowY: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>

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

            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @media (max-width: 1024px) {
          form { padding: 25px !important; }
          div[style*="grid-template-columns: repeat(4"] { grid-template-columns: 1fr 1fr !important; }
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </div>
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

const navLink: React.CSSProperties = {
    padding: "12px 15px",
    borderRadius: "8px",
    color: "white",
    textDecoration: "none",
    fontSize: "14px",
    transition: "background 0.3s",
    opacity: 0.8
};

const activeNavLink: React.CSSProperties = {
    ...navLink,
    background: "rgba(255,255,255,0.1)",
    opacity: 1,
    fontWeight: 700
};
