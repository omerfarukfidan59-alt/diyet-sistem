"use client";

export default function FeatureCards() {
    const cards = [
        {
            title: "Sağlıklı Öğün İpuçları",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop",
            overlay: "rgba(0, 0, 0, 0.5)", // Dark overlay to match screenshot
        },
        {
            title: "Yemek Tarifi Fikirleri",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1000&auto=format&fit=crop",
            overlay: "rgba(0, 0, 0, 0.4)",
        },
        {
            title: "Sağlıklı Lifestyle",
            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop",
            overlay: "rgba(0, 0, 0, 0.4)",
        },
    ];

    return (
        <section style={{ padding: "60px 0", background: "white" }}>
            <div className="container-custom">
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: "30px"
                    }}
                    className="feature-cards-grid"
                >
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            style={{
                                position: "relative",
                                height: "350px",
                                borderRadius: "4px",
                                overflow: "hidden",
                                cursor: "pointer",
                                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                                transition: "all 0.4s ease",
                            }}
                            className="feature-card"
                        >
                            {/* Background Image */}
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    backgroundImage: `url("${card.image}")`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    transition: "transform 0.6s ease",
                                }}
                                className="card-bg"
                            />

                            {/* Overlay */}
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: card.overlay,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "20px",
                                    textAlign: "center",
                                    transition: "background 0.4s ease",
                                }}
                                className="card-overlay"
                            >
                                <div style={{
                                    width: "40px",
                                    height: "2px",
                                    background: "white",
                                    marginBottom: "15px"
                                }} />
                                <h3 style={{
                                    color: "white",
                                    fontFamily: "var(--font-heading)",
                                    fontSize: "28px",
                                    fontWeight: 600,
                                    textShadow: "0 2px 4px rgba(0,0,0,0.3)"
                                }}>
                                    {card.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .feature-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        .feature-card:hover .card-bg {
          transform: scale(1.1);
        }
        .feature-card:hover .card-overlay {
          background: rgba(121, 163, 61, 0.75) !important;
        }
        @media (max-width: 991px) {
          .feature-cards-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .feature-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}
