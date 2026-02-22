"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "../../../utils/supabase";

export default function ProgressPage() {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [weightLogs, setWeightLogs] = useState<{ date: string, weight: number }[]>([]);
    const [newWeight, setNewWeight] = useState("");
    const [logDate, setLogDate] = useState(new Date().toISOString().split("T")[0]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const { data: { user: authUser } } = await supabase.auth.getUser();

            if (!authUser) {
                router.push("/login");
                return;
            }

            // 1. Profil ve Hedef Kiloyu Çek
            const { data: profile } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', authUser.id)
                .single();

            if (profile) {
                setUser({
                    id: profile.id,
                    name: profile.full_name,
                    weight: Number(profile.weight),
                    targetWeight: Number(profile.target_weight)
                });
            }

            // 2. Kilo Loglarını Çek
            const { data: logs } = await supabase
                .from('weight_logs')
                .select('*')
                .eq('client_id', authUser.id)
                .order('log_date', { ascending: true });

            if (logs && logs.length > 0) {
                setWeightLogs(logs.map(l => ({ date: l.log_date, weight: Number(l.weight) })));
            } else if (profile && profile.weight) {
                // Eğer hiç log yoksa profil kilosunu ilk log olarak gösterelim
                setWeightLogs([{ date: new Date().toISOString().split("T")[0], weight: Number(profile.weight) }]);
            }

            setLoading(false);
        }

        fetchData();
    }, [router]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/");
    };

    const handleAddWeight = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newWeight || isNaN(Number(newWeight))) return alert("Geçerli bir kilo giriniz.");

        const targetDate = logDate || new Date().toISOString().split("T")[0];
        setLoading(true);

        // 1. Önce bu tarihte kayıt var mı kontrol et
        const { data: existingLog } = await supabase
            .from('weight_logs')
            .select('id')
            .eq('client_id', user.id)
            .eq('log_date', targetDate)
            .maybeSingle();

        let logError;
        if (existingLog) {
            // Varsa güncelle
            const { error } = await supabase
                .from('weight_logs')
                .update({ weight: Number(newWeight) })
                .eq('id', existingLog.id);
            logError = error;
        } else {
            // Yoksa yeni ekle
            const { error } = await supabase
                .from('weight_logs')
                .insert({
                    client_id: user.id,
                    log_date: targetDate,
                    weight: Number(newWeight)
                });
            logError = error;
        }

        if (logError) {
            alert("Kilo kaydedilemedi: " + logError.message);
            setLoading(false);
            return;
        }

        // 2. Profili Güncelle (Güncel Kilo Olarak)
        const { error: profileError } = await supabase
            .from('profiles')
            .update({ weight: Number(newWeight) })
            .eq('id', user.id);

        if (!profileError) {
            setUser({ ...user, weight: Number(newWeight) });
        }

        // 3. Listeyi Yenile
        const { data: newLogs } = await supabase
            .from('weight_logs')
            .select('*')
            .eq('client_id', user.id)
            .order('log_date', { ascending: true });

        if (newLogs) setWeightLogs(newLogs.map(l => ({ date: l.log_date, weight: Number(l.weight) })));

        setNewWeight("");
        setLoading(false);
    };

    if (loading) return <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>Yükleniyor...</div>;
    if (!user) return <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>Yükleniyor...</div>;

    // --- CHART LOGIC ---
    const chartHeight = 300;
    const chartWidth = 800;
    const padding = 40;

    // Get min and max weights to scale the Y axis appropriately
    const weights = weightLogs.map(l => l.weight);
    const targetWeight = Number(user.targetWeight) || 0;
    const minWeight = Math.min(...weights, targetWeight) - 2;
    const maxWeight = Math.max(...weights, targetWeight) + 2;
    const weightRange = maxWeight - minWeight;

    // Generate path points
    const getX = (index: number) => {
        if (weightLogs.length === 1) return chartWidth / 2;
        return padding + (index * ((chartWidth - padding * 2) / (weightLogs.length - 1)));
    };

    const getY = (weight: number) => {
        return chartHeight - padding - (((weight - minWeight) / weightRange) * (chartHeight - padding * 2));
    };

    const targetY = getY(targetWeight);

    const pathData = weightLogs.map((log, index) => {
        const x = getX(index);
        const y = getY(log.weight);
        return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(" ");

    return (
        <div style={{ minHeight: "100vh", background: "#f9faf5", display: "flex", fontFamily: "var(--font-body)" }}>

            {/* Sidebar */}
            <div style={{ width: "260px", background: "#3d5a2d", color: "white", padding: "30px", display: "flex", flexDirection: "column", gap: "40px" }}>
                <div>
                    <h2 style={{ fontSize: "20px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px" }}>{user.name}</h2>
                    <p style={{ fontSize: "12px", opacity: 0.7, marginTop: "5px" }}>Danışan Paneli</p>
                </div>

                <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <Link href="/dashboard" style={navLink}>Özet ve Analiz</Link>
                    <Link href="/dashboard/menu" style={navLink}>Diyet Listem</Link>
                    <Link href="/dashboard/profile" style={navLink}>Profilim</Link>
                    <Link href="/dashboard/progress" style={activeNavLink}>Gelişim Grafiği</Link>
                    <Link href="#" style={navLink}>Ayarlar</Link>
                </nav>

                <div style={{ marginTop: "auto" }}>
                    <button onClick={handleLogout} style={{ background: "none", border: "none", color: "white", cursor: "pointer", fontSize: "14px", opacity: 0.8, padding: 0 }}>Çıkış Yap</button>
                </div>
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, padding: "50px 40px", overflowY: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: "100%", maxWidth: "1000px" }}>

                    <div style={{ marginBottom: "40px" }}>
                        <h1 style={{ fontSize: "32px", fontWeight: 700, color: "#333", marginBottom: "10px" }}>Gelişim Grafiği</h1>
                        <p style={{ color: "#666" }}>Zaman içindeki kilo değişiminizi ve hedefinize olan uzaklığınızı buradan takip edebilirsiniz.</p>
                    </div>

                    {/* Stats Cards */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "25px", marginBottom: "40px" }} className="stats-grid-mobile">
                        <div style={statCard}>
                            <div style={statLabel}>Güncel Kilo</div>
                            <div style={statValue}>{user.weight} <span style={{ fontSize: "16px", color: "#95a5a6" }}>kg</span></div>
                        </div>
                        <div style={statCard}>
                            <div style={statLabel}>Hedef Kilo</div>
                            <div style={statValue}>{targetWeight} <span style={{ fontSize: "16px", color: "#95a5a6" }}>kg</span></div>
                        </div>
                        <div style={{ ...statCard, background: "#79a33d", color: "white" }}>
                            <div style={{ ...statLabel, color: "rgba(255,255,255,0.8)" }}>Kalan Yol</div>
                            <div style={{ ...statValue, color: "white" }}>
                                {Math.abs(Number(user.weight) - targetWeight).toFixed(1)} <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.8)" }}>kg</span>
                            </div>
                        </div>
                    </div>

                    {/* Chart Container */}
                    <div style={{ background: "white", padding: "40px", borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.04)", marginBottom: "40px", overflowX: "auto" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
                            <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#3d5a2d" }}>Kilo Değişim Grafiği</h3>
                            <div style={{ fontSize: "14px", color: "#7f8c8d", fontWeight: 600 }}>Dikey: Kilo (kg) | Yatay: Tarih (Gün)</div>
                        </div>

                        {weightLogs.length > 0 ? (
                            <div style={{ minWidth: "600px", position: "relative" }}>
                                <svg width="100%" height={chartHeight} viewBox={`0 0 ${chartWidth} ${chartHeight}`} style={{ overflow: "visible" }}>

                                    {/* Y-Axis Line & Grid */}
                                    <line x1={padding} y1={padding - 30} x2={padding} y2={chartHeight - padding} stroke="#bdc3c7" strokeWidth="2" />
                                    <text x={padding} y={padding - 40} fill="#2c3e50" fontSize="13" fontWeight="bold" textAnchor="middle">Kilo (kg)</text>

                                    {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
                                        const y = padding + (chartHeight - padding * 2) * ratio;
                                        const labelWeight = maxWeight - (weightRange * ratio);
                                        return (
                                            <g key={i}>
                                                <line x1={padding} y1={y} x2={chartWidth - padding + 20} y2={y} stroke="#f0f0f0" strokeWidth="1" />
                                                <text x={padding - 10} y={y + 4} fill="#95a5a6" fontSize="11" textAnchor="end">{labelWeight.toFixed(1)}</text>
                                            </g>
                                        );
                                    })}

                                    {/* X-Axis Base Line */}
                                    <line x1={padding} y1={chartHeight - padding} x2={chartWidth - padding + 40} y2={chartHeight - padding} stroke="#bdc3c7" strokeWidth="2" />
                                    <text x={chartWidth - padding + 55} y={chartHeight - padding + 4} fill="#2c3e50" fontSize="13" fontWeight="bold" textAnchor="start">Gün</text>

                                    {/* Y-Axis Target Line */}
                                    {targetWeight > 0 && (
                                        <g>
                                            <line x1={padding} y1={targetY} x2={chartWidth - padding + 20} y2={targetY} stroke="#e74c3c" strokeWidth="2" strokeDasharray="5,5" />
                                            <text x={chartWidth - padding + 30} y={targetY + 4} fill="#e74c3c" fontSize="12" fontWeight="bold">Hedef: {targetWeight}kg</text>
                                        </g>
                                    )}

                                    {/* Timeline Line */}
                                    {weightLogs.length > 1 ? (
                                        <path d={pathData} fill="none" stroke="#79a33d" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    ) : weightLogs.length === 1 && (
                                        /* If only 1 point exists, draw a flat dotted line backwards to show history start */
                                        <line x1={padding} y1={getY(weightLogs[0].weight)} x2={getX(0)} y2={getY(weightLogs[0].weight)} stroke="#79a33d" strokeWidth="4" strokeDasharray="10,10" opacity={0.3} />
                                    )}

                                    {/* Data Points and X-Axis Labels */}
                                    {weightLogs.map((log, index) => {
                                        const x = getX(index);
                                        const y = getY(log.weight);
                                        return (
                                            <g key={index}>
                                                {/* Point */}
                                                <circle cx={x} cy={y} r="6" fill="#79a33d" stroke="white" strokeWidth="2" />
                                                <circle cx={x} cy={y} r="10" fill="transparent" stroke="#79a33d" strokeWidth="2" opacity="0.5" />
                                                <text x={x} y={y - 20} textAnchor="middle" fill="#2c3e50" fontSize="13" fontWeight="bold">{log.weight}kg</text>

                                                {/* X Axis Mark */}
                                                <line x1={x} y1={chartHeight - padding} x2={x} y2={chartHeight - padding + 5} stroke="#bdc3c7" strokeWidth="2" />
                                                <text x={x} y={chartHeight - padding + 20} textAnchor="middle" fill="#95a5a6" fontSize="11">{new Date(log.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' })}</text>
                                            </g>
                                        );
                                    })}
                                </svg>
                            </div>
                        ) : (
                            <div style={{ textAlign: "center", padding: "50px", color: "#95a5a6" }}>Henüz yeterli kilo verisi girilmedi.</div>
                        )}
                    </div>

                    {/* Add Weight Form */}
                    <div style={{ background: "white", padding: "40px", borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.04)" }}>
                        <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#333", marginBottom: "20px" }}>Yeni Tartım Ekle</h3>
                        <form onSubmit={handleAddWeight} style={{ display: "flex", flexWrap: "wrap", gap: "15px", alignItems: "flex-end" }}>

                            <div style={{ flex: 1, minWidth: "200px", display: "flex", flexDirection: "column", gap: "8px" }}>
                                <label style={{ fontSize: "13px", fontWeight: 700, color: "#666" }}>Tarih Seçimi</label>
                                <input
                                    type="date"
                                    value={logDate}
                                    onChange={e => setLogDate(e.target.value)}
                                    style={{
                                        padding: "15px 20px",
                                        borderRadius: "10px",
                                        border: "1px solid #e0e0e0",
                                        outline: "none",
                                        fontSize: "15px",
                                        fontWeight: 600,
                                        fontFamily: "inherit"
                                    }}
                                />
                            </div>

                            <div style={{ flex: 1, minWidth: "200px", display: "flex", flexDirection: "column", gap: "8px" }}>
                                <label style={{ fontSize: "13px", fontWeight: 700, color: "#666" }}>Kilonuz (kg)</label>
                                <input
                                    type="number"
                                    step="0.1"
                                    value={newWeight}
                                    onChange={e => setNewWeight(e.target.value)}
                                    placeholder="Örn: 74.5"
                                    style={{
                                        padding: "15px 20px",
                                        borderRadius: "10px",
                                        border: "1px solid #e0e0e0",
                                        outline: "none",
                                        fontSize: "15px",
                                        fontWeight: 600
                                    }}
                                />
                            </div>

                            <button type="submit" style={{
                                background: "#79a33d",
                                color: "white",
                                padding: "15px 30px",
                                borderRadius: "10px",
                                border: "none",
                                fontSize: "15px",
                                fontWeight: 700,
                                cursor: "pointer",
                                boxShadow: "0 10px 20px rgba(121, 163, 61, 0.2)"
                            }}>
                                ++ Ekle
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            <style>{`
            @media (max-width: 1024px) {
                .stats-grid-mobile {
                    grid-template-columns: 1fr !important;
                }
            }
            `}</style>
        </div>
    );
}

const statCard: React.CSSProperties = {
    background: "white",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
};

const statLabel: React.CSSProperties = {
    fontSize: "14px",
    fontWeight: 700,
    color: "#7f8c8d",
    marginBottom: "5px",
    textTransform: "uppercase",
    letterSpacing: "1px"
};

const statValue: React.CSSProperties = {
    fontSize: "36px",
    fontWeight: 800,
    color: "#2c3e50"
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
