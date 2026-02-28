"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "../../../utils/supabase";

export default function TemplatesPage() {
    const [templates, setTemplates] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTemplates();
    }, []);

    async function fetchTemplates() {
        setLoading(true);
        const { data, error } = await supabase
            .from('diet_templates')
            .select('*')
            .order('created_at', { ascending: false });

        if (!error && data) setTemplates(data);
        setLoading(false);
    }

    const handleDelete = async (id: string, title: string) => {
        if (!window.confirm(`"${title}" şablonunu silmek istediğinize emin misiniz?`)) return;
        const { error } = await supabase.from('diet_templates').delete().eq('id', id);
        if (error) {
            alert("Silme hatası: " + error.message);
        } else {
            setTemplates(templates.filter(t => t.id !== id));
        }
    };

    const formatDate = (iso: string) => {
        if (!iso) return "";
        const d = new Date(iso);
        return d.toLocaleDateString("tr-TR", { day: "2-digit", month: "long", year: "numeric" });
    };

    return (
        <>
            <div style={{ flex: 1, padding: "50px", display: "flex", flexDirection: "column" }}>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
                    <div>
                        <h1 style={{ fontSize: "32px", fontWeight: 700, color: "#2c3e50" }}>Hazır Şablonlar</h1>
                        <p style={{ color: "#7f8c8d" }}>Besin kütüphanesinden hazırladığınız diyet programı şablonları.</p>
                    </div>
                    <Link
                        href="/admin/templates/new"
                        style={{
                            background: "#79a33d",
                            color: "white",
                            border: "none",
                            padding: "12px 24px",
                            borderRadius: "10px",
                            fontSize: "15px",
                            fontWeight: 600,
                            cursor: "pointer",
                            textDecoration: "none",
                            boxShadow: "0 4px 6px rgba(121, 163, 61, 0.2)"
                        }}
                    >
                        + Yeni Şablon Oluştur
                    </Link>
                </div>

                {loading ? (
                    <div style={{ textAlign: "center", padding: "60px", color: "#95a5a6" }}>Yükleniyor...</div>
                ) : templates.length === 0 ? (
                    <div style={{
                        background: "white", borderRadius: "20px", padding: "60px",
                        textAlign: "center", boxShadow: "0 10px 20px rgba(0,0,0,0.02)"
                    }}>
                        <div style={{ fontSize: "48px", marginBottom: "15px" }}>📋</div>
                        <h3 style={{ color: "#2c3e50", marginBottom: "10px" }}>Henüz şablon oluşturulmadı</h3>
                        <p style={{ color: "#95a5a6", marginBottom: "25px" }}>Besin kütüphanesinden hazır diyet programları oluşturun ve danışanlarınıza tek tıkla atayın.</p>
                        <Link href="/admin/templates/new" style={{
                            background: "#79a33d", color: "white", padding: "12px 25px",
                            borderRadius: "10px", fontWeight: 700, textDecoration: "none"
                        }}>
                            İlk Şablonu Oluştur
                        </Link>
                    </div>
                ) : (
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "25px" }}>
                        {templates.map((tpl) => {
                            const dayCount = Array.isArray(tpl.content) ? tpl.content.length : 0;
                            return (
                                <div key={tpl.id} style={{
                                    background: "white",
                                    borderRadius: "18px",
                                    padding: "28px",
                                    boxShadow: "0 10px 20px rgba(0,0,0,0.04)",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "15px",
                                    border: "1px solid #f1f1f1"
                                }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                                        <div>
                                            <div style={{ fontSize: "18px", fontWeight: 700, color: "#2c3e50", marginBottom: "6px" }}>
                                                {tpl.title}
                                            </div>
                                            {tpl.description && (
                                                <div style={{ fontSize: "13px", color: "#7f8c8d", lineHeight: 1.5 }}>
                                                    {tpl.description}
                                                </div>
                                            )}
                                        </div>
                                        <span style={{
                                            background: "#eaf4e0", color: "#79a33d",
                                            padding: "5px 12px", borderRadius: "20px",
                                            fontSize: "12px", fontWeight: 700, whiteSpace: "nowrap", marginLeft: "12px"
                                        }}>
                                            {dayCount} Günlük
                                        </span>
                                    </div>

                                    <div style={{ fontSize: "12px", color: "#bdc3c7" }}>
                                        {formatDate(tpl.created_at)}
                                    </div>

                                    <div style={{ display: "flex", gap: "10px", marginTop: "5px" }}>
                                        <Link
                                            href={`/admin/templates/${tpl.id}`}
                                            style={{
                                                flex: 1, textAlign: "center",
                                                background: "#79a33d", color: "white",
                                                padding: "10px", borderRadius: "9px",
                                                fontSize: "13px", fontWeight: 700,
                                                textDecoration: "none"
                                            }}
                                        >
                                            ✏️ Düzenle
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(tpl.id, tpl.title)}
                                            style={{
                                                flex: 1, background: "#fef0f0", color: "#e74c3c",
                                                border: "1px solid #fad5d5", padding: "10px",
                                                borderRadius: "9px", fontSize: "13px",
                                                fontWeight: 700, cursor: "pointer"
                                            }}
                                        >
                                            🗑️ Sil
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </>
    );
}
