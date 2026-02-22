"use client";

const features = [
    "Bireyselleştirilmiş Beslenme Planı",
    "Düzenli Takip ve Analiz",
    "Bilimsel ve Kanıta Dayalı Yaklaşım",
    "7/24 Whatsapp Desteği",
    "Vücut Analizi ve Ölçüm Takibi",
    "Alerjik Gıda ve Özel Durum Desteği",
];

export default function AboutSection() {
    return (
        <section
            id="about"
            className="section-padding"
            style={{ background: "var(--light-bg)" }}
        >
            <div className="container-custom">
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "70px",
                        alignItems: "center",
                    }}
                    className="about-grid"
                >
                    {/* Left - Visual */}
                    <div style={{ position: "relative", animation: "fadeInLeft 0.8s ease forwards" }}>
                        {/* Main Image Card */}
                        <div
                            style={{
                                borderRadius: "24px",
                                overflow: "hidden",
                                background: "linear-gradient(135deg, #1B5E20, #2E7D32, #66BB6A)",
                                aspectRatio: "4/5",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 30px 70px rgba(46,125,50,0.25)",
                                fontSize: "120px",
                                position: "relative",
                            }}
                        >
                            <span style={{ filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.2))" }}>🥬</span>

                            {/* Pattern overlay on image */}
                            <div style={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: "50%",
                                background: "linear-gradient(to top, rgba(27,94,32,0.8), transparent)",
                                display: "flex",
                                alignItems: "flex-end",
                                padding: "28px",
                            }}>
                                <div>
                                    <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "18px", color: "white", marginBottom: "4px" }}>
                                        Uz. Dyt. Ayşe Kaya
                                    </p>
                                    <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(255,255,255,0.8)" }}>
                                        Klinik Diyetisyen & Beslenme Uzmanı
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Experience Badge */}
                        <div
                            style={{
                                position: "absolute",
                                top: "-20px",
                                right: "-20px",
                                width: "110px",
                                height: "110px",
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, #F9A825, #FFD54F)",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 10px 30px rgba(249,168,37,0.4)",
                                animation: "float 3s ease-in-out infinite",
                            }}
                        >
                            <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "28px", color: "white", lineHeight: 1 }}>10+</span>
                            <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "rgba(255,255,255,0.9)", textAlign: "center", marginTop: "2px" }}>Yıl<br />Deneyim</span>
                        </div>

                        {/* Bottom card */}
                        <div
                            style={{
                                position: "absolute",
                                bottom: "-24px",
                                left: "-24px",
                                background: "white",
                                borderRadius: "18px",
                                padding: "18px 22px",
                                boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
                                display: "flex",
                                alignItems: "center",
                                gap: "14px",
                            }}
                        >
                            <div style={{
                                width: 50, height: 50, borderRadius: "14px",
                                background: "rgba(46,125,50,0.1)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontSize: "24px",
                            }}>
                                🏅
                            </div>
                            <div>
                                <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "16px", color: "var(--primary)" }}>2500+</div>
                                <div style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--gray)" }}>Başarılı Danışan</div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div style={{ animation: "fadeInRight 0.8s ease 0.2s forwards", opacity: 0 }}>
                        <span className="section-badge">Hakkımızda</span>
                        <h2 className="section-title">
                            Sağlığınız İçin <span>En İyi Rehber</span>
                        </h2>
                        <div className="divider" />
                        <p
                            style={{
                                fontFamily: "var(--font-body)",
                                fontSize: "15.5px",
                                color: "var(--gray)",
                                lineHeight: 1.85,
                                marginBottom: "16px",
                            }}
                        >
                            NutriLife olarak, beslenmenin sadece diyet değil; bir yaşam biçimi olduğuna inanıyoruz. 10 yılı aşkın deneyimimizle her yaştan ve her ihtiyaçtan bireye, bütünsel ve kişiselleştirilmiş beslenme çözümleri sunuyoruz.
                        </p>
                        <p
                            style={{
                                fontFamily: "var(--font-body)",
                                fontSize: "15.5px",
                                color: "var(--gray)",
                                lineHeight: 1.85,
                                marginBottom: "32px",
                            }}
                        >
                            Uzman diyetisyen kadromuz, bilimsel araştırmalara dayalı yöntemlerle size özel planlar hazırlar ve her adımda yanınızda olur.
                        </p>

                        {/* Features list */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "12px",
                                marginBottom: "36px",
                            }}
                        >
                            {features.map((f) => (
                                <div key={f} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <div
                                        style={{
                                            width: 22,
                                            height: 22,
                                            borderRadius: "50%",
                                            background: "var(--primary)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                            fontSize: "11px",
                                            color: "white",
                                        }}
                                    >
                                        ✓
                                    </div>
                                    <span
                                        style={{
                                            fontFamily: "var(--font-body)",
                                            fontSize: "14px",
                                            color: "var(--dark)",
                                            fontWeight: 500,
                                        }}
                                    >
                                        {f}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
                            <a href="#appointment" className="btn-primary">
                                📞 Bizimle Tanışın
                            </a>
                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                <div style={{
                                    width: 48, height: 48, borderRadius: "50%",
                                    background: "rgba(46,125,50,0.1)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    fontSize: "22px",
                                }}>
                                    📞
                                </div>
                                <div>
                                    <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "13px", color: "var(--gray)" }}>Bizi Arayın</div>
                                    <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "15px", color: "var(--primary)" }}>0850 123 45 67</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
          .about-grid > div:first-child { max-width: 400px; margin: 0 auto; }
        }
      `}</style>
        </section>
    );
}
