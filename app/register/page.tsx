"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "../../utils/supabase";

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        height: "",
        weight: "",
        age: "",
        gender: "Erkek", // Varsayılan değer
        targetWeight: ""
    });
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // 1. Supabase Auth için Ad Soyad'dan benzersiz bir e-posta üretelim
        const systemEmail = formData.name.toLowerCase().replace(/[^a-z0-9]/g, '') + "@diyetist.local";

        // 1. Supabase Auth (Kayıt)
        const { data: authData, error: authError } = await supabase.auth.signUp({
            email: systemEmail,
            password: formData.password
        });

        if (authError) {
            alert("Kayıt hatası: " + authError.message);
            setLoading(false);
            return;
        }

        if (authData.user) {
            // 2. Profil tablosuna fiziksel verileri ekle
            const { error: profileError } = await supabase.from('profiles').insert([
                {
                    id: authData.user.id,
                    role: "client",
                    full_name: formData.name,
                    height: Number(formData.height),
                    weight: Number(formData.weight),
                    age: Number(formData.age),
                    gender: formData.gender,
                    target_weight: Number(formData.targetWeight)
                }
            ]);

            if (profileError) {
                alert("Profil verisi kaydedilemedi: " + profileError.message);
                setLoading(false);
                return;
            }

            // Geriye dönük uyumluluk (Geçici olarak localStorage'da da tutalım)
            const newUser = {
                id: authData.user.id,
                name: formData.name,
                email: systemEmail,
                role: "client",
                height: formData.height,
                weight: formData.weight,
                age: formData.age,
                gender: formData.gender,
                targetWeight: formData.targetWeight
            };

            const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
            existingUsers.push(newUser);
            localStorage.setItem("users", JSON.stringify(existingUsers));
            localStorage.setItem("currentUser", JSON.stringify(newUser));

            router.push("/dashboard");
        }
        setLoading(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f9faf5",
            fontFamily: "var(--font-body)",
            padding: "40px 20px"
        }}>
            <div style={{
                width: "100%",
                maxWidth: "600px",
                background: "white",
                borderRadius: "15px",
                padding: "40px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.05)"
            }}>
                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "35px" }}>
                    <Link href="/" style={{ textDecoration: "none" }}>
                        <div style={{ color: "#79a33d", fontSize: "35px", marginBottom: "8px" }}>🍃</div>
                        <h1 style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "22px",
                            fontWeight: 800,
                            color: "#3d5a2d",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                            margin: 0
                        }}>
                            Sümeyye Gencal
                        </h1>
                    </Link>
                    <h2 style={{ fontSize: "20px", color: "#333", marginTop: "15px", fontWeight: 700 }}>Sağlıklı Yaşama İlk Adımı At</h2>
                    <p style={{ color: "#888", fontSize: "14px", marginTop: "5px" }}>Analiz için vücut verilerini doldurman yeterli</p>
                </div>

                <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: "25px" }}>

                    {/* Kişisel Bilgiler */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px" }} className="form-grid">
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <label style={{ fontSize: "13px", fontWeight: 700, color: "#555" }}>Ad Soyad</label>
                            <input type="text" name="name" required placeholder="Adınız Soyadınız" onChange={handleChange} style={inputStyle} />
                        </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <label style={{ fontSize: "13px", fontWeight: 700, color: "#555" }}>Şifre</label>
                        <input type="password" name="password" required placeholder="••••••••" onChange={handleChange} style={inputStyle} />
                    </div>

                    {/* Fiziksel Veriler */}
                    <div style={{
                        background: "#fcfdfe",
                        padding: "20px",
                        borderRadius: "10px",
                        border: "1px dashed #79a33d",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "20px"
                    }} className="form-grid">
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <label style={{ fontSize: "13px", fontWeight: 700, color: "#555" }}>Boy (cm)</label>
                            <input type="number" name="height" required placeholder="Örn: 175" onChange={handleChange} style={inputStyle} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <label style={{ fontSize: "13px", fontWeight: 700, color: "#555" }}>Kilo (kg)</label>
                            <input type="number" name="weight" required placeholder="Örn: 70" onChange={handleChange} style={inputStyle} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <label style={{ fontSize: "13px", fontWeight: 700, color: "#555" }}>Yaş</label>
                            <input type="number" name="age" required placeholder="Örn: 25" onChange={handleChange} style={inputStyle} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <label style={{ fontSize: "13px", fontWeight: 700, color: "#555" }}>Cinsiyet</label>
                            <select name="gender" value={formData.gender} onChange={handleChange as any} style={inputStyle}>
                                <option value="Erkek">Erkek</option>
                                <option value="Kadın">Kadın</option>
                            </select>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <label style={{ fontSize: "13px", fontWeight: 700, color: "#555" }}>Hedef Kilo (kg)</label>
                            <input type="number" name="targetWeight" required placeholder="Örn: 65" onChange={handleChange} style={inputStyle} />
                        </div>
                    </div>

                    <button
                        type="submit"
                        style={{
                            background: "#79a33d",
                            color: "white",
                            padding: "15px",
                            borderRadius: "8px",
                            border: "none",
                            fontSize: "16px",
                            fontWeight: 700,
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#3d5a2d";
                            e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "#79a33d";
                            e.currentTarget.style.transform = "translateY(0)";
                        }}
                    >
                        Hesap Oluştur ve Başla
                    </button>
                </form>

                <div style={{ textAlign: "center", marginTop: "30px", fontSize: "14px", color: "#888" }}>
                    Zaten bir hesabın var mı?{" "}
                    <Link href="/login" style={{ color: "#79a33d", fontWeight: 700, textDecoration: "none" }}>
                        Giriş Yap
                    </Link>
                </div>
            </div>

            <style>{`
        @media (max-width: 640px) {
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </div>
    );
}

const inputStyle = {
    padding: "12px 15px",
    borderRadius: "8px",
    border: "1px solid #eee",
    outline: "none",
    transition: "border-color 0.3s",
    fontSize: "14px",
    color: "#333",
    fontWeight: 600
};
