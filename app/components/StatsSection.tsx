"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
    { icon: "😊", value: 2500, suffix: "+", label: "Mutlu Danışan" },
    { icon: "🏆", value: 10, suffix: "+", label: "Yıl Deneyim" },
    { icon: "📋", value: 500, suffix: "+", label: "Beslenme Planı" },
    { icon: "✅", value: 98, suffix: "%", label: "Başarı Oranı" },
];

function useCounter(target: number, duration: number = 2000, started: boolean = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!started) return;
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [target, duration, started]);
    return count;
}

function StatCard({ icon, value, suffix, label, delay }: { icon: string; value: number; suffix: string; label: string; delay: number }) {
    const [started, setStarted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const count = useCounter(value, 2000, started);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{
                textAlign: "center",
                padding: "40px 20px",
                animation: `fadeInUp 0.6s ease ${delay}ms forwards`,
                opacity: 0,
            }}
        >
            <div style={{ fontSize: "44px", marginBottom: "12px" }}>{icon}</div>
            <div
                style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                    fontSize: "clamp(36px, 5vw, 52px)",
                    color: "white",
                    lineHeight: 1,
                    marginBottom: "8px",
                }}
            >
                {count.toLocaleString("tr-TR")}{suffix}
            </div>
            <div
                style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.75)",
                    fontWeight: 400,
                }}
            >
                {label}
            </div>
        </div>
    );
}

export default function StatsSection() {
    return (
        <section
            style={{
                background: "linear-gradient(135deg, #1B5E20 0%, #2E7D32 60%, #388E3C 100%)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Pattern overlay */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `radial-gradient(circle at 10% 50%, rgba(249,168,37,0.08) 0%, transparent 50%),
            radial-gradient(circle at 90% 50%, rgba(102,187,106,0.12) 0%, transparent 50%)`,
                }}
            />

            <div className="container-custom" style={{ position: "relative" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        borderLeft: "1px solid rgba(255,255,255,0.1)",
                    }}
                    className="stats-grid"
                >
                    {stats.map((s, i) => (
                        <div
                            key={s.label}
                            style={{
                                borderRight: "1px solid rgba(255,255,255,0.1)",
                                borderTop: "1px solid rgba(255,255,255,0.1)",
                                borderBottom: "1px solid rgba(255,255,255,0.1)",
                            }}
                        >
                            <StatCard {...s} delay={i * 100} />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
