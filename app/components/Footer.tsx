"use client";

const footerLinks = {
    "Hizmetlerimiz": [
        "Kilo Yönetimi",
        "Spor Beslenmesi",
        "Hastalık Diyetleri",
        "Hamilelik Beslenmesi",
        "Çocuk Beslenmesi",
        "Online Danışmanlık",
    ],
    "Hızlı Linkler": [
        "Ana Sayfa",
        "Hakkımızda",
        "Ekibimiz",
        "Blog",
        "Randevu Al",
        "İletişim",
    ],
};

export default function Footer() {
    return (
        <footer style={{ background: "#0D3B0F", color: "white" }}>
            {/* Main footer */}
            <div
                className="container-custom"
                style={{ padding: "70px 20px 50px" }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1.6fr 1fr 1fr 1.3fr",
                        gap: "50px",
                    }}
                    className="footer-grid"
                >
                    {/* Brand column */}
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                            <div
                                style={{
                                    width: 42, height: 42,
                                    background: "linear-gradient(135deg, #2E7D32, #66BB6A)",
                                    borderRadius: "12px",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    fontSize: "22px",
                                }}
                            >
                                🌿
                            </div>
                            <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "22px", color: "white" }}>
                                Nutri<span style={{ color: "#F9A825" }}>Life</span>
                            </span>
                        </div>

                        <p style={{ fontFamily: "var(--font-body)", fontSize: "14.5px", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: "24px", maxWidth: "280px" }}>
                            Profesyonel diyetisyen kadromuzla sağlıklı yaşam yolculuğunuzda her adımda yanınızdayız. Bilim ve sevgiyle.
                        </p>

                        {/* Social media */}
                        <div style={{ display: "flex", gap: "10px" }}>
                            {[
                                { icon: "📘", label: "Facebook" },
                                { icon: "📸", label: "Instagram" },
                                { icon: "🐦", label: "Twitter" },
                                { icon: "▶️", label: "YouTube" },
                            ].map((s) => (
                                <a
                                    key={s.label}
                                    href="#"
                                    aria-label={s.label}
                                    style={{
                                        width: 40, height: 40,
                                        borderRadius: "10px",
                                        background: "rgba(255,255,255,0.08)",
                                        border: "1px solid rgba(255,255,255,0.12)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        fontSize: "16px",
                                        textDecoration: "none",
                                        transition: "all 0.3s",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.background = "rgba(46,125,50,0.5)";
                                        (e.currentTarget as HTMLElement).style.borderColor = "#4CAF50";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                                    }}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4
                                style={{
                                    fontFamily: "var(--font-heading)",
                                    fontWeight: 700,
                                    fontSize: "16px",
                                    color: "white",
                                    marginBottom: "22px",
                                    paddingBottom: "12px",
                                    borderBottom: "2px solid rgba(76,175,80,0.3)",
                                }}
                            >
                                {title}
                            </h4>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                                {links.map((l) => (
                                    <li key={l} style={{ marginBottom: "10px" }}>
                                        <a
                                            href="#"
                                            style={{
                                                fontFamily: "var(--font-body)",
                                                fontSize: "14px",
                                                color: "rgba(255,255,255,0.6)",
                                                textDecoration: "none",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "8px",
                                                transition: "color 0.3s",
                                            }}
                                            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#66BB6A")}
                                            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
                                        >
                                            <span style={{ color: "#4CAF50", fontSize: "10px" }}>▶</span>
                                            {l}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact */}
                    <div>
                        <h4
                            style={{
                                fontFamily: "var(--font-heading)",
                                fontWeight: 700,
                                fontSize: "16px",
                                color: "white",
                                marginBottom: "22px",
                                paddingBottom: "12px",
                                borderBottom: "2px solid rgba(76,175,80,0.3)",
                            }}
                        >
                            İletişim
                        </h4>

                        {[
                            { icon: "📍", text: "Bağcılar, İstanbul, Türkiye" },
                            { icon: "📞", text: "0850 123 45 67" },
                            { icon: "📧", text: "info@nutrilife.com.tr" },
                            { icon: "⏰", text: "Pzt-Cmt: 09:00 - 19:00" },
                        ].map((c) => (
                            <div key={c.text} style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
                                <span style={{ fontSize: "17px", flexShrink: 0, marginTop: "1px" }}>{c.icon}</span>
                                <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{c.text}</span>
                            </div>
                        ))}

                        {/* Newsletter */}
                        <div style={{ marginTop: "24px" }}>
                            <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(255,255,255,0.6)", marginBottom: "10px" }}>
                                Sağlık ipuçları için abone olun:
                            </p>
                            <div style={{ display: "flex", gap: "8px" }}>
                                <input
                                    type="email"
                                    placeholder="E-posta adresiniz"
                                    style={{
                                        flex: 1,
                                        padding: "10px 14px",
                                        background: "rgba(255,255,255,0.08)",
                                        border: "1px solid rgba(255,255,255,0.15)",
                                        borderRadius: "10px",
                                        color: "white",
                                        fontFamily: "var(--font-body)",
                                        fontSize: "13px",
                                        outline: "none",
                                    }}
                                />
                                <button
                                    style={{
                                        padding: "10px 16px",
                                        background: "linear-gradient(135deg, #2E7D32, #4CAF50)",
                                        border: "none",
                                        borderRadius: "10px",
                                        color: "white",
                                        cursor: "pointer",
                                        fontSize: "16px",
                                    }}
                                    aria-label="Abone ol"
                                >
                                    →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div
                style={{
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    padding: "20px",
                }}
            >
                <div
                    className="container-custom"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "12px",
                    }}
                >
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>
                        © 2025 NutriLife. Tüm hakları saklıdır. 🌿
                    </p>
                    <div style={{ display: "flex", gap: "20px" }}>
                        {["Gizlilik Politikası", "Kullanım Şartları", "KVKK"].map((l) => (
                            <a
                                key={l}
                                href="#"
                                style={{
                                    fontFamily: "var(--font-body)",
                                    fontSize: "12.5px",
                                    color: "rgba(255,255,255,0.45)",
                                    textDecoration: "none",
                                    transition: "color 0.3s",
                                }}
                                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#66BB6A")}
                                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.45)")}
                            >
                                {l}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; }
        }
        @media (max-width: 500px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
        input::placeholder { color: rgba(255,255,255,0.35) !important; }
      `}</style>
        </footer>
    );
}
