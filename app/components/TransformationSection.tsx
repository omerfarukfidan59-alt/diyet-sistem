"use client";

export default function TransformationSection() {
    return (
        <section style={{ padding: "100px 0", background: "#f9faf5", overflow: "hidden" }}>
            <div className="container-custom">
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1.1fr 1fr",
                    gap: "80px",
                    alignItems: "center"
                }} className="transformation-grid">

                    {/* Left Side: Image */}
                    <div style={{ position: "relative" }}>
                        <div style={{
                            position: "relative",
                            zIndex: 2,
                            borderRadius: "10px",
                            overflow: "hidden",
                            boxShadow: "0 20px 60px rgba(0,0,0,0.1)"
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop"
                                alt="Healthy Lifestyle"
                                style={{ width: "100%", height: "auto", display: "block" }}
                            />
                        </div>
                        {/* Decorative background shape */}
                        <div style={{
                            position: "absolute",
                            top: "-30px",
                            left: "-30px",
                            width: "100%",
                            height: "100%",
                            background: "rgba(121, 163, 61, 0.1)",
                            borderRadius: "10px",
                            zIndex: 1
                        }} />
                    </div>

                    {/* Right Side: Content */}
                    <div>
                        <h2 style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "42px",
                            lineHeight: "1.2",
                            color: "#333",
                            marginBottom: "30px",
                            fontWeight: "600"
                        }}>
                            Hayatınızı Gelecek <br />
                            <span style={{ color: "#79a33d" }}>90 Günlük Pratik</span> İle Değiştirin
                        </h2>

                        <p style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "16px",
                            color: "#666",
                            lineHeight: "1.8",
                            marginBottom: "50px",
                            maxWidth: "500px"
                        }}>
                            Sağlıklı bir yaşam tarzına geçiş yapmak zor olmak zorunda değil. Uzman rehberliğimizle, 90 gün içinde sürdürülebilir alışkanlıklar kazanabilir ve vücudunuzdaki değişimi hissedebilirsiniz.
                        </p>

                        {/* Features Row */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" }} className="feature-row">

                            {/* Feature 1 */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                                <div style={{
                                    width: "50px",
                                    height: "50px",
                                    background: "#79a33d",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "white",
                                    fontSize: "24px",
                                    boxShadow: "0 8px 15px rgba(121, 163, 61, 0.3)"
                                }}>
                                    🥗
                                </div>
                                <h4 style={{
                                    fontFamily: "var(--font-heading)",
                                    fontSize: "18px",
                                    fontWeight: "700",
                                    color: "#333",
                                    borderBottom: "2px solid #79a33d",
                                    paddingBottom: "8px",
                                    width: "fit-content"
                                }}>
                                    Kişiye Özel Beslenme Planı
                                </h4>
                                <p style={{ fontSize: "14px", color: "#888", lineHeight: "1.6" }}>
                                    Vücut tipinize ve hedeflerinize uygun, lezzetli ve dengeli menüler.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                                <div style={{
                                    width: "50px",
                                    height: "50px",
                                    background: "#79a33d",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "white",
                                    fontSize: "24px",
                                    boxShadow: "0 8px 15px rgba(121, 163, 61, 0.3)"
                                }}>
                                    💪
                                </div>
                                <h4 style={{
                                    fontFamily: "var(--font-heading)",
                                    fontSize: "18px",
                                    fontWeight: "700",
                                    color: "#333",
                                    borderBottom: "2px solid #79a33d",
                                    paddingBottom: "8px",
                                    width: "fit-content"
                                }}>
                                    Kişiye Özel Egzersiz Planı
                                </h4>
                                <p style={{ fontSize: "14px", color: "#888", lineHeight: "1.6" }}>
                                    Yaşam temponuza uyum sağlayan, etkili ve motive edici antrenmanlar.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <style>{`
        @media (max-width: 991px) {
          .transformation-grid {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }
          .transformation-grid div:first-child {
            order: 2;
          }
        }
        @media (max-width: 640px) {
          .feature-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}
