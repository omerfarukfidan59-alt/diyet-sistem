"use client";
import { useState } from "react";

const services = ["Kilo Yönetimi", "Spor Beslenmesi", "Hastalık Diyeti", "Hamilelik Beslenmesi", "Çocuk Beslenmesi", "Online Danışmanlık"];

export default function AppointmentSection() {
    const [formData, setFormData] = useState({
        name: "", phone: "", email: "", service: "", date: "", message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: "", phone: "", email: "", service: "", date: "", message: "" });
    };

    const inputStyle: React.CSSProperties = {
        width: "100%",
        padding: "14px 18px",
        borderRadius: "12px",
        border: "2px solid rgba(255,255,255,0.2)",
        background: "rgba(255,255,255,0.1)",
        color: "white",
        fontFamily: "var(--font-body)",
        fontSize: "14.5px",
        outline: "none",
        transition: "border-color 0.3s",
        backdropFilter: "blur(4px)",
    };

    return (
        <section
            id="appointment"
            className="section-padding"
            style={{
                background: "linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #388E3C 100%)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* BG decor */}
            <div style={{
                position: "absolute",
                top: "-100px", right: "-100px",
                width: 400, height: 400,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
            }} />
            <div style={{
                position: "absolute",
                bottom: "-80px", left: "-80px",
                width: 300, height: 300,
                borderRadius: "50%",
                background: "rgba(249,168,37,0.06)",
            }} />

            <div className="container-custom" style={{ position: "relative" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1.4fr",
                        gap: "70px",
                        alignItems: "start",
                    }}
                    className="appt-grid"
                >
                    {/* Left - Info */}
                    <div>
                        <span
                            style={{
                                display: "inline-block",
                                background: "rgba(249,168,37,0.18)",
                                border: "1px solid rgba(249,168,37,0.35)",
                                color: "#F9A825",
                                padding: "6px 18px",
                                borderRadius: "50px",
                                fontSize: "12px",
                                fontFamily: "var(--font-heading)",
                                fontWeight: 600,
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                                marginBottom: "20px",
                                display: "block",
                            }}
                        >
                            Randevu
                        </span>
                        <h2
                            style={{
                                fontFamily: "var(--font-heading)",
                                fontWeight: 800,
                                fontSize: "clamp(28px, 4vw, 42px)",
                                color: "white",
                                lineHeight: 1.2,
                                marginBottom: "20px",
                            }}
                        >
                            İlk Görüşme <br />
                            <span style={{ color: "#F9A825" }}>Ücretsiz!</span>
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-body)",
                                fontSize: "16px",
                                color: "rgba(255,255,255,0.8)",
                                lineHeight: 1.8,
                                marginBottom: "36px",
                            }}
                        >
                            Hemen randevu alın, uzman diyetisyenimiz sizi arasın. İlk görüşmeniz tamamen ücretsiz ve bağlayıcı değildir.
                        </p>

                        {/* Contact info */}
                        {[
                            { icon: "📞", title: "Telefon", value: "0850 123 45 67" },
                            { icon: "📧", title: "E-posta", value: "info@nutrilife.com.tr" },
                            { icon: "📍", title: "Adres", value: "Bağcılar, İstanbul" },
                            { icon: "⏰", title: "Çalışma Saati", value: "Pzt-Cmt: 09:00 - 19:00" },
                        ].map((c) => (
                            <div
                                key={c.title}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "16px",
                                    marginBottom: "18px",
                                }}
                            >
                                <div
                                    style={{
                                        width: 48, height: 48,
                                        borderRadius: "12px",
                                        background: "rgba(255,255,255,0.12)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        fontSize: "20px", flexShrink: 0,
                                    }}
                                >
                                    {c.icon}
                                </div>
                                <div>
                                    <div style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "rgba(255,255,255,0.6)", marginBottom: "2px" }}>{c.title}</div>
                                    <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "15px", color: "white" }}>{c.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right - Form */}
                    <div
                        style={{
                            background: "rgba(255,255,255,0.08)",
                            border: "1px solid rgba(255,255,255,0.15)",
                            borderRadius: "24px",
                            padding: "40px",
                            backdropFilter: "blur(10px)",
                        }}
                    >
                        {submitted ? (
                            <div style={{ textAlign: "center", padding: "40px 0" }}>
                                <div style={{ fontSize: "60px", marginBottom: "16px" }}>✅</div>
                                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "22px", color: "white", marginBottom: "12px" }}>
                                    Randevu Talebiniz Alındı!
                                </h3>
                                <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.75)", fontSize: "15px" }}>
                                    En kısa sürede sizi arayacağız. Teşekkürler!
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "20px", color: "white", marginBottom: "24px" }}>
                                    Randevu Formu
                                </h3>

                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }} className="form-two-col">
                                    <div>
                                        <label style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(255,255,255,0.7)", display: "block", marginBottom: "6px" }}>Ad Soyad *</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Adınızı girin"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            style={inputStyle}
                                        />
                                    </div>
                                    <div>
                                        <label style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(255,255,255,0.7)", display: "block", marginBottom: "6px" }}>Telefon *</label>
                                        <input
                                            required
                                            type="tel"
                                            placeholder="05XX XXX XX XX"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            style={inputStyle}
                                        />
                                    </div>
                                </div>

                                <div style={{ marginBottom: "16px" }}>
                                    <label style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(255,255,255,0.7)", display: "block", marginBottom: "6px" }}>E-posta</label>
                                    <input
                                        type="email"
                                        placeholder="ornek@email.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        style={inputStyle}
                                    />
                                </div>

                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }} className="form-two-col">
                                    <div>
                                        <label style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(255,255,255,0.7)", display: "block", marginBottom: "6px" }}>Hizmet *</label>
                                        <select
                                            required
                                            value={formData.service}
                                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                            style={{ ...inputStyle, color: formData.service ? "white" : "rgba(255,255,255,0.5)" }}
                                        >
                                            <option value="" style={{ color: "#333" }}>Seçin...</option>
                                            {services.map((s) => (
                                                <option key={s} value={s} style={{ color: "#333" }}>{s}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(255,255,255,0.7)", display: "block", marginBottom: "6px" }}>Tarih Tercihi</label>
                                        <input
                                            type="date"
                                            value={formData.date}
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            style={inputStyle}
                                        />
                                    </div>
                                </div>

                                <div style={{ marginBottom: "24px" }}>
                                    <label style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(255,255,255,0.7)", display: "block", marginBottom: "6px" }}>Mesajınız</label>
                                    <textarea
                                        rows={3}
                                        placeholder="Bize kısaca durumunuzu anlatabilirsiniz..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        style={{ ...inputStyle, resize: "vertical", minHeight: "80px" }}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    style={{
                                        width: "100%",
                                        padding: "16px",
                                        background: "linear-gradient(135deg, #F9A825, #FFD54F)",
                                        color: "#1B5E20",
                                        border: "none",
                                        borderRadius: "12px",
                                        fontFamily: "var(--font-heading)",
                                        fontWeight: 700,
                                        fontSize: "15px",
                                        cursor: "pointer",
                                        transition: "all 0.3s",
                                        boxShadow: "0 8px 25px rgba(249,168,37,0.35)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "8px",
                                    }}
                                >
                                    📅 Ücretsiz Randevu Al
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            <style>{`
        .appt-grid { }
        @media (max-width: 860px) {
          .appt-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .form-two-col { grid-template-columns: 1fr !important; }
        }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.45) !important; }
        select option { background: #1B5E20; }
      `}</style>
        </section>
    );
}
