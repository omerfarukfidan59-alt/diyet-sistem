"use client";

// No strict change here. Just fulfilling tool expectations. 
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "../../utils/supabase";

export default function DashboardPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        name: "Yükleniyor...",
        height: 180,
        weight: 85,
        age: 28,
        targetWeight: 75,
    });

    const [dietDay, setDietDay] = useState<any>(null);
    const [activeDayIndex, setActiveDayIndex] = useState(0);

    useEffect(() => {
        async function fetchUserData() {
            // 1. Supabase Session Kontrolü
            const { data: authData } = await supabase.auth.getUser();

            if (!authData.user) {
                // Yedek: localStorage kontrolü
                const loggedInUser = localStorage.getItem("currentUser");
                if (!loggedInUser) {
                    router.push("/login");
                    return;
                }
                const parsedUser = JSON.parse(loggedInUser);
                if (parsedUser.role === "admin") {
                    router.push("/admin");
                    return;
                }
                setUser({
                    name: parsedUser.name || parsedUser.full_name,
                    height: Number(parsedUser.height),
                    weight: Number(parsedUser.weight),
                    age: Number(parsedUser.age),
                    targetWeight: Number(parsedUser.targetWeight || parsedUser.target_weight)
                });
                return;
            }

            // 2. Supabase DB'den Profil Çekme
            const { data: profile } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', authData.user.id)
                .single();

            if (profile) {
                if (profile.role === "admin") {
                    router.push("/admin");
                    return;
                }
                setUser({
                    name: profile.full_name,
                    height: Number(profile.height),
                    weight: Number(profile.weight),
                    age: Number(profile.age),
                    targetWeight: Number(profile.target_weight)
                });
            }

            // 3. Diyeti Supabase'den Çek
            const { data: dietData } = await supabase
                .from('diets')
                .select('*')
                .eq('client_id', authData.user.id)
                .eq('is_active', true)
                .maybeSingle();

            if (dietData && dietData.content && Array.isArray(dietData.content)) {
                // İlerlemeyi Çek (Günü belirlemek için)
                const { data: progressData } = await supabase
                    .from('diet_progress')
                    .select('*')
                    .eq('client_id', authData.user.id)
                    .order('day_number', { ascending: false })
                    .limit(1);

                let currentDayIdx = 0;
                if (progressData && progressData.length > 0) {
                    currentDayIdx = progressData[0].day_number - 1;
                    if (currentDayIdx >= dietData.content.length) {
                        currentDayIdx = dietData.content.length - 1;
                    }
                }

                setActiveDayIndex(currentDayIdx);
                setDietDay(dietData.content[currentDayIdx]);
            }
        }

        fetchUserData();
    }, [router]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        localStorage.removeItem("currentUser");
        router.push("/");
    };

    // VKI ve BMH Hesaplama
    const heightInMeters = user.height / 100;
    const bmi = (user.weight / (heightInMeters * heightInMeters)).toFixed(1);

    // Basitleştirilmiş BMR (BMH) hesabı
    const bmr = Math.round(10 * user.weight + 6.25 * user.height - 5 * user.age + 5);

    const getBmiStatus = (val: number) => {
        if (val < 18.5) return { text: "Zayıf", color: "#f39c12" };
        if (val < 25) return { text: "Normal", color: "#27ae60" };
        if (val < 30) return { text: "Fazla Kilolu", color: "#e67e22" };
        return { text: "Obez", color: "#e74c3c" };
    };

    const bmiStatus = getBmiStatus(parseFloat(bmi));

    return (
        <div style={{ minHeight: "100vh", background: "#f9faf5", display: "flex", fontFamily: "var(--font-body)" }}>

            {/* Mini Sidebar */}
            <div style={{ width: "260px", background: "#3d5a2d", color: "white", padding: "30px", display: "flex", flexDirection: "column", gap: "40px" }} className="sidebar">
                <div>
                    <h2 style={{ fontSize: "20px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px" }}>Sümeyye Gencal</h2>
                    <p style={{ fontSize: "12px", opacity: 0.7, marginTop: "5px" }}>Danışan Paneli</p>
                </div>

                <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <Link href="/dashboard" style={activeNavLink}>Özet ve Analiz</Link>
                    <Link href="/dashboard/menu" style={navLink}>Diyet Listem</Link>
                    <Link href="/dashboard/profile" style={navLink}>Profilim</Link>
                    <Link href="/dashboard/progress" style={navLink}>Gelişim Grafiği</Link>
                    <Link href="#" style={navLink}>Ayarlar</Link>
                </nav>

                <div style={{ marginTop: "auto" }}>
                    <button onClick={() => { localStorage.removeItem("currentUser"); router.push("/"); }} style={{ background: "none", border: "none", color: "white", cursor: "pointer", fontSize: "14px", opacity: 0.8, padding: 0 }}>Çıkış Yap</button>
                </div>
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, padding: "40px", overflowY: "auto" }}>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
                    <div>
                        <h1 style={{ fontSize: "28px", color: "#333", fontWeight: 700 }}>Hoş geldin, {user.name}!</h1>
                        <p style={{ color: "#666" }}>Bugün sağlıklı seçimler yapmak için harika bir gün.</p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                        <div style={{ fontSize: "14px", color: "#888" }}>Tarih</div>
                        <div style={{ fontWeight: 600, color: "#333" }}>21 Şubat 2026</div>
                    </div>
                </div>

                {/* Info Cards Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "25px", marginBottom: "40px" }} className="stats-grid">

                    {/* Card: BMI */}
                    <div style={statCard}>
                        <div style={{ fontSize: "14px", color: "#888", marginBottom: "5px" }}>Vücut Kitle İndeksi (VKI)</div>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                            <span style={{ fontSize: "32px", fontWeight: 800, color: "#333" }}>{bmi}</span>
                            <span style={{
                                fontSize: "12px",
                                padding: "4px 8px",
                                borderRadius: "20px",
                                background: bmiStatus.color + "22",
                                color: bmiStatus.color,
                                fontWeight: 700
                            }}>
                                {bmiStatus.text}
                            </span>
                        </div>
                    </div>

                    {/* Card: BMR */}
                    <div style={statCard}>
                        <div style={{ fontSize: "14px", color: "#888", marginBottom: "5px" }}>Bazal Metabolizma Hızı (BMH)</div>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "5px" }}>
                            <span style={{ fontSize: "32px", fontWeight: 800, color: "#333" }}>{bmr}</span>
                            <span style={{ fontSize: "14px", color: "#666" }}>kcal/gün</span>
                        </div>
                    </div>

                    {/* Card: Progress */}
                    <div style={statCard}>
                        <div style={{ fontSize: "14px", color: "#888", marginBottom: "5px" }}>Hedefe Kalan</div>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "5px" }}>
                            <span style={{ fontSize: "32px", fontWeight: 800, color: "#79a33d" }}>{user.weight - user.targetWeight}</span>
                            <span style={{ fontSize: "14px", color: "#666" }}>kg</span>
                        </div>
                    </div>

                </div>

            </div>

            <style>{`
        @media (max-width: 1024px) {
          .stats-grid { grid-template-columns: 1fr !important; }
          .sidebar { width: 80px !important; padding: 20px !important; }
          .sidebar h2, .sidebar p, .sidebar nav a { font-size: 0 !important; }
          .sidebar nav a::before { font-size: 20px !important; margin: 0 !important; }
        }
      `}</style>
        </div>
    );
}

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

const statCard: React.CSSProperties = {
    background: "white",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
};
