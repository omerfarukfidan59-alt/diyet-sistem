(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/utils/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://gmdjktwstzuhlbnkfsmh.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "sb_publishable_4ZAWHxhYMwyCmz6K2OTnTw_gnWbcDXN");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/dashboard/menu/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientMenuPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ClientMenuPage() {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [diet, setDiet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeDay, setActiveDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientMenuPage.useEffect": ()=>{
            async function fetchData() {
                setLoading(true);
                const { data: { user: authUser } } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
                if (!authUser) {
                    router.push("/login");
                    return;
                }
                // 1. Kullanıcı Bilgilerini Çek
                const { data: profile } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('*').eq('id', authUser.id).single();
                if (profile) setUser(profile);
                // 2. Diyeti Çek
                const { data: dietData } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('diets').select('*').eq('client_id', authUser.id).eq('is_active', true).maybeSingle();
                if (dietData && dietData.content) {
                    setDiet(dietData.content);
                }
                // 3. İlerlemeyi Çek
                const { data: progressData } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('diet_progress').select('*').eq('client_id', authUser.id);
                if (progressData) {
                    const progObj = {};
                    progressData.forEach({
                        "ClientMenuPage.useEffect.fetchData": (p)=>{
                            progObj[p.day_number - 1] = {
                                completed: p.is_completed,
                                note: p.note
                            };
                        }
                    }["ClientMenuPage.useEffect.fetchData"]);
                    setProgress(progObj);
                }
                setLoading(false);
            }
            fetchData();
        }
    }["ClientMenuPage.useEffect"], [
        router
    ]);
    const handleSaveProgress = async ()=>{
        if (!user) return;
        setLoading(true);
        const currentProg = progress[activeDay] || {
            completed: false,
            note: ""
        };
        // 1. Bu gün için daha önce bir değerlendirme var mı kontrol et
        const { data: existingProgress } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('diet_progress').select('id').eq('client_id', user.id).eq('day_number', activeDay + 1).maybeSingle();
        let saveError;
        if (existingProgress) {
            // Varsa güncelle
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('diet_progress').update({
                is_completed: currentProg.completed,
                note: currentProg.note
            }).eq('id', existingProgress.id);
            saveError = error;
        } else {
            // Yoksa yeni ekle
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('diet_progress').insert({
                client_id: user.id,
                day_number: activeDay + 1,
                is_completed: currentProg.completed,
                note: currentProg.note
            });
            saveError = error;
        }
        if (saveError) {
            alert("Değerlendirme gönderilemedi: " + saveError.message);
        } else {
            alert("Değerlendirmeniz başarıyla kaydedildi! Diyetisyeniniz bunu görebilecektir.");
        }
        setLoading(false);
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Yükleniyor..."
    }, void 0, false, {
        fileName: "[project]/app/dashboard/menu/page.tsx",
        lineNumber: 112,
        columnNumber: 25
    }, this);
    if (!user) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Yükleniyor..."
    }, void 0, false, {
        fileName: "[project]/app/dashboard/menu/page.tsx",
        lineNumber: 113,
        columnNumber: 23
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                flex: 1,
                padding: "50px",
                display: "flex",
                flexDirection: "column"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: "40px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                fontSize: "32px",
                                fontWeight: 700,
                                color: "#333"
                            },
                            children: "Günlük Diyet Listem"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/menu/page.tsx",
                            lineNumber: 119,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: "#666"
                            },
                            children: "Diyetisyeniniz tarafından size özel hazırlanan beslenme programı."
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/menu/page.tsx",
                            lineNumber: 120,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/menu/page.tsx",
                    lineNumber: 118,
                    columnNumber: 17
                }, this),
                diet && diet.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: "10px",
                                marginBottom: "25px",
                                overflowX: "auto",
                                paddingBottom: "10px"
                            },
                            children: diet.map((d, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveDay(idx),
                                    style: {
                                        padding: "12px 25px",
                                        background: activeDay === idx ? "#79a33d" : "white",
                                        color: activeDay === idx ? "white" : "#333",
                                        border: `1px solid ${activeDay === idx ? "#79a33d" : "#e0e0e0"}`,
                                        borderRadius: "10px",
                                        fontWeight: 700,
                                        cursor: "pointer",
                                        transition: "all 0.2s"
                                    },
                                    children: [
                                        d.day || idx + 1,
                                        ". Gün"
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/app/dashboard/menu/page.tsx",
                                    lineNumber: 128,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/menu/page.tsx",
                            lineNumber: 126,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "25px"
                            },
                            children: [
                                {
                                    key: "breakfast",
                                    label: "Kahvaltı"
                                },
                                {
                                    key: "lunch",
                                    label: "Öğle Yemeği"
                                },
                                {
                                    key: "snacks",
                                    label: "Ara Öğünler"
                                },
                                {
                                    key: "dinner",
                                    label: "Akşam Yemeği"
                                }
                            ].map((meal)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: "white",
                                        padding: "25px",
                                        borderRadius: "15px",
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.03)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: "18px",
                                                fontWeight: 700,
                                                color: "#3d5a2d",
                                                marginBottom: "15px"
                                            },
                                            children: meal.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/menu/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 37
                                        }, this),
                                        diet[activeDay] && diet[activeDay][meal.key] && diet[activeDay][meal.key].length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            style: {
                                                width: "100%",
                                                borderCollapse: "collapse"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        style: {
                                                            textAlign: "left",
                                                            fontSize: "12px",
                                                            color: "#888",
                                                            borderBottom: "1px solid #f0f0f0"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                style: {
                                                                    padding: "10px"
                                                                },
                                                                children: "Besin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/menu/page.tsx",
                                                                lineNumber: 160,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                style: {
                                                                    padding: "10px"
                                                                },
                                                                children: "Porsiyon"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/menu/page.tsx",
                                                                lineNumber: 161,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                style: {
                                                                    padding: "10px",
                                                                    textAlign: "right"
                                                                },
                                                                children: "Kalori"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/menu/page.tsx",
                                                                lineNumber: 162,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/menu/page.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 49
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/menu/page.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: diet[activeDay][meal.key].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            style: {
                                                                borderBottom: "1px solid #f9f9f9"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: "12px 10px",
                                                                        fontWeight: 600,
                                                                        color: "#333"
                                                                    },
                                                                    children: item.food
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/menu/page.tsx",
                                                                    lineNumber: 168,
                                                                    columnNumber: 57
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: "12px 10px",
                                                                        color: "#666"
                                                                    },
                                                                    children: item.portion
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/menu/page.tsx",
                                                                    lineNumber: 169,
                                                                    columnNumber: 57
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: "12px 10px",
                                                                        color: "#79a33d",
                                                                        fontWeight: 700,
                                                                        textAlign: "right"
                                                                    },
                                                                    children: [
                                                                        item.cal,
                                                                        " kcal"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/menu/page.tsx",
                                                                    lineNumber: 170,
                                                                    columnNumber: 57
                                                                }, this)
                                                            ]
                                                        }, idx, true, {
                                                            fileName: "[project]/app/dashboard/menu/page.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 53
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/menu/page.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/menu/page.tsx",
                                            lineNumber: 157,
                                            columnNumber: 41
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: "#999",
                                                fontSize: "14px"
                                            },
                                            children: "Bu öğün için program belirtilmemiş."
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/menu/page.tsx",
                                            lineNumber: 176,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, meal.key, true, {
                                    fileName: "[project]/app/dashboard/menu/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/menu/page.tsx",
                            lineNumber: 147,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: "40px",
                                background: "white",
                                padding: "30px",
                                borderRadius: "20px",
                                boxShadow: "0 10px 30px rgba(0,0,0,0.03)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontSize: "20px",
                                        fontWeight: 800,
                                        color: "#2c3e50",
                                        marginBottom: "20px"
                                    },
                                    children: "Gün Sonu Değerlendirmesi"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/menu/page.tsx",
                                    lineNumber: 184,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: "#7f8c8d",
                                        fontSize: "14px",
                                        marginBottom: "20px"
                                    },
                                    children: "Diyetisyeninize bu günü nasıl geçirdiğinizi bildirin."
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/menu/page.tsx",
                                    lineNumber: 185,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        marginBottom: "20px",
                                        padding: "15px",
                                        background: "#f8f9fa",
                                        borderRadius: "10px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            id: "completedCheck",
                                            checked: progress[activeDay]?.completed || false,
                                            onChange: (e)=>{
                                                const newProg = {
                                                    ...progress
                                                };
                                                if (!newProg[activeDay]) newProg[activeDay] = {
                                                    completed: false,
                                                    note: ""
                                                };
                                                newProg[activeDay].completed = e.target.checked;
                                                setProgress(newProg);
                                            },
                                            style: {
                                                width: "20px",
                                                height: "20px",
                                                cursor: "pointer",
                                                accentColor: "#79a33d"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/menu/page.tsx",
                                            lineNumber: 188,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "completedCheck",
                                            style: {
                                                fontWeight: 600,
                                                color: "#333",
                                                cursor: "pointer",
                                                fontSize: "15px"
                                            },
                                            children: "Bugünkü listemi eksiksiz uyguladım ✅"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/menu/page.tsx",
                                            lineNumber: 200,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/menu/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: "20px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: "block",
                                                fontWeight: 600,
                                                color: "#333",
                                                marginBottom: "10px",
                                                fontSize: "15px"
                                            },
                                            children: "Diyetisyeninize bir not bırakın (İsteğe bağlı)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/menu/page.tsx",
                                            lineNumber: 206,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: progress[activeDay]?.note || "",
                                            onChange: (e)=>{
                                                const newProg = {
                                                    ...progress
                                                };
                                                if (!newProg[activeDay]) newProg[activeDay] = {
                                                    completed: false,
                                                    note: ""
                                                };
                                                newProg[activeDay].note = e.target.value;
                                                setProgress(newProg);
                                            },
                                            placeholder: "Örn: Akşam yemeğinde doyduğum için salatayı yarım bıraktım...",
                                            style: {
                                                width: "100%",
                                                padding: "15px",
                                                borderRadius: "10px",
                                                border: "1px solid #ddd",
                                                minHeight: "100px",
                                                fontFamily: "inherit",
                                                fontSize: "14px",
                                                resize: "vertical"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/menu/page.tsx",
                                            lineNumber: 207,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/menu/page.tsx",
                                    lineNumber: 205,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSaveProgress,
                                    style: {
                                        background: "#79a33d",
                                        color: "white",
                                        border: "none",
                                        padding: "15px 30px",
                                        borderRadius: "10px",
                                        fontWeight: 700,
                                        fontSize: "15px",
                                        cursor: "pointer",
                                        width: "100%",
                                        transition: "background 0.3s"
                                    },
                                    children: "Değerlendirmeyi Kaydet"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/menu/page.tsx",
                                    lineNumber: 229,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/menu/page.tsx",
                            lineNumber: 183,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: "white",
                        padding: "100px",
                        borderRadius: "20px",
                        textAlign: "center",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.03)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: "50px",
                                marginBottom: "20px"
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/menu/page.tsx",
                            lineNumber: 250,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                color: "#3d5a2d"
                            },
                            children: "Henüz Diyet Listeniz Hazır Değil"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/menu/page.tsx",
                            lineNumber: 251,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: "#888",
                                maxWidth: "400px",
                                margin: "10px auto"
                            },
                            children: "Diyetisyeniniz listenizi tamamladığında burada anlık olarak görebileceksiniz."
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/menu/page.tsx",
                            lineNumber: 252,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/menu/page.tsx",
                    lineNumber: 249,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/menu/page.tsx",
            lineNumber: 117,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
_s(ClientMenuPage, "V1x7bkYW5yk3S/UxStq4SS6lpSM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ClientMenuPage;
var _c;
__turbopack_context__.k.register(_c, "ClientMenuPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_918c7c84._.js.map