"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Reports() {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        router.push("/");
    };

    return (
        <>
            <div style={{ flex: 1, padding: "50px", display: "flex", flexDirection: "column" }}>
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
        </>
    );
}
