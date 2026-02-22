"use client";

export default function InfoCardsGrid() {
    const cards = [
        {
            title: "Doğal Gıdalar",
            description: "Sağlığınız için en taze ve doğal ürünlerle hazırlanan beslenme programları ile zinde kalın.",
            icon: (
                <svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 85C50 85 80 65 80 45C80 28.4315 66.5685 15 50 15C33.4315 15 20 28.4315 20 45C20 65 50 85 50 85Z" stroke="#79a33d" strokeWidth="4" fill="none" />
                    <path d="M50 55C55.5228 55 60 50.5228 60 45C60 39.4772 55.5228 35 50 35C44.4772 35 40 39.4772 40 45C40 50.5228 44.4772 55 50 55Z" fill="#79a33d" />
                    <path d="M50 65C61.0457 65 70 56.0457 70 45C70 33.9543 61.0457 25 50 25C38.9543 25 30 33.9543 30 45C30 56.0457 38.9543 65 50 65Z" stroke="#79a33d" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
            ),
        },
        {
            title: "Beslenme Planları",
            description: "Size özel analizler doğrultusunda hazırlanan, sürdürülebilir ve dengeli diyet listeleri.",
            icon: (
                <svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35 25L40 85H60L65 25" stroke="#79a33d" strokeWidth="4" strokeLinejoin="round" />
                    <path d="M40 35H60" stroke="#79a33d" strokeWidth="2" />
                    <path d="M55 15L45 40" stroke="#79a33d" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="70" cy="30" r="12" stroke="#79a33d" strokeWidth="3" />
                    <path d="M70 18V42M58 30H82M61.5 21.5L78.5 38.5M61.5 38.5L78.5 21.5" stroke="#79a33d" strokeWidth="1.5" />
                </svg>
            ),
        },
        {
            title: "Günlük Egzersiz",
            description: "Beslenme planınızı destekleyen, günlük yaşamınıza kolayca entegre edebileceğiniz hareket planları.",
            icon: (
                <svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="25" y="25" width="50" height="55" rx="4" stroke="#79a33d" strokeWidth="4" />
                    <line x1="25" y1="40" x2="75" y2="40" stroke="#79a33d" strokeWidth="4" />
                    <line x1="40" y1="20" x2="40" y2="30" stroke="#79a33d" strokeWidth="4" />
                    <line x1="60" y1="20" x2="60" y2="30" stroke="#79a33d" strokeWidth="4" />
                    <circle cx="70" cy="75" r="10" fill="#79a33d" />
                    <path d="M66 75L68.5 77.5L74 72" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            title: "Sağlıklı Yaşam",
            description: "Daha iyi bir fiziksel ve zihinsel sağlık için bütüncül yaklaşımla geliştirilmiş çözümler.",
            icon: (
                <svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="35" stroke="#79a33d" strokeWidth="4" />
                    <path d="M35 50L45 60L65 40" stroke="#79a33d" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        }
    ];

    return (
        <section style={{ padding: "100px 0", background: "white" }}>
            <div className="container-custom" style={{ maxWidth: "1200px", margin: "0 auto" }}>

                {/* Grid Layout (4 columns) */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "20px"
                    }}
                    className="info-cards-grid"
                >
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            style={{
                                background: "white",
                                padding: "60px 25px",
                                textAlign: "center",
                                border: "1px solid #e8e8e8",
                                borderRadius: "4px",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                transition: "all 0.3s ease",
                            }}
                            className="info-slide-card"
                        >
                            <div style={{ marginBottom: "30px", height: "70px", display: "flex", alignItems: "center" }}>
                                {card.icon}
                            </div>
                            <h4 style={{
                                fontFamily: "var(--font-heading)",
                                fontSize: "20px",
                                color: "#222",
                                marginBottom: "15px",
                                fontWeight: "600",
                            }}>
                                {card.title}
                            </h4>
                            <p style={{
                                fontFamily: "var(--font-body)",
                                fontSize: "14px",
                                color: "#777",
                                lineHeight: "1.6",
                                marginBottom: "25px",
                            }}>
                                {card.description}
                            </p>
                            <a href="#" style={{
                                fontSize: "12px",
                                fontWeight: "700",
                                color: "#333",
                                textTransform: "uppercase",
                                letterSpacing: "1px",
                                textDecoration: "none",
                                marginTop: "auto",
                                paddingBottom: "2px",
                                borderBottom: "1px solid transparent",
                                transition: "all 0.3s",
                            }} onMouseEnter={(e) => {
                                e.currentTarget.style.color = "#79a33d";
                                e.currentTarget.style.borderBottomColor = "#79a33d";
                            }} onMouseLeave={(e) => {
                                e.currentTarget.style.color = "#333";
                                e.currentTarget.style.borderBottomColor = "transparent";
                            }}>
                                Daha Fazla Bilgi
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .info-slide-card:hover {
          background: #79a33d !important;
          border-color: #79a33d !important;
          box-shadow: 0 20px 40px rgba(121, 163, 61, 0.3);
          transform: translateY(-10px);
        }
        .info-slide-card:hover h4, 
        .info-slide-card:hover p,
        .info-slide-card:hover a {
          color: white !important;
        }
        .info-slide-card:hover a {
          border-bottom-color: white !important;
        }
        .info-slide-card:hover svg path,
        .info-slide-card:hover svg rect,
        .info-slide-card:hover svg circle,
        .info-slide-card:hover svg line {
          stroke: white !important;
        }
        .info-slide-card:hover svg path[fill="#79a33d"],
        .info-slide-card:hover svg circle[fill="#79a33d"],
        .info-slide-card:hover svg path[fill="white"] {
          fill: white !important;
        }
        .info-slide-card:hover svg path[stroke="white"] {
            stroke: #79a33d !important;
        }
        @media (max-width: 1024px) {
          .info-cards-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .info-cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
