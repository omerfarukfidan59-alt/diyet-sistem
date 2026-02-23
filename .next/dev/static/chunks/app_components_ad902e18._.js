(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Navbar() {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const onScroll = {
                "Navbar.useEffect.onScroll": ()=>setScrolled(window.scrollY > 40)
            }["Navbar.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const links = [
        {
            label: "Ana Sayfa",
            href: "#hero"
        },
        {
            label: "Hakkımda",
            href: "#about"
        },
        {
            label: "Hizmetlerim",
            href: "#services"
        },
        {
            label: "Sümeyye Gencal Mutfak",
            href: "#blog"
        },
        {
            label: "Başarı Hikayeleri",
            href: "#testimonials"
        },
        {
            label: "Blog",
            href: "#blog"
        },
        {
            label: "İletişim",
            href: "#appointment"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        style: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            width: "100%"
        },
        children: [
            !scrolled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "#79a33d",
                    color: "white",
                    padding: "10px 0",
                    fontSize: "13px",
                    fontFamily: "var(--font-body)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-custom",
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                opacity: 0.9
                            },
                            children: "Diyetisyen Sümeyye Gencal ile Sağlıklı Yaşama Merhaba!"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Navbar.tsx",
                            lineNumber: 36,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: "15px",
                                alignItems: "center"
                            },
                            children: [
                                "f",
                                "t",
                                "i",
                                "in",
                                "p"
                            ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    style: {
                                        color: "white",
                                        textDecoration: "none",
                                        opacity: 0.8
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.opacity = "1",
                                    onMouseLeave: (e)=>e.currentTarget.style.opacity = "0.8",
                                    children: [
                                        s === "f" && "📘",
                                        s === "t" && "🐦",
                                        s === "i" && "📸",
                                        s === "in" && "🔗",
                                        s === "p" && "📌"
                                    ]
                                }, s, true, {
                                    fileName: "[project]/app/components/Navbar.tsx",
                                    lineNumber: 39,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/Navbar.tsx",
                            lineNumber: 37,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Navbar.tsx",
                    lineNumber: 35,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Navbar.tsx",
                lineNumber: 28,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                style: {
                    background: "white",
                    boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
                    transition: "all 0.3s ease",
                    height: scrolled ? "70px" : "90px",
                    display: "flex",
                    alignItems: "center"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-custom",
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#hero",
                            style: {
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                gap: "12px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        color: "#79a33d",
                                        fontSize: "32px",
                                        fontWeight: "bold"
                                    },
                                    children: "🍃"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Navbar.tsx",
                                    lineNumber: 66,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "var(--font-heading)",
                                                fontWeight: 800,
                                                fontSize: "24px",
                                                color: "#3d5a2d",
                                                lineHeight: "1",
                                                textTransform: "uppercase",
                                                letterSpacing: "1px"
                                            },
                                            children: "Sümeyye Gencal"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Navbar.tsx",
                                            lineNumber: 70,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: "11px",
                                                color: "#79a33d",
                                                fontWeight: 600,
                                                textTransform: "uppercase",
                                                letterSpacing: "2px"
                                            },
                                            children: "Beslenme Uzmanı"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Navbar.tsx",
                                            lineNumber: 81,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Navbar.tsx",
                                    lineNumber: 69,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Navbar.tsx",
                            lineNumber: 65,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "25px",
                                marginLeft: "auto"
                            },
                            className: "hidden-mobile",
                            children: [
                                links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: l.href,
                                        style: {
                                            fontFamily: "var(--font-heading)",
                                            fontWeight: 600,
                                            fontSize: "14px",
                                            color: "#333",
                                            textDecoration: "none",
                                            transition: "color 0.3s"
                                        },
                                        onMouseEnter: (e)=>e.currentTarget.style.color = "#79a33d",
                                        onMouseLeave: (e)=>e.currentTarget.style.color = "#333",
                                        children: l.label
                                    }, l.label, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 96,
                                        columnNumber: 29
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/login",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        color: "#333",
                                        textDecoration: "none",
                                        fontSize: "14px",
                                        fontWeight: 700,
                                        transition: "color 0.3s"
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.color = "#79a33d",
                                    onMouseLeave: (e)=>e.currentTarget.style.color = "#333",
                                    children: "Giriş Yap"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Navbar.tsx",
                                    lineNumber: 115,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/register",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
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
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.background = "#79a33d";
                                        e.currentTarget.style.transform = "translateY(-2px)";
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.background = "#222";
                                        e.currentTarget.style.transform = "translateY(0)";
                                    },
                                    children: "Online Diyet"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Navbar.tsx",
                                    lineNumber: 133,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Navbar.tsx",
                            lineNumber: 94,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "mobile-only",
                            onClick: ()=>setMobileOpen(!mobileOpen),
                            style: {
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                display: "none"
                            },
                            id: "hamburger-btn",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "6px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: "25px",
                                            height: "3px",
                                            background: "#333"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 176,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: "25px",
                                            height: "3px",
                                            background: "#333"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 177,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: "25px",
                                            height: "3px",
                                            background: "#333"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 178,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 175,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Navbar.tsx",
                            lineNumber: 164,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Navbar.tsx",
                    lineNumber: 63,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Navbar.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, this),
            mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "white",
                    padding: "20px",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.1)"
                },
                children: [
                    links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: l.href,
                            onClick: ()=>setMobileOpen(false),
                            style: {
                                display: "block",
                                padding: "12px 0",
                                color: "#333",
                                textDecoration: "none",
                                borderBottom: "1px solid #eee",
                                fontSize: "15px",
                                fontWeight: 600
                            },
                            children: l.label
                        }, l.label, false, {
                            fileName: "[project]/app/components/Navbar.tsx",
                            lineNumber: 188,
                            columnNumber: 25
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            marginTop: "20px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/login",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                onClick: ()=>setMobileOpen(false),
                                style: {
                                    display: "block",
                                    border: "1px solid #79a33d",
                                    color: "#79a33d",
                                    textAlign: "center",
                                    padding: "14px",
                                    textDecoration: "none",
                                    borderRadius: "4px",
                                    fontWeight: 700
                                },
                                children: "Giriş Yap"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 193,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/register",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                onClick: ()=>setMobileOpen(false),
                                style: {
                                    display: "block",
                                    background: "#79a33d",
                                    color: "white",
                                    textAlign: "center",
                                    padding: "14px",
                                    textDecoration: "none",
                                    borderRadius: "4px",
                                    fontWeight: 700
                                },
                                children: "Online Diyet"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 202,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 192,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Navbar.tsx",
                lineNumber: 186,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @media (max-width: 1200px) {
          .hidden-mobile { gap: 15px !important; }
        }
        @media (max-width: 1080px) {
          .hidden-mobile { display: none !important; }
          #hamburger-btn { display: flex !important; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/components/Navbar.tsx",
                lineNumber: 215,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Navbar.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}
_s(Navbar, "moUcU2J4YHazgmQMN2Ea+ACEGYM=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function HeroSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        style: {
            minHeight: "100vh",
            width: "100%",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            backgroundImage: `url("https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "0 8%",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.15)",
                    zIndex: 1
                }
            }, void 0, false, {
                fileName: "[project]/app/components/HeroSection.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    zIndex: 10,
                    background: "rgba(255, 255, 255, 0.95)",
                    padding: "60px 40px",
                    width: "100%",
                    maxWidth: "650px",
                    borderRadius: "4px",
                    boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
                    animation: "fadeInLeft 0.8s ease forwards",
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: "40px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: "var(--font-heading)",
                                    fontSize: "36px",
                                    fontWeight: 600,
                                    color: "#3d5a2d",
                                    marginBottom: "16px",
                                    lineHeight: 1.2
                                },
                                children: [
                                    "Programlarımıza Katılın & ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 56,
                                        columnNumber: 51
                                    }, this),
                                    "Sağlıklı Yaşama Adım Atın"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/HeroSection.tsx",
                                lineNumber: 46,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: "50px",
                                    height: "2px",
                                    background: "var(--primary)",
                                    margin: "0 auto 20px"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/HeroSection.tsx",
                                lineNumber: 58,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "var(--font-body)",
                                    fontSize: "15px",
                                    color: "#666",
                                    lineHeight: "1.7",
                                    maxWidth: "480px",
                                    margin: "0 auto"
                                },
                                children: "Size özel hazırlanan programlarımıza kayıt olun, en iyi sonuçları alın ve sürdürülebilir bir sağlıklı yaşam tarzı oluşturun."
                            }, void 0, false, {
                                fileName: "[project]/app/components/HeroSection.tsx",
                                lineNumber: 64,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/HeroSection.tsx",
                        lineNumber: 45,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "0",
                            borderTop: "1px solid #eee",
                            paddingTop: "40px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "0 20px",
                                    borderRight: "1px solid #eee",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: "70px",
                                            height: "70px",
                                            marginBottom: "20px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "40px",
                                            filter: "drop-shadow(0 5px 10px rgba(0,0,0,0.1))"
                                        },
                                        children: "🍏🏋️"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 96,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        style: {
                                            fontFamily: "var(--font-heading)",
                                            fontSize: "17px",
                                            fontWeight: 700,
                                            color: "#333",
                                            marginBottom: "20px",
                                            height: "44px",
                                            display: "flex",
                                            alignItems: "center"
                                        },
                                        children: "Sağlık & Fitness Programı"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 108,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#appointment",
                                        className: "view-details-btn",
                                        style: {
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
                                            textTransform: "uppercase"
                                        },
                                        children: "Detayları Gör"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 120,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/HeroSection.tsx",
                                lineNumber: 89,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "0 20px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: "70px",
                                            height: "70px",
                                            marginBottom: "20px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "40px",
                                            filter: "drop-shadow(0 5px 10px rgba(0,0,0,0.1))"
                                        },
                                        children: "🥗🍴"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 148,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        style: {
                                            fontFamily: "var(--font-heading)",
                                            fontSize: "17px",
                                            fontWeight: 700,
                                            color: "#333",
                                            marginBottom: "20px",
                                            height: "44px",
                                            display: "flex",
                                            alignItems: "center"
                                        },
                                        children: "Sağlıklı Diyet Programı"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 160,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#appointment",
                                        className: "view-details-btn",
                                        style: {
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
                                            textTransform: "uppercase"
                                        },
                                        children: "Detayları Gör"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 172,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/HeroSection.tsx",
                                lineNumber: 142,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/HeroSection.tsx",
                        lineNumber: 79,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/HeroSection.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                style: {
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
                    justifyContent: "center"
                },
                className: "nav-btn",
                children: "‹"
            }, void 0, false, {
                fileName: "[project]/app/components/HeroSection.tsx",
                lineNumber: 196,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                style: {
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
                    justifyContent: "center"
                },
                className: "nav-btn",
                children: "›"
            }, void 0, false, {
                fileName: "[project]/app/components/HeroSection.tsx",
                lineNumber: 220,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/app/components/HeroSection.tsx",
                lineNumber: 245,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/HeroSection.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/StatsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const stats = [
    {
        icon: "😊",
        value: 2500,
        suffix: "+",
        label: "Mutlu Danışan"
    },
    {
        icon: "🏆",
        value: 10,
        suffix: "+",
        label: "Yıl Deneyim"
    },
    {
        icon: "📋",
        value: 500,
        suffix: "+",
        label: "Beslenme Planı"
    },
    {
        icon: "✅",
        value: 98,
        suffix: "%",
        label: "Başarı Oranı"
    }
];
function useCounter(target, duration = 2000, started = false) {
    _s();
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCounter.useEffect": ()=>{
            if (!started) return;
            let start = 0;
            const step = target / (duration / 16);
            const timer = setInterval({
                "useCounter.useEffect.timer": ()=>{
                    start += step;
                    if (start >= target) {
                        setCount(target);
                        clearInterval(timer);
                    } else {
                        setCount(Math.floor(start));
                    }
                }
            }["useCounter.useEffect.timer"], 16);
            return ({
                "useCounter.useEffect": ()=>clearInterval(timer)
            })["useCounter.useEffect"];
        }
    }["useCounter.useEffect"], [
        target,
        duration,
        started
    ]);
    return count;
}
_s(useCounter, "/xL7qdScToREtqzbt5GZ1kHtYjQ=");
function StatCard({ icon, value, suffix, label, delay }) {
    _s1();
    const [started, setStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const count = useCounter(value, 2000, started);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StatCard.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "StatCard.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setStarted(true);
                        observer.disconnect();
                    }
                }
            }["StatCard.useEffect"], {
                threshold: 0.5
            });
            if (ref.current) observer.observe(ref.current);
            return ({
                "StatCard.useEffect": ()=>observer.disconnect()
            })["StatCard.useEffect"];
        }
    }["StatCard.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            textAlign: "center",
            padding: "40px 20px",
            animation: `fadeInUp 0.6s ease ${delay}ms forwards`,
            opacity: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: "44px",
                    marginBottom: "12px"
                },
                children: icon
            }, void 0, false, {
                fileName: "[project]/app/components/StatsSection.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                    fontSize: "clamp(36px, 5vw, 52px)",
                    color: "white",
                    lineHeight: 1,
                    marginBottom: "8px"
                },
                children: [
                    count.toLocaleString("tr-TR"),
                    suffix
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/StatsSection.tsx",
                lineNumber: 56,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.75)",
                    fontWeight: 400
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/app/components/StatsSection.tsx",
                lineNumber: 68,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/StatsSection.tsx",
        lineNumber: 46,
        columnNumber: 9
    }, this);
}
_s1(StatCard, "8KtwT44l174lLdD5OOoLcSqkg8c=", false, function() {
    return [
        useCounter
    ];
});
_c = StatCard;
function StatsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: "linear-gradient(135deg, #1B5E20 0%, #2E7D32 60%, #388E3C 100%)",
            position: "relative",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `radial-gradient(circle at 10% 50%, rgba(249,168,37,0.08) 0%, transparent 50%),
            radial-gradient(circle at 90% 50%, rgba(102,187,106,0.12) 0%, transparent 50%)`
                }
            }, void 0, false, {
                fileName: "[project]/app/components/StatsSection.tsx",
                lineNumber: 92,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-custom",
                style: {
                    position: "relative"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        borderLeft: "1px solid rgba(255,255,255,0.1)"
                    },
                    className: "stats-grid",
                    children: stats.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                borderRight: "1px solid rgba(255,255,255,0.1)",
                                borderTop: "1px solid rgba(255,255,255,0.1)",
                                borderBottom: "1px solid rgba(255,255,255,0.1)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                ...s,
                                delay: i * 100
                            }, void 0, false, {
                                fileName: "[project]/app/components/StatsSection.tsx",
                                lineNumber: 119,
                                columnNumber: 29
                            }, this)
                        }, s.label, false, {
                            fileName: "[project]/app/components/StatsSection.tsx",
                            lineNumber: 111,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/components/StatsSection.tsx",
                    lineNumber: 102,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/StatsSection.tsx",
                lineNumber: 101,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/components/StatsSection.tsx",
                lineNumber: 125,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/StatsSection.tsx",
        lineNumber: 84,
        columnNumber: 9
    }, this);
}
_c1 = StatsSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "StatCard");
__turbopack_context__.k.register(_c1, "StatsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ServicesSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const services = [
    {
        icon: "⚖️",
        title: "Kilo Yönetimi",
        desc: "Bilimsel temelli, sürdürülebilir kilo verme ve alma programları ile ideal kilonuza ulaşın.",
        color: "#2E7D32",
        bg: "rgba(46,125,50,0.07)"
    },
    {
        icon: "🏋️",
        title: "Spor Beslenmesi",
        desc: "Performansınızı maksimuma çıkarmak için sporcuya özel beslenme programları ve supplement danışmanlığı.",
        color: "#1565C0",
        bg: "rgba(21,101,192,0.07)"
    },
    {
        icon: "💊",
        title: "Hastalık Diyetleri",
        desc: "Diyabet, tansiyon, kolesterol ve diğer kronik hastalıklara özel, tıbbi beslenme tedavisi.",
        color: "#C62828",
        bg: "rgba(198,40,40,0.07)"
    },
    {
        icon: "🤰",
        title: "Hamilelik Beslenmesi",
        desc: "Anne ve bebek sağlığını korumak için gebelik ve emzirme dönemine özel beslenme rehberi.",
        color: "#F57F17",
        bg: "rgba(245,127,23,0.07)"
    },
    {
        icon: "👶",
        title: "Çocuk Beslenmesi",
        desc: "Büyüme ve gelişme döneminde çocukların ihtiyacına yönelik, aile dostu beslenme programları.",
        color: "#4A148C",
        bg: "rgba(74,20,140,0.07)"
    },
    {
        icon: "💻",
        title: "Online Danışmanlık",
        desc: "Evinizin konforunda, video görüşme ile uzman diyetisyeninize 7/24 erişin.",
        color: "#006064",
        bg: "rgba(0,96,100,0.07)"
    }
];
function ServicesSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "services",
        className: "section-padding",
        style: {
            background: "white"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-custom",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            marginBottom: "60px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "section-badge",
                                children: "Hizmetlerimiz"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ServicesSection.tsx",
                                lineNumber: 54,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "section-title",
                                style: {
                                    margin: "0 auto 16px"
                                },
                                children: [
                                    "Size Özel ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Beslenme Çözümleri"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ServicesSection.tsx",
                                        lineNumber: 56,
                                        columnNumber: 35
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ServicesSection.tsx",
                                lineNumber: 55,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "divider",
                                style: {
                                    margin: "0 auto 20px"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/ServicesSection.tsx",
                                lineNumber: 58,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "section-desc",
                                style: {
                                    margin: "0 auto",
                                    textAlign: "center"
                                },
                                children: "Her bireyin ihtiyacı farklıdır. Uzman ekibimiz, size özel kapsamlı beslenme programları ile sağlık hedeflerinize ulaşmanızı sağlar."
                            }, void 0, false, {
                                fileName: "[project]/app/components/ServicesSection.tsx",
                                lineNumber: 59,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ServicesSection.tsx",
                        lineNumber: 53,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "28px"
                        },
                        className: "services-grid",
                        children: services.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-hover",
                                style: {
                                    background: "white",
                                    border: "1px solid #f0f4f0",
                                    borderRadius: "20px",
                                    padding: "36px 28px",
                                    animation: `fadeInUp 0.6s ease ${i * 100}ms forwards`,
                                    opacity: 0,
                                    cursor: "pointer",
                                    position: "relative",
                                    overflow: "hidden"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: "4px",
                                            background: s.color,
                                            borderRadius: "20px 20px 0 0",
                                            opacity: 0,
                                            transition: "opacity 0.3s"
                                        },
                                        className: "card-bar"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ServicesSection.tsx",
                                        lineNumber: 90,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 68,
                                            height: 68,
                                            borderRadius: "18px",
                                            background: s.bg,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "32px",
                                            marginBottom: "22px",
                                            transition: "transform 0.3s"
                                        },
                                        className: "service-icon",
                                        children: s.icon
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ServicesSection.tsx",
                                        lineNumber: 106,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontFamily: "var(--font-heading)",
                                            fontWeight: 700,
                                            fontSize: "19px",
                                            color: "var(--dark)",
                                            marginBottom: "12px",
                                            transition: "color 0.3s"
                                        },
                                        className: "service-title",
                                        children: s.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ServicesSection.tsx",
                                        lineNumber: 124,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: "var(--font-body)",
                                            fontSize: "14.5px",
                                            color: "var(--gray)",
                                            lineHeight: 1.75,
                                            marginBottom: "20px"
                                        },
                                        children: s.desc
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ServicesSection.tsx",
                                        lineNumber: 138,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#appointment",
                                        style: {
                                            fontFamily: "var(--font-heading)",
                                            fontWeight: 600,
                                            fontSize: "13.5px",
                                            color: s.color,
                                            textDecoration: "none",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "6px",
                                            transition: "gap 0.3s"
                                        },
                                        children: [
                                            "Daha Fazla Bilgi ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ServicesSection.tsx",
                                                lineNumber: 164,
                                                columnNumber: 50
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/ServicesSection.tsx",
                                        lineNumber: 150,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                        children: `
                .card-hover:hover .card-bar { opacity: 1 !important; }
                .card-hover:hover .service-icon { transform: scale(1.1) !important; }
              `
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ServicesSection.tsx",
                                        lineNumber: 167,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, s.title, true, {
                                fileName: "[project]/app/components/ServicesSection.tsx",
                                lineNumber: 74,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/ServicesSection.tsx",
                        lineNumber: 65,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ServicesSection.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 580px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/components/ServicesSection.tsx",
                lineNumber: 176,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ServicesSection.tsx",
        lineNumber: 50,
        columnNumber: 9
    }, this);
}
_c = ServicesSection;
var _c;
__turbopack_context__.k.register(_c, "ServicesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/AboutSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const features = [
    "Bireyselleştirilmiş Beslenme Planı",
    "Düzenli Takip ve Analiz",
    "Bilimsel ve Kanıta Dayalı Yaklaşım",
    "7/24 Whatsapp Desteği",
    "Vücut Analizi ve Ölçüm Takibi",
    "Alerjik Gıda ve Özel Durum Desteği"
];
function AboutSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "section-padding",
        style: {
            background: "var(--light-bg)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-custom",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "70px",
                        alignItems: "center"
                    },
                    className: "about-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "relative",
                                animation: "fadeInLeft 0.8s ease forwards"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        borderRadius: "24px",
                                        overflow: "hidden",
                                        background: "linear-gradient(135deg, #1B5E20, #2E7D32, #66BB6A)",
                                        aspectRatio: "4/5",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        boxShadow: "0 30px 70px rgba(46,125,50,0.25)",
                                        fontSize: "120px",
                                        position: "relative"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.2))"
                                            },
                                            children: "🥬"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AboutSection.tsx",
                                            lineNumber: 46,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "absolute",
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                height: "50%",
                                                background: "linear-gradient(to top, rgba(27,94,32,0.8), transparent)",
                                                display: "flex",
                                                alignItems: "flex-end",
                                                padding: "28px"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontFamily: "var(--font-heading)",
                                                            fontWeight: 700,
                                                            fontSize: "18px",
                                                            color: "white",
                                                            marginBottom: "4px"
                                                        },
                                                        children: "Uz. Dyt. Ayşe Kaya"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AboutSection.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontFamily: "var(--font-body)",
                                                            fontSize: "13px",
                                                            color: "rgba(255,255,255,0.8)"
                                                        },
                                                        children: "Klinik Diyetisyen & Beslenme Uzmanı"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AboutSection.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/AboutSection.tsx",
                                                lineNumber: 60,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AboutSection.tsx",
                                            lineNumber: 49,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/AboutSection.tsx",
                                    lineNumber: 32,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "absolute",
                                        top: "-20px",
                                        right: "-20px",
                                        width: "110px",
                                        height: "110px",
                                        borderRadius: "50%",
                                        background: "linear-gradient(135deg, #F9A825, #FFD54F)",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        boxShadow: "0 10px 30px rgba(249,168,37,0.4)",
                                        animation: "float 3s ease-in-out infinite"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "var(--font-heading)",
                                                fontWeight: 800,
                                                fontSize: "28px",
                                                color: "white",
                                                lineHeight: 1
                                            },
                                            children: "10+"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AboutSection.tsx",
                                            lineNumber: 89,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "var(--font-body)",
                                                fontSize: "11px",
                                                color: "rgba(255,255,255,0.9)",
                                                textAlign: "center",
                                                marginTop: "2px"
                                            },
                                            children: [
                                                "Yıl",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/app/components/AboutSection.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 170
                                                }, this),
                                                "Deneyim"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/AboutSection.tsx",
                                            lineNumber: 90,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/AboutSection.tsx",
                                    lineNumber: 72,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "absolute",
                                        bottom: "-24px",
                                        left: "-24px",
                                        background: "white",
                                        borderRadius: "18px",
                                        padding: "18px 22px",
                                        boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "14px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 50,
                                                height: 50,
                                                borderRadius: "14px",
                                                background: "rgba(46,125,50,0.1)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "24px"
                                            },
                                            children: "🏅"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AboutSection.tsx",
                                            lineNumber: 108,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: "var(--font-heading)",
                                                        fontWeight: 700,
                                                        fontSize: "16px",
                                                        color: "var(--primary)"
                                                    },
                                                    children: "2500+"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/AboutSection.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: "var(--font-body)",
                                                        fontSize: "12px",
                                                        color: "var(--gray)"
                                                    },
                                                    children: "Başarılı Danışan"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/AboutSection.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/AboutSection.tsx",
                                            lineNumber: 116,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/AboutSection.tsx",
                                    lineNumber: 94,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/AboutSection.tsx",
                            lineNumber: 30,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                animation: "fadeInRight 0.8s ease 0.2s forwards",
                                opacity: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "section-badge",
                                    children: "Hakkımızda"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/AboutSection.tsx",
                                    lineNumber: 125,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "section-title",
                                    children: [
                                        "Sağlığınız İçin ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "En İyi Rehber"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AboutSection.tsx",
                                            lineNumber: 127,
                                            columnNumber: 45
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/AboutSection.tsx",
                                    lineNumber: 126,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "divider"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/AboutSection.tsx",
                                    lineNumber: 129,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "var(--font-body)",
                                        fontSize: "15.5px",
                                        color: "var(--gray)",
                                        lineHeight: 1.85,
                                        marginBottom: "16px"
                                    },
                                    children: "NutriLife olarak, beslenmenin sadece diyet değil; bir yaşam biçimi olduğuna inanıyoruz. 10 yılı aşkın deneyimimizle her yaştan ve her ihtiyaçtan bireye, bütünsel ve kişiselleştirilmiş beslenme çözümleri sunuyoruz."
                                }, void 0, false, {
                                    fileName: "[project]/app/components/AboutSection.tsx",
                                    lineNumber: 130,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "var(--font-body)",
                                        fontSize: "15.5px",
                                        color: "var(--gray)",
                                        lineHeight: 1.85,
                                        marginBottom: "32px"
                                    },
                                    children: "Uzman diyetisyen kadromuz, bilimsel araştırmalara dayalı yöntemlerle size özel planlar hazırlar ve her adımda yanınızda olur."
                                }, void 0, false, {
                                    fileName: "[project]/app/components/AboutSection.tsx",
                                    lineNumber: 141,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        gap: "12px",
                                        marginBottom: "36px"
                                    },
                                    children: features.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "10px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: 22,
                                                        height: 22,
                                                        borderRadius: "50%",
                                                        background: "var(--primary)",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        flexShrink: 0,
                                                        fontSize: "11px",
                                                        color: "white"
                                                    },
                                                    children: "✓"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/AboutSection.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: "var(--font-body)",
                                                        fontSize: "14px",
                                                        color: "var(--dark)",
                                                        fontWeight: 500
                                                    },
                                                    children: f
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/AboutSection.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, f, true, {
                                            fileName: "[project]/app/components/AboutSection.tsx",
                                            lineNumber: 163,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/AboutSection.tsx",
                                    lineNumber: 154,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: "16px",
                                        alignItems: "center",
                                        flexWrap: "wrap"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#appointment",
                                            className: "btn-primary",
                                            children: "📞 Bizimle Tanışın"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AboutSection.tsx",
                                            lineNumber: 195,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "8px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: 48,
                                                        height: 48,
                                                        borderRadius: "50%",
                                                        background: "rgba(46,125,50,0.1)",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        fontSize: "22px"
                                                    },
                                                    children: "📞"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/AboutSection.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontFamily: "var(--font-heading)",
                                                                fontWeight: 600,
                                                                fontSize: "13px",
                                                                color: "var(--gray)"
                                                            },
                                                            children: "Bizi Arayın"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/AboutSection.tsx",
                                                            lineNumber: 208,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontFamily: "var(--font-heading)",
                                                                fontWeight: 700,
                                                                fontSize: "15px",
                                                                color: "var(--primary)"
                                                            },
                                                            children: "0850 123 45 67"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/AboutSection.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/AboutSection.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/AboutSection.tsx",
                                            lineNumber: 198,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/AboutSection.tsx",
                                    lineNumber: 194,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/AboutSection.tsx",
                            lineNumber: 124,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/AboutSection.tsx",
                    lineNumber: 20,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/AboutSection.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
          .about-grid > div:first-child { max-width: 400px; margin: 0 auto; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/components/AboutSection.tsx",
                lineNumber: 217,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/AboutSection.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
_c = AboutSection;
var _c;
__turbopack_context__.k.register(_c, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/HowItWorks.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HowItWorks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const steps = [
    {
        number: "01",
        icon: "📞",
        title: "Randevu Alın",
        desc: "Online formumuzu doldurun veya bizi arayın. Size en kısa sürede geri dönelim.",
        color: "#2E7D32",
        bg: "rgba(46,125,50,0.08)"
    },
    {
        number: "02",
        icon: "🔍",
        title: "Değerlendirme",
        desc: "Diyetisyenimiz sağlık durumunuzu, hedeflerinizi ve alışkanlıklarınızı detaylı analiz eder.",
        color: "#1565C0",
        bg: "rgba(21,101,192,0.08)"
    },
    {
        number: "03",
        icon: "📋",
        title: "Kişisel Plan",
        desc: "Size özel beslenme programı, tarifler ve alışveriş listeleri hazırlanır.",
        color: "#E65100",
        bg: "rgba(230,81,0,0.08)"
    },
    {
        number: "04",
        icon: "📈",
        title: "Takip & Destek",
        desc: "Haftalık görüşmeler ve anlık mesajlaşma ile sürecinizi birlikte takip ederiz.",
        color: "#6A1B9A",
        bg: "rgba(106,27,154,0.08)"
    }
];
function HowItWorks() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-padding",
        style: {
            background: "white"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-custom",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            marginBottom: "60px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "section-badge",
                                children: "Sürecimiz"
                            }, void 0, false, {
                                fileName: "[project]/app/components/HowItWorks.tsx",
                                lineNumber: 46,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "section-title",
                                style: {
                                    margin: "0 auto 16px"
                                },
                                children: [
                                    "Nasıl ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Çalışır?"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HowItWorks.tsx",
                                        lineNumber: 48,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/HowItWorks.tsx",
                                lineNumber: 47,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "divider",
                                style: {
                                    margin: "0 auto 20px"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/HowItWorks.tsx",
                                lineNumber: 50,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "section-desc",
                                style: {
                                    margin: "0 auto",
                                    textAlign: "center"
                                },
                                children: "4 basit adımda sağlıklı yaşam yolculuğunuza başlayın. Uzman ekibimiz her adımda yanınızda."
                            }, void 0, false, {
                                fileName: "[project]/app/components/HowItWorks.tsx",
                                lineNumber: 51,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/HowItWorks.tsx",
                        lineNumber: 45,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: "24px",
                            position: "relative"
                        },
                        className: "steps-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: "70px",
                                    left: "12.5%",
                                    right: "12.5%",
                                    height: "2px",
                                    background: "linear-gradient(90deg, #2E7D32, #1565C0, #E65100, #6A1B9A)",
                                    opacity: 0.2,
                                    zIndex: 0
                                },
                                className: "connector-line"
                            }, void 0, false, {
                                fileName: "[project]/app/components/HowItWorks.tsx",
                                lineNumber: 66,
                                columnNumber: 21
                            }, this),
                            steps.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card-hover",
                                    style: {
                                        background: "white",
                                        border: "1px solid #EEF2EE",
                                        borderRadius: "20px",
                                        padding: "36px 24px",
                                        textAlign: "center",
                                        position: "relative",
                                        zIndex: 1,
                                        animation: `fadeInUp 0.6s ease ${i * 150}ms forwards`,
                                        opacity: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "absolute",
                                                top: "-16px",
                                                left: "50%",
                                                transform: "translateX(-50%)",
                                                width: "36px",
                                                height: "36px",
                                                borderRadius: "50%",
                                                background: s.color,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontFamily: "var(--font-heading)",
                                                fontWeight: 700,
                                                fontSize: "13px",
                                                color: "white",
                                                boxShadow: `0 4px 15px ${s.color}44`
                                            },
                                            children: s.number
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/HowItWorks.tsx",
                                            lineNumber: 97,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 72,
                                                height: 72,
                                                borderRadius: "50%",
                                                background: s.bg,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "32px",
                                                margin: "10px auto 20px"
                                            },
                                            children: s.icon
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/HowItWorks.tsx",
                                            lineNumber: 121,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontFamily: "var(--font-heading)",
                                                fontWeight: 700,
                                                fontSize: "18px",
                                                color: "var(--dark)",
                                                marginBottom: "12px"
                                            },
                                            children: s.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/HowItWorks.tsx",
                                            lineNumber: 137,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "var(--font-body)",
                                                fontSize: "14px",
                                                color: "var(--gray)",
                                                lineHeight: 1.7
                                            },
                                            children: s.desc
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/HowItWorks.tsx",
                                            lineNumber: 149,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, s.title, true, {
                                    fileName: "[project]/app/components/HowItWorks.tsx",
                                    lineNumber: 81,
                                    columnNumber: 25
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/HowItWorks.tsx",
                        lineNumber: 56,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/HowItWorks.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: 1fr 1fr !important; }
          .connector-line { display: none !important; }
        }
        @media (max-width: 500px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/components/HowItWorks.tsx",
                lineNumber: 164,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/HowItWorks.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, this);
}
_c = HowItWorks;
var _c;
__turbopack_context__.k.register(_c, "HowItWorks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/TeamSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TeamSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const team = [
    {
        emoji: "👩‍⚕️",
        name: "Uz. Dyt. Ayşe Kaya",
        title: "Klinik Diyetisyen",
        specialty: "Kilo Yönetimi & Metabolik Hastalıklar",
        exp: "12 Yıl",
        clients: "600+",
        color: "#2E7D32"
    },
    {
        emoji: "👨‍⚕️",
        name: "Uz. Dyt. Mehmet Şahin",
        title: "Spor Diyetisyeni",
        specialty: "Spor Beslenmesi & Performans",
        exp: "8 Yıl",
        clients: "450+",
        color: "#1565C0"
    },
    {
        emoji: "👩‍💼",
        name: "Dyt. Zeynep Arslan",
        title: "Pediatrik Diyetisyen",
        specialty: "Çocuk & Adölesan Beslenmesi",
        exp: "6 Yıl",
        clients: "380+",
        color: "#6A1B9A"
    },
    {
        emoji: "👨‍💼",
        name: "Dyt. Can Yıldır",
        title: "Online Danışman",
        specialty: "Gebelik & Emzirme Beslenmesi",
        exp: "5 Yıl",
        clients: "310+",
        color: "#C62828"
    }
];
const socialLinks = [
    "🔗",
    "📸",
    "🐦"
];
function TeamSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "team",
        className: "section-padding",
        style: {
            background: "var(--light-bg)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-custom",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            marginBottom: "60px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "section-badge",
                                children: "Uzman Ekibimiz"
                            }, void 0, false, {
                                fileName: "[project]/app/components/TeamSection.tsx",
                                lineNumber: 53,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "section-title",
                                style: {
                                    margin: "0 auto 16px"
                                },
                                children: [
                                    "Alanında En İyi ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Diyetisyenler"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/TeamSection.tsx",
                                        lineNumber: 55,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/TeamSection.tsx",
                                lineNumber: 54,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "divider",
                                style: {
                                    margin: "0 auto 20px"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/TeamSection.tsx",
                                lineNumber: 57,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "section-desc",
                                style: {
                                    margin: "0 auto",
                                    textAlign: "center"
                                },
                                children: "Deneyimli ve uzman diyetisyen kadromuz, her bireysel ihtiyaca özel çözümler sunmak için hazır."
                            }, void 0, false, {
                                fileName: "[project]/app/components/TeamSection.tsx",
                                lineNumber: 58,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/TeamSection.tsx",
                        lineNumber: 52,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: "24px"
                        },
                        className: "team-grid",
                        children: team.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-hover",
                                style: {
                                    background: "white",
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                    border: "1px solid #EEF2EE",
                                    animation: `fadeInUp 0.6s ease ${i * 120}ms forwards`,
                                    opacity: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: `linear-gradient(135deg, ${t.color}22, ${t.color}44)`,
                                            padding: "40px 20px 20px",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            position: "relative"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 90,
                                                    height: 90,
                                                    borderRadius: "50%",
                                                    background: `linear-gradient(135deg, ${t.color}, ${t.color}cc)`,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    fontSize: "42px",
                                                    boxShadow: `0 8px 25px ${t.color}44`,
                                                    marginBottom: "14px",
                                                    border: "3px solid white"
                                                },
                                                children: t.emoji
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/TeamSection.tsx",
                                                lineNumber: 95,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    gap: "8px",
                                                    position: "absolute",
                                                    top: "14px",
                                                    right: "14px"
                                                },
                                                children: socialLinks.map((s, si)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        style: {
                                                            width: 30,
                                                            height: 30,
                                                            borderRadius: "50%",
                                                            background: "rgba(255,255,255,0.8)",
                                                            border: "none",
                                                            cursor: "pointer",
                                                            fontSize: "13px",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            transition: "all 0.3s"
                                                        },
                                                        children: s
                                                    }, si, false, {
                                                        fileName: "[project]/app/components/TeamSection.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 41
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/TeamSection.tsx",
                                                lineNumber: 114,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/TeamSection.tsx",
                                        lineNumber: 85,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: "20px 22px 24px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontFamily: "var(--font-heading)",
                                                    fontWeight: 700,
                                                    fontSize: "16px",
                                                    color: "var(--dark)",
                                                    marginBottom: "4px"
                                                },
                                                children: t.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/TeamSection.tsx",
                                                lineNumber: 140,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: "var(--font-heading)",
                                                    fontWeight: 600,
                                                    fontSize: "12.5px",
                                                    color: t.color,
                                                    marginBottom: "8px"
                                                },
                                                children: t.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/TeamSection.tsx",
                                                lineNumber: 151,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: "var(--font-body)",
                                                    fontSize: "13px",
                                                    color: "var(--gray)",
                                                    marginBottom: "16px",
                                                    lineHeight: 1.5
                                                },
                                                children: t.specialty
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/TeamSection.tsx",
                                                lineNumber: 162,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    gap: "12px",
                                                    paddingTop: "14px",
                                                    borderTop: "1px solid #f0f4f0"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            flex: 1,
                                                            textAlign: "center"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontFamily: "var(--font-heading)",
                                                                    fontWeight: 700,
                                                                    fontSize: "17px",
                                                                    color: t.color
                                                                },
                                                                children: t.exp
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/TeamSection.tsx",
                                                                lineNumber: 183,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontFamily: "var(--font-body)",
                                                                    fontSize: "11px",
                                                                    color: "var(--gray)"
                                                                },
                                                                children: "Deneyim"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/TeamSection.tsx",
                                                                lineNumber: 184,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/TeamSection.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: "1px",
                                                            background: "#f0f4f0"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/TeamSection.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            flex: 1,
                                                            textAlign: "center"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontFamily: "var(--font-heading)",
                                                                    fontWeight: 700,
                                                                    fontSize: "17px",
                                                                    color: t.color
                                                                },
                                                                children: t.clients
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/TeamSection.tsx",
                                                                lineNumber: 188,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontFamily: "var(--font-body)",
                                                                    fontSize: "11px",
                                                                    color: "var(--gray)"
                                                                },
                                                                children: "Danışan"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/TeamSection.tsx",
                                                                lineNumber: 189,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/TeamSection.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/TeamSection.tsx",
                                                lineNumber: 174,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/TeamSection.tsx",
                                        lineNumber: 139,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, t.name, true, {
                                fileName: "[project]/app/components/TeamSection.tsx",
                                lineNumber: 72,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/TeamSection.tsx",
                        lineNumber: 63,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/TeamSection.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @media (max-width: 900px) {
          .team-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 500px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/components/TeamSection.tsx",
                lineNumber: 198,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TeamSection.tsx",
        lineNumber: 46,
        columnNumber: 9
    }, this);
}
_c = TeamSection;
var _c;
__turbopack_context__.k.register(_c, "TeamSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Testimonials.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Testimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const testimonials = [
    {
        name: "Fatma Yılmaz",
        role: "Öğretmen, 38 yaşında",
        emoji: "👩",
        text: "4 ayda 18 kilo verdim ve en önemlisi hiç aç kalmadım! Ayşe Hanım gerçekten harika bir diyetisyen. Planı benim yaşam tarzıma göre hazırladı, hiç zorlanmadım.",
        rating: 5,
        result: "18 kg Verdi",
        color: "#2E7D32"
    },
    {
        name: "Ahmet Demir",
        role: "Sporcu, 26 yaşında",
        emoji: "👨",
        text: "Spor beslenmesi konusunda yanlış bilgilerle boğulmuştum. Mehmet Bey ile çalışmaya başlayınca performansım inanılmaz arttı. Kas kütlemi korurken yağ yaktım.",
        rating: 5,
        result: "%12 Yağ Kaybı",
        color: "#1565C0"
    },
    {
        name: "Selin Çelik",
        role: "İş Kadını, 44 yaşında",
        emoji: "👩‍💼",
        text: "Tip 2 diyabet teşhisinden sonra ne yapacağımı bilemedim. Program sayesinde ilaç dozumu yarıya indirdim ve kan şekeri değerlerim stabil hale geldi. Gerçekten hayat kurtardı!",
        rating: 5,
        result: "Kan Şekeri Normale Döndü",
        color: "#C62828"
    },
    {
        name: "Mehmet Yıldız",
        role: "Baba, 52 yaşında",
        emoji: "👨‍👧",
        text: "Kolesterol sorunum vardı ve ilaç kullanmak istemiyordum. Online danışmanlık ile 3 ayda kolesterol değerlerimi normale döndürdüm. Kesinlikle tavsiye ederim.",
        rating: 5,
        result: "Kolesterol Normale Döndü",
        color: "#E65100"
    },
    {
        name: "Zeynep Kara",
        role: "Anne, 29 yaşında",
        emoji: "🤱",
        text: "Hamilelik dönemimde doğru beslenmek çok önemliydi. Zeynep Hanım hem annem hem de bebeğim için mükemmel bir plan hazırladı. Sağlıklı bir doğum yaptım.",
        rating: 5,
        result: "Sağlıklı Hamilelik Takibi",
        color: "#6A1B9A"
    }
];
function Testimonials() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const prev = ()=>setActive((a)=>(a - 1 + testimonials.length) % testimonials.length);
    const next = ()=>setActive((a)=>(a + 1) % testimonials.length);
    const visible = [
        testimonials[(active - 1 + testimonials.length) % testimonials.length],
        testimonials[active],
        testimonials[(active + 1) % testimonials.length]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-padding",
        style: {
            background: "linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)",
            position: "relative",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `radial-gradient(circle at 20% 50%, rgba(249,168,37,0.08) 0%, transparent 50%)`
                }
            }, void 0, false, {
                fileName: "[project]/app/components/Testimonials.tsx",
                lineNumber: 74,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-custom",
                style: {
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            marginBottom: "60px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: "inline-block",
                                    background: "rgba(249,168,37,0.2)",
                                    border: "1px solid rgba(249,168,37,0.4)",
                                    color: "#F9A825",
                                    padding: "6px 18px",
                                    borderRadius: "50px",
                                    fontSize: "12px",
                                    fontFamily: "var(--font-heading)",
                                    fontWeight: 600,
                                    letterSpacing: "1px",
                                    textTransform: "uppercase",
                                    marginBottom: "14px"
                                },
                                children: "Danışan Yorumları"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Testimonials.tsx",
                                lineNumber: 81,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: "var(--font-heading)",
                                    fontWeight: 700,
                                    fontSize: "clamp(26px, 4vw, 40px)",
                                    color: "white",
                                    margin: "0 auto 12px"
                                },
                                children: "Başarı Hikayeleri"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Testimonials.tsx",
                                lineNumber: 99,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: "60px",
                                    height: "4px",
                                    background: "#F9A825",
                                    borderRadius: "2px",
                                    margin: "0 auto"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/Testimonials.tsx",
                                lineNumber: 110,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Testimonials.tsx",
                        lineNumber: 80,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "1fr 1.1fr 1fr",
                            gap: "20px",
                            marginBottom: "40px",
                            alignItems: "center"
                        },
                        className: "testimonial-grid",
                        children: visible.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: i === 1 ? "white" : "rgba(255,255,255,0.08)",
                                    borderRadius: "20px",
                                    padding: i === 1 ? "36px 30px" : "28px 22px",
                                    border: i === 1 ? "none" : "1px solid rgba(255,255,255,0.15)",
                                    transition: "all 0.4s ease",
                                    transform: i === 1 ? "scale(1)" : "scale(0.95)",
                                    opacity: i === 1 ? 1 : 0.7
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: "4px",
                                            marginBottom: "16px"
                                        },
                                        children: Array.from({
                                            length: t.rating
                                        }).map((_, si)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: "#F9A825",
                                                    fontSize: "16px"
                                                },
                                                children: "★"
                                            }, si, false, {
                                                fileName: "[project]/app/components/Testimonials.tsx",
                                                lineNumber: 140,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Testimonials.tsx",
                                        lineNumber: 138,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: "var(--font-body)",
                                            fontSize: i === 1 ? "15px" : "14px",
                                            color: i === 1 ? "var(--gray)" : "rgba(255,255,255,0.75)",
                                            lineHeight: 1.75,
                                            marginBottom: "20px",
                                            fontStyle: "italic"
                                        },
                                        children: [
                                            "“",
                                            t.text,
                                            "”"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Testimonials.tsx",
                                        lineNumber: 144,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "inline-block",
                                            background: i === 1 ? `${t.color}15` : "rgba(255,255,255,0.1)",
                                            color: i === 1 ? t.color : "rgba(255,255,255,0.9)",
                                            borderRadius: "50px",
                                            padding: "5px 14px",
                                            fontSize: "12px",
                                            fontFamily: "var(--font-heading)",
                                            fontWeight: 600,
                                            marginBottom: "16px"
                                        },
                                        children: [
                                            "✅ ",
                                            t.result
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Testimonials.tsx",
                                        lineNumber: 158,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "12px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 46,
                                                    height: 46,
                                                    borderRadius: "50%",
                                                    background: i === 1 ? `${t.color}22` : "rgba(255,255,255,0.15)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    fontSize: "24px",
                                                    flexShrink: 0
                                                },
                                                children: t.emoji
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Testimonials.tsx",
                                                lineNumber: 175,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: "var(--font-heading)",
                                                            fontWeight: 700,
                                                            fontSize: "15px",
                                                            color: i === 1 ? "var(--dark)" : "white"
                                                        },
                                                        children: t.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Testimonials.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: "var(--font-body)",
                                                            fontSize: "12px",
                                                            color: i === 1 ? "var(--gray)" : "rgba(255,255,255,0.65)"
                                                        },
                                                        children: t.role
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Testimonials.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Testimonials.tsx",
                                                lineNumber: 190,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Testimonials.tsx",
                                        lineNumber: 174,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, t.name + i, true, {
                                fileName: "[project]/app/components/Testimonials.tsx",
                                lineNumber: 125,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Testimonials.tsx",
                        lineNumber: 114,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "16px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: prev,
                                style: {
                                    width: 48,
                                    height: 48,
                                    borderRadius: "50%",
                                    background: "rgba(255,255,255,0.15)",
                                    border: "1px solid rgba(255,255,255,0.25)",
                                    color: "white",
                                    fontSize: "18px",
                                    cursor: "pointer",
                                    transition: "all 0.3s",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                "aria-label": "Önceki yorum",
                                children: "←"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Testimonials.tsx",
                                lineNumber: 207,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: "8px"
                                },
                                children: testimonials.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActive(i),
                                        style: {
                                            width: i === active ? "24px" : "8px",
                                            height: "8px",
                                            borderRadius: "4px",
                                            background: i === active ? "#F9A825" : "rgba(255,255,255,0.3)",
                                            border: "none",
                                            cursor: "pointer",
                                            transition: "all 0.3s"
                                        },
                                        "aria-label": `${i + 1}. yorum`
                                    }, i, false, {
                                        fileName: "[project]/app/components/Testimonials.tsx",
                                        lineNumber: 223,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/Testimonials.tsx",
                                lineNumber: 221,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: next,
                                style: {
                                    width: 48,
                                    height: 48,
                                    borderRadius: "50%",
                                    background: "rgba(255,255,255,0.15)",
                                    border: "1px solid rgba(255,255,255,0.25)",
                                    color: "white",
                                    fontSize: "18px",
                                    cursor: "pointer",
                                    transition: "all 0.3s",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                "aria-label": "Sonraki yorum",
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Testimonials.tsx",
                                lineNumber: 239,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Testimonials.tsx",
                        lineNumber: 206,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Testimonials.tsx",
                lineNumber: 79,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @media (max-width: 768px) {
          .testimonial-grid {
            grid-template-columns: 1fr !important;
          }
          .testimonial-grid > div:not(:nth-child(2)) {
            display: none;
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/components/Testimonials.tsx",
                lineNumber: 256,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Testimonials.tsx",
        lineNumber: 65,
        columnNumber: 9
    }, this);
}
_s(Testimonials, "LYMHw6xE17pbh6ai9qaw76OM0Ms=");
_c = Testimonials;
var _c;
__turbopack_context__.k.register(_c, "Testimonials");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/AppointmentSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppointmentSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const services = [
    "Kilo Yönetimi",
    "Spor Beslenmesi",
    "Hastalık Diyeti",
    "Hamilelik Beslenmesi",
    "Çocuk Beslenmesi",
    "Online Danışmanlık"
];
function AppointmentSection() {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        phone: "",
        email: "",
        service: "",
        date: "",
        message: ""
    });
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setSubmitted(true);
        setTimeout(()=>setSubmitted(false), 4000);
        setFormData({
            name: "",
            phone: "",
            email: "",
            service: "",
            date: "",
            message: ""
        });
    };
    const inputStyle = {
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
        backdropFilter: "blur(4px)"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "appointment",
        className: "section-padding",
        style: {
            background: "linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #388E3C 100%)",
            position: "relative",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: "-100px",
                    right: "-100px",
                    width: 400,
                    height: 400,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)"
                }
            }, void 0, false, {
                fileName: "[project]/app/components/AppointmentSection.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    bottom: "-80px",
                    left: "-80px",
                    width: 300,
                    height: 300,
                    borderRadius: "50%",
                    background: "rgba(249,168,37,0.06)"
                }
            }, void 0, false, {
                fileName: "[project]/app/components/AppointmentSection.tsx",
                lineNumber: 52,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-custom",
                style: {
                    position: "relative"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "1fr 1.4fr",
                        gap: "70px",
                        alignItems: "start"
                    },
                    className: "appt-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
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
                                        marginBottom: "20px"
                                    },
                                    children: "Randevu"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/AppointmentSection.tsx",
                                    lineNumber: 72,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "var(--font-heading)",
                                        fontWeight: 800,
                                        fontSize: "clamp(28px, 4vw, 42px)",
                                        color: "white",
                                        lineHeight: 1.2,
                                        marginBottom: "20px"
                                    },
                                    children: [
                                        "İlk Görüşme ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/components/AppointmentSection.tsx",
                                            lineNumber: 100,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "#F9A825"
                                            },
                                            children: "Ücretsiz!"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AppointmentSection.tsx",
                                            lineNumber: 101,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/AppointmentSection.tsx",
                                    lineNumber: 90,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "var(--font-body)",
                                        fontSize: "16px",
                                        color: "rgba(255,255,255,0.8)",
                                        lineHeight: 1.8,
                                        marginBottom: "36px"
                                    },
                                    children: "Hemen randevu alın, uzman diyetisyenimiz sizi arasın. İlk görüşmeniz tamamen ücretsiz ve bağlayıcı değildir."
                                }, void 0, false, {
                                    fileName: "[project]/app/components/AppointmentSection.tsx",
                                    lineNumber: 103,
                                    columnNumber: 25
                                }, this),
                                [
                                    {
                                        icon: "📞",
                                        title: "Telefon",
                                        value: "0850 123 45 67"
                                    },
                                    {
                                        icon: "📧",
                                        title: "E-posta",
                                        value: "info@nutrilife.com.tr"
                                    },
                                    {
                                        icon: "📍",
                                        title: "Adres",
                                        value: "Bağcılar, İstanbul"
                                    },
                                    {
                                        icon: "⏰",
                                        title: "Çalışma Saati",
                                        value: "Pzt-Cmt: 09:00 - 19:00"
                                    }
                                ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "16px",
                                            marginBottom: "18px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 48,
                                                    height: 48,
                                                    borderRadius: "12px",
                                                    background: "rgba(255,255,255,0.12)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    fontSize: "20px",
                                                    flexShrink: 0
                                                },
                                                children: c.icon
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/AppointmentSection.tsx",
                                                lineNumber: 131,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: "var(--font-body)",
                                                            fontSize: "12px",
                                                            color: "rgba(255,255,255,0.6)",
                                                            marginBottom: "2px"
                                                        },
                                                        children: c.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AppointmentSection.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: "var(--font-heading)",
                                                            fontWeight: 600,
                                                            fontSize: "15px",
                                                            color: "white"
                                                        },
                                                        children: c.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AppointmentSection.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/AppointmentSection.tsx",
                                                lineNumber: 142,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, c.title, true, {
                                        fileName: "[project]/app/components/AppointmentSection.tsx",
                                        lineNumber: 122,
                                        columnNumber: 29
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/AppointmentSection.tsx",
                            lineNumber: 71,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: "rgba(255,255,255,0.08)",
                                border: "1px solid rgba(255,255,255,0.15)",
                                borderRadius: "24px",
                                padding: "40px",
                                backdropFilter: "blur(10px)"
                            },
                            children: submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: "center",
                                    padding: "40px 0"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "60px",
                                            marginBottom: "16px"
                                        },
                                        children: "✅"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AppointmentSection.tsx",
                                        lineNumber: 162,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontFamily: "var(--font-heading)",
                                            fontWeight: 700,
                                            fontSize: "22px",
                                            color: "white",
                                            marginBottom: "12px"
                                        },
                                        children: "Randevu Talebiniz Alındı!"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AppointmentSection.tsx",
                                        lineNumber: 163,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: "var(--font-body)",
                                            color: "rgba(255,255,255,0.75)",
                                            fontSize: "15px"
                                        },
                                        children: "En kısa sürede sizi arayacağız. Teşekkürler!"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AppointmentSection.tsx",
                                        lineNumber: 166,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/AppointmentSection.tsx",
                                lineNumber: 161,
                                columnNumber: 29
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontFamily: "var(--font-heading)",
                                            fontWeight: 700,
                                            fontSize: "20px",
                                            color: "white",
                                            marginBottom: "24px"
                                        },
                                        children: "Randevu Formu"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AppointmentSection.tsx",
                                        lineNumber: 172,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: "1fr 1fr",
                                            gap: "16px",
                                            marginBottom: "16px"
                                        },
                                        className: "form-two-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            fontFamily: "var(--font-body)",
                                                            fontSize: "13px",
                                                            color: "rgba(255,255,255,0.7)",
                                                            display: "block",
                                                            marginBottom: "6px"
                                                        },
                                                        children: "Ad Soyad *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AppointmentSection.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        type: "text",
                                                        placeholder: "Adınızı girin",
                                                        value: formData.name,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                name: e.target.value
                                                            }),
                                                        style: inputStyle
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AppointmentSection.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/AppointmentSection.tsx",
                                                lineNumber: 177,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            fontFamily: "var(--font-body)",
                                                            fontSize: "13px",
                                                            color: "rgba(255,255,255,0.7)",
                                                            display: "block",
                                                            marginBottom: "6px"
                                                        },
                                                        children: "Telefon *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AppointmentSection.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        type: "tel",
                                                        placeholder: "05XX XXX XX XX",
                                                        value: formData.phone,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                phone: e.target.value
                                                            }),
                                                        style: inputStyle
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AppointmentSection.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/AppointmentSection.tsx",
                                                lineNumber: 188,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/AppointmentSection.tsx",
                                        lineNumber: 176,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: "16px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    fontFamily: "var(--font-body)",
                                                    fontSize: "13px",
                                                    color: "rgba(255,255,255,0.7)",
                                                    display: "block",
                                                    marginBottom: "6px"
                                                },
                                                children: "E-posta"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/AppointmentSection.tsx",
                                                lineNumber: 202,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                placeholder: "ornek@email.com",
                                                value: formData.email,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        email: e.target.value
                                                    }),
                                                style: inputStyle
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/AppointmentSection.tsx",
                                                lineNumber: 203,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/AppointmentSection.tsx",
                                        lineNumber: 201,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: "1fr 1fr",
                                            gap: "16px",
                                            marginBottom: "16px"
                                        },
                                        className: "form-two-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            fontFamily: "var(--font-body)",
                                                            fontSize: "13px",
                                                            color: "rgba(255,255,255,0.7)",
                                                            display: "block",
                                                            marginBottom: "6px"
                                                        },
                                                        children: "Hizmet *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AppointmentSection.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        required: true,
                                                        value: formData.service,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                service: e.target.value
                                                            }),
                                                        style: {
                                                            ...inputStyle,
                                                            color: formData.service ? "white" : "rgba(255,255,255,0.5)"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                style: {
                                                                    color: "#333"
                                                                },
                                                                children: "Seçin..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/AppointmentSection.tsx",
                                                                lineNumber: 221,
                                                                columnNumber: 45
                                                            }, this),
                                                            services.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: s,
                                                                    style: {
                                                                        color: "#333"
                                                                    },
                                                                    children: s
                                                                }, s, false, {
                                                                    fileName: "[project]/app/components/AppointmentSection.tsx",
                                                                    lineNumber: 223,
                                                                    columnNumber: 49
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/AppointmentSection.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/AppointmentSection.tsx",
                                                lineNumber: 213,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            fontFamily: "var(--font-body)",
                                                            fontSize: "13px",
                                                            color: "rgba(255,255,255,0.7)",
                                                            display: "block",
                                                            marginBottom: "6px"
                                                        },
                                                        children: "Tarih Tercihi"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AppointmentSection.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        value: formData.date,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                date: e.target.value
                                                            }),
                                                        style: inputStyle
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AppointmentSection.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/AppointmentSection.tsx",
                                                lineNumber: 227,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/AppointmentSection.tsx",
                                        lineNumber: 212,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: "24px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    fontFamily: "var(--font-body)",
                                                    fontSize: "13px",
                                                    color: "rgba(255,255,255,0.7)",
                                                    display: "block",
                                                    marginBottom: "6px"
                                                },
                                                children: "Mesajınız"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/AppointmentSection.tsx",
                                                lineNumber: 239,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                rows: 3,
                                                placeholder: "Bize kısaca durumunuzu anlatabilirsiniz...",
                                                value: formData.message,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        message: e.target.value
                                                    }),
                                                style: {
                                                    ...inputStyle,
                                                    resize: "vertical",
                                                    minHeight: "80px"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/AppointmentSection.tsx",
                                                lineNumber: 240,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/AppointmentSection.tsx",
                                        lineNumber: 238,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        style: {
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
                                            gap: "8px"
                                        },
                                        children: "📅 Ücretsiz Randevu Al"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AppointmentSection.tsx",
                                        lineNumber: 249,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/AppointmentSection.tsx",
                                lineNumber: 171,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/AppointmentSection.tsx",
                            lineNumber: 151,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/AppointmentSection.tsx",
                    lineNumber: 61,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/AppointmentSection.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .appt-grid { }
        @media (max-width: 860px) {
          .appt-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .form-two-col { grid-template-columns: 1fr !important; }
        }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.45) !important; }
        select option { background: #1B5E20; }
      `
            }, void 0, false, {
                fileName: "[project]/app/components/AppointmentSection.tsx",
                lineNumber: 278,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/AppointmentSection.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, this);
}
_s(AppointmentSection, "yBEqwjv14+CUvyI4HZmPJ43wWe0=");
_c = AppointmentSection;
var _c;
__turbopack_context__.k.register(_c, "AppointmentSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/BlogSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const posts = [
    {
        emoji: "🥗",
        category: "Beslenme",
        title: "Akdeniz Diyeti: Kalp Sağlığı İçin En İyi Seçim",
        desc: "Akdeniz beslenme tarzının kalp-damar sağlığı üzerindeki kanıtlanmış faydaları ve günlük hayata nasıl uygulanacağı hakkında kapsamlı rehber.",
        author: "Uz. Dyt. Ayşe Kaya",
        date: "15 Şubat 2025",
        readTime: "5 dk okuma",
        color: "#2E7D32"
    },
    {
        emoji: "💪",
        category: "Spor",
        title: "Antrenman Öncesi ve Sonrası Doğru Beslenme",
        desc: "Spor performansınızı artırmak ve kas gelişimini desteklemek için antrenman öncesi ve sonrasında ne yemeniz gerektiğini öğrenin.",
        author: "Uz. Dyt. Mehmet Şahin",
        date: "8 Şubat 2025",
        readTime: "7 dk okuma",
        color: "#1565C0"
    },
    {
        emoji: "🤰",
        category: "Hamilelik",
        title: "Gebelikte Folik Asit ve Demir Önemi",
        desc: "Sağlıklı bir hamilelik için folik asit, demir ve diğer kritik mikro besin öğelerinin önemi ve hangi besinlerden alınabileceği.",
        author: "Dyt. Zeynep Arslan",
        date: "1 Şubat 2025",
        readTime: "6 dk okuma",
        color: "#6A1B9A"
    }
];
function BlogSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "blog",
        className: "section-padding",
        style: {
            background: "white"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-custom",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-end",
                            marginBottom: "50px",
                            flexWrap: "wrap",
                            gap: "20px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "section-badge",
                                        children: "Blog & Makaleler"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/BlogSection.tsx",
                                        lineNumber: 42,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "section-title",
                                        style: {
                                            margin: "8px 0 0"
                                        },
                                        children: [
                                            "Sağlık & Beslenme ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Haberleri"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/BlogSection.tsx",
                                                lineNumber: 44,
                                                columnNumber: 47
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/BlogSection.tsx",
                                        lineNumber: 43,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "divider",
                                        style: {
                                            marginTop: "14px"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/BlogSection.tsx",
                                        lineNumber: 46,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/BlogSection.tsx",
                                lineNumber: 41,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                style: {
                                    fontFamily: "var(--font-heading)",
                                    fontWeight: 600,
                                    fontSize: "14px",
                                    color: "var(--primary)",
                                    textDecoration: "none",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    border: "2px solid var(--primary)",
                                    padding: "10px 22px",
                                    borderRadius: "50px",
                                    transition: "all 0.3s"
                                },
                                children: "Tüm Yazılar →"
                            }, void 0, false, {
                                fileName: "[project]/app/components/BlogSection.tsx",
                                lineNumber: 48,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/BlogSection.tsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "28px"
                        },
                        className: "blog-grid",
                        children: posts.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "card-hover",
                                style: {
                                    background: "white",
                                    border: "1px solid #EEF2EE",
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                    animation: `fadeInUp 0.6s ease ${i * 150}ms forwards`,
                                    opacity: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            height: "200px",
                                            background: `linear-gradient(135deg, ${p.color}22, ${p.color}44)`,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "72px",
                                            position: "relative"
                                        },
                                        children: [
                                            p.emoji,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: "absolute",
                                                    top: "16px",
                                                    left: "16px",
                                                    background: p.color,
                                                    color: "white",
                                                    padding: "4px 14px",
                                                    borderRadius: "50px",
                                                    fontSize: "11px",
                                                    fontFamily: "var(--font-heading)",
                                                    fontWeight: 600,
                                                    letterSpacing: "0.5px"
                                                },
                                                children: p.category
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/BlogSection.tsx",
                                                lineNumber: 104,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/BlogSection.tsx",
                                        lineNumber: 91,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: "24px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "12px",
                                                    marginBottom: "14px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: "var(--font-body)",
                                                            fontSize: "12px",
                                                            color: "var(--gray)"
                                                        },
                                                        children: [
                                                            "📅 ",
                                                            p.date
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/BlogSection.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: "4px",
                                                            color: "var(--gray)"
                                                        },
                                                        children: "●"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/BlogSection.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: "var(--font-body)",
                                                            fontSize: "12px",
                                                            color: "var(--gray)"
                                                        },
                                                        children: [
                                                            "⏱ ",
                                                            p.readTime
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/BlogSection.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/BlogSection.tsx",
                                                lineNumber: 125,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontFamily: "var(--font-heading)",
                                                    fontWeight: 700,
                                                    fontSize: "17px",
                                                    color: "var(--dark)",
                                                    lineHeight: 1.4,
                                                    marginBottom: "12px"
                                                },
                                                children: p.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/BlogSection.tsx",
                                                lineNumber: 131,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: "var(--font-body)",
                                                    fontSize: "14px",
                                                    color: "var(--gray)",
                                                    lineHeight: 1.7,
                                                    marginBottom: "20px"
                                                },
                                                children: p.desc
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/BlogSection.tsx",
                                                lineNumber: 144,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "8px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: 32,
                                                                    height: 32,
                                                                    borderRadius: "50%",
                                                                    background: `${p.color}22`,
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                    fontSize: "16px"
                                                                },
                                                                children: "👩‍⚕️"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/BlogSection.tsx",
                                                                lineNumber: 158,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontFamily: "var(--font-body)",
                                                                    fontSize: "12.5px",
                                                                    color: "var(--dark)",
                                                                    fontWeight: 500
                                                                },
                                                                children: p.author
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/BlogSection.tsx",
                                                                lineNumber: 164,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/BlogSection.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        style: {
                                                            fontFamily: "var(--font-heading)",
                                                            fontWeight: 600,
                                                            fontSize: "13px",
                                                            color: p.color,
                                                            textDecoration: "none"
                                                        },
                                                        children: "Devamı →"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/BlogSection.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/BlogSection.tsx",
                                                lineNumber: 156,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/BlogSection.tsx",
                                        lineNumber: 124,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, p.title, true, {
                                fileName: "[project]/app/components/BlogSection.tsx",
                                lineNumber: 78,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/BlogSection.tsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/BlogSection.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @media (max-width: 900px) {
          .blog-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 580px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/components/BlogSection.tsx",
                lineNumber: 185,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/BlogSection.tsx",
        lineNumber: 38,
        columnNumber: 9
    }, this);
}
_c = BlogSection;
var _c;
__turbopack_context__.k.register(_c, "BlogSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const footerLinks = {
    "Hizmetlerimiz": [
        "Kilo Yönetimi",
        "Spor Beslenmesi",
        "Hastalık Diyetleri",
        "Hamilelik Beslenmesi",
        "Çocuk Beslenmesi",
        "Online Danışmanlık"
    ],
    "Hızlı Linkler": [
        "Ana Sayfa",
        "Hakkımızda",
        "Ekibimiz",
        "Blog",
        "Randevu Al",
        "İletişim"
    ]
};
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            background: "#0D3B0F",
            color: "white"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-custom",
                style: {
                    padding: "70px 20px 50px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "1.6fr 1fr 1fr 1.3fr",
                        gap: "50px"
                    },
                    className: "footer-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        marginBottom: "20px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 42,
                                                height: 42,
                                                background: "linear-gradient(135deg, #2E7D32, #66BB6A)",
                                                borderRadius: "12px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "22px"
                                            },
                                            children: "🌿"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Footer.tsx",
                                            lineNumber: 41,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "var(--font-heading)",
                                                fontWeight: 800,
                                                fontSize: "22px",
                                                color: "white"
                                            },
                                            children: [
                                                "Nutri",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: "#F9A825"
                                                    },
                                                    children: "Life"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 38
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Footer.tsx",
                                            lineNumber: 52,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Footer.tsx",
                                    lineNumber: 40,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "var(--font-body)",
                                        fontSize: "14.5px",
                                        color: "rgba(255,255,255,0.6)",
                                        lineHeight: 1.8,
                                        marginBottom: "24px",
                                        maxWidth: "280px"
                                    },
                                    children: "Profesyonel diyetisyen kadromuzla sağlıklı yaşam yolculuğunuzda her adımda yanınızdayız. Bilim ve sevgiyle."
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Footer.tsx",
                                    lineNumber: 57,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: "10px"
                                    },
                                    children: [
                                        {
                                            icon: "📘",
                                            label: "Facebook"
                                        },
                                        {
                                            icon: "📸",
                                            label: "Instagram"
                                        },
                                        {
                                            icon: "🐦",
                                            label: "Twitter"
                                        },
                                        {
                                            icon: "▶️",
                                            label: "YouTube"
                                        }
                                    ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            "aria-label": s.label,
                                            style: {
                                                width: 40,
                                                height: 40,
                                                borderRadius: "10px",
                                                background: "rgba(255,255,255,0.08)",
                                                border: "1px solid rgba(255,255,255,0.12)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "16px",
                                                textDecoration: "none",
                                                transition: "all 0.3s"
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.background = "rgba(46,125,50,0.5)";
                                                e.currentTarget.style.borderColor = "#4CAF50";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                                            },
                                            children: s.icon
                                        }, s.label, false, {
                                            fileName: "[project]/app/components/Footer.tsx",
                                            lineNumber: 69,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Footer.tsx",
                                    lineNumber: 62,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 39,
                            columnNumber: 21
                        }, this),
                        Object.entries(footerLinks).map(([title, links])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        style: {
                                            fontFamily: "var(--font-heading)",
                                            fontWeight: 700,
                                            fontSize: "16px",
                                            color: "white",
                                            marginBottom: "22px",
                                            paddingBottom: "12px",
                                            borderBottom: "2px solid rgba(76,175,80,0.3)"
                                        },
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.tsx",
                                        lineNumber: 101,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        style: {
                                            listStyle: "none",
                                            padding: 0
                                        },
                                        children: links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                style: {
                                                    marginBottom: "10px"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    style: {
                                                        fontFamily: "var(--font-body)",
                                                        fontSize: "14px",
                                                        color: "rgba(255,255,255,0.6)",
                                                        textDecoration: "none",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "8px",
                                                        transition: "color 0.3s"
                                                    },
                                                    onMouseEnter: (e)=>e.target.style.color = "#66BB6A",
                                                    onMouseLeave: (e)=>e.target.style.color = "rgba(255,255,255,0.6)",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: "#4CAF50",
                                                                fontSize: "10px"
                                                            },
                                                            children: "▶"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Footer.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 45
                                                        }, this),
                                                        l
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Footer.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 41
                                                }, this)
                                            }, l, false, {
                                                fileName: "[project]/app/components/Footer.tsx",
                                                lineNumber: 116,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.tsx",
                                        lineNumber: 114,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, title, true, {
                                fileName: "[project]/app/components/Footer.tsx",
                                lineNumber: 100,
                                columnNumber: 25
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    style: {
                                        fontFamily: "var(--font-heading)",
                                        fontWeight: 700,
                                        fontSize: "16px",
                                        color: "white",
                                        marginBottom: "22px",
                                        paddingBottom: "12px",
                                        borderBottom: "2px solid rgba(76,175,80,0.3)"
                                    },
                                    children: "İletişim"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Footer.tsx",
                                    lineNumber: 143,
                                    columnNumber: 25
                                }, this),
                                [
                                    {
                                        icon: "📍",
                                        text: "Bağcılar, İstanbul, Türkiye"
                                    },
                                    {
                                        icon: "📞",
                                        text: "0850 123 45 67"
                                    },
                                    {
                                        icon: "📧",
                                        text: "info@nutrilife.com.tr"
                                    },
                                    {
                                        icon: "⏰",
                                        text: "Pzt-Cmt: 09:00 - 19:00"
                                    }
                                ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: "12px",
                                            marginBottom: "16px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: "17px",
                                                    flexShrink: 0,
                                                    marginTop: "1px"
                                                },
                                                children: c.icon
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.tsx",
                                                lineNumber: 164,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "var(--font-body)",
                                                    fontSize: "14px",
                                                    color: "rgba(255,255,255,0.6)",
                                                    lineHeight: 1.5
                                                },
                                                children: c.text
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.tsx",
                                                lineNumber: 165,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, c.text, true, {
                                        fileName: "[project]/app/components/Footer.tsx",
                                        lineNumber: 163,
                                        columnNumber: 29
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: "24px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "var(--font-body)",
                                                fontSize: "13px",
                                                color: "rgba(255,255,255,0.6)",
                                                marginBottom: "10px"
                                            },
                                            children: "Sağlık ipuçları için abone olun:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Footer.tsx",
                                            lineNumber: 171,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: "8px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    placeholder: "E-posta adresiniz",
                                                    style: {
                                                        flex: 1,
                                                        padding: "10px 14px",
                                                        background: "rgba(255,255,255,0.08)",
                                                        border: "1px solid rgba(255,255,255,0.15)",
                                                        borderRadius: "10px",
                                                        color: "white",
                                                        fontFamily: "var(--font-body)",
                                                        fontSize: "13px",
                                                        outline: "none"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    style: {
                                                        padding: "10px 16px",
                                                        background: "linear-gradient(135deg, #2E7D32, #4CAF50)",
                                                        border: "none",
                                                        borderRadius: "10px",
                                                        color: "white",
                                                        cursor: "pointer",
                                                        fontSize: "16px"
                                                    },
                                                    "aria-label": "Abone ol",
                                                    children: "→"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Footer.tsx",
                                            lineNumber: 174,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Footer.tsx",
                                    lineNumber: 170,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 142,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Footer.tsx",
                    lineNumber: 30,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    padding: "20px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-custom",
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "12px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "var(--font-body)",
                                fontSize: "13px",
                                color: "rgba(255,255,255,0.45)"
                            },
                            children: "© 2025 NutriLife. Tüm hakları saklıdır. 🌿"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 227,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: "20px"
                            },
                            children: [
                                "Gizlilik Politikası",
                                "Kullanım Şartları",
                                "KVKK"
                            ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    style: {
                                        fontFamily: "var(--font-body)",
                                        fontSize: "12.5px",
                                        color: "rgba(255,255,255,0.45)",
                                        textDecoration: "none",
                                        transition: "color 0.3s"
                                    },
                                    onMouseEnter: (e)=>e.target.style.color = "#66BB6A",
                                    onMouseLeave: (e)=>e.target.style.color = "rgba(255,255,255,0.45)",
                                    children: l
                                }, l, false, {
                                    fileName: "[project]/app/components/Footer.tsx",
                                    lineNumber: 232,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 230,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Footer.tsx",
                    lineNumber: 217,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.tsx",
                lineNumber: 211,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; }
        }
        @media (max-width: 500px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
        input::placeholder { color: rgba(255,255,255,0.35) !important; }
      `
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.tsx",
                lineNumber: 252,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Footer.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/FeatureCards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeatureCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function FeatureCards() {
    const cards = [
        {
            title: "Sağlıklı Öğün İpuçları",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop",
            overlay: "rgba(0, 0, 0, 0.5)"
        },
        {
            title: "Yemek Tarifi Fikirleri",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1000&auto=format&fit=crop",
            overlay: "rgba(0, 0, 0, 0.4)"
        },
        {
            title: "Sağlıklı Lifestyle",
            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop",
            overlay: "rgba(0, 0, 0, 0.4)"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            padding: "60px 0",
            background: "white"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-custom",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: "30px"
                    },
                    className: "feature-cards-grid",
                    children: cards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "relative",
                                height: "350px",
                                borderRadius: "4px",
                                overflow: "hidden",
                                cursor: "pointer",
                                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                                transition: "all 0.4s ease"
                            },
                            className: "feature-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "absolute",
                                        inset: 0,
                                        backgroundImage: `url("${card.image}")`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        transition: "transform 0.6s ease"
                                    },
                                    className: "card-bg"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/FeatureCards.tsx",
                                    lineNumber: 48,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "absolute",
                                        inset: 0,
                                        background: card.overlay,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        padding: "20px",
                                        textAlign: "center",
                                        transition: "background 0.4s ease"
                                    },
                                    className: "card-overlay",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: "40px",
                                                height: "2px",
                                                background: "white",
                                                marginBottom: "15px"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/FeatureCards.tsx",
                                            lineNumber: 76,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                color: "white",
                                                fontFamily: "var(--font-heading)",
                                                fontSize: "28px",
                                                fontWeight: 600,
                                                textShadow: "0 2px 4px rgba(0,0,0,0.3)"
                                            },
                                            children: card.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/FeatureCards.tsx",
                                            lineNumber: 82,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/FeatureCards.tsx",
                                    lineNumber: 61,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/app/components/FeatureCards.tsx",
                            lineNumber: 34,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/components/FeatureCards.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/FeatureCards.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .feature-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        .feature-card:hover .card-bg {
          transform: scale(1.1);
        }
        .feature-card:hover .card-overlay {
          background: rgba(121, 163, 61, 0.75) !important;
        }
        @media (max-width: 991px) {
          .feature-cards-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .feature-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/components/FeatureCards.tsx",
                lineNumber: 97,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/FeatureCards.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}
_c = FeatureCards;
var _c;
__turbopack_context__.k.register(_c, "FeatureCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/InfoCardsSlider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InfoCardsGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function InfoCardsGrid() {
    const cards = [
        {
            title: "Doğal Gıdalar",
            description: "Sağlığınız için en taze ve doğal ürünlerle hazırlanan beslenme programları ile zinde kalın.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "70",
                height: "70",
                viewBox: "0 0 100 100",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M50 85C50 85 80 65 80 45C80 28.4315 66.5685 15 50 15C33.4315 15 20 28.4315 20 45C20 65 50 85 50 85Z",
                        stroke: "#79a33d",
                        strokeWidth: "4",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/app/components/InfoCardsSlider.tsx",
                        lineNumber: 10,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M50 55C55.5228 55 60 50.5228 60 45C60 39.4772 55.5228 35 50 35C44.4772 35 40 39.4772 40 45C40 50.5228 44.4772 55 50 55Z",
                        fill: "#79a33d"
                    }, void 0, false, {
                        fileName: "[project]/app/components/InfoCardsSlider.tsx",
                        lineNumber: 11,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M50 65C61.0457 65 70 56.0457 70 45C70 33.9543 61.0457 25 50 25C38.9543 25 30 33.9543 30 45C30 56.0457 38.9543 65 50 65Z",
                        stroke: "#79a33d",
                        strokeWidth: "2",
                        strokeDasharray: "4 4"
                    }, void 0, false, {
                        fileName: "[project]/app/components/InfoCardsSlider.tsx",
                        lineNumber: 12,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/InfoCardsSlider.tsx",
                lineNumber: 9,
                columnNumber: 17
            }, this)
        },
        {
            title: "Beslenme Planları",
            description: "Size özel analizler doğrultusunda hazırlanan, sürdürülebilir ve dengeli diyet listeleri.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "70",
                height: "70",
                viewBox: "0 0 100 100",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M35 25L40 85H60L65 25",
                        stroke: "#79a33d",
                        strokeWidth: "4",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/app/components/InfoCardsSlider.tsx",
                        lineNumber: 21,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M40 35H60",
                        stroke: "#79a33d",
                        strokeWidth: "2"
                    }, void 0, false, {
                        fileName: "[project]/app/components/InfoCardsSlider.tsx",
                        lineNumber: 22,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M55 15L45 40",
                        stroke: "#79a33d",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/app/components/InfoCardsSlider.tsx",
                        lineNumber: 23,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "70",
                        cy: "30",
                        r: "12",
                        stroke: "#79a33d",
                        strokeWidth: "3"
                    }, void 0, false, {
                        fileName: "[project]/app/components/InfoCardsSlider.tsx",
                        lineNumber: 24,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M70 18V42M58 30H82M61.5 21.5L78.5 38.5M61.5 38.5L78.5 21.5",
                        stroke: "#79a33d",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/app/components/InfoCardsSlider.tsx",
                        lineNumber: 25,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/InfoCardsSlider.tsx",
                lineNumber: 20,
                columnNumber: 17
            }, this)
        },
        {
            title: "Günlük Egzersiz",
            description: "Beslenme planınızı destekleyen, günlük yaşamınıza kolayca entegre edebileceğiniz hareket planları.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "70",
                height: "70",
                viewBox: "0 0 100 100",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "25",
                        y: "25",
                        width: "50",
                        height: "55",
                        rx: "4",
                        stroke: "#79a33d",
                        strokeWidth: "4"
                    }, void 0, false, {
                        fileName: "[project]/app/components/InfoCardsSlider.tsx",
                        lineNumber: 34,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "25",
                        y1: "40",
                        x2: "75",
                        y2: "40",
                        stroke: "#79a33d",
                        strokeWidth: "4"
                    }, void 0, false, {
                        fileName: "[project]/app/components/InfoCardsSlider.tsx",
                        lineNumber: 35,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "40",
                        y1: "20",
                        x2: "40",
                        y2: "30",
                        stroke: "#79a33d",
                        strokeWidth: "4"
                    }, void 0, false, {
                        fileName: "[project]/app/components/InfoCardsSlider.tsx",
                        lineNumber: 36,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "60",
                        y1: "20",
                        x2: "60",
                        y2: "30",
                        stroke: "#79a33d",
                        strokeWidth: "4"
                    }, void 0, false, {
                        fileName: "[project]/app/components/InfoCardsSlider.tsx",
                        lineNumber: 37,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "70",
                        cy: "75",
                        r: "10",
                        fill: "#79a33d"
                    }, void 0, false, {
                        fileName: "[project]/app/components/InfoCardsSlider.tsx",
                        lineNumber: 38,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M66 75L68.5 77.5L74 72",
                        stroke: "white",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/app/components/InfoCardsSlider.tsx",
                        lineNumber: 39,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/InfoCardsSlider.tsx",
                lineNumber: 33,
                columnNumber: 17
            }, this)
        },
        {
            title: "Sağlıklı Yaşam",
            description: "Daha iyi bir fiziksel ve zihinsel sağlık için bütüncül yaklaşımla geliştirilmiş çözümler.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "70",
                height: "70",
                viewBox: "0 0 100 100",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "50",
                        cy: "50",
                        r: "35",
                        stroke: "#79a33d",
                        strokeWidth: "4"
                    }, void 0, false, {
                        fileName: "[project]/app/components/InfoCardsSlider.tsx",
                        lineNumber: 48,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M35 50L45 60L65 40",
                        stroke: "#79a33d",
                        strokeWidth: "5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/app/components/InfoCardsSlider.tsx",
                        lineNumber: 49,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/InfoCardsSlider.tsx",
                lineNumber: 47,
                columnNumber: 17
            }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            padding: "100px 0",
            background: "white"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-custom",
                style: {
                    maxWidth: "1200px",
                    margin: "0 auto"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "20px"
                    },
                    className: "info-cards-grid",
                    children: cards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: "white",
                                padding: "60px 25px",
                                textAlign: "center",
                                border: "1px solid #e8e8e8",
                                borderRadius: "4px",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                transition: "all 0.3s ease"
                            },
                            className: "info-slide-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: "30px",
                                        height: "70px",
                                        display: "flex",
                                        alignItems: "center"
                                    },
                                    children: card.icon
                                }, void 0, false, {
                                    fileName: "[project]/app/components/InfoCardsSlider.tsx",
                                    lineNumber: 85,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    style: {
                                        fontFamily: "var(--font-heading)",
                                        fontSize: "20px",
                                        color: "#222",
                                        marginBottom: "15px",
                                        fontWeight: "600"
                                    },
                                    children: card.title
                                }, void 0, false, {
                                    fileName: "[project]/app/components/InfoCardsSlider.tsx",
                                    lineNumber: 88,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "var(--font-body)",
                                        fontSize: "14px",
                                        color: "#777",
                                        lineHeight: "1.6",
                                        marginBottom: "25px"
                                    },
                                    children: card.description
                                }, void 0, false, {
                                    fileName: "[project]/app/components/InfoCardsSlider.tsx",
                                    lineNumber: 97,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    style: {
                                        fontSize: "12px",
                                        fontWeight: "700",
                                        color: "#333",
                                        textTransform: "uppercase",
                                        letterSpacing: "1px",
                                        textDecoration: "none",
                                        marginTop: "auto",
                                        paddingBottom: "2px",
                                        borderBottom: "1px solid transparent",
                                        transition: "all 0.3s"
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.color = "#79a33d";
                                        e.currentTarget.style.borderBottomColor = "#79a33d";
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.color = "#333";
                                        e.currentTarget.style.borderBottomColor = "transparent";
                                    },
                                    children: "Daha Fazla Bilgi"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/InfoCardsSlider.tsx",
                                    lineNumber: 106,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/app/components/InfoCardsSlider.tsx",
                            lineNumber: 69,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/components/InfoCardsSlider.tsx",
                    lineNumber: 60,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/InfoCardsSlider.tsx",
                lineNumber: 57,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/app/components/InfoCardsSlider.tsx",
                lineNumber: 131,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/InfoCardsSlider.tsx",
        lineNumber: 56,
        columnNumber: 9
    }, this);
}
_c = InfoCardsGrid;
var _c;
__turbopack_context__.k.register(_c, "InfoCardsGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/TransformationSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TransformationSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function TransformationSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            padding: "100px 0",
            background: "#f9faf5",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-custom",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "1.1fr 1fr",
                        gap: "80px",
                        alignItems: "center"
                    },
                    className: "transformation-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "relative"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "relative",
                                        zIndex: 2,
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                        boxShadow: "0 20px 60px rgba(0,0,0,0.1)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop",
                                        alt: "Healthy Lifestyle",
                                        style: {
                                            width: "100%",
                                            height: "auto",
                                            display: "block"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/TransformationSection.tsx",
                                        lineNumber: 23,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/TransformationSection.tsx",
                                    lineNumber: 16,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "absolute",
                                        top: "-30px",
                                        left: "-30px",
                                        width: "100%",
                                        height: "100%",
                                        background: "rgba(121, 163, 61, 0.1)",
                                        borderRadius: "10px",
                                        zIndex: 1
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/TransformationSection.tsx",
                                    lineNumber: 30,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/TransformationSection.tsx",
                            lineNumber: 15,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "var(--font-heading)",
                                        fontSize: "42px",
                                        lineHeight: "1.2",
                                        color: "#333",
                                        marginBottom: "30px",
                                        fontWeight: "600"
                                    },
                                    children: [
                                        "Hayatınızı Gelecek ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/components/TransformationSection.tsx",
                                            lineNumber: 52,
                                            columnNumber: 48
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "#79a33d"
                                            },
                                            children: "90 Günlük Pratik"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/TransformationSection.tsx",
                                            lineNumber: 53,
                                            columnNumber: 29
                                        }, this),
                                        " İle Değiştirin"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/TransformationSection.tsx",
                                    lineNumber: 44,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "var(--font-body)",
                                        fontSize: "16px",
                                        color: "#666",
                                        lineHeight: "1.8",
                                        marginBottom: "50px",
                                        maxWidth: "500px"
                                    },
                                    children: "Sağlıklı bir yaşam tarzına geçiş yapmak zor olmak zorunda değil. Uzman rehberliğimizle, 90 gün içinde sürdürülebilir alışkanlıklar kazanabilir ve vücudunuzdaki değişimi hissedebilirsiniz."
                                }, void 0, false, {
                                    fileName: "[project]/app/components/TransformationSection.tsx",
                                    lineNumber: 56,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        gap: "30px"
                                    },
                                    className: "feature-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "15px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
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
                                                    },
                                                    children: "🥗"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TransformationSection.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    style: {
                                                        fontFamily: "var(--font-heading)",
                                                        fontSize: "18px",
                                                        fontWeight: "700",
                                                        color: "#333",
                                                        borderBottom: "2px solid #79a33d",
                                                        paddingBottom: "8px",
                                                        width: "fit-content"
                                                    },
                                                    children: "Kişiye Özel Beslenme Planı"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TransformationSection.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: "14px",
                                                        color: "#888",
                                                        lineHeight: "1.6"
                                                    },
                                                    children: "Vücut tipinize ve hedeflerinize uygun, lezzetli ve dengeli menüler."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TransformationSection.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/TransformationSection.tsx",
                                            lineNumber: 71,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "15px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
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
                                                    },
                                                    children: "💪"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TransformationSection.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    style: {
                                                        fontFamily: "var(--font-heading)",
                                                        fontSize: "18px",
                                                        fontWeight: "700",
                                                        color: "#333",
                                                        borderBottom: "2px solid #79a33d",
                                                        paddingBottom: "8px",
                                                        width: "fit-content"
                                                    },
                                                    children: "Kişiye Özel Egzersiz Planı"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TransformationSection.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: "14px",
                                                        color: "#888",
                                                        lineHeight: "1.6"
                                                    },
                                                    children: "Yaşam temponuza uyum sağlayan, etkili ve motive edici antrenmanlar."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TransformationSection.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/TransformationSection.tsx",
                                            lineNumber: 103,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/TransformationSection.tsx",
                                    lineNumber: 68,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/TransformationSection.tsx",
                            lineNumber: 43,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/TransformationSection.tsx",
                    lineNumber: 7,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/TransformationSection.tsx",
                lineNumber: 6,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/app/components/TransformationSection.tsx",
                lineNumber: 140,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TransformationSection.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
_c = TransformationSection;
var _c;
__turbopack_context__.k.register(_c, "TransformationSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_ad902e18._.js.map