"use client";
import { useState } from "react";

const testimonials = [
    {
        name: "Fatma Yılmaz",
        role: "Öğretmen, 38 yaşında",
        emoji: "👩",
        text: "4 ayda 18 kilo verdim ve en önemlisi hiç aç kalmadım! Ayşe Hanım gerçekten harika bir diyetisyen. Planı benim yaşam tarzıma göre hazırladı, hiç zorlanmadım.",
        rating: 5,
        result: "18 kg Verdi",
        color: "#2E7D32",
    },
    {
        name: "Ahmet Demir",
        role: "Sporcu, 26 yaşında",
        emoji: "👨",
        text: "Spor beslenmesi konusunda yanlış bilgilerle boğulmuştum. Mehmet Bey ile çalışmaya başlayınca performansım inanılmaz arttı. Kas kütlemi korurken yağ yaktım.",
        rating: 5,
        result: "%12 Yağ Kaybı",
        color: "#1565C0",
    },
    {
        name: "Selin Çelik",
        role: "İş Kadını, 44 yaşında",
        emoji: "👩‍💼",
        text: "Tip 2 diyabet teşhisinden sonra ne yapacağımı bilemedim. Program sayesinde ilaç dozumu yarıya indirdim ve kan şekeri değerlerim stabil hale geldi. Gerçekten hayat kurtardı!",
        rating: 5,
        result: "Kan Şekeri Normale Döndü",
        color: "#C62828",
    },
    {
        name: "Mehmet Yıldız",
        role: "Baba, 52 yaşında",
        emoji: "👨‍👧",
        text: "Kolesterol sorunum vardı ve ilaç kullanmak istemiyordum. Online danışmanlık ile 3 ayda kolesterol değerlerimi normale döndürdüm. Kesinlikle tavsiye ederim.",
        rating: 5,
        result: "Kolesterol Normale Döndü",
        color: "#E65100",
    },
    {
        name: "Zeynep Kara",
        role: "Anne, 29 yaşında",
        emoji: "🤱",
        text: "Hamilelik dönemimde doğru beslenmek çok önemliydi. Zeynep Hanım hem annem hem de bebeğim için mükemmel bir plan hazırladı. Sağlıklı bir doğum yaptım.",
        rating: 5,
        result: "Sağlıklı Hamilelik Takibi",
        color: "#6A1B9A",
    },
];

