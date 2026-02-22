"use client";

const team = [
    {
        emoji: "👩‍⚕️",
        name: "Uz. Dyt. Ayşe Kaya",
        title: "Klinik Diyetisyen",
        specialty: "Kilo Yönetimi & Metabolik Hastalıklar",
        exp: "12 Yıl",
        clients: "600+",
        color: "#2E7D32",
    },
    {
        emoji: "👨‍⚕️",
        name: "Uz. Dyt. Mehmet Şahin",
        title: "Spor Diyetisyeni",
        specialty: "Spor Beslenmesi & Performans",
        exp: "8 Yıl",
        clients: "450+",
        color: "#1565C0",
    },
    {
        emoji: "👩‍💼",
        name: "Dyt. Zeynep Arslan",
        title: "Pediatrik Diyetisyen",
        specialty: "Çocuk & Adölesan Beslenmesi",
        exp: "6 Yıl",
        clients: "380+",
        color: "#6A1B9A",
    },
    {
        emoji: "👨‍💼",
        name: "Dyt. Can Yıldır",
        title: "Online Danışman",
        specialty: "Gebelik & Emzirme Beslenmesi",
        exp: "5 Yıl",
        clients: "310+",
        color: "#C62828",
    },
];

const socialLinks = ["🔗", "📸", "🐦"];

export default function TeamSection() {
    return (
        <section
            id="team"
            className="section-padding"
            style={{ background: "var(--light-bg)" }}
        >
            <div className="container-custom">
                <div style={{ textAlign: "center", marginBottom: "60px" }}>
                    <span className="section-badge">Uzman Ekibimiz</span>
                    <h2 className="section-title" style={{ margin: "0 auto 16px" }}>
                        Alanında En İyi <span>Diyetisyenler</span>
                    </h2>
                    <div className="divider" style={{ margin: "0 auto 20px" }} />
                    <p className="section-desc" style={{ margin: "0 auto", textAlign: "center" }}>
                        Deneyimli ve uzman diyetisyen kadromuz, her bireysel ihtiyaca özel çözümler sunmak için hazır.
                    </p>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "24px",
                    }}
                    className="team-grid"
                >
                    {team.map((t, i) => (
                        <div
                            key={t.name}
                            className="card-hover"
                            style={{
                                background: "white",
                                borderRadius: "20px",
                                overflow: "hidden",
                                border: "1px solid #EEF2EE",
                                animation: `fadeInUp 0.6s ease ${i * 120}ms forwards`,
                                opacity: 0,
                            }}
                        >
                            {/* Photo area */}
                            <div
                                style={{
                                    background: `linear-gradient(135deg, ${t.color}22, ${t.color}44)`,
                                    padding: "40px 20px 20px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    position: "relative",
                                }}
                            >
                                <div
                                    style={{
                                        width: 90,
                                        height: 90,
                                        borderRadius: "50%",
                                        background: `linear-gradient(135deg, ${t.color}, ${t.color}cc)`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "42px",
                                        boxShadow: `0 8px 25px ${t.color}44`,
                                        marginBottom: "14px",
                                        border: "3px solid white",
                                    }}
                                >
                                    {t.emoji}
                                </div>

                                {/* Social links */}
                                <div style={{ display: "flex", gap: "8px", position: "absolute", top: "14px", right: "14px" }}>
                                    {socialLinks.map((s, si) => (
                                        <button
                                            key={si}
                                            style={{
                                                width: 30,
                                                height: 30,
                                                borderRadius: "50%",
                                                background: "rgba(255,255,255,0.8)",
                                                border: "none",
                                                cursor: "pointer",
                                                fontSize: "13px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                transition: "all 0.3s",
                                            }}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Info */}
                            <div style={{ padding: "20px 22px 24px" }}>
                                <h3
                                    style={{
                                        fontFamily: "var(--font-heading)",
                                        fontWeight: 700,
                                        fontSize: "16px",
                                        color: "var(--dark)",
                                        marginBottom: "4px",
                                    }}
                                >
                                    {t.name}
                                </h3>
                                <p
                                    style={{
                                        fontFamily: "var(--font-heading)",
                                        fontWeight: 600,
                                        fontSize: "12.5px",
                                        color: t.color,
                                        marginBottom: "8px",
                                    }}
                                >
                                    {t.title}
                                </p>
                                <p
                                    style={{
                                        fontFamily: "var(--font-body)",
                                        fontSize: "13px",
                                        color: "var(--gray)",
                                        marginBottom: "16px",
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {t.specialty}
                                </p>

                                <div
                                    style={{
                                        display: "flex",
                                        gap: "12px",
                                        paddingTop: "14px",
                                        borderTop: "1px solid #f0f4f0",
                                    }}
                                >
                                    <div style={{ flex: 1, textAlign: "center" }}>
                                        <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "17px", color: t.color }}>{t.exp}</div>
                                        <div style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "var(--gray)" }}>Deneyim</div>
                                    </div>
                                    <div style={{ width: "1px", background: "#f0f4f0" }} />
                                    <div style={{ flex: 1, textAlign: "center" }}>
                                        <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "17px", color: t.color }}>{t.clients}</div>
                                        <div style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "var(--gray)" }}>Danışan</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 900px) {
          .team-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 500px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
