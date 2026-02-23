module.exports = [
"[project]/app/admin/clients/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ClientsPage() {
    const [clients, setClients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isAddModalOpen, setIsAddModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newClient, setNewClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        full_name: "",
        height: "",
        weight: "",
        target_weight: "",
        age: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchClients();
    }, []);
    async function fetchClients() {
        setLoading(true);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('*').eq('role', 'client').order('created_at', {
            ascending: false
        });
        if (!error && data) {
            setClients(data);
        }
        setLoading(false);
    }
    const handleAddClient = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        try {
            // Create a secondary supabase client that doesn't persist session
            // so we don't log out the admin
            const { createClient } = await __turbopack_context__.A("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-ssr] (ecmascript, async loader)");
            const authClient = createClient(("TURBOPACK compile-time value", "https://gmdjktwstzuhlbnkfsmh.supabase.co"), ("TURBOPACK compile-time value", "sb_publishable_4ZAWHxhYMwyCmz6K2OTnTw_gnWbcDXN"), {
                auth: {
                    autoRefreshToken: false,
                    persistSession: false,
                    detectSessionInUrl: false
                }
            });
            const email = `manual_${Date.now()}@diyet.local`;
            const password = 'Password' + Math.random().toString(36).slice(-8) + '!';
            const { data: authData, error: authError } = await authClient.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: newClient.full_name,
                        role: 'client'
                    }
                }
            });
            if (authError) throw authError;
            if (authData.user) {
                const { error: profileError } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('profiles').upsert({
                    id: authData.user.id,
                    full_name: newClient.full_name,
                    role: 'client',
                    height: Number(newClient.height),
                    weight: Number(newClient.weight),
                    target_weight: Number(newClient.target_weight),
                    age: Number(newClient.age)
                });
                if (profileError) throw profileError;
                alert('Danışan başarıyla eklendi!');
                setIsAddModalOpen(false);
                setNewClient({
                    full_name: "",
                    height: "",
                    weight: "",
                    target_weight: "",
                    age: ""
                });
                fetchClients(); // Refresh list
            }
        } catch (error) {
            console.error('Ekleme hatası:', error);
            alert('Danışan eklenirken bir hata oluştu: ' + error.message);
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleDeleteClient = async (clientId, clientName)=>{
        if (!window.confirm(`${clientName} isimli danışanı silmek istediğinize emin misiniz? Bu işlem geri alınamaz ve o kişiye ait tüm veriler (diyet, gelişim, kilo, giriş hesabı) kalıcı olarak silinir.`)) return;
        // Yerel verileri temizle (Güvenlik amaçlı)
        localStorage.removeItem(`diet_${clientId}`);
        localStorage.removeItem(`dietProgress_${clientId}`);
        localStorage.removeItem(`weightLogs_${clientId}`);
        // Supabase Silme İşlemi (DB tarafındaki CASCADE ve TRIGGER sayesinde her şeyi siler)
        const { error, count } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('profiles').delete({
            count: 'exact'
        }).eq('id', clientId);
        if (error) {
            console.error("Silme hatası:", error);
            alert("Silme işlemi başarısız: " + error.message);
        } else if (count === 0) {
            alert("Uyarı: Kullanıcı veritabanında bulunamadı veya silme izniniz yok (RLS). Lütfen SQL politikalarını kontrol edin.");
        } else {
            // Arayüzden kaldır
            setClients(clients.filter((c)=>c.id !== clientId));
            alert("Danışan ve tüm verileri başarıyla silindi.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                flex: 1,
                padding: "50px",
                display: "flex",
                flexDirection: "column"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "40px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    style: {
                                        fontSize: "32px",
                                        fontWeight: 700,
                                        color: "#2c3e50"
                                    },
                                    children: "Danışan Yönetimi"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/clients/page.tsx",
                                    lineNumber: 132,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: "#7f8c8d"
                                    },
                                    children: "Sisteme kayıtlı tüm danışanlarınızın listesi ve analiz verileri."
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/clients/page.tsx",
                                    lineNumber: 133,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/clients/page.tsx",
                            lineNumber: 131,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsAddModalOpen(true),
                            style: {
                                background: "#79a33d",
                                color: "white",
                                border: "none",
                                padding: "12px 24px",
                                borderRadius: "10px",
                                fontSize: "15px",
                                fontWeight: 600,
                                cursor: "pointer",
                                boxShadow: "0 4px 6px rgba(121, 163, 61, 0.2)"
                            },
                            children: "+ Danışan Ekle"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/clients/page.tsx",
                            lineNumber: 135,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/clients/page.tsx",
                    lineNumber: 130,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: "white",
                        borderRadius: "20px",
                        overflowX: "auto",
                        boxShadow: "0 10px 20px rgba(0,0,0,0.02)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        style: {
                            width: "100%",
                            borderCollapse: "collapse"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                style: {
                                    background: "#fcfdfe"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    style: {
                                        textAlign: "left"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: thStyle,
                                            children: "Ad Soyad"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/clients/page.tsx",
                                            lineNumber: 158,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: thStyle,
                                            children: "Boy"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/clients/page.tsx",
                                            lineNumber: 159,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: thStyle,
                                            children: "Kilo"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/clients/page.tsx",
                                            lineNumber: 160,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: thStyle,
                                            children: "VKI"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/clients/page.tsx",
                                            lineNumber: 161,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: thStyle,
                                            children: "BMH"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/clients/page.tsx",
                                            lineNumber: 162,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: thStyle,
                                            children: "Hedef"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/clients/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: thStyle,
                                            children: "İşlemler"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/clients/page.tsx",
                                            lineNumber: 164,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/clients/page.tsx",
                                    lineNumber: 157,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/clients/page.tsx",
                                lineNumber: 156,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: 7,
                                        style: {
                                            padding: "50px",
                                            textAlign: "center",
                                            color: "#95a5a6"
                                        },
                                        children: "Yükleniyor..."
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/clients/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/clients/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 33
                                }, this) : clients.length > 0 ? clients.map((client)=>{
                                    const bmi = (Number(client.weight) / (Number(client.height) / 100) ** 2).toFixed(1);
                                    const clientAge = Number(client.age) || 30; // Varsayılan 30 yaş
                                    const bmh = Math.round(10 * Number(client.weight) + 6.25 * Number(client.height) - 5 * clientAge + 5);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        style: {
                                            borderBottom: "1px solid #f1f1f1"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: tdStyle,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontWeight: 700,
                                                            color: "#2c3e50"
                                                        },
                                                        children: client.full_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/page.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "12px",
                                                            color: "#95a5a6"
                                                        },
                                                        children: [
                                                            client.height,
                                                            " cm | ",
                                                            client.weight,
                                                            " kg"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/clients/page.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 181,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: tdStyle,
                                                children: [
                                                    client.height,
                                                    " cm"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 185,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: tdStyle,
                                                children: [
                                                    client.weight,
                                                    " kg"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 186,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: tdStyle,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        background: "#f1f1f1",
                                                        padding: "4px 10px",
                                                        borderRadius: "20px",
                                                        fontSize: "13px",
                                                        fontWeight: 600
                                                    },
                                                    children: bmi
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/clients/page.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 187,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: tdStyle,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        background: "#f8f9fa",
                                                        color: "#e67e22",
                                                        padding: "4px 10px",
                                                        borderRadius: "20px",
                                                        fontSize: "13px",
                                                        fontWeight: 700
                                                    },
                                                    children: [
                                                        bmh,
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: "10px",
                                                                color: "#95a5a6",
                                                                fontWeight: "normal"
                                                            },
                                                            children: "kcal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/clients/page.tsx",
                                                            lineNumber: 204,
                                                            columnNumber: 54
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/clients/page.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 196,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: tdStyle,
                                                children: [
                                                    client.target_weight,
                                                    " kg"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 206,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: tdStyle,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        gap: "10px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/admin/clients/${client.id}/diet`,
                                                            style: {
                                                                textDecoration: "none",
                                                                background: "#79a33d",
                                                                color: "white",
                                                                padding: "8px 15px",
                                                                borderRadius: "8px",
                                                                fontSize: "13px",
                                                                fontWeight: 700
                                                            },
                                                            children: "Diyet Hazırla"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/clients/page.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleDeleteClient(client.id, client.full_name),
                                                            style: {
                                                                ...actionBtn,
                                                                color: "#e74c3c",
                                                                fontSize: "14px",
                                                                fontWeight: "bold",
                                                                padding: "8px 15px"
                                                            },
                                                            children: "Sil"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/clients/page.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/clients/page.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 207,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, client.id, true, {
                                        fileName: "[project]/app/admin/clients/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 37
                                    }, this);
                                }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: 7,
                                        style: {
                                            padding: "50px",
                                            textAlign: "center",
                                            color: "#95a5a6"
                                        },
                                        children: "Henüz kayıtlı danışan bulunmuyor."
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/clients/page.tsx",
                                        lineNumber: 230,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/clients/page.tsx",
                                    lineNumber: 229,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/clients/page.tsx",
                                lineNumber: 167,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/clients/page.tsx",
                        lineNumber: 155,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/admin/clients/page.tsx",
                    lineNumber: 154,
                    columnNumber: 17
                }, this),
                isAddModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'white',
                            padding: '30px',
                            borderRadius: '15px',
                            width: '90%',
                            maxWidth: '500px',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    marginTop: 0,
                                    marginBottom: '20px',
                                    color: '#2c3e50'
                                },
                                children: "Manuel Danışan Ekle"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/clients/page.tsx",
                                lineNumber: 250,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleAddClient,
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '15px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: labelStyle,
                                                children: "Ad Soyad"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 253,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                required: true,
                                                type: "text",
                                                style: inputStyle,
                                                value: newClient.full_name,
                                                onChange: (e)=>setNewClient({
                                                        ...newClient,
                                                        full_name: e.target.value
                                                    }),
                                                placeholder: "Örn: Ali Yılmaz"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 254,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/clients/page.tsx",
                                        lineNumber: 252,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: '15px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: labelStyle,
                                                        children: "Boy (cm)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/page.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        type: "number",
                                                        style: inputStyle,
                                                        value: newClient.height,
                                                        onChange: (e)=>setNewClient({
                                                                ...newClient,
                                                                height: e.target.value
                                                            }),
                                                        placeholder: "180"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/page.tsx",
                                                        lineNumber: 259,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 257,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: labelStyle,
                                                        children: "Kilo (kg)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/page.tsx",
                                                        lineNumber: 262,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        type: "number",
                                                        step: "0.1",
                                                        style: inputStyle,
                                                        value: newClient.weight,
                                                        onChange: (e)=>setNewClient({
                                                                ...newClient,
                                                                weight: e.target.value
                                                            }),
                                                        placeholder: "75"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/page.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 261,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/clients/page.tsx",
                                        lineNumber: 256,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: '15px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: labelStyle,
                                                        children: "Hedef Kilo (kg)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/page.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        type: "number",
                                                        step: "0.1",
                                                        style: inputStyle,
                                                        value: newClient.target_weight,
                                                        onChange: (e)=>setNewClient({
                                                                ...newClient,
                                                                target_weight: e.target.value
                                                            }),
                                                        placeholder: "70"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/page.tsx",
                                                        lineNumber: 269,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 267,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: labelStyle,
                                                        children: "Yaş"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/page.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        type: "number",
                                                        style: inputStyle,
                                                        value: newClient.age,
                                                        onChange: (e)=>setNewClient({
                                                                ...newClient,
                                                                age: e.target.value
                                                            }),
                                                        placeholder: "30"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/page.tsx",
                                                        lineNumber: 273,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 271,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/clients/page.tsx",
                                        lineNumber: 266,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                            gap: '10px',
                                            marginTop: '20px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setIsAddModalOpen(false),
                                                style: {
                                                    padding: '10px 20px',
                                                    border: 'none',
                                                    background: '#ecf0f1',
                                                    color: '#7f8c8d',
                                                    borderRadius: '8px',
                                                    cursor: 'pointer',
                                                    fontWeight: 600
                                                },
                                                children: "İptal"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 278,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: isSubmitting,
                                                style: {
                                                    padding: '10px 20px',
                                                    border: 'none',
                                                    background: '#79a33d',
                                                    color: 'white',
                                                    borderRadius: '8px',
                                                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                                    fontWeight: 600,
                                                    opacity: isSubmitting ? 0.7 : 1
                                                },
                                                children: isSubmitting ? 'Ekleniyor...' : 'Kaydet'
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 284,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/clients/page.tsx",
                                        lineNumber: 277,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/clients/page.tsx",
                                lineNumber: 251,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/clients/page.tsx",
                        lineNumber: 246,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/admin/clients/page.tsx",
                    lineNumber: 241,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/clients/page.tsx",
            lineNumber: 128,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
const thStyle = {
    padding: "20px",
    color: "#95a5a6",
    fontSize: "13px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontWeight: 700
};
const tdStyle = {
    padding: "20px",
    color: "#2c3e50",
    fontSize: "15px"
};
const actionBtn = {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "18px",
    padding: "5px",
    borderRadius: "5px",
    transition: "background 0.3s"
};
const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontSize: '14px',
    fontWeight: 600,
    color: '#34495e'
};
const inputStyle = {
    width: '100%',
    padding: '10px 15px',
    border: '1px solid #bdc3c7',
    borderRadius: '8px',
    fontSize: '15px',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color 0.3s'
};
}),
];

//# sourceMappingURL=app_admin_clients_page_tsx_6abc9dee._.js.map