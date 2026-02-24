(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/admin/clients/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ClientsPage() {
    _s();
    const [clients, setClients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isAddModalOpen, setIsAddModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditModalOpen, setIsEditModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newClient, setNewClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        full_name: "",
        height: "",
        weight: "",
        target_weight: "",
        age: "",
        gender: "Erkek"
    });
    const [editingClient, setEditingClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientsPage.useEffect": ()=>{
            fetchClients();
        }
    }["ClientsPage.useEffect"], []);
    async function fetchClients() {
        setLoading(true);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('*').eq('role', 'client').order('created_at', {
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
            const { createClient } = await __turbopack_context__.A("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript, async loader)");
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
                const { error: profileError } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('profiles').upsert({
                    id: authData.user.id,
                    full_name: newClient.full_name,
                    role: 'client',
                    height: Number(newClient.height),
                    weight: Number(newClient.weight),
                    target_weight: Number(newClient.target_weight),
                    age: Number(newClient.age),
                    gender: newClient.gender
                });
                if (profileError) throw profileError;
                alert('Danışan başarıyla eklendi!');
                setIsAddModalOpen(false);
                setNewClient({
                    full_name: "",
                    height: "",
                    weight: "",
                    target_weight: "",
                    age: "",
                    gender: "Erkek"
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
    const handleUpdateClient = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('profiles').update({
                full_name: editingClient.full_name,
                height: Number(editingClient.height),
                weight: Number(editingClient.weight),
                target_weight: Number(editingClient.target_weight),
                age: Number(editingClient.age),
                gender: editingClient.gender
            }).eq('id', editingClient.id);
            if (error) throw error;
            alert('Danışan başarıyla güncellendi!');
            setIsEditModalOpen(false);
            setEditingClient(null);
            fetchClients(); // Listeyi yenile
        } catch (error) {
            console.error('Güncelleme hatası:', error);
            alert('Danışan güncellenirken bir hata oluştu: ' + error.message);
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
        const { error, count } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('profiles').delete({
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
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "40px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    style: {
                                        fontSize: "32px",
                                        fontWeight: 700,
                                        color: "#2c3e50"
                                    },
                                    children: "Danışan Yönetimi"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/clients/page.tsx",
                                    lineNumber: 167,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: "#7f8c8d"
                                    },
                                    children: "Sisteme kayıtlı tüm danışanlarınızın listesi ve analiz verileri."
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/clients/page.tsx",
                                    lineNumber: 168,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/clients/page.tsx",
                            lineNumber: 166,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            lineNumber: 170,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/clients/page.tsx",
                    lineNumber: 165,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: "white",
                        borderRadius: "20px",
                        overflowX: "auto",
                        boxShadow: "0 10px 20px rgba(0,0,0,0.02)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        style: {
                            width: "100%",
                            borderCollapse: "collapse"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                style: {
                                    background: "#fcfdfe"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    style: {
                                        textAlign: "left"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: thStyle,
                                            children: "Ad Soyad"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/clients/page.tsx",
                                            lineNumber: 193,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: thStyle,
                                            children: "Boy"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/clients/page.tsx",
                                            lineNumber: 194,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: thStyle,
                                            children: "Kilo"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/clients/page.tsx",
                                            lineNumber: 195,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: thStyle,
                                            children: "VKI"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/clients/page.tsx",
                                            lineNumber: 196,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: thStyle,
                                            children: "BMH"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/clients/page.tsx",
                                            lineNumber: 197,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: thStyle,
                                            children: "Hedef"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/clients/page.tsx",
                                            lineNumber: 198,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: thStyle,
                                            children: "İşlemler"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/clients/page.tsx",
                                            lineNumber: 199,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/clients/page.tsx",
                                    lineNumber: 192,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/clients/page.tsx",
                                lineNumber: 191,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: 7,
                                        style: {
                                            padding: "50px",
                                            textAlign: "center",
                                            color: "#95a5a6"
                                        },
                                        children: "Yükleniyor..."
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/clients/page.tsx",
                                        lineNumber: 205,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/clients/page.tsx",
                                    lineNumber: 204,
                                    columnNumber: 33
                                }, this) : clients.length > 0 ? clients.map((client)=>{
                                    const bmi = (Number(client.weight) / (Number(client.height) / 100) ** 2).toFixed(1);
                                    const clientAge = Number(client.age) || 30; // Varsayılan 30 yaş
                                    const clientGender = client.gender || "Erkek";
                                    // BMH Hedef Kilo üzerinden hesaplanıyor
                                    let bmh = 0;
                                    const targetW = Number(client.target_weight) || Number(client.weight); // Hedef kilo yoksa mevcut kiloyu al
                                    if (clientGender === 'Kadın') {
                                        bmh = Math.round(10 * targetW + 6.25 * Number(client.height) - 5 * clientAge - 161);
                                    } else {
                                        bmh = Math.round(10 * targetW + 6.25 * Number(client.height) - 5 * clientAge + 5);
                                    }
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        style: {
                                            borderBottom: "1px solid #f1f1f1"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: tdStyle,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontWeight: 700,
                                                            color: "#2c3e50"
                                                        },
                                                        children: client.full_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/page.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                        lineNumber: 228,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 226,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: tdStyle,
                                                children: [
                                                    client.height,
                                                    " cm"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 230,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: tdStyle,
                                                children: [
                                                    client.weight,
                                                    " kg"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 231,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: tdStyle,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                    lineNumber: 233,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 232,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: tdStyle,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: "10px",
                                                                color: "#95a5a6",
                                                                fontWeight: "normal"
                                                            },
                                                            children: "kcal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/clients/page.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 54
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/clients/page.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 241,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: tdStyle,
                                                children: [
                                                    client.target_weight,
                                                    " kg"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 251,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: tdStyle,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        gap: "10px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                                            lineNumber: 254,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setEditingClient({
                                                                    ...client,
                                                                    target_weight: client.target_weight || client.weight
                                                                });
                                                                setIsEditModalOpen(true);
                                                            },
                                                            style: {
                                                                ...actionBtn,
                                                                color: "#3498db",
                                                                fontSize: "14px",
                                                                fontWeight: "bold",
                                                                padding: "8px 15px"
                                                            },
                                                            children: "Güncelle"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/clients/page.tsx",
                                                            lineNumber: 268,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                            lineNumber: 277,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/clients/page.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 252,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, client.id, true, {
                                        fileName: "[project]/app/admin/clients/page.tsx",
                                        lineNumber: 225,
                                        columnNumber: 37
                                    }, this);
                                }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: 7,
                                        style: {
                                            padding: "50px",
                                            textAlign: "center",
                                            color: "#95a5a6"
                                        },
                                        children: "Henüz kayıtlı danışan bulunmuyor."
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/clients/page.tsx",
                                        lineNumber: 284,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/clients/page.tsx",
                                    lineNumber: 283,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/clients/page.tsx",
                                lineNumber: 202,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/clients/page.tsx",
                        lineNumber: 190,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/admin/clients/page.tsx",
                    lineNumber: 189,
                    columnNumber: 17
                }, this),
                isAddModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'white',
                            padding: '30px',
                            borderRadius: '15px',
                            width: '90%',
                            maxWidth: '500px',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    marginTop: 0,
                                    marginBottom: '20px',
                                    color: '#2c3e50'
                                },
                                children: "Manuel Danışan Ekle"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/clients/page.tsx",
                                lineNumber: 304,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleAddClient,
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '15px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: labelStyle,
                                                children: "Ad Soyad"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 307,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                lineNumber: 308,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/clients/page.tsx",
                                        lineNumber: 306,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: '15px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: labelStyle,
                                                        children: "Boy (cm)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/page.tsx",
                                                        lineNumber: 312,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                        lineNumber: 313,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 311,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: labelStyle,
                                                        children: "Kilo (kg)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/page.tsx",
                                                        lineNumber: 316,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                        lineNumber: 317,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 315,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/clients/page.tsx",
                                        lineNumber: 310,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: '15px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: labelStyle,
                                                        children: "Hedef Kilo (kg)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/page.tsx",
                                                        lineNumber: 322,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                        lineNumber: 323,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 321,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: labelStyle,
                                                        children: "Yaş"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/page.tsx",
                                                        lineNumber: 326,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                        lineNumber: 327,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 325,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/clients/page.tsx",
                                        lineNumber: 320,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: labelStyle,
                                                children: "Cinsiyet"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 331,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                style: inputStyle,
                                                value: newClient.gender,
                                                onChange: (e)=>setNewClient({
                                                        ...newClient,
                                                        gender: e.target.value
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Erkek",
                                                        children: "Erkek"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/page.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Kadın",
                                                        children: "Kadın"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/page.tsx",
                                                        lineNumber: 334,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 332,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/clients/page.tsx",
                                        lineNumber: 330,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                            gap: '10px',
                                            marginTop: '20px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                lineNumber: 339,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                lineNumber: 345,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/clients/page.tsx",
                                        lineNumber: 338,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/clients/page.tsx",
                                lineNumber: 305,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/clients/page.tsx",
                        lineNumber: 300,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/admin/clients/page.tsx",
                    lineNumber: 295,
                    columnNumber: 21
                }, this),
                isEditModalOpen && editingClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'white',
                            padding: '30px',
                            borderRadius: '15px',
                            width: '90%',
                            maxWidth: '500px',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    marginTop: 0,
                                    marginBottom: '20px',
                                    color: '#2c3e50'
                                },
                                children: "Danışan Güncelle"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/clients/page.tsx",
                                lineNumber: 369,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleUpdateClient,
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '15px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: labelStyle,
                                                children: "Ad Soyad"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 372,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                required: true,
                                                type: "text",
                                                style: inputStyle,
                                                value: editingClient.full_name || "",
                                                onChange: (e)=>setEditingClient({
                                                        ...editingClient,
                                                        full_name: e.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 373,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/clients/page.tsx",
                                        lineNumber: 371,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: '15px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: labelStyle,
                                                        children: "Boy (cm)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/page.tsx",
                                                        lineNumber: 377,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        type: "number",
                                                        style: inputStyle,
                                                        value: editingClient.height || "",
                                                        onChange: (e)=>setEditingClient({
                                                                ...editingClient,
                                                                height: e.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/page.tsx",
                                                        lineNumber: 378,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 376,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: labelStyle,
                                                        children: "Kilo (kg)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/page.tsx",
                                                        lineNumber: 381,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        type: "number",
                                                        step: "0.1",
                                                        style: inputStyle,
                                                        value: editingClient.weight || "",
                                                        onChange: (e)=>setEditingClient({
                                                                ...editingClient,
                                                                weight: e.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/page.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 380,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/clients/page.tsx",
                                        lineNumber: 375,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: '15px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: labelStyle,
                                                        children: "Hedef Kilo (kg)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/page.tsx",
                                                        lineNumber: 387,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        type: "number",
                                                        step: "0.1",
                                                        style: inputStyle,
                                                        value: editingClient.target_weight || "",
                                                        onChange: (e)=>setEditingClient({
                                                                ...editingClient,
                                                                target_weight: e.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/page.tsx",
                                                        lineNumber: 388,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 386,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: labelStyle,
                                                        children: "Yaş"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/page.tsx",
                                                        lineNumber: 391,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        type: "number",
                                                        style: inputStyle,
                                                        value: editingClient.age || "",
                                                        onChange: (e)=>setEditingClient({
                                                                ...editingClient,
                                                                age: e.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/page.tsx",
                                                        lineNumber: 392,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 390,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/clients/page.tsx",
                                        lineNumber: 385,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: labelStyle,
                                                children: "Cinsiyet"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 396,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                style: inputStyle,
                                                value: editingClient.gender || "Erkek",
                                                onChange: (e)=>setEditingClient({
                                                        ...editingClient,
                                                        gender: e.target.value
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Erkek",
                                                        children: "Erkek"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/page.tsx",
                                                        lineNumber: 398,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Kadın",
                                                        children: "Kadın"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/page.tsx",
                                                        lineNumber: 399,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 397,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/clients/page.tsx",
                                        lineNumber: 395,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                            gap: '10px',
                                            marginTop: '20px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setIsEditModalOpen(false);
                                                    setEditingClient(null);
                                                },
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
                                                lineNumber: 404,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: isSubmitting,
                                                style: {
                                                    padding: '10px 20px',
                                                    border: 'none',
                                                    background: '#3498db',
                                                    color: 'white',
                                                    borderRadius: '8px',
                                                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                                    fontWeight: 600,
                                                    opacity: isSubmitting ? 0.7 : 1
                                                },
                                                children: isSubmitting ? 'Güncelleniyor...' : 'Güncelle'
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/clients/page.tsx",
                                                lineNumber: 410,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/clients/page.tsx",
                                        lineNumber: 403,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/clients/page.tsx",
                                lineNumber: 370,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/clients/page.tsx",
                        lineNumber: 365,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/admin/clients/page.tsx",
                    lineNumber: 360,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/clients/page.tsx",
            lineNumber: 163,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
_s(ClientsPage, "wkoxvv1DFvZCs7yHToJt3Mrx5aM=");
_c = ClientsPage;
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
var _c;
__turbopack_context__.k.register(_c, "ClientsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_admin_clients_page_tsx_4205ed7f._.js.map