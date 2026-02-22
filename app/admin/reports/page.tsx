"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Reports() {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        router.push("/");
    };

    return (
        <div style={{ minHeight: "100vh", background: "#f4f7f4", display: "flex", fontFamily: "var(--font-body)" }}>
            {/* Admin Sidebar */}
            <div style={{ width: "280px", background: "#2c3e50", color: "white", padding: "40px 30px", display: "flex", flexDirection: "column", gap: "40px" }}>
                <div>
                    <h2 style={{ fontSize: "22px", fontWeight: 800, color: "#79a33d" }}>Sümeyye Hanım</h2>
                    <p style={{ fontSize: "12px", color: "#bdc3c7", marginTop: "5px" }}>Diyetisyen Admin Paneli</p>
                </div>

                <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <Link href="/admin" style={navLink}>Genel Bakış</Link>
                    <Link href="/admin/clients" style={navLink}>Danışan Yönetimi</Link>
                    <Link href="/admin/food" style={navLink}>Besin Kütüphanesi</Link>
                    <Link href="/admin/appointments" style={navLink}>Randevu Takvimi</Link>
                    <Link href="/admin/reports" style={activeNavLink}>Raporlar</Link>
                </nav>

                <div style={{ marginTop: "auto" }}>
                    <button onClick={handleLogout} style={{ background: "none", border: "none", color: "#ecf0f1", cursor: "pointer", fontSize: "14px", opacity: 0.8, padding: 0 }}>Oturumu Kapat</button>
                </div>
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, padding: "50px", overflowY: "auto" }}>
                <div style={{ marginBottom: "40px" }}>
                    <h1 style={{ fontSize: "32px", fontWeight: 700, color: "#2c3e50" }}>Raporlar ve Analizler</h1>
                    <p style={{ color: "#7f8c8d" }}>Danışan istatistikleri ve klinik performansını buradan takip edebilirsiniz.</p>
                </div>

                <div style={{ background: "white", padding: "50px", borderRadius: "20px", textAlign: "center", boxShadow: "0 10px 20px rgba(0,0,0,0.02)" }}>
                    <div style={{ fontSize: "40px", marginBottom: "20px" }}>📈</div>
                    <h2 style={{ color: "#2c3e50", marginBottom: "15px" }}>Raporlama Modülü Yakında Eklenecek</h2>
                    <p style={{ color: "#7f8c8d" }}>Bu sayfa şu an yapım aşamasındadır. Detaylı analiz araçları buraya gelecektir.</p>
                </div>
            </div>
        </div>
    );
}

const navLink: React.CSSProperties = {
    padding: "15px 20px",
    borderRadius: "12px",
    color: "#bdc3c7",
    textDecoration: "none",
    fontSize: "15px",
    transition: "all 0.3s ease",
};

const activeNavLink: React.CSSProperties = {
    ...navLink,
    background: "#34495e",
    color: "white",
    fontWeight: 700
};
