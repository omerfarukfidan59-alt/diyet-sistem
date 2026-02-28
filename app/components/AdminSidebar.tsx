"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "../../utils/supabase";

export default function AdminSidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        localStorage.removeItem("currentUser");
        router.push("/");
    };

    const toggleSidebar = () => setIsOpen(!isOpen);
    const closeSidebar = () => setIsOpen(false);

    return (
        <>
            {/* Mobile Header with Hamburger */}
            <div className="admin-mobile-header">
                <button className="hamburger-btn" onClick={toggleSidebar}>
                    ☰
                </button>
                <div className="admin-mobile-logo">🍃 Sümeyye Hanım</div>
            </div>

            {/* Mobile Backdrop Overlay */}
            {isOpen && (
                <div className="sidebar-backdrop" onClick={closeSidebar}></div>
            )}

            {/* Sidebar Content */}
            <div className={`admin-sidebar-container ${isOpen ? "open" : ""}`}>
                <div>
                    <h2 className="sidebar-title">Sümeyye Hanım</h2>
                    <p className="sidebar-subtitle">Diyetisyen Admin Paneli</p>
                </div>

                <nav className="sidebar-nav">
                    <Link href="/admin" className={`nav-link ${pathname === "/admin" ? "active" : ""}`} onClick={closeSidebar}>
                        Genel Bakış
                    </Link>
                    <Link href="/admin/clients" className={`nav-link ${pathname.startsWith("/admin/clients") ? "active" : ""}`} onClick={closeSidebar}>
                        Danışan Yönetimi
                    </Link>
                    <Link href="/admin/food" className={`nav-link ${pathname.startsWith("/admin/food") ? "active" : ""}`} onClick={closeSidebar}>
                        Besin Kütüphanesi
                    </Link>
                    <Link href="/admin/templates" className={`nav-link ${pathname.startsWith("/admin/templates") ? "active" : ""}`} onClick={closeSidebar}>
                        Hazır Şablonlar
                    </Link>
                    <Link href="/admin/appointments" className={`nav-link ${pathname.startsWith("/admin/appointments") ? "active" : ""}`} onClick={closeSidebar}>
                        Randevu Takvimi
                    </Link>
                    <Link href="/admin/reports" className={`nav-link ${pathname.startsWith("/admin/reports") ? "active" : ""}`} onClick={closeSidebar}>
                        Raporlar
                    </Link>

                </nav>

                <div style={{ marginTop: "auto" }}>
                    <button onClick={handleLogout} className="logout-btn">
                        Oturumu Kapat
                    </button>
                </div>
            </div>

            <style jsx>{`
                .admin-mobile-header {
                    display: none;
                    background: #2c3e50;
                    color: white;
                    padding: 15px 20px;
                    justify-content: space-between;
                    align-items: center;
                    position: sticky;
                    top: 0;
                    z-index: 50;
                }
                .admin-mobile-logo {
                    font-size: 18px;
                    font-weight: 800;
                    color: #79a33d;
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
                .admin-sidebar-container {
                    width: 280px;
                    background: #2c3e50;
                    color: white;
                    padding: 40px 30px;
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
                    font-size: 22px;
                    font-weight: 800;
                    color: #79a33d;
                    margin: 0;
                }
                .sidebar-subtitle {
                    font-size: 12px;
                    color: #bdc3c7;
                    margin-top: 5px;
                }
                .sidebar-nav {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .nav-link {
                    padding: 15px 20px;
                    border-radius: 12px;
                    color: #bdc3c7;
                    text-decoration: none;
                    font-size: 15px;
                    transition: all 0.3s ease;
                }
                .nav-link.active {
                    background: #34495e;
                    color: white;
                    font-weight: 700;
                }
                .logout-btn {
                    background: none;
                    border: none;
                    color: #ecf0f1;
                    cursor: pointer;
                    font-size: 14px;
                    opacity: 0.8;
                    padding: 0;
                }

                @media (max-width: 1024px) {
                    .admin-mobile-header {
                        display: flex;
                    }
                    .admin-sidebar-container {
                        position: fixed;
                        top: 0;
                        left: 0;
                        transform: translateX(-100%);
                        padding: 20px;
                        max-width: 80vw;
                    }
                    .admin-sidebar-container.open {
                        transform: translateX(0);
                    }
                    .sidebar-backdrop {
                        display: block;
                    }
                }
            `}</style>
        </>
    );
}
