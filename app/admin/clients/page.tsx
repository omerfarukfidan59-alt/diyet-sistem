"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "../../../utils/supabase";

export default function ClientsPage() {
    const [clients, setClients] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchClients();
    }, []);

    async function fetchClients() {
        setLoading(true);
        const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('role', 'client')
            .order('created_at', { ascending: false });

        if (!error && data) {
            setClients(data);
        }
        setLoading(false);
    }

    const handleDeleteClient = async (clientId: string, clientName: string) => {
        if (!window.confirm(`${clientName} isimli danışanı silmek istediğinize emin misiniz? Bu işlem geri alınamaz ve o kişiye ait tüm veriler (diyet, gelişim, kilo, giriş hesabı) kalıcı olarak silinir.`)) return;

        // Yerel verileri temizle (Güvenlik amaçlı)
        localStorage.removeItem(`diet_${clientId}`);
        localStorage.removeItem(`dietProgress_${clientId}`);
        localStorage.removeItem(`weightLogs_${clientId}`);

        // Supabase Silme İşlemi (DB tarafındaki CASCADE ve TRIGGER sayesinde her şeyi siler)
        const { error, count } = await supabase
            .from('profiles')
            .delete({ count: 'exact' })
            .eq('id', clientId);

        if (error) {
            console.error("Silme hatası:", error);
            alert("Silme işlemi başarısız: " + error.message);
        } else if (count === 0) {
            alert("Uyarı: Kullanıcı veritabanında bulunamadı veya silme izniniz yok (RLS). Lütfen SQL politikalarını kontrol edin.");
        } else {
            // Arayüzden kaldır
            setClients(clients.filter(c => c.id !== clientId));
            alert("Danışan ve tüm verileri başarıyla silindi.");
        }
    };

    return (
        <>
            <div style={{ flex: 1, padding: "50px", display: "flex", flexDirection: "column" }}>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
                    <div>
                        <h1 style={{ fontSize: "32px", fontWeight: 700, color: "#2c3e50" }}>Danışan Yönetimi</h1>
                        <p style={{ color: "#7f8c8d" }}>Sisteme kayıtlı tüm danışanlarınızın listesi ve analiz verileri.</p>
                    </div>
                </div>

                {/* Clients Table */}
                <div style={{ background: "white", borderRadius: "20px", overflowX: "auto", boxShadow: "0 10px 20px rgba(0,0,0,0.02)" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead style={{ background: "#fcfdfe" }}>
                            <tr style={{ textAlign: "left" }}>
                                <th style={thStyle}>Ad Soyad</th>
                                <th style={thStyle}>Boy</th>
                                <th style={thStyle}>Kilo</th>
                                <th style={thStyle}>VKI</th>
                                <th style={thStyle}>BMH</th>
                                <th style={thStyle}>Hedef</th>
                                <th style={thStyle}>İşlemler</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={7} style={{ padding: "50px", textAlign: "center", color: "#95a5a6" }}>
                                        Yükleniyor...
                                    </td>
                                </tr>
                            ) : clients.length > 0 ? clients.map((client) => {
                                const bmi = (Number(client.weight) / ((Number(client.height) / 100) ** 2)).toFixed(1);
                                const clientAge = Number(client.age) || 30; // Varsayılan 30 yaş
                                const bmh = Math.round(10 * Number(client.weight) + 6.25 * Number(client.height) - 5 * clientAge + 5);

                                return (
                                    <tr key={client.id} style={{ borderBottom: "1px solid #f1f1f1" }}>
                                        <td style={tdStyle}>
                                            <div style={{ fontWeight: 700, color: "#2c3e50" }}>{client.full_name}</div>
                                            <div style={{ fontSize: "12px", color: "#95a5a6" }}>{client.height} cm | {client.weight} kg</div>
                                        </td>
                                        <td style={tdStyle}>{client.height} cm</td>
                                        <td style={tdStyle}>{client.weight} kg</td>
                                        <td style={tdStyle}>
                                            <span style={{
                                                background: "#f1f1f1",
                                                padding: "4px 10px",
                                                borderRadius: "20px",
                                                fontSize: "13px",
                                                fontWeight: 600
                                            }}>{bmi}</span>
                                        </td>
                                        <td style={tdStyle}>
                                            <span style={{
                                                background: "#f8f9fa",
                                                color: "#e67e22",
                                                padding: "4px 10px",
                                                borderRadius: "20px",
                                                fontSize: "13px",
                                                fontWeight: 700
                                            }}>{bmh} <span style={{ fontSize: "10px", color: "#95a5a6", fontWeight: "normal" }}>kcal</span></span>
                                        </td>
                                        <td style={tdStyle}>{client.target_weight} kg</td>
                                        <td style={tdStyle}>
                                            <div style={{ display: "flex", gap: "10px" }}>
                                                <Link
                                                    href={`/admin/clients/${client.id}/diet`}
                                                    style={{
                                                        textDecoration: "none",
                                                        background: "#79a33d",
                                                        color: "white",
                                                        padding: "8px 15px",
                                                        borderRadius: "8px",
                                                        fontSize: "13px",
                                                        fontWeight: 700
                                                    }}
                                                >
                                                    Diyet Hazırla
                                                </Link>
                                                <button onClick={() => handleDeleteClient(client.id, client.full_name)} style={{ ...actionBtn, color: "#e74c3c", fontSize: "14px", fontWeight: "bold", padding: "8px 15px" }}>Sil</button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            }) : (
                                <tr>
                                    <td colSpan={7} style={{ padding: "50px", textAlign: "center", color: "#95a5a6" }}>
                                        Henüz kayıtlı danışan bulunmuyor.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

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
    fontSize: "18px",
    padding: "5px",
    borderRadius: "5px",
    transition: "background 0.3s"
};
