import React from "react";
import AdminSidebar from "../components/AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ minHeight: "100vh", background: "#f4f7f4", display: "flex", flexDirection: "column", fontFamily: "var(--font-body)" }}>
            <div style={{ display: "flex", flex: 1, flexDirection: "row" }} className="layout-row">
                <AdminSidebar />
                <div style={{ flex: 1, overflowY: "auto", overflowX: "hidden" }} className="main-content">
                    {children}
                </div>
            </div>

            <style>{`
                @media (max-width: 1024px) {
                    .layout-row {
                        flex-direction: column !important;
                    }
                    .main-content {
                        padding: 20px !important;
                    }
                }
            `}</style>
        </div>
    );
}
