"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "../../../utils/supabase";

export default function ClientsPage() {
    const [clients, setClients] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [newClient, setNewClient] = useState({
        full_name: "",
        height: "",
        weight: "",
        target_weight: "",
        age: "",
        gender: "Erkek"
    });
    const [editingClient, setEditingClient] = useState<any>(null);

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

    const handleAddClient = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Create a secondary supabase client that doesn't persist session
            // so we don't log out the admin
            const { createClient } = await import('@supabase/supabase-js');
            const authClient = createClient(
                process.env.NEXT_PUBLIC_SUPABASE_URL!,
                process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
                {
                    auth: {
                        autoRefreshToken: false,
                        persistSession: false,
                        detectSessionInUrl: false
                    }
                }
            );

            const email = `manual_${Date.now()}@diyet.local`;
            const password = 'Password' + Math.random().toString(36).slice(-8) + '!';

            const { data: authData, error: authError } = await authClient.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: newClient.full_name,
                        role: 'client'
                    }
                }
            });

            if (authError) throw authError;

            if (authData.user) {
                const { error: profileError } = await supabase.from('profiles').upsert({
                    id: authData.user.id,
                    full_name: newClient.full_name,
                    role: 'client',
                    height: Number(newClient.height),
                    weight: Number(newClient.weight),
                    target_weight: Number(newClient.target_weight),
                    age: Number(newClient.age),
                    gender: newClient.gender
                });

                if (profileError) throw profileError;

                alert('Danışan başarıyla eklendi!');
                setIsAddModalOpen(false);
                setNewClient({ full_name: "", height: "", weight: "", target_weight: "", age: "", gender: "Erkek" });
                fetchClients(); // Refresh list
            }
        } catch (error: any) {
            console.error('Ekleme hatası:', error);
            alert('Danışan eklenirken bir hata oluştu: ' + error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleUpdateClient = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const { error } = await supabase
                .from('profiles')
                .update({
                    full_name: editingClient.full_name,
                    height: Number(editingClient.height),
                    weight: Number(editingClient.weight),
                    target_weight: Number(editingClient.target_weight),
                    age: Number(editingClient.age),
                    gender: editingClient.gender
                })
                .eq('id', editingClient.id);

            if (error) throw error;

            alert('Danışan başarıyla güncellendi!');
            setIsEditModalOpen(false);
            setEditingClient(null);
            fetchClients(); // Listeyi yenile
        } catch (error: any) {
            console.error('Güncelleme hatası:', error);
            alert('Danışan güncellenirken bir hata oluştu: ' + error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

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
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        style={{
                            background: "#79a33d",
                            color: "white",
                            border: "none",
                            padding: "12px 24px",
                            borderRadius: "10px",
                            fontSize: "15px",
                            fontWeight: 600,
                            cursor: "pointer",
                            boxShadow: "0 4px 6px rgba(121, 163, 61, 0.2)"
                        }}
                    >
                        + Danışan Ekle
                    </button>
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
                                const clientGender = client.gender || "Erkek";

                                // BMH Hedef Kilo üzerinden hesaplanıyor
                                let bmh = 0;
                                const targetW = Number(client.target_weight) || Number(client.weight); // Hedef kilo yoksa mevcut kiloyu al

                                if (clientGender === 'Kadın') {
                                    bmh = Math.round(10 * targetW + 6.25 * Number(client.height) - 5 * clientAge - 161);
                                } else {
                                    bmh = Math.round(10 * targetW + 6.25 * Number(client.height) - 5 * clientAge + 5);
                                }

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
                                                <button
                                                    onClick={() => {
                                                        setEditingClient({ ...client, target_weight: client.target_weight || client.weight });
                                                        setIsEditModalOpen(true);
                                                    }}
                                                    style={{ ...actionBtn, color: "#3498db", fontSize: "14px", fontWeight: "bold", padding: "8px 15px" }}
                                                >
                                                    Güncelle
                                                </button>
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

                {/* Ekleme Modal'ı */}
                {isAddModalOpen && (
                    <div style={{
                        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
                        justifyContent: 'center', alignItems: 'center', zIndex: 1000
                    }}>
                        <div style={{
                            background: 'white', padding: '30px', borderRadius: '15px',
                            width: '90%', maxWidth: '500px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                        }}>
                            <h2 style={{ marginTop: 0, marginBottom: '20px', color: '#2c3e50' }}>Manuel Danışan Ekle</h2>
                            <form onSubmit={handleAddClient} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <div>
                                    <label style={labelStyle}>Ad Soyad</label>
                                    <input required type="text" style={inputStyle} value={newClient.full_name} onChange={e => setNewClient({ ...newClient, full_name: e.target.value })} placeholder="Örn: Ali Yılmaz" />
                                </div>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <div style={{ flex: 1 }}>
                                        <label style={labelStyle}>Boy (cm)</label>
                                        <input required type="number" style={inputStyle} value={newClient.height} onChange={e => setNewClient({ ...newClient, height: e.target.value })} placeholder="180" />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <label style={labelStyle}>Kilo (kg)</label>
                                        <input required type="number" step="0.1" style={inputStyle} value={newClient.weight} onChange={e => setNewClient({ ...newClient, weight: e.target.value })} placeholder="75" />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <div style={{ flex: 1 }}>
                                        <label style={labelStyle}>Hedef Kilo (kg)</label>
                                        <input required type="number" step="0.1" style={inputStyle} value={newClient.target_weight} onChange={e => setNewClient({ ...newClient, target_weight: e.target.value })} placeholder="70" />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <label style={labelStyle}>Yaş</label>
                                        <input required type="number" style={inputStyle} value={newClient.age} onChange={e => setNewClient({ ...newClient, age: e.target.value })} placeholder="30" />
                                    </div>
                                </div>
                                <div>
                                    <label style={labelStyle}>Cinsiyet</label>
                                    <select style={inputStyle} value={newClient.gender} onChange={e => setNewClient({ ...newClient, gender: e.target.value })}>
                                        <option value="Erkek">Erkek</option>
                                        <option value="Kadın">Kadın</option>
                                    </select>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
                                    <button type="button" onClick={() => setIsAddModalOpen(false)} style={{
                                        padding: '10px 20px', border: 'none', background: '#ecf0f1', color: '#7f8c8d',
                                        borderRadius: '8px', cursor: 'pointer', fontWeight: 600
                                    }}>
                                        İptal
                                    </button>
                                    <button type="submit" disabled={isSubmitting} style={{
                                        padding: '10px 20px', border: 'none', background: '#79a33d', color: 'white',
                                        borderRadius: '8px', cursor: isSubmitting ? 'not-allowed' : 'pointer', fontWeight: 600,
                                        opacity: isSubmitting ? 0.7 : 1
                                    }}>
                                        {isSubmitting ? 'Ekleniyor...' : 'Kaydet'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Güncelleme Modal'ı */}
                {isEditModalOpen && editingClient && (
                    <div style={{
                        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
                        justifyContent: 'center', alignItems: 'center', zIndex: 1000
                    }}>
                        <div style={{
                            background: 'white', padding: '30px', borderRadius: '15px',
                            width: '90%', maxWidth: '500px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                        }}>
                            <h2 style={{ marginTop: 0, marginBottom: '20px', color: '#2c3e50' }}>Danışan Güncelle</h2>
                            <form onSubmit={handleUpdateClient} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <div>
                                    <label style={labelStyle}>Ad Soyad</label>
                                    <input required type="text" style={inputStyle} value={editingClient.full_name || ""} onChange={e => setEditingClient({ ...editingClient, full_name: e.target.value })} />
                                </div>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <div style={{ flex: 1 }}>
                                        <label style={labelStyle}>Boy (cm)</label>
                                        <input required type="number" style={inputStyle} value={editingClient.height || ""} onChange={e => setEditingClient({ ...editingClient, height: e.target.value })} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <label style={labelStyle}>Kilo (kg)</label>
                                        <input required type="number" step="0.1" style={inputStyle} value={editingClient.weight || ""} onChange={e => setEditingClient({ ...editingClient, weight: e.target.value })} />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <div style={{ flex: 1 }}>
                                        <label style={labelStyle}>Hedef Kilo (kg)</label>
                                        <input required type="number" step="0.1" style={inputStyle} value={editingClient.target_weight || ""} onChange={e => setEditingClient({ ...editingClient, target_weight: e.target.value })} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <label style={labelStyle}>Yaş</label>
                                        <input required type="number" style={inputStyle} value={editingClient.age || ""} onChange={e => setEditingClient({ ...editingClient, age: e.target.value })} />
                                    </div>
                                </div>
                                <div>
                                    <label style={labelStyle}>Cinsiyet</label>
                                    <select style={inputStyle} value={editingClient.gender || "Erkek"} onChange={e => setEditingClient({ ...editingClient, gender: e.target.value })}>
                                        <option value="Erkek">Erkek</option>
                                        <option value="Kadın">Kadın</option>
                                    </select>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
                                    <button type="button" onClick={() => { setIsEditModalOpen(false); setEditingClient(null); }} style={{
                                        padding: '10px 20px', border: 'none', background: '#ecf0f1', color: '#7f8c8d',
                                        borderRadius: '8px', cursor: 'pointer', fontWeight: 600
                                    }}>
                                        İptal
                                    </button>
                                    <button type="submit" disabled={isSubmitting} style={{
                                        padding: '10px 20px', border: 'none', background: '#3498db', color: 'white',
                                        borderRadius: '8px', cursor: isSubmitting ? 'not-allowed' : 'pointer', fontWeight: 600,
                                        opacity: isSubmitting ? 0.7 : 1
                                    }}>
                                        {isSubmitting ? 'Güncelleniyor...' : 'Güncelle'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

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

const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '5px',
    fontSize: '14px',
    fontWeight: 600,
    color: '#34495e'
};

const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px 15px',
    border: '1px solid #bdc3c7',
    borderRadius: '8px',
    fontSize: '15px',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color 0.3s'
};
