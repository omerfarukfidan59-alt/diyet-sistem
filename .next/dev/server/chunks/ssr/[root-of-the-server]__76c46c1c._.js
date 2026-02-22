module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/utils/supabase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-ssr] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://gmdjktwstzuhlbnkfsmh.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "sb_publishable_4ZAWHxhYMwyCmz6K2OTnTw_gnWbcDXN");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
}),
"[project]/app/dashboard/progress/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProgressPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function ProgressPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [weightLogs, setWeightLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newWeight, setNewWeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [logDate, setLogDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date().toISOString().split("T")[0]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchData() {
            setLoading(true);
            const { data: { user: authUser } } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
            if (!authUser) {
                router.push("/login");
                return;
            }
            // 1. Profil ve Hedef Kiloyu Çek
            const { data: profile } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('*').eq('id', authUser.id).single();
            if (profile) {
                setUser({
                    id: profile.id,
                    name: profile.full_name,
                    weight: Number(profile.weight),
                    targetWeight: Number(profile.target_weight)
                });
            }
            // 2. Kilo Loglarını Çek
            const { data: logs } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('weight_logs').select('*').eq('client_id', authUser.id).order('log_date', {
                ascending: true
            });
            if (logs && logs.length > 0) {
                setWeightLogs(logs.map((l)=>({
                        date: l.log_date,
                        weight: Number(l.weight)
                    })));
            } else if (profile && profile.weight) {
                // Eğer hiç log yoksa profil kilosunu ilk log olarak gösterelim
                setWeightLogs([
                    {
                        date: new Date().toISOString().split("T")[0],
                        weight: Number(profile.weight)
                    }
                ]);
            }
            setLoading(false);
        }
        fetchData();
    }, [
        router
    ]);
    const handleLogout = async ()=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
        router.push("/");
    };
    const handleAddWeight = async (e)=>{
        e.preventDefault();
        if (!newWeight || isNaN(Number(newWeight))) return alert("Geçerli bir kilo giriniz.");
        const targetDate = logDate || new Date().toISOString().split("T")[0];
        setLoading(true);
        // 1. Önce bu tarihte kayıt var mı kontrol et
        const { data: existingLog } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('weight_logs').select('id').eq('client_id', user.id).eq('log_date', targetDate).maybeSingle();
        let logError;
        if (existingLog) {
            // Varsa güncelle
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('weight_logs').update({
                weight: Number(newWeight)
            }).eq('id', existingLog.id);
            logError = error;
        } else {
            // Yoksa yeni ekle
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('weight_logs').insert({
                client_id: user.id,
                log_date: targetDate,
                weight: Number(newWeight)
            });
            logError = error;
        }
        if (logError) {
            alert("Kilo kaydedilemedi: " + logError.message);
            setLoading(false);
            return;
        }
        // 2. Profili Güncelle (Güncel Kilo Olarak)
        const { error: profileError } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('profiles').update({
            weight: Number(newWeight)
        }).eq('id', user.id);
        if (!profileError) {
            setUser({
                ...user,
                weight: Number(newWeight)
            });
        }
        // 3. Listeyi Yenile
        const { data: newLogs } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('weight_logs').select('*').eq('client_id', user.id).order('log_date', {
            ascending: true
        });
        if (newLogs) setWeightLogs(newLogs.map((l)=>({
                date: l.log_date,
                weight: Number(l.weight)
            })));
        setNewWeight("");
        setLoading(false);
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        children: "Yükleniyor..."
    }, void 0, false, {
        fileName: "[project]/app/dashboard/progress/page.tsx",
        lineNumber: 131,
        columnNumber: 25
    }, this);
    if (!user) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        children: "Yükleniyor..."
    }, void 0, false, {
        fileName: "[project]/app/dashboard/progress/page.tsx",
        lineNumber: 132,
        columnNumber: 23
    }, this);
    // --- CHART LOGIC ---
    const chartHeight = 300;
    const chartWidth = 800;
    const padding = 40;
    // Get min and max weights to scale the Y axis appropriately
    const weights = weightLogs.map((l)=>l.weight);
    const targetWeight = Number(user.targetWeight) || 0;
    const minWeight = Math.min(...weights, targetWeight) - 2;
    const maxWeight = Math.max(...weights, targetWeight) + 2;
    const weightRange = maxWeight - minWeight;
    // Generate path points
    const getX = (index)=>{
        if (weightLogs.length === 1) return chartWidth / 2;
        return padding + index * ((chartWidth - padding * 2) / (weightLogs.length - 1));
    };
    const getY = (weight)=>{
        return chartHeight - padding - (weight - minWeight) / weightRange * (chartHeight - padding * 2);
    };
    const targetY = getY(targetWeight);
    const pathData = weightLogs.map((log, index)=>{
        const x = getX(index);
        const y = getY(log.weight);
        return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "100vh",
            background: "#f9faf5",
            display: "flex",
            fontFamily: "var(--font-body)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "260px",
                    background: "#3d5a2d",
                    color: "white",
                    padding: "30px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: "20px",
                                    fontWeight: 800,
                                    textTransform: "uppercase",
                                    letterSpacing: "1px"
                                },
                                children: user.name
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/progress/page.tsx",
                                lineNumber: 170,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: "12px",
                                    opacity: 0.7,
                                    marginTop: "5px"
                                },
                                children: "Danışan Paneli"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/progress/page.tsx",
                                lineNumber: 171,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/progress/page.tsx",
                        lineNumber: 169,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard",
                                style: navLink,
                                children: "Özet ve Analiz"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/progress/page.tsx",
                                lineNumber: 175,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard/menu",
                                style: navLink,
                                children: "Diyet Listem"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/progress/page.tsx",
                                lineNumber: 176,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard/profile",
                                style: navLink,
                                children: "Profilim"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/progress/page.tsx",
                                lineNumber: 177,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard/progress",
                                style: activeNavLink,
                                children: "Gelişim Grafiği"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/progress/page.tsx",
                                lineNumber: 178,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "#",
                                style: navLink,
                                children: "Ayarlar"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/progress/page.tsx",
                                lineNumber: 179,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/progress/page.tsx",
                        lineNumber: 174,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: "auto"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleLogout,
                            style: {
                                background: "none",
                                border: "none",
                                color: "white",
                                cursor: "pointer",
                                fontSize: "14px",
                                opacity: 0.8,
                                padding: 0
                            },
                            children: "Çıkış Yap"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/progress/page.tsx",
                            lineNumber: 183,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/progress/page.tsx",
                        lineNumber: 182,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/progress/page.tsx",
                lineNumber: 168,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    padding: "50px 40px",
                    overflowY: "auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: "100%",
                        maxWidth: "1000px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginBottom: "40px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    style: {
                                        fontSize: "32px",
                                        fontWeight: 700,
                                        color: "#333",
                                        marginBottom: "10px"
                                    },
                                    children: "Gelişim Grafiği"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/progress/page.tsx",
                                    lineNumber: 192,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: "#666"
                                    },
                                    children: "Zaman içindeki kilo değişiminizi ve hedefinize olan uzaklığınızı buradan takip edebilirsiniz."
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/progress/page.tsx",
                                    lineNumber: 193,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/progress/page.tsx",
                            lineNumber: 191,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                gap: "25px",
                                marginBottom: "40px"
                            },
                            className: "stats-grid-mobile",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: statCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: statLabel,
                                            children: "Güncel Kilo"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/progress/page.tsx",
                                            lineNumber: 199,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: statValue,
                                            children: [
                                                user.weight,
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: "16px",
                                                        color: "#95a5a6"
                                                    },
                                                    children: "kg"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/progress/page.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 66
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/progress/page.tsx",
                                            lineNumber: 200,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/progress/page.tsx",
                                    lineNumber: 198,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: statCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: statLabel,
                                            children: "Hedef Kilo"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/progress/page.tsx",
                                            lineNumber: 203,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: statValue,
                                            children: [
                                                targetWeight,
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: "16px",
                                                        color: "#95a5a6"
                                                    },
                                                    children: "kg"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/progress/page.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 67
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/progress/page.tsx",
                                            lineNumber: 204,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/progress/page.tsx",
                                    lineNumber: 202,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        ...statCard,
                                        background: "#79a33d",
                                        color: "white"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                ...statLabel,
                                                color: "rgba(255,255,255,0.8)"
                                            },
                                            children: "Kalan Yol"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/progress/page.tsx",
                                            lineNumber: 207,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                ...statValue,
                                                color: "white"
                                            },
                                            children: [
                                                Math.abs(Number(user.weight) - targetWeight).toFixed(1),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: "16px",
                                                        color: "rgba(255,255,255,0.8)"
                                                    },
                                                    children: "kg"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/progress/page.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 91
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/progress/page.tsx",
                                            lineNumber: 208,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/progress/page.tsx",
                                    lineNumber: 206,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/progress/page.tsx",
                            lineNumber: 197,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: "white",
                                padding: "40px",
                                borderRadius: "20px",
                                boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
                                marginBottom: "40px",
                                overflowX: "auto"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginBottom: "30px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: "20px",
                                                fontWeight: 700,
                                                color: "#3d5a2d"
                                            },
                                            children: "Kilo Değişim Grafiği"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/progress/page.tsx",
                                            lineNumber: 217,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: "14px",
                                                color: "#7f8c8d",
                                                fontWeight: 600
                                            },
                                            children: "Dikey: Kilo (kg) | Yatay: Tarih (Gün)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/progress/page.tsx",
                                            lineNumber: 218,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/progress/page.tsx",
                                    lineNumber: 216,
                                    columnNumber: 25
                                }, this),
                                weightLogs.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        minWidth: "600px",
                                        position: "relative"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "100%",
                                        height: chartHeight,
                                        viewBox: `0 0 ${chartWidth} ${chartHeight}`,
                                        style: {
                                            overflow: "visible"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: padding,
                                                y1: padding - 30,
                                                x2: padding,
                                                y2: chartHeight - padding,
                                                stroke: "#bdc3c7",
                                                strokeWidth: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/progress/page.tsx",
                                                lineNumber: 226,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: padding,
                                                y: padding - 40,
                                                fill: "#2c3e50",
                                                fontSize: "13",
                                                fontWeight: "bold",
                                                textAnchor: "middle",
                                                children: "Kilo (kg)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/progress/page.tsx",
                                                lineNumber: 227,
                                                columnNumber: 37
                                            }, this),
                                            [
                                                0,
                                                0.25,
                                                0.5,
                                                0.75,
                                                1
                                            ].map((ratio, i)=>{
                                                const y = padding + (chartHeight - padding * 2) * ratio;
                                                const labelWeight = maxWeight - weightRange * ratio;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: padding,
                                                            y1: y,
                                                            x2: chartWidth - padding + 20,
                                                            y2: y,
                                                            stroke: "#f0f0f0",
                                                            strokeWidth: "1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/progress/page.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                            x: padding - 10,
                                                            y: y + 4,
                                                            fill: "#95a5a6",
                                                            fontSize: "11",
                                                            textAnchor: "end",
                                                            children: labelWeight.toFixed(1)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/progress/page.tsx",
                                                            lineNumber: 235,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/app/dashboard/progress/page.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 45
                                                }, this);
                                            }),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: padding,
                                                y1: chartHeight - padding,
                                                x2: chartWidth - padding + 40,
                                                y2: chartHeight - padding,
                                                stroke: "#bdc3c7",
                                                strokeWidth: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/progress/page.tsx",
                                                lineNumber: 241,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: chartWidth - padding + 55,
                                                y: chartHeight - padding + 4,
                                                fill: "#2c3e50",
                                                fontSize: "13",
                                                fontWeight: "bold",
                                                textAnchor: "start",
                                                children: "Gün"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/progress/page.tsx",
                                                lineNumber: 242,
                                                columnNumber: 37
                                            }, this),
                                            targetWeight > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: padding,
                                                        y1: targetY,
                                                        x2: chartWidth - padding + 20,
                                                        y2: targetY,
                                                        stroke: "#e74c3c",
                                                        strokeWidth: "2",
                                                        strokeDasharray: "5,5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/progress/page.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: chartWidth - padding + 30,
                                                        y: targetY + 4,
                                                        fill: "#e74c3c",
                                                        fontSize: "12",
                                                        fontWeight: "bold",
                                                        children: [
                                                            "Hedef: ",
                                                            targetWeight,
                                                            "kg"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/progress/page.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/progress/page.tsx",
                                                lineNumber: 246,
                                                columnNumber: 41
                                            }, this),
                                            weightLogs.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: pathData,
                                                fill: "none",
                                                stroke: "#79a33d",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/progress/page.tsx",
                                                lineNumber: 254,
                                                columnNumber: 41
                                            }, this) : weightLogs.length === 1 && /* If only 1 point exists, draw a flat dotted line backwards to show history start */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: padding,
                                                y1: getY(weightLogs[0].weight),
                                                x2: getX(0),
                                                y2: getY(weightLogs[0].weight),
                                                stroke: "#79a33d",
                                                strokeWidth: "4",
                                                strokeDasharray: "10,10",
                                                opacity: 0.3
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/progress/page.tsx",
                                                lineNumber: 257,
                                                columnNumber: 41
                                            }, this),
                                            weightLogs.map((log, index)=>{
                                                const x = getX(index);
                                                const y = getY(log.weight);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: x,
                                                            cy: y,
                                                            r: "6",
                                                            fill: "#79a33d",
                                                            stroke: "white",
                                                            strokeWidth: "2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/progress/page.tsx",
                                                            lineNumber: 267,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: x,
                                                            cy: y,
                                                            r: "10",
                                                            fill: "transparent",
                                                            stroke: "#79a33d",
                                                            strokeWidth: "2",
                                                            opacity: "0.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/progress/page.tsx",
                                                            lineNumber: 268,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                            x: x,
                                                            y: y - 20,
                                                            textAnchor: "middle",
                                                            fill: "#2c3e50",
                                                            fontSize: "13",
                                                            fontWeight: "bold",
                                                            children: [
                                                                log.weight,
                                                                "kg"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/progress/page.tsx",
                                                            lineNumber: 269,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: x,
                                                            y1: chartHeight - padding,
                                                            x2: x,
                                                            y2: chartHeight - padding + 5,
                                                            stroke: "#bdc3c7",
                                                            strokeWidth: "2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/progress/page.tsx",
                                                            lineNumber: 272,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                            x: x,
                                                            y: chartHeight - padding + 20,
                                                            textAnchor: "middle",
                                                            fill: "#95a5a6",
                                                            fontSize: "11",
                                                            children: new Date(log.date).toLocaleDateString('tr-TR', {
                                                                day: 'numeric',
                                                                month: 'short'
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/progress/page.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/app/dashboard/progress/page.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 45
                                                }, this);
                                            })
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/progress/page.tsx",
                                        lineNumber: 223,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/progress/page.tsx",
                                    lineNumber: 222,
                                    columnNumber: 29
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: "center",
                                        padding: "50px",
                                        color: "#95a5a6"
                                    },
                                    children: "Henüz yeterli kilo verisi girilmedi."
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/progress/page.tsx",
                                    lineNumber: 280,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/progress/page.tsx",
                            lineNumber: 215,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: "white",
                                padding: "40px",
                                borderRadius: "20px",
                                boxShadow: "0 10px 40px rgba(0,0,0,0.04)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontSize: "18px",
                                        fontWeight: 700,
                                        color: "#333",
                                        marginBottom: "20px"
                                    },
                                    children: "Yeni Tartım Ekle"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/progress/page.tsx",
                                    lineNumber: 286,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleAddWeight,
                                    style: {
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "15px",
                                        alignItems: "flex-end"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                minWidth: "200px",
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "8px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        fontSize: "13px",
                                                        fontWeight: 700,
                                                        color: "#666"
                                                    },
                                                    children: "Tarih Seçimi"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/progress/page.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    value: logDate,
                                                    onChange: (e)=>setLogDate(e.target.value),
                                                    style: {
                                                        padding: "15px 20px",
                                                        borderRadius: "10px",
                                                        border: "1px solid #e0e0e0",
                                                        outline: "none",
                                                        fontSize: "15px",
                                                        fontWeight: 600,
                                                        fontFamily: "inherit"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/progress/page.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/progress/page.tsx",
                                            lineNumber: 289,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                minWidth: "200px",
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "8px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        fontSize: "13px",
                                                        fontWeight: 700,
                                                        color: "#666"
                                                    },
                                                    children: "Kilonuz (kg)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/progress/page.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    step: "0.1",
                                                    value: newWeight,
                                                    onChange: (e)=>setNewWeight(e.target.value),
                                                    placeholder: "Örn: 74.5",
                                                    style: {
                                                        padding: "15px 20px",
                                                        borderRadius: "10px",
                                                        border: "1px solid #e0e0e0",
                                                        outline: "none",
                                                        fontSize: "15px",
                                                        fontWeight: 600
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/progress/page.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/progress/page.tsx",
                                            lineNumber: 307,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            style: {
                                                background: "#79a33d",
                                                color: "white",
                                                padding: "15px 30px",
                                                borderRadius: "10px",
                                                border: "none",
                                                fontSize: "15px",
                                                fontWeight: 700,
                                                cursor: "pointer",
                                                boxShadow: "0 10px 20px rgba(121, 163, 61, 0.2)"
                                            },
                                            children: "++ Ekle"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/progress/page.tsx",
                                            lineNumber: 326,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/progress/page.tsx",
                                    lineNumber: 287,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/progress/page.tsx",
                            lineNumber: 285,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/progress/page.tsx",
                    lineNumber: 189,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/progress/page.tsx",
                lineNumber: 188,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
            @media (max-width: 1024px) {
                .stats-grid-mobile {
                    grid-template-columns: 1fr !important;
                }
            }
            `
            }, void 0, false, {
                fileName: "[project]/app/dashboard/progress/page.tsx",
                lineNumber: 345,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/progress/page.tsx",
        lineNumber: 165,
        columnNumber: 9
    }, this);
}
const statCard = {
    background: "white",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
};
const statLabel = {
    fontSize: "14px",
    fontWeight: 700,
    color: "#7f8c8d",
    marginBottom: "5px",
    textTransform: "uppercase",
    letterSpacing: "1px"
};
const statValue = {
    fontSize: "36px",
    fontWeight: 800,
    color: "#2c3e50"
};
const navLink = {
    padding: "12px 15px",
    borderRadius: "8px",
    color: "white",
    textDecoration: "none",
    fontSize: "14px",
    transition: "background 0.3s",
    opacity: 0.8
};
const activeNavLink = {
    ...navLink,
    background: "rgba(255,255,255,0.1)",
    opacity: 1,
    fontWeight: 700
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__76c46c1c._.js.map