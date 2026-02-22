"use client";

const services = [
    {
        icon: "⚖️",
        title: "Kilo Yönetimi",
        desc: "Bilimsel temelli, sürdürülebilir kilo verme ve alma programları ile ideal kilonuza ulaşın.",
        color: "#2E7D32",
        bg: "rgba(46,125,50,0.07)",
    },
    {
        icon: "🏋️",
        title: "Spor Beslenmesi",
        desc: "Performansınızı maksimuma çıkarmak için sporcuya özel beslenme programları ve supplement danışmanlığı.",
        color: "#1565C0",
        bg: "rgba(21,101,192,0.07)",
    },
    {
        icon: "💊",
        title: "Hastalık Diyetleri",
        desc: "Diyabet, tansiyon, kolesterol ve diğer kronik hastalıklara özel, tıbbi beslenme tedavisi.",
        color: "#C62828",
        bg: "rgba(198,40,40,0.07)",
    },
    {
        icon: "🤰",
        title: "Hamilelik Beslenmesi",
        desc: "Anne ve bebek sağlığını korumak için gebelik ve emzirme dönemine özel beslenme rehberi.",
        color: "#F57F17",
        bg: "rgba(245,127,23,0.07)",
    },
    {
        icon: "👶",
        title: "Çocuk Beslenmesi",
        desc: "Büyüme ve gelişme döneminde çocukların ihtiyacına yönelik, aile dostu beslenme programları.",
        color: "#4A148C",
        bg: "rgba(74,20,140,0.07)",
    },
    {
        icon: "💻",
        title: "Online Danışmanlık",
        desc: "Evinizin konforunda, video görüşme ile uzman diyetisyeninize 7/24 erişin.",
        color: "#006064",
        bg: "rgba(0,96,100,0.07)",
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="section-padding" style={{ background: "white" }}>
            <div className="container-custom">
                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "60px" }}>
                    <span className="section-badge">Hizmetlerimiz</span>
                    <h2 className="section-title" style={{ margin: "0 auto 16px" }}>
                        Size Özel <span>Beslenme Çözümleri</span>
                    </h2>
                    <div className="divider" style={{ margin: "0 auto 20px" }} />
                    <p className="section-desc" style={{ margin: "0 auto", textAlign: "center" }}>
                        Her bireyin ihtiyacı farklıdır. Uzman ekibimiz, size özel kapsamlı beslenme programları ile sağlık hedeflerinize ulaşmanızı sağlar.
                    </p>
                </div>

                {/* Cards Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "28px",
                    }}
                    className="services-grid"
                >
                    {services.map((s, i) => (
                        <div
                            key={s.title}
                            className="card-hover"
                            style={{
                                background: "white",
                                border: "1px solid #f0f4f0",
                                borderRadius: "20px",
                                padding: "36px 28px",
                                animation: `fadeInUp 0.6s ease ${i * 100}ms forwards`,
                                opacity: 0,
                                cursor: "pointer",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            {/* Top colored bar */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: "4px",
                                    background: s.color,
                                    borderRadius: "20px 20px 0 0",
                                    opacity: 0,
                                    transition: "opacity 0.3s",
                                }}
                                className="card-bar"
                            />

                            {/* Icon wrapper */}
                            <div
                                style={{
                                    width: 68,
                                    height: 68,
                                    borderRadius: "18px",
                                    background: s.bg,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "32px",
                                    marginBottom: "22px",
                                    transition: "transform 0.3s",
                                }}
                                className="service-icon"
                            >
                                {s.icon}
                            </div>

                            <h3
                                style={{
                                    fontFamily: "var(--font-heading)",
                                    fontWeight: 700,
                                    fontSize: "19px",
                                    color: "var(--dark)",
                                    marginBottom: "12px",
                                    transition: "color 0.3s",
                                }}
                                className="service-title"
                            >
                                {s.title}
                            </h3>

                            <p
                                style={{
                                    fontFamily: "var(--font-body)",
                                    fontSize: "14.5px",
                                    color: "var(--gray)",
                                    lineHeight: 1.75,
                                    marginBottom: "20px",
                                }}
                            >
                                {s.desc}
                            </p>

                            <a
                                href="#appointment"
                                style={{
                                    fontFamily: "var(--font-heading)",
                                    fontWeight: 600,
                                    fontSize: "13.5px",
                                    color: s.color,
                                    textDecoration: "none",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    transition: "gap 0.3s",
                                }}
                            >
                                Daha Fazla Bilgi <span>→</span>
                            </a>

                            <style>{`
                .card-hover:hover .card-bar { opacity: 1 !important; }
                .card-hover:hover .service-icon { transform: scale(1.1) !important; }
              `}</style>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 580px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
