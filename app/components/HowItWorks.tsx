"use client";

const steps = [
    {
        number: "01",
        icon: "📞",
        title: "Randevu Alın",
        desc: "Online formumuzu doldurun veya bizi arayın. Size en kısa sürede geri dönelim.",
        color: "#2E7D32",
        bg: "rgba(46,125,50,0.08)",
    },
    {
        number: "02",
        icon: "🔍",
        title: "Değerlendirme",
        desc: "Diyetisyenimiz sağlık durumunuzu, hedeflerinizi ve alışkanlıklarınızı detaylı analiz eder.",
        color: "#1565C0",
        bg: "rgba(21,101,192,0.08)",
    },
    {
        number: "03",
        icon: "📋",
        title: "Kişisel Plan",
        desc: "Size özel beslenme programı, tarifler ve alışveriş listeleri hazırlanır.",
        color: "#E65100",
        bg: "rgba(230,81,0,0.08)",
    },
    {
        number: "04",
        icon: "📈",
        title: "Takip & Destek",
        desc: "Haftalık görüşmeler ve anlık mesajlaşma ile sürecinizi birlikte takip ederiz.",
        color: "#6A1B9A",
        bg: "rgba(106,27,154,0.08)",
    },
];

export default function HowItWorks() {
    return (
        <section
            className="section-padding"
            style={{ background: "white" }}
        >
            <div className="container-custom">
                <div style={{ textAlign: "center", marginBottom: "60px" }}>
                    <span className="section-badge">Sürecimiz</span>
                    <h2 className="section-title" style={{ margin: "0 auto 16px" }}>
                        Nasıl <span>Çalışır?</span>
                    </h2>
                    <div className="divider" style={{ margin: "0 auto 20px" }} />
                    <p className="section-desc" style={{ margin: "0 auto", textAlign: "center" }}>
                        4 basit adımda sağlıklı yaşam yolculuğunuza başlayın. Uzman ekibimiz her adımda yanınızda.
                    </p>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "24px",
                        position: "relative",
                    }}
                    className="steps-grid"
                >
                    {/* Connector line */}
                    <div
                        style={{
                            position: "absolute",
                            top: "70px",
                            left: "12.5%",
                            right: "12.5%",
                            height: "2px",
                            background: "linear-gradient(90deg, #2E7D32, #1565C0, #E65100, #6A1B9A)",
                            opacity: 0.2,
                            zIndex: 0,
                        }}
                        className="connector-line"
                    />

                    {steps.map((s, i) => (
                        <div
                            key={s.title}
                            className="card-hover"
                            style={{
                                background: "white",
                                border: "1px solid #EEF2EE",
                                borderRadius: "20px",
                                padding: "36px 24px",
                                textAlign: "center",
                                position: "relative",
                                zIndex: 1,
                                animation: `fadeInUp 0.6s ease ${i * 150}ms forwards`,
                                opacity: 0,
                            }}
                        >
                            {/* Step number */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "-16px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: "36px",
                                    height: "36px",
                                    borderRadius: "50%",
                                    background: s.color,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontFamily: "var(--font-heading)",
                                    fontWeight: 700,
                                    fontSize: "13px",
                                    color: "white",
                                    boxShadow: `0 4px 15px ${s.color}44`,
                                }}
                            >
                                {s.number}
                            </div>

                            {/* Icon */}
                            <div
                                style={{
                                    width: 72,
                                    height: 72,
                                    borderRadius: "50%",
                                    background: s.bg,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "32px",
                                    margin: "10px auto 20px",
                                }}
                            >
                                {s.icon}
                            </div>

                            <h3
                                style={{
                                    fontFamily: "var(--font-heading)",
                                    fontWeight: 700,
                                    fontSize: "18px",
                                    color: "var(--dark)",
                                    marginBottom: "12px",
                                }}
                            >
                                {s.title}
                            </h3>

                            <p
                                style={{
                                    fontFamily: "var(--font-body)",
                                    fontSize: "14px",
                                    color: "var(--gray)",
                                    lineHeight: 1.7,
                                }}
                            >
                                {s.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: 1fr 1fr !important; }
          .connector-line { display: none !important; }
        }
        @media (max-width: 500px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
