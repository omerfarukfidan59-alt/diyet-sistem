"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "../../utils/supabase";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Sistemsel e-posta dönüşümü (Kayıt sırasındaki mantığın aynısı)
        const systemEmail = email.includes("@") ? email : email.toLowerCase().replace(/[^a-z0-9]/g, '') + "@diyetist.local";

        // Admin Giriş Kontrolü (Geriye Dönük Hızlı Erişim)
        if (email === "sumeyye" && password === "sumeyye1234.!") {
            const adminUser = { name: "Sümeyye Gencal", email: "sumeyye", role: "admin" };
            localStorage.setItem("currentUser", JSON.stringify(adminUser));
            router.push("/admin");
            setLoading(false);
            return;
        }

        try {
            // Supabase Authentication
            const { data, error } = await supabase.auth.signInWithPassword({
                email: systemEmail,
                password
            });

            if (error) {
                alert("Hatalı ad soyad veya şifre!");
                setLoading(false);
                return;
            }

            if (data.user) {
                // Profil tablosundan verileri çek
                const { data: profile, error: profileErr } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', data.user.id)
                    .single();

                if (profile) {
                    // Geçiş dönemi için localStorage'ı beslemeye devam et
                    localStorage.setItem("currentUser", JSON.stringify({
                        id: profile.id,
                        name: profile.full_name,
                        role: profile.role,
                        height: profile.height,
                        weight: profile.weight,
                        age: profile.age,
                        targetWeight: profile.target_weight
                    }));

                    if (profile.role === 'admin') {
                        router.push("/admin");
                    } else {
                        router.push("/dashboard");
                    }
                } else {
                    alert("Kullanıcı profili bulunamadı.");
                }
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Giriş yapılırken bir hata oluştu. Lütfen tekrar deneyin.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f9faf5",
            fontFamily: "var(--font-body)",
            padding: "20px"
        }}>
            <div style={{
                width: "100%",
                maxWidth: "450px",
                background: "white",
                borderRadius: "15px",
                padding: "40px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.05)"
            }}>
                {/* Logo/Title Section */}
                <div style={{ textAlign: "center", marginBottom: "40px" }}>
                    <Link href="/" style={{ textDecoration: "none" }}>
                        <div style={{ color: "#79a33d", fontSize: "40px", marginBottom: "10px" }}>🍃</div>
                        <h1 style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "24px",
                            fontWeight: 800,
                            color: "#3d5a2d",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                            margin: 0
                        }}>
                            Sümeyye Gencal
                        </h1>
                    </Link>
                    <p style={{ color: "#888", fontSize: "14px", marginTop: "10px" }}>Sağlıklı yaşam yolculuğuna devam et</p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <label style={{ fontSize: "14px", fontWeight: 600, color: "#555" }}>Ad Soyad</label>
                        <input
                            type="text"
                            required
                            placeholder="Adınız Soyadınız"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                padding: "12px 15px",
                                borderRadius: "8px",
                                border: "1px solid #eee",
                                outline: "none",
                                transition: "border-color 0.3s",
                                fontSize: "15px",
                                color: "#333",
                                fontWeight: 600
                            }}
                            onFocus={(e) => e.target.style.borderColor = "#79a33d"}
                            onBlur={(e) => e.target.style.borderColor = "#eee"}
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <label style={{ fontSize: "14px", fontWeight: 600, color: "#555" }}>Şifre</label>
                        <input
                            type="password"
                            required
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                padding: "12px 15px",
                                borderRadius: "8px",
                                border: "1px solid #eee",
                                outline: "none",
                                transition: "border-color 0.3s",
                                fontSize: "15px",
                                color: "#333",
                                fontWeight: 600
                            }}
                            onFocus={(e) => e.target.style.borderColor = "#79a33d"}
                            onBlur={(e) => e.target.style.borderColor = "#eee"}
                        />
                    </div>

                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <a href="#" style={{ fontSize: "13px", color: "#79a33d", textDecoration: "none" }}>Şifremi Unuttum</a>
                    </div>

                    <button
                        type="submit"
                        style={{
                            background: "#79a33d",
                            color: "white",
                            padding: "14px",
                            borderRadius: "8px",
                            border: "none",
                            fontSize: "16px",
                            fontWeight: 700,
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            marginTop: "10px"
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
                        Giriş Yap
                    </button>
                </form>

                <div style={{ textAlign: "center", marginTop: "30px", fontSize: "14px", color: "#888" }}>
                    Henüz bir hesabın yok mu?{" "}
                    <Link href="/register" style={{ color: "#79a33d", fontWeight: 700, textDecoration: "none" }}>
                        Hemen Kayıt Ol
                    </Link>
                </div>
            </div>
        </div>
    );
}
