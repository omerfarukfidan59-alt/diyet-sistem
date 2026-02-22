"use client";

const posts = [
    {
        emoji: "🥗",
        category: "Beslenme",
        title: "Akdeniz Diyeti: Kalp Sağlığı İçin En İyi Seçim",
        desc: "Akdeniz beslenme tarzının kalp-damar sağlığı üzerindeki kanıtlanmış faydaları ve günlük hayata nasıl uygulanacağı hakkında kapsamlı rehber.",
        author: "Uz. Dyt. Ayşe Kaya",
        date: "15 Şubat 2025",
        readTime: "5 dk okuma",
        color: "#2E7D32",
    },
    {
        emoji: "💪",
        category: "Spor",
        title: "Antrenman Öncesi ve Sonrası Doğru Beslenme",
        desc: "Spor performansınızı artırmak ve kas gelişimini desteklemek için antrenman öncesi ve sonrasında ne yemeniz gerektiğini öğrenin.",
        author: "Uz. Dyt. Mehmet Şahin",
        date: "8 Şubat 2025",
        readTime: "7 dk okuma",
        color: "#1565C0",
    },
    {
        emoji: "🤰",
        category: "Hamilelik",
        title: "Gebelikte Folik Asit ve Demir Önemi",
        desc: "Sağlıklı bir hamilelik için folik asit, demir ve diğer kritik mikro besin öğelerinin önemi ve hangi besinlerden alınabileceği.",
        author: "Dyt. Zeynep Arslan",
        date: "1 Şubat 2025",
        readTime: "6 dk okuma",
        color: "#6A1B9A",
    },
];

export default function BlogSection() {
    return (
        <section id="blog" className="section-padding" style={{ background: "white" }}>
            <div className="container-custom">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "50px", flexWrap: "wrap", gap: "20px" }}>
                    <div>
                        <span className="section-badge">Blog & Makaleler</span>
                        <h2 className="section-title" style={{ margin: "8px 0 0" }}>
                            Sağlık & Beslenme <span>Haberleri</span>
                        </h2>
                        <div className="divider" style={{ marginTop: "14px" }} />
                    </div>
                    <a
                        href="#"
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontWeight: 600,
                            fontSize: "14px",
                            color: "var(--primary)",
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            border: "2px solid var(--primary)",
                            padding: "10px 22px",
                            borderRadius: "50px",
                            transition: "all 0.3s",
                        }}
                    >
                        Tüm Yazılar →
                    </a>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "28px",
                    }}
                    className="blog-grid"
                >
                    {posts.map((p, i) => (
                        <article
                            key={p.title}
                            className="card-hover"
                            style={{
                                background: "white",
                                border: "1px solid #EEF2EE",
                                borderRadius: "20px",
                                overflow: "hidden",
                                animation: `fadeInUp 0.6s ease ${i * 150}ms forwards`,
                                opacity: 0,
                            }}
                        >
                            {/* Image area */}
                            <div
                                style={{
                                    height: "200px",
                                    background: `linear-gradient(135deg, ${p.color}22, ${p.color}44)`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "72px",
                                    position: "relative",
                                }}
                            >
                                {p.emoji}
                                {/* Category badge */}
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "16px",
                                        left: "16px",
                                        background: p.color,
                                        color: "white",
                                        padding: "4px 14px",
                                        borderRadius: "50px",
                                        fontSize: "11px",
                                        fontFamily: "var(--font-heading)",
                                        fontWeight: 600,
                                        letterSpacing: "0.5px",
                                    }}
                                >
                                    {p.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div style={{ padding: "24px" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                                    <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--gray)" }}>📅 {p.date}</span>
                                    <span style={{ fontSize: "4px", color: "var(--gray)" }}>●</span>
                                    <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--gray)" }}>⏱ {p.readTime}</span>
                                </div>

                                <h3
                                    style={{
                                        fontFamily: "var(--font-heading)",
                                        fontWeight: 700,
                                        fontSize: "17px",
                                        color: "var(--dark)",
                                        lineHeight: 1.4,
                                        marginBottom: "12px",
                                    }}
                                >
                                    {p.title}
                                </h3>

                                <p
                                    style={{
                                        fontFamily: "var(--font-body)",
                                        fontSize: "14px",
                                        color: "var(--gray)",
                                        lineHeight: 1.7,
                                        marginBottom: "20px",
                                    }}
                                >
                                    {p.desc}
                                </p>

                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                        <div style={{
                                            width: 32, height: 32, borderRadius: "50%",
                                            background: `${p.color}22`,
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            fontSize: "16px",
                                        }}>👩‍⚕️</div>
                                        <span style={{ fontFamily: "var(--font-body)", fontSize: "12.5px", color: "var(--dark)", fontWeight: 500 }}>{p.author}</span>
                                    </div>
                                    <a
                                        href="#"
                                        style={{
                                            fontFamily: "var(--font-heading)",
                                            fontWeight: 600,
                                            fontSize: "13px",
                                            color: p.color,
                                            textDecoration: "none",
                                        }}
                                    >
                                        Devamı →
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 900px) {
          .blog-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 580px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
