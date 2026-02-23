"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../utils/supabase";

export default function AdminDashboard() {
    const [stats, setStats] = useState([
        { label: "Toplam Danışan", value: "0" },
        { label: "Aktif Diyet", value: "0" },
        { label: "Besin Sayısı", value: "0" },
    ]);
    const [recentClients, setRecentClients] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchDashboardData() {
            setLoading(true);

            // 1. Toplam Danışan ve Son İşlemler (Profiles)
            const { data: clientsData } = await supabase
                .from('profiles')
                .select('*')
                .eq('role', 'client')
                .order('created_at', { ascending: false });

            const safeClients = clientsData || [];

            // 2. Aktif Diyetler 
            const { count: dietsCount } = await supabase
                .from('diets')
                .select('*', { count: 'exact', head: true })
                .eq('is_active', true);

            // 3. Besin Kütüphanesi
            const { count: foodsCount } = await supabase
                .from('food_library')
                .select('*', { count: 'exact', head: true });

            setStats([
                { label: "Toplam Danışan", value: safeClients.length.toString() },
                { label: "Aktif Diyet", value: (dietsCount || 0).toString() },
                { label: "Besin Sayısı", value: (foodsCount || 0).toString() },
            ]);

            // En son eklenen 4 danışan
            setRecentClients(safeClients.slice(0, 4));
            setLoading(false);
        }

        fetchDashboardData();
    }, []);

    const router = useRouter();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        localStorage.removeItem("currentUser");
        router.push("/");
    };

    return (
        <>
            {/* Admin main wrapper responsive padding */}
            <div className="admin-page-wrapper" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <style jsx>{`
                    .admin-page-wrapper {
                        padding: 50px;
                    }
                    .stats-grid { grid-template-columns: repeat(3, 1fr); }
                    .content-grid { grid-template-columns: 1.5fr 1fr; }

                    @media (max-width: 1024px) {
                        .admin-page-wrapper {
                            padding: 20px;
                        }
                        .stats-grid { grid-template-columns: 1fr; }
                        .content-grid { grid-template-columns: 1fr; }
                    }
                `}</style>

                <div style={{ marginBottom: "40px" }}>
                    <h1 style={{ fontSize: "32px", fontWeight: 700, color: "#2c3e50" }}>Yönetim Paneli</h1>
                    <p style={{ color: "#7f8c8d" }}>Hoş geldiniz Sümeyye Hanım. İşte bugünlük özetiniz.</p>
                </div>

                {/* Stats Grid */}
                <div className="stats-grid" style={{ display: "grid", gap: "25px", marginBottom: "50px" }}>

                    {stats.map((stat, i) => (
                        <div key={i} style={{
                            background: "white",
                            padding: "25px",
                            borderRadius: "15px",
                            boxShadow: "0 10px 20px rgba(0,0,0,0.02)",
                            display: "flex",
                            alignItems: "center",
                            gap: "20px"
                        }}>
                            <div>
                                <div style={{ fontSize: "14px", color: "#95a5a6", fontWeight: 600 }}>{stat.label}</div>
                                <div style={{ fontSize: "24px", fontWeight: 800, color: "#2c3e50" }}>{stat.value}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="content-grid" style={{ display: "grid", gap: "30px" }}>


                    {/* Recent Activity */}
                    <div style={{ background: "white", padding: "30px", borderRadius: "20px", boxShadow: "0 10px 20px rgba(0,0,0,0.02)" }}>
                        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#2c3e50", marginBottom: "25px" }}>Son İşlemler</h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                            {loading ? (
                                <div style={{ color: "#95a5a6", fontSize: "14px" }}>Yükleniyor...</div>
                            ) : recentClients.length === 0 ? (
                                <div style={{ color: "#95a5a6", fontStyle: "italic", fontSize: "14px" }}>Henüz kayıtlı danışan yok.</div>
                            ) : (
                                recentClients.map((client: any, i: number) => (
                                    <div key={i} style={{
                                        padding: "15px",
                                        border: "1px solid #f1f1f1",
                                        borderRadius: "12px",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}>
                                        <div>
                                            <div style={{ fontWeight: 700, color: "#2c3e50" }}>{client.full_name}</div>
                                            <div style={{ fontSize: "12px", color: "#95a5a6" }}>Yeni Danışan</div>
                                        </div>
                                        <span style={{
                                            fontSize: "12px",
                                            padding: "5px 12px",
                                            borderRadius: "20px",
                                            background: "#eafaf1",
                                            color: "#27ae60",
                                            fontWeight: 700
                                        }}>
                                            Aktif
                                        </span>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
                        <div style={{ background: "#79a33d", padding: "30px", borderRadius: "20px", color: "white" }}>
                            <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "15px" }}>Hızlı Diyet Yaz</h3>
                            <p style={{ fontSize: "14px", opacity: 0.9, marginBottom: "20px" }}>Danışan seçerek saniyeler içinde yeni bir liste oluşturun.</p>
                            <a href="/admin/clients" style={{
                                background: "white",
                                color: "#79a33d",
                                border: "none",
                                padding: "12px 25px",
                                borderRadius: "10px",
                                fontWeight: 700,
                                textDecoration: "none",
                                display: "inline-block",
                                cursor: "pointer"
                            }}>Danışanlara Git</a>
                        </div>

                        <div style={{ background: "white", padding: "30px", borderRadius: "20px", border: "2px dashed #bdc3c7" }}>
                            <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#2c3e50", marginBottom: "10px" }}>Besin Kütüphanesi</h3>
                            <p style={{ fontSize: "13px", color: "#7f8c8d", marginBottom: "15px" }}>Yeni besinler ekleyerek listenizi genişletin.</p>
                            <a href="/admin/food" style={{ color: "#79a33d", fontWeight: 700, textDecoration: "none", fontSize: "14px" }}>Yönetmeye Başla →</a>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}
