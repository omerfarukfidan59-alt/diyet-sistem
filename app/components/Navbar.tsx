"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const links = [
        { label: "Ana Sayfa", href: "#hero" },
        { label: "Hakkımda", href: "#about" },
        { label: "Hizmetlerim", href: "#services" },
        { label: "Sümeyye Gencal Mutfak", href: "#blog" },
        { label: "Başarı Hikayeleri", href: "#testimonials" },
        { label: "Blog", href: "#blog" },
        { label: "İletişim", href: "#appointment" },
    ];

    return (
        <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, width: "100%" }}>
            {/* Top Bar (Aarogya Style) */}
            {!scrolled && (
                <div style={{
                    background: "#79a33d",
                    color: "white",
                    padding: "10px 0",
                    fontSize: "13px",
                    fontFamily: "var(--font-body)",
                }}>
                    <div className="container-custom" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ opacity: 0.9 }}>Diyetisyen Sümeyye Gencal ile Sağlıklı Yaşama Merhaba!</div>
                        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                            {["f", "t", "i", "in", "p"].map((s) => (
                                <a key={s} href="#" style={{ color: "white", textDecoration: "none", opacity: 0.8 }} onMouseEnter={(e) => e.currentTarget.style.opacity = "1"} onMouseLeave={(e) => e.currentTarget.style.opacity = "0.8"}>
                                    {s === "f" && "📘"}
                                    {s === "t" && "🐦"}
                                    {s === "i" && "📸"}
                                    {s === "in" && "🔗"}
                                    {s === "p" && "📌"}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Main Navbar */}
            <nav
                style={{
                    background: "white",
                    boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
                    transition: "all 0.3s ease",
                    height: scrolled ? "70px" : "90px",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <div className="container-custom" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                    {/* Logo (Left Side) */}
                    <a href="#hero" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
                        <div style={{ color: "#79a33d", fontSize: "32px", fontWeight: "bold" }}>
                            🍃
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span style={{
                                fontFamily: "var(--font-heading)",
                                fontWeight: 800,
                                fontSize: "24px",
                                color: "#3d5a2d",
                                lineHeight: "1",
                                textTransform: "uppercase",
                                letterSpacing: "1px"
                            }}>
                                Sümeyye Gencal
                            </span>
                            <span style={{
                                fontSize: "11px",
                                color: "#79a33d",
                                fontWeight: 600,
                                textTransform: "uppercase",
                                letterSpacing: "2px"
                            }}>
                                Beslenme Uzmanı
                            </span>
                        </div>
                    </a>

                    {/* Nav Links (Right Side) */}
                    <div style={{ display: "flex", alignItems: "center", gap: "25px", marginLeft: "auto" }} className="hidden-mobile">
                        {links.map((l) => (
                            <a
                                key={l.label}
                                href={l.href}
                                style={{
                                    fontFamily: "var(--font-heading)",
                                    fontWeight: 600,
                                    fontSize: "14px",
                                    color: "#333",
                                    textDecoration: "none",
                                    transition: "color 0.3s",
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = "#79a33d"}
                                onMouseLeave={(e) => e.currentTarget.style.color = "#333"}
                            >
                                {l.label}
                            </a>
                        ))}

                        {/* Login Button */}
                        <a
                            href="/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: "#333",
                                textDecoration: "none",
                                fontSize: "14px",
                                fontWeight: 700,
                                transition: "color 0.3s"
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = "#79a33d"}
                            onMouseLeave={(e) => e.currentTarget.style.color = "#333"}
                        >
                            Giriş Yap
                        </a>

                        {/* Online Diyet Button */}
                        <a
                            href="/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                background: "#222",
                                color: "white",
                                padding: "12px 24px",
                                fontSize: "13px",
                                fontWeight: 700,
                                borderRadius: "4px",
                                textDecoration: "none",
                                marginLeft: "10px",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                                transition: "all 0.3s ease"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "#79a33d";
                                e.currentTarget.style.transform = "translateY(-2px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "#222";
                                e.currentTarget.style.transform = "translateY(0)";
                            }}
                        >
                            Online Diyet
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="mobile-only"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            display: "none",
                        }}
                        id="hamburger-btn"
                    >
                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                            <span style={{ width: "25px", height: "3px", background: "#333" }} />
                            <span style={{ width: "25px", height: "3px", background: "#333" }} />
                            <span style={{ width: "25px", height: "3px", background: "#333" }} />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div style={{ background: "white", padding: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}>
                    {links.map((l) => (
                        <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)} style={{ display: "block", padding: "12px 0", color: "#333", textDecoration: "none", borderBottom: "1px solid #eee", fontSize: "15px", fontWeight: 600 }}>
                            {l.label}
                        </a>
                    ))}
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
                        <a
                            href="/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileOpen(false)}
                            style={{ display: "block", border: "1px solid #79a33d", color: "#79a33d", textAlign: "center", padding: "14px", textDecoration: "none", borderRadius: "4px", fontWeight: 700 }}
                        >
                            Giriş Yap
                        </a>
                        <a
                            href="/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileOpen(false)}
                            style={{ display: "block", background: "#79a33d", color: "white", textAlign: "center", padding: "14px", textDecoration: "none", borderRadius: "4px", fontWeight: 700 }}
                        >
                            Online Diyet
                        </a>
                    </div>
                </div>
            )}

            <style>{`
        @media (max-width: 1200px) {
          .hidden-mobile { gap: 15px !important; }
        }
        @media (max-width: 1080px) {
          .hidden-mobile { display: none !important; }
          #hamburger-btn { display: flex !important; }
        }
      `}</style>
        </header>
    );
}
