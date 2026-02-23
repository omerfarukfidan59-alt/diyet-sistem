(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/utils/calorieCalculator.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateCalories",
    ()=>calculateCalories,
    "parseUnitAndAmount",
    ()=>parseUnitAndAmount
]);
function parseUnitAndAmount(input) {
    if (!input || typeof input !== "string") return null;
    // Replace commas with dots for decimal parsing
    const sanitized = input.trim().replace(',', '.');
    // Match numeric prefix and string suffix (e.g., "150 gram", "1.5", "2 adet")
    const match = sanitized.match(/^([\d.]+)\s*(.*)?$/);
    if (!match) return null;
    const amount = parseFloat(match[1]);
    if (isNaN(amount)) return null;
    let unit = (match[2] || "").toLowerCase().trim();
    // Normalize common aliases
    if ([
        "g",
        "gr",
        "gram"
    ].includes(unit)) {
        unit = "gram";
    } else if ([
        "adet",
        "tane"
    ].includes(unit)) {
        unit = "adet";
    }
    return {
        amount,
        unit
    };
}
function calculateCalories(enteredPortion, baseFood) {
    if (!enteredPortion || !baseFood || !baseFood.unit || baseFood.cal === undefined) return null;
    const entered = parseUnitAndAmount(enteredPortion);
    const base = parseUnitAndAmount(String(baseFood.unit));
    if (!entered || !base || base.amount === 0) return null;
    const baseCal = Number(baseFood.cal);
    if (isNaN(baseCal)) return null;
    let unitsMatch = false;
    // If the units exactly match, or the user just entered a number without a unit (assuming the original unit)
    if (entered.unit === base.unit || entered.unit === "") {
        unitsMatch = true;
    } else if (base.unit === "") {
        unitsMatch = true;
    }
    // Prevent comparing mismatched units like "100 gram" vs "2 adet"
    if (!unitsMatch) return null;
    const ratio = entered.amount / base.amount;
    const calculatedCal = Math.round(baseCal * ratio);
    return calculatedCal;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/admin/clients/[id]/diet/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DietAssignmentPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$calorieCalculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/calorieCalculator.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function DietAssignmentPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const userId = params?.id;
    const [client, setClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeDay, setActiveDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [foods, setFoods] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [diet, setDiet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            day: 1,
            breakfast: [],
            lunch: [],
            dinner: [],
            snacks: []
        }
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DietAssignmentPage.useEffect": ()=>{
            if (!userId) return;
            async function fetchData() {
                setLoading(true);
                // 1. Danışan Profilini Çek
                const { data: profile } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('*').eq('id', userId).single();
                if (profile) setClient(profile);
                // 2. Mevcut Diyeti Çek
                const { data: dietData } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('diets').select('*').eq('client_id', userId).eq('is_active', true).maybeSingle();
                if (dietData && dietData.content) {
                    setDiet(dietData.content);
                }
                // 3. Besin Kütüphanesini Çek
                const { data: foodData } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('food_library').select('*');
                if (foodData) setFoods(foodData);
                // 4. İlerlemeyi Çek
                const { data: progressData } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('diet_progress').select('*').eq('client_id', userId);
                if (progressData) {
                    const progObj = {};
                    progressData.forEach({
                        "DietAssignmentPage.useEffect.fetchData": (p)=>{
                            progObj[p.day_number - 1] = {
                                completed: p.is_completed,
                                note: p.note
                            };
                        }
                    }["DietAssignmentPage.useEffect.fetchData"]);
                    setProgress(progObj);
                }
                setLoading(false);
            }
            fetchData();
        }
    }["DietAssignmentPage.useEffect"], [
        userId
    ]);
    const addDay = ()=>{
        setDiet([
            ...diet,
            {
                day: diet.length + 1,
                breakfast: [],
                lunch: [],
                dinner: [],
                snacks: []
            }
        ]);
        setActiveDay(diet.length);
    };
    const removeDay = (indexToRemove)=>{
        if (diet.length === 1) return alert("En az 1 gün olmalı!");
        const newDiet = diet.filter((_, idx)=>idx !== indexToRemove).map((d, idx)=>({
                ...d,
                day: idx + 1
            }));
        setDiet(newDiet);
        setActiveDay(Math.min(activeDay, newDiet.length - 1));
    };
    const addRow = (meal)=>{
        setDiet((prevDiet)=>prevDiet.map((d, index)=>{
                if (index === activeDay) {
                    const existingMeals = d[meal] || [];
                    return {
                        ...d,
                        [meal]: [
                            ...existingMeals,
                            {
                                food: "",
                                portion: "",
                                cal: 0
                            }
                        ]
                    };
                }
                return d;
            }));
    };
    const updateRow = (meal, index, field, value)=>{
        setDiet((prevDiet)=>prevDiet.map((d, dayIndex)=>{
                if (dayIndex === activeDay) {
                    const newMealArr = [
                        ...d[meal] || []
                    ];
                    newMealArr[index] = {
                        ...newMealArr[index],
                        [field]: value
                    };
                    // If portion is updated, try to auto-calculate calories
                    if (field === "portion") {
                        const currentFoodName = newMealArr[index].food;
                        const baseFood = foods.find((f)=>f.name === currentFoodName);
                        if (baseFood) {
                            const calculatedCal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$calorieCalculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateCalories"])(String(value), baseFood);
                            if (calculatedCal !== null) {
                                newMealArr[index].cal = calculatedCal;
                            }
                        }
                    }
                    return {
                        ...d,
                        [meal]: newMealArr
                    };
                }
                return d;
            }));
    };
    const handleFoodChange = (meal, index, value)=>{
        const selectedFood = foods.find((f)=>f.name === value);
        setDiet((prevDiet)=>prevDiet.map((d, dayIndex)=>{
                if (dayIndex === activeDay) {
                    const newMealArr = [
                        ...d[meal] || []
                    ];
                    newMealArr[index] = {
                        ...newMealArr[index],
                        food: value
                    };
                    if (selectedFood) {
                        newMealArr[index].portion = selectedFood.unit;
                        newMealArr[index].cal = selectedFood.cal;
                    }
                    return {
                        ...d,
                        [meal]: newMealArr
                    };
                }
                return d;
            }));
    };
    const removeRow = (meal, index)=>{
        setDiet((prevDiet)=>prevDiet.map((d, dayIndex)=>{
                if (dayIndex === activeDay) {
                    const newMealArr = [
                        ...d[meal] || []
                    ];
                    newMealArr.splice(index, 1);
                    return {
                        ...d,
                        [meal]: newMealArr
                    };
                }
                return d;
            }));
    };
    const handleSave = async ()=>{
        if (!userId) return;
        setLoading(true);
        // Önce eski aktif diyetleri pasife çek (İsteğe bağlı, biz burada tek bir aktif diyet tutuyoruz)
        await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('diets').update({
            is_active: false
        }).eq('client_id', userId);
        // Yeni diyeti ekle
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('diets').insert([
            {
                client_id: userId,
                title: `${diet.length} Günlük Program`,
                content: diet,
                is_active: true
            }
        ]);
        if (error) {
            alert("Diyet kaydedilemedi: " + error.message);
        } else {
            alert("Diyet listesi Supabase'e başarıyla kaydedildi!");
            router.push("/admin/clients");
        }
        setLoading(false);
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Veriler yükleniyor..."
    }, void 0, false, {
        fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
        lineNumber: 201,
        columnNumber: 25
    }, this);
    if (!client || !diet[activeDay]) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Hata: Danışan bulunamadı."
    }, void 0, false, {
        fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
        lineNumber: 202,
        columnNumber: 45
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/admin/clients",
                            style: {
                                color: "#79a33d",
                                textDecoration: "none",
                                fontSize: "14px",
                                fontWeight: 700
                            },
                            children: "← Listeye Dön"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                            lineNumber: 210,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginTop: "10px"
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
                                            children: [
                                                "Diyet Hazırla: ",
                                                client.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                            lineNumber: 213,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: "#7f8c8d"
                                            },
                                            children: "Danışan için öğün detaylarını gün gün planlayabilirsiniz."
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                            lineNumber: 214,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                    lineNumber: 212,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSave,
                                    style: saveBtn,
                                    children: [
                                        "Diyet Listesini ",
                                        diet.length,
                                        " Günlük Kaydet"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                    lineNumber: 216,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                            lineNumber: 211,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                    lineNumber: 209,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        gap: "10px",
                        marginBottom: "25px",
                        overflowX: "auto",
                        paddingBottom: "10px"
                    },
                    children: [
                        diet.map((d, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveDay(idx),
                                        style: {
                                            padding: "12px 25px",
                                            background: activeDay === idx ? "#79a33d" : "white",
                                            color: activeDay === idx ? "white" : "#2c3e50",
                                            border: `1px solid ${activeDay === idx ? "#79a33d" : "#e0e0e0"} `,
                                            borderRadius: "10px",
                                            fontWeight: 700,
                                            cursor: "pointer",
                                            transition: "all 0.2s"
                                        },
                                        children: [
                                            idx + 1,
                                            ". Gün"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                        lineNumber: 224,
                                        columnNumber: 29
                                    }, this),
                                    diet.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>removeDay(idx),
                                        style: {
                                            position: "absolute",
                                            top: "-8px",
                                            right: "-8px",
                                            background: "#e74c3c",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "50%",
                                            width: "22px",
                                            height: "22px",
                                            fontSize: "10px",
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        },
                                        title: "Günü Sil",
                                        children: "X"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                        lineNumber: 240,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                lineNumber: 223,
                                columnNumber: 25
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: addDay,
                            style: {
                                padding: "12px 25px",
                                background: "transparent",
                                color: "#79a33d",
                                border: "2px dashed #79a33d",
                                borderRadius: "10px",
                                fontWeight: 700,
                                cursor: "pointer"
                            },
                            children: "+ Yeni Gün Ekle"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                            lineNumber: 265,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                    lineNumber: 221,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: "30px",
                        background: progress[activeDay]?.completed ? "#eaf2e3" : "white",
                        padding: "20px 30px",
                        borderRadius: "15px",
                        border: `1px solid ${progress[activeDay]?.completed ? "#79a33d" : "#eee"} `,
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "20px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: "24px",
                                background: progress[activeDay]?.completed ? "#79a33d" : "#f0f0f0",
                                color: progress[activeDay]?.completed ? "white" : "#ccc",
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            children: progress[activeDay]?.completed ? "✓" : "!"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                            lineNumber: 283,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontSize: "16px",
                                        fontWeight: 700,
                                        color: progress[activeDay]?.completed ? "#3d5a2d" : "#7f8c8d",
                                        marginBottom: "5px"
                                    },
                                    children: progress[activeDay]?.completed ? "Danışan bu günü eksiksiz uyguladı!" : "Bu gün için henüz onay verilmedi."
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                    lineNumber: 297,
                                    columnNumber: 25
                                }, this),
                                progress[activeDay]?.note ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: "10px",
                                        padding: "15px",
                                        background: "white",
                                        borderRadius: "10px",
                                        fontSize: "14px",
                                        color: "#555",
                                        fontStyle: "italic",
                                        borderLeft: "4px solid #79a33d"
                                    },
                                    children: [
                                        '"',
                                        progress[activeDay].note,
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 29
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: "13px",
                                        color: "#95a5a6",
                                        marginTop: "5px"
                                    },
                                    children: "Danışan herhangi bir not bırakmadı."
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                    lineNumber: 305,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                            lineNumber: 296,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                    lineNumber: 282,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "30px"
                    },
                    children: [
                        "breakfast",
                        "lunch",
                        "dinner",
                        "snacks"
                    ].map((meal)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: "white",
                                padding: "30px",
                                borderRadius: "20px",
                                boxShadow: "0 10px 20px rgba(0,0,0,0.02)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginBottom: "20px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: "18px",
                                                fontWeight: 700,
                                                color: "#3d5a2d",
                                                textTransform: "capitalize"
                                            },
                                            children: meal === "breakfast" ? "Kahvaltı" : meal === "lunch" ? "Öğle Yemeği" : meal === "dinner" ? "Akşam Yemeği" : "Ara Öğünler"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                            lineNumber: 315,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>addRow(meal),
                                            style: addBtn,
                                            children: "+ Satır Ekle"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                            lineNumber: 318,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                    lineNumber: 314,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    style: {
                                        width: "100%",
                                        borderCollapse: "collapse"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                style: {
                                                    textAlign: "left",
                                                    fontSize: "13px",
                                                    color: "#95a5a6",
                                                    textTransform: "uppercase"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            padding: "10px",
                                                            width: "40%"
                                                        },
                                                        children: "Besin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            padding: "10px",
                                                            width: "30%"
                                                        },
                                                        children: "Porsiyon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                        lineNumber: 325,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            padding: "10px",
                                                            width: "20%"
                                                        },
                                                        children: "Kalori"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                        lineNumber: 326,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            padding: "10px",
                                                            width: "10%"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                lineNumber: 323,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                            lineNumber: 322,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: [
                                                (diet[activeDay][meal] || []).map((row, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "5px"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: row.food,
                                                                    onChange: (e)=>handleFoodChange(meal, idx, e.target.value),
                                                                    list: "food-suggestions",
                                                                    style: inputStyle,
                                                                    placeholder: "Besin adı..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                                    lineNumber: 334,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                                lineNumber: 333,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "5px"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: row.portion,
                                                                    onChange: (e)=>updateRow(meal, idx, "portion", e.target.value),
                                                                    style: inputStyle,
                                                                    placeholder: "100g, 1 porsiyon..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                                    lineNumber: 337,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                                lineNumber: 336,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "5px"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    value: row.cal,
                                                                    onChange: (e)=>updateRow(meal, idx, "cal", e.target.value),
                                                                    style: inputStyle
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                                    lineNumber: 340,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                                lineNumber: 339,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "5px",
                                                                    textAlign: "center"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>removeRow(meal, idx),
                                                                    style: {
                                                                        background: "none",
                                                                        border: "none",
                                                                        color: "#e74c3c",
                                                                        cursor: "pointer",
                                                                        fontWeight: 700
                                                                    },
                                                                    children: "Sil"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                                    lineNumber: 343,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                                lineNumber: 342,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 41
                                                    }, this)),
                                                (diet[activeDay][meal] || []).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: 4,
                                                        style: {
                                                            padding: "20px",
                                                            textAlign: "center",
                                                            color: "#95a5a6",
                                                            fontSize: "14px"
                                                        },
                                                        children: "Bu öğüne henüz besin eklenmedi."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                        lineNumber: 349,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                            lineNumber: 330,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                    lineNumber: 321,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, meal, true, {
                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                            lineNumber: 313,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                    lineNumber: 310,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("datalist", {
                    id: "food-suggestions",
                    children: foods.map((food, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: food.name
                        }, idx, false, {
                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                            lineNumber: 362,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                    lineNumber: 360,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
            lineNumber: 206,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
_s(DietAssignmentPage, "8SaiKM0ylkb4nTKe08i6pblsM5A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = DietAssignmentPage;
const inputStyle = {
    width: "100%",
    padding: "10px 15px",
    borderRadius: "8px",
    border: "1px solid #eee",
    fontSize: "14px",
    color: "#333",
    fontWeight: 600
};
const addBtn = {
    background: "none",
    border: "1px solid #79a33d",
    color: "#79a33d",
    padding: "8px 15px",
    borderRadius: "8px",
    fontWeight: 700,
    cursor: "pointer"
};
const saveBtn = {
    background: "#79a33d",
    color: "white",
    border: "none",
    padding: "15px 40px",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 10px 20px rgba(121, 163, 61, 0.2)"
};
var _c;
__turbopack_context__.k.register(_c, "DietAssignmentPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_bc5d4b12._.js.map