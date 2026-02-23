import React from "react";
import DashboardSidebar from "../components/DashboardSidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ minHeight: "100vh", background: "#f9faf5", display: "flex", flexDirection: "column", fontFamily: "var(--font-body)" }}>
            <div style={{ display: "flex", flex: 1, flexDirection: "row" }} className="layout-row">
                <DashboardSidebar />
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
