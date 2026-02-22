"use client";

export default function HeroSection() {
    return (
        <section
            id="hero"
            style={{
                minHeight: "100vh",
                width: "100%",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundImage: `url("https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop")`, // High-quality Buddha bowl background
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "0 8%",
                overflow: "hidden",
            }}
        >
            {/* Dark overlay for better depth */}
            <div style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.15)",
                zIndex: 1,
            }} />

            {/* Main Content Card (Aarogya Style) */}
            <div
                style={{
                    position: "relative",
                    zIndex: 10,
                    background: "rgba(255, 255, 255, 0.95)",
                    padding: "60px 40px",
                    width: "100%",
                    maxWidth: "650px",
                    borderRadius: "4px",
                    boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
                    animation: "fadeInLeft 0.8s ease forwards",
                    textAlign: "center",
                }}
            >
                {/* Top Header Section */}
                <div style={{ marginBottom: "40px" }}>
                    <h2
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "36px",
                            fontWeight: 600,
                            color: "#3d5a2d", // Darker green tone from theme
                            marginBottom: "16px",
                            lineHeight: 1.2,
                        }}
                    >
                        Programlarımıza Katılın & <br />Sağlıklı Yaşama Adım Atın
                    </h2>
                    <div style={{
                        width: "50px",
                        height: "2px",
                        background: "var(--primary)",
                        margin: "0 auto 20px"
                    }} />
                    <p
                        style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "15px",
                            color: "#666",
                            lineHeight: "1.7",
                            maxWidth: "480px",
                            margin: "0 auto",
                        }}
                    >
                        Size özel hazırlanan programlarımıza kayıt olun, en iyi sonuçları alın ve sürdürülebilir bir sağlıklı yaşam tarzı oluşturun.
                    </p>
                </div>

                {/* Programs Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "0",
                        borderTop: "1px solid #eee",
                        paddingTop: "40px",
                    }}
                >
                    {/* Health & Fitness */}
                    <div style={{
                        padding: "0 20px",
                        borderRight: "1px solid #eee",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <div style={{
                            width: "70px",
                            height: "70px",
                            marginBottom: "20px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "40px",
                            filter: "drop-shadow(0 5px 10px rgba(0,0,0,0.1))"
                        }}>
                            🍏🏋️
                        </div>
                        <h4 style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "17px",
                            fontWeight: 700,
                            color: "#333",
                            marginBottom: "20px",
                            height: "44px",
                            display: "flex",
                            alignItems: "center"
                        }}>
                            Sağlık & Fitness Programı
                        </h4>
                        <a
                            href="#appointment"
                            className="view-details-btn"
                            style={{
                                background: "#79a33d", // Theme green
                                color: "white",
                                padding: "10px 24px",
                                borderRadius: "4px",
                                fontSize: "13px",
                                fontWeight: 700,
                                textDecoration: "none",
                                display: "inline-block",
                                transition: "all 0.3s",
                                fontFamily: "var(--font-heading)",
                                textTransform: "uppercase",
                            }}
                        >
                            Detayları Gör
                        </a>
                    </div>

                    {/* Healthy Diet */}
                    <div style={{
                        padding: "0 20px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <div style={{
                            width: "70px",
                            height: "70px",
                            marginBottom: "20px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "40px",
                            filter: "drop-shadow(0 5px 10px rgba(0,0,0,0.1))"
                        }}>
                            🥗🍴
                        </div>
                        <h4 style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "17px",
                            fontWeight: 700,
                            color: "#333",
                            marginBottom: "20px",
                            height: "44px",
                            display: "flex",
                            alignItems: "center"
                        }}>
                            Sağlıklı Diyet Programı
                        </h4>
                        <a
                            href="#appointment"
                            className="view-details-btn"
                            style={{
                                background: "#79a33d",
                                color: "white",
                                padding: "10px 24px",
                                borderRadius: "4px",
                                fontSize: "13px",
                                fontWeight: 700,
                                textDecoration: "none",
                                display: "inline-block",
                                transition: "all 0.3s",
                                fontFamily: "var(--font-heading)",
                                textTransform: "uppercase",
                            }}
                        >
                            Detayları Gör
                        </a>
                    </div>
                </div>
            </div>

            {/* Slider Arrows (Visual Only) */}
            <button
                style={{
                    position: "absolute",
                    left: "25px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "rgba(0,0,0,0.2)",
                    color: "white",
                    border: "none",
                    fontSize: "20px",
                    cursor: "pointer",
                    zIndex: 20,
                    transition: "background 0.3s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                className="nav-btn"
            >
                ‹
            </button>
            <button
                style={{
                    position: "absolute",
                    right: "25px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "rgba(0,0,0,0.2)",
                    color: "white",
                    border: "none",
                    fontSize: "20px",
                    cursor: "pointer",
                    zIndex: 20,
                    transition: "background 0.3s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                className="nav-btn"
            >
                ›
            </button>

            <style>{`
        .view-details-btn:hover {
          background: #5d7e2e !important;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(121, 163, 61, 0.4);
        }
        .nav-btn:hover {
          background: rgba(0,0,0,0.5) !important;
        }
        @media (max-width: 768px) {
          #hero { padding: 0 20px !important; justify-content: center !important; }
          .nav-btn { display: none !important; }
          div[style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          div[style*="borderRight: 1px solid #eee"] {
            border-right: none !important;
            border-bottom: 1px solid #eee !important;
            padding-bottom: 30px !important;
          }
        }
      `}</style>
        </section>
    );
}