export default function Testimonials() {
    const [active, setActive] = useState(0);

    const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
    const next = () => setActive((a) => (a + 1) % testimonials.length);

    const visible = [
        testimonials[(active - 1 + testimonials.length) % testimonials.length],
        testimonials[active],
        testimonials[(active + 1) % testimonials.length],
    ];

    return (
        <section
            className="section-padding"
            style={{
                background: "linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* BG Pattern */}
            <div style={{
                position: "absolute", inset: 0,
                backgroundImage: `radial-gradient(circle at 20% 50%, rgba(249,168,37,0.08) 0%, transparent 50%)`,
            }} />

            <div className="container-custom" style={{ position: "relative" }}>
                <div style={{ textAlign: "center", marginBottom: "60px" }}>
                    <span
                        style={{
                            display: "inline-block",
                            background: "rgba(249,168,37,0.2)",
                            border: "1px solid rgba(249,168,37,0.4)",
                            color: "#F9A825",
                            padding: "6px 18px",
                            borderRadius: "50px",
                            fontSize: "12px",
                            fontFamily: "var(--font-heading)",
                            fontWeight: 600,
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                            marginBottom: "14px",
                        }}
                    >
                        Danışan Yorumları
                    </span>
                    <h2
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontWeight: 700,
                            fontSize: "clamp(26px, 4vw, 40px)",
                            color: "white",
                            margin: "0 auto 12px",
                        }}
                    >
                        Başarı Hikayeleri
                    </h2>
                    <div style={{ width: "60px", height: "4px", background: "#F9A825", borderRadius: "2px", margin: "0 auto" }} />
                </div>

                {/* Testimonial cards */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1.1fr 1fr",
                        gap: "20px",
                        marginBottom: "40px",
                        alignItems: "center",
                    }}
                    className="testimonial-grid"
                >
                    {visible.map((t, i) => (
                        <div
                            key={t.name + i}
                            style={{
                                background: i === 1 ? "white" : "rgba(255,255,255,0.08)",
                                borderRadius: "20px",
                                padding: i === 1 ? "36px 30px" : "28px 22px",
                                border: i === 1 ? "none" : "1px solid rgba(255,255,255,0.15)",
                                transition: "all 0.4s ease",
                                transform: i === 1 ? "scale(1)" : "scale(0.95)",
                                opacity: i === 1 ? 1 : 0.7,
                            }}
                        >
                            {/* Stars */}
                            <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
                                {Array.from({ length: t.rating }).map((_, si) => (
                                    <span key={si} style={{ color: "#F9A825", fontSize: "16px" }}>★</span>
                                ))}
                            </div>

                            <p
                                style={{
                                    fontFamily: "var(--font-body)",
                                    fontSize: i === 1 ? "15px" : "14px",
                                    color: i === 1 ? "var(--gray)" : "rgba(255,255,255,0.75)",
                                    lineHeight: 1.75,
                                    marginBottom: "20px",
                                    fontStyle: "italic",
                                }}
                            >
                                &ldquo;{t.text}&rdquo;
                            </p>

                            {/* Result badge */}
                            <div
                                style={{
                                    display: "inline-block",
                                    background: i === 1 ? `${t.color}15` : "rgba(255,255,255,0.1)",
                                    color: i === 1 ? t.color : "rgba(255,255,255,0.9)",
                                    borderRadius: "50px",
                                    padding: "5px 14px",
                                    fontSize: "12px",
                                    fontFamily: "var(--font-heading)",
                                    fontWeight: 600,
                                    marginBottom: "16px",
                                }}
                            >
                                ✅ {t.result}
                            </div>

                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                <div
                                    style={{
                                        width: 46,
                                        height: 46,
                                        borderRadius: "50%",
                                        background: i === 1 ? `${t.color}22` : "rgba(255,255,255,0.15)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "24px",
                                        flexShrink: 0,
                                    }}
                                >
                                    {t.emoji}
                                </div>
                                <div>
                                    <div style={{
                                        fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "15px",
                                        color: i === 1 ? "var(--dark)" : "white",
                                    }}>{t.name}</div>
                                    <div style={{
                                        fontFamily: "var(--font-body)", fontSize: "12px",
                                        color: i === 1 ? "var(--gray)" : "rgba(255,255,255,0.65)",
                                    }}>{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "16px" }}>
                    <button
                        onClick={prev}
                        style={{
                            width: 48, height: 48, borderRadius: "50%",
                            background: "rgba(255,255,255,0.15)",
                            border: "1px solid rgba(255,255,255,0.25)",
                            color: "white", fontSize: "18px",
                            cursor: "pointer", transition: "all 0.3s",
                            display: "flex", alignItems: "center", justifyContent: "center",
                        }}
                        aria-label="Önceki yorum"
                    >
                        ←
                    </button>
                    <div style={{ display: "flex", gap: "8px" }}>
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                style={{
                                    width: i === active ? "24px" : "8px",
                                    height: "8px",
                                    borderRadius: "4px",
                                    background: i === active ? "#F9A825" : "rgba(255,255,255,0.3)",
                                    border: "none",
                                    cursor: "pointer",
                                    transition: "all 0.3s",
                                }}
                                aria-label={`${i + 1}. yorum`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={next}
                        style={{
                            width: 48, height: 48, borderRadius: "50%",
                            background: "rgba(255,255,255,0.15)",
                            border: "1px solid rgba(255,255,255,0.25)",
                            color: "white", fontSize: "18px",
                            cursor: "pointer", transition: "all 0.3s",
                            display: "flex", alignItems: "center", justifyContent: "center",
                        }}
                        aria-label="Sonraki yorum"
                    >
                        →
                    </button>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .testimonial-grid {
            grid-template-columns: 1fr !important;
          }
          .testimonial-grid > div:not(:nth-child(2)) {
            display: none;
          }
        }
      `}</style>
        </section>
    );
}
