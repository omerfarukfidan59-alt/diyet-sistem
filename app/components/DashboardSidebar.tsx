"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function DashboardSidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        router.push("/");
    };

    const toggleSidebar = () => setIsOpen(!isOpen);
    const closeSidebar = () => setIsOpen(false);

    return (
        <>
            {/* Mobile Header with Hamburger */}
            <div className="mobile-header">
                <button className="hamburger-btn" onClick={toggleSidebar}>
                    ☰
                </button>
                <div className="mobile-logo">🍃 Sümeyye Gencal</div>
            </div>

            {/* Mobile Backdrop Overlay */}
            {isOpen && (
                <div className="sidebar-backdrop" onClick={closeSidebar}></div>
            )}

            {/* Sidebar Content */}
            <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
                <div>
                    <h2 className="sidebar-title">Sümeyye Gencal</h2>
                    <p className="sidebar-subtitle">Danışan Paneli</p>
                </div>

                <nav className="sidebar-nav">
                    <Link href="/dashboard" className={`nav-link ${pathname === "/dashboard" ? "active" : ""}`} onClick={closeSidebar}>
                        Özet ve Analiz
                    </Link>
                    <Link href="/dashboard/menu" className={`nav-link ${pathname === "/dashboard/menu" ? "active" : ""}`} onClick={closeSidebar}>
                        Diyet Listem
                    </Link>
                    <Link href="/dashboard/profile" className={`nav-link ${pathname === "/dashboard/profile" ? "active" : ""}`} onClick={closeSidebar}>
                        Profilim
                    </Link>
                    <Link href="/dashboard/progress" className={`nav-link ${pathname === "/dashboard/progress" ? "active" : ""}`} onClick={closeSidebar}>
                        Gelişim Grafiği
                    </Link>
                    <Link href="#" className="nav-link" onClick={closeSidebar}>
                        Ayarlar
                    </Link>
                </nav>

                <div style={{ marginTop: "auto" }}>
                    <button onClick={handleLogout} className="logout-btn">
                        Çıkış Yap
                    </button>
                </div>
            </div>

            <style jsx>{`
                .mobile-header {
                    display: none;
                    background: #3d5a2d;
                    color: white;
                    padding: 15px 20px;
                    justify-content: space-between;
                    align-items: center;
                    position: sticky;
                    top: 0;
                    z-index: 50;
                }
                .mobile-logo {
                    font-size: 18px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .hamburger-btn {
                    background: none;
                    border: none;
                    color: white;
                    font-size: 24px;
                    cursor: pointer;
                    padding: 0;
                }
                .sidebar-backdrop {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0,0,0,0.5);
                    z-index: 99;
                }
                .sidebar-container {
                    width: 260px;
                    background: #3d5a2d;
                    color: white;
                    padding: 30px;
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                    height: 100vh;
                    position: sticky;
                    top: 0;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                    z-index: 100;
                }
                .sidebar-title {
                    font-size: 20px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin: 0;
                }
                .sidebar-subtitle {
                    font-size: 12px;
                    opacity: 0.7;
                    margin-top: 5px;
                }
                .sidebar-nav {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .nav-link {
                    padding: 12px 15px;
                    border-radius: 8px;
                    color: white;
                    text-decoration: none;
                    font-size: 14px;
                    transition: background 0.3s;
                    opacity: 0.8;
                }
                .nav-link.active {
                    background: rgba(255,255,255,0.1);
                    opacity: 1;
                    font-weight: 700;
                }
                .logout-btn {
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                    font-size: 14px;
                    opacity: 0.8;
                    padding: 0;
                }

                @media (max-width: 1024px) {
                    .mobile-header {
                        display: flex;
                    }
                    .sidebar-container {
                        position: fixed;
                        top: 0;
                        left: 0;
                        transform: translateX(-100%);
                        max-width: 80vw;
                    }
                    .sidebar-container.open {
                        transform: translateX(0);
                    }
                    /* backdrop only shows on mobile when open */
                    .sidebar-backdrop {
                        display: block;
                    }
                }
            `}</style>
        </>
    );
}
