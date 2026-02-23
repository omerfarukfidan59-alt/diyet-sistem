module.exports = [
"[project]/utils/calorieCalculator.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/worker_threads [external] (worker_threads, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("worker_threads", () => require("worker_threads"));

module.exports = mod;
}),
"[project]/app/admin/clients/[id]/diet/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DietAssignmentPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$calorieCalculator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/calorieCalculator.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html2canvas/dist/html2canvas.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.node.min.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function DietAssignmentPage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const userId = params?.id;
    const [client, setClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeDay, setActiveDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [foods, setFoods] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [diet, setDiet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            day: 1,
            breakfast: [],
            lunch: [],
            dinner: [],
            snacks: [],
            notes: ""
        }
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!userId) return;
        async function fetchData() {
            setLoading(true);
            // 1. Danışan Profilini Çek
            const { data: profile } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('*').eq('id', userId).single();
            if (profile) setClient(profile);
            // 2. Mevcut Diyeti Çek
            const { data: dietData } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('diets').select('*').eq('client_id', userId).eq('is_active', true).maybeSingle();
            if (dietData && dietData.content) {
                const sanitizedDiet = dietData.content.map((d)=>({
                        ...d,
                        notes: d.notes || ""
                    }));
                setDiet(sanitizedDiet);
            }
            // 3. Besin Kütüphanesini Çek
            const { data: foodData } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('food_library').select('*');
            if (foodData) setFoods(foodData);
            // 4. İlerlemeyi Çek
            const { data: progressData } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('diet_progress').select('*').eq('client_id', userId);
            if (progressData) {
                const progObj = {};
                progressData.forEach((p)=>{
                    progObj[p.day_number - 1] = {
                        completed: p.is_completed,
                        note: p.note
                    };
                });
                setProgress(progObj);
            }
            setLoading(false);
        }
        fetchData();
    }, [
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
                snacks: [],
                notes: "" // Yeni gün için boş not alanı
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
                        const baseFood = foods.find((f)=>f.name.toLowerCase() === String(currentFoodName).toLowerCase());
                        if (baseFood) {
                            const calculatedCal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$calorieCalculator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateCalories"])(String(value), baseFood);
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
    const handleNotesChange = (value)=>{
        setDiet((prevDiet)=>prevDiet.map((d, dayIndex)=>{
                if (dayIndex === activeDay) {
                    return {
                        ...d,
                        notes: value
                    };
                }
                return d;
            }));
    };
    const handleFoodChange = (meal, index, value)=>{
        const selectedFood = foods.find((f)=>f.name.toLowerCase() === String(value).toLowerCase());
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
        await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('diets').update({
            is_active: false
        }).eq('client_id', userId);
        // Yeni diyeti ekle
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('diets').insert([
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
        // router.push("/admin/clients");
        }
        setLoading(false);
    };
    const handlePrint = async ()=>{
        const element = document.getElementById("printable-diet");
        if (!element) return;
        // Geçici olarak görünür yapalım ki resmini çekebilelim
        element.style.display = "block";
        try {
            const canvas = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(element, {
                scale: 2,
                useCORS: true,
                backgroundColor: "#f9fbf9"
            });
            const imgData = canvas.toDataURL("image/png");
            // A4 format
            const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]("p", "mm", "a4");
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = canvas.height * pdfWidth / canvas.width;
            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save(`${client.full_name || client.name}_Diyet_Listesi.pdf`);
        } catch (err) {
            console.error("PDF oluşturulurken hata:", err);
            alert("PDF oluşturulamadı.");
        } finally{
            element.style.display = "none";
        }
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Veriler yükleniyor..."
    }, void 0, false, {
        fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
        lineNumber: 250,
        columnNumber: 25
    }, this);
    if (!client || !diet[activeDay]) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Hata: Danışan bulunamadı."
    }, void 0, false, {
        fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
        lineNumber: 251,
        columnNumber: 45
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                flex: 1,
                display: "flex",
                flexDirection: "column"
            },
            className: "jsx-11e0cc8a9ea0fe70" + " " + "diet-page-wrapper",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    id: "11e0cc8a9ea0fe70",
                    children: ".diet-page-wrapper.jsx-11e0cc8a9ea0fe70{padding:50px}@media (width<=1024px){.diet-page-wrapper.jsx-11e0cc8a9ea0fe70{padding:20px}}"
                }, void 0, false, void 0, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: "40px"
                    },
                    className: "jsx-11e0cc8a9ea0fe70",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                            lineNumber: 269,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginTop: "10px"
                            },
                            className: "jsx-11e0cc8a9ea0fe70",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-11e0cc8a9ea0fe70",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            style: {
                                                fontSize: "32px",
                                                fontWeight: 700,
                                                color: "#2c3e50"
                                            },
                                            className: "jsx-11e0cc8a9ea0fe70",
                                            children: [
                                                "Diyet Hazırla: ",
                                                client.full_name || client.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                            lineNumber: 272,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: "#7f8c8d"
                                            },
                                            className: "jsx-11e0cc8a9ea0fe70",
                                            children: "Danışan için öğün detaylarını gün gün planlayabilirsiniz."
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                            lineNumber: 273,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                    lineNumber: 271,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '15px'
                                    },
                                    className: "jsx-11e0cc8a9ea0fe70",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handlePrint,
                                            style: {
                                                ...saveBtn,
                                                background: '#f39c12',
                                                boxShadow: "0 10px 20px rgba(243, 156, 18, 0.2)"
                                            },
                                            className: "jsx-11e0cc8a9ea0fe70",
                                            children: " PDF Olarak Yazdır"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                            lineNumber: 276,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSave,
                                            style: saveBtn,
                                            className: "jsx-11e0cc8a9ea0fe70",
                                            children: [
                                                "Diyet Listesini ",
                                                diet.length,
                                                " Günlük Kaydet"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                            lineNumber: 277,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                    lineNumber: 275,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                            lineNumber: 270,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                    lineNumber: 268,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        gap: "10px",
                        marginBottom: "25px",
                        overflowX: "auto",
                        paddingBottom: "10px"
                    },
                    className: "jsx-11e0cc8a9ea0fe70",
                    children: [
                        diet.map((d, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative"
                                },
                                className: "jsx-11e0cc8a9ea0fe70",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                        className: "jsx-11e0cc8a9ea0fe70",
                                        children: [
                                            idx + 1,
                                            ". Gün"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                        lineNumber: 286,
                                        columnNumber: 29
                                    }, this),
                                    diet.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                        className: "jsx-11e0cc8a9ea0fe70",
                                        children: "X"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                        lineNumber: 302,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                lineNumber: 285,
                                columnNumber: 25
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            className: "jsx-11e0cc8a9ea0fe70",
                            children: "+ Yeni Gün Ekle"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                            lineNumber: 327,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                    lineNumber: 283,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    className: "jsx-11e0cc8a9ea0fe70",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            className: "jsx-11e0cc8a9ea0fe70",
                            children: progress[activeDay]?.completed ? "✓" : "!"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                            lineNumber: 345,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1
                            },
                            className: "jsx-11e0cc8a9ea0fe70",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontSize: "16px",
                                        fontWeight: 700,
                                        color: progress[activeDay]?.completed ? "#3d5a2d" : "#7f8c8d",
                                        marginBottom: "5px"
                                    },
                                    className: "jsx-11e0cc8a9ea0fe70",
                                    children: progress[activeDay]?.completed ? "Danışan bu günü eksiksiz uyguladı!" : "Bu gün için henüz onay verilmedi."
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                    lineNumber: 359,
                                    columnNumber: 25
                                }, this),
                                progress[activeDay]?.note ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    className: "jsx-11e0cc8a9ea0fe70",
                                    children: [
                                        '"',
                                        progress[activeDay].note,
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                    lineNumber: 363,
                                    columnNumber: 29
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: "13px",
                                        color: "#95a5a6",
                                        marginTop: "5px"
                                    },
                                    className: "jsx-11e0cc8a9ea0fe70",
                                    children: "Danışan herhangi bir not bırakmadı."
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                    lineNumber: 367,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                            lineNumber: 358,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                    lineNumber: 344,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "30px"
                    },
                    className: "jsx-11e0cc8a9ea0fe70",
                    children: [
                        [
                            "breakfast",
                            "lunch",
                            "dinner",
                            "snacks"
                        ].map((meal)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: "white",
                                    padding: "30px",
                                    borderRadius: "20px",
                                    boxShadow: "0 10px 20px rgba(0,0,0,0.02)"
                                },
                                className: "jsx-11e0cc8a9ea0fe70",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            marginBottom: "20px"
                                        },
                                        className: "jsx-11e0cc8a9ea0fe70",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: "18px",
                                                    fontWeight: 700,
                                                    color: "#3d5a2d",
                                                    textTransform: "capitalize"
                                                },
                                                className: "jsx-11e0cc8a9ea0fe70",
                                                children: meal === "breakfast" ? "Kahvaltı" : meal === "lunch" ? "Öğle Yemeği" : meal === "dinner" ? "Akşam Yemeği" : "Ara Öğünler"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                lineNumber: 376,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>addRow(meal),
                                                style: addBtn,
                                                className: "jsx-11e0cc8a9ea0fe70",
                                                children: "+ Satır Ekle"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                lineNumber: 379,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                        lineNumber: 375,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        style: {
                                            width: "100%",
                                            borderCollapse: "collapse"
                                        },
                                        className: "jsx-11e0cc8a9ea0fe70",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "jsx-11e0cc8a9ea0fe70",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    style: {
                                                        textAlign: "left",
                                                        fontSize: "13px",
                                                        color: "#95a5a6",
                                                        textTransform: "uppercase"
                                                    },
                                                    className: "jsx-11e0cc8a9ea0fe70",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            style: {
                                                                padding: "10px",
                                                                width: "40%"
                                                            },
                                                            className: "jsx-11e0cc8a9ea0fe70",
                                                            children: "Besin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                            lineNumber: 385,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            style: {
                                                                padding: "10px",
                                                                width: "30%"
                                                            },
                                                            className: "jsx-11e0cc8a9ea0fe70",
                                                            children: "Porsiyon"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                            lineNumber: 386,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            style: {
                                                                padding: "10px",
                                                                width: "20%"
                                                            },
                                                            className: "jsx-11e0cc8a9ea0fe70",
                                                            children: "Kalori"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                            lineNumber: 387,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            style: {
                                                                padding: "10px",
                                                                width: "10%"
                                                            },
                                                            className: "jsx-11e0cc8a9ea0fe70"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                            lineNumber: 388,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                    lineNumber: 384,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                lineNumber: 383,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "jsx-11e0cc8a9ea0fe70",
                                                children: [
                                                    (diet[activeDay][meal] || []).map((row, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "jsx-11e0cc8a9ea0fe70",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: "5px"
                                                                    },
                                                                    className: "jsx-11e0cc8a9ea0fe70",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        value: row.food,
                                                                        onChange: (e)=>handleFoodChange(meal, idx, e.target.value),
                                                                        list: "food-suggestions",
                                                                        style: inputStyle,
                                                                        placeholder: "Besin adı...",
                                                                        className: "jsx-11e0cc8a9ea0fe70"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                                        lineNumber: 395,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                                    lineNumber: 394,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: "5px"
                                                                    },
                                                                    className: "jsx-11e0cc8a9ea0fe70",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        value: row.portion,
                                                                        onChange: (e)=>updateRow(meal, idx, "portion", e.target.value),
                                                                        style: inputStyle,
                                                                        placeholder: "100g, 1 porsiyon...",
                                                                        className: "jsx-11e0cc8a9ea0fe70"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                                        lineNumber: 398,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                                    lineNumber: 397,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: "5px"
                                                                    },
                                                                    className: "jsx-11e0cc8a9ea0fe70",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        value: row.cal,
                                                                        onChange: (e)=>updateRow(meal, idx, "cal", e.target.value),
                                                                        style: inputStyle,
                                                                        className: "jsx-11e0cc8a9ea0fe70"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                                        lineNumber: 401,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                                    lineNumber: 400,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: "5px",
                                                                        textAlign: "center"
                                                                    },
                                                                    className: "jsx-11e0cc8a9ea0fe70",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>removeRow(meal, idx),
                                                                        style: {
                                                                            background: "none",
                                                                            border: "none",
                                                                            color: "#e74c3c",
                                                                            cursor: "pointer",
                                                                            fontWeight: 700
                                                                        },
                                                                        className: "jsx-11e0cc8a9ea0fe70",
                                                                        children: "Sil"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                                        lineNumber: 404,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                                    lineNumber: 403,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, idx, true, {
                                                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                            lineNumber: 393,
                                                            columnNumber: 41
                                                        }, this)),
                                                    (diet[activeDay][meal] || []).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "jsx-11e0cc8a9ea0fe70",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: 4,
                                                            style: {
                                                                padding: "20px",
                                                                textAlign: "center",
                                                                color: "#95a5a6",
                                                                fontSize: "14px"
                                                            },
                                                            className: "jsx-11e0cc8a9ea0fe70",
                                                            children: "Bu öğüne henüz besin eklenmedi."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                            lineNumber: 410,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                        lineNumber: 409,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                lineNumber: 391,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                        lineNumber: 382,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, meal, true, {
                                fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                lineNumber: 374,
                                columnNumber: 25
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: "white",
                                padding: "30px",
                                borderRadius: "20px",
                                boxShadow: "0 10px 20px rgba(0,0,0,0.02)"
                            },
                            className: "jsx-11e0cc8a9ea0fe70",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: "15px"
                                    },
                                    className: "jsx-11e0cc8a9ea0fe70",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: "18px",
                                                fontWeight: 700,
                                                color: "#3d5a2d"
                                            },
                                            className: "jsx-11e0cc8a9ea0fe70",
                                            children: [
                                                "Notlar ve Tavsiyeler (",
                                                activeDay + 1,
                                                ". Gün)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                            lineNumber: 423,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: "#7f8c8d",
                                                fontSize: "13px",
                                                marginTop: "5px"
                                            },
                                            className: "jsx-11e0cc8a9ea0fe70",
                                            children: "Güne özel danışana iletmek istediğiniz ekstra tavsiyeler, notlar veya su tüketimi gibi detayları buraya yazabilirsiniz."
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                            lineNumber: 426,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                    lineNumber: 422,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: diet[activeDay]?.notes || "",
                                    onChange: (e)=>handleNotesChange(e.target.value),
                                    rows: 4,
                                    style: {
                                        ...inputStyle,
                                        resize: "vertical"
                                    },
                                    placeholder: "Örn: Gün içerisinde 3 litre su içmeyi unutmayın...",
                                    className: "jsx-11e0cc8a9ea0fe70"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                    lineNumber: 428,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                            lineNumber: 421,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                    lineNumber: 372,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("datalist", {
                    id: "food-suggestions",
                    className: "jsx-11e0cc8a9ea0fe70",
                    children: foods.map((food, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: food.name,
                            className: "jsx-11e0cc8a9ea0fe70"
                        }, idx, false, {
                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                            lineNumber: 440,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                    lineNumber: 438,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "printable-diet",
                    style: {
                        display: "none",
                        position: "absolute",
                        left: "-9999px",
                        top: 0,
                        width: "210mm",
                        /* A4 Genişliği */ minHeight: "297mm",
                        /* A4 Yüksekliği */ padding: "40mm 20mm 20mm 20mm",
                        background: "#f9fcf9",
                        fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
                        color: "#2c3e50",
                        boxSizing: "border-box"
                    },
                    className: "jsx-11e0cc8a9ea0fe70",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'relative',
                                zIndex: 1
                            },
                            className: "jsx-11e0cc8a9ea0fe70",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                        marginBottom: '40px',
                                        borderBottom: '2px solid #e0ebd4',
                                        paddingBottom: '20px'
                                    },
                                    className: "jsx-11e0cc8a9ea0fe70",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-11e0cc8a9ea0fe70",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    style: {
                                                        fontSize: "16px",
                                                        letterSpacing: "3px",
                                                        color: "#5a7a3b",
                                                        margin: 0,
                                                        fontWeight: 600,
                                                        textTransform: "uppercase"
                                                    },
                                                    className: "jsx-11e0cc8a9ea0fe70",
                                                    children: "KİŞİYE ÖZEL"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                    lineNumber: 463,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    style: {
                                                        fontSize: "36px",
                                                        margin: "5px 0 0 0",
                                                        color: "#2c3e50",
                                                        fontWeight: 300,
                                                        letterSpacing: "1px"
                                                    },
                                                    className: "jsx-11e0cc8a9ea0fe70",
                                                    children: "DİYET LİSTESİ"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                    lineNumber: 466,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        margin: "5px 0 0 0",
                                                        fontSize: "15px",
                                                        color: "#7f8c8d",
                                                        fontWeight: 500
                                                    },
                                                    className: "jsx-11e0cc8a9ea0fe70",
                                                    children: [
                                                        "Danışan: ",
                                                        client.full_name || client.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                    lineNumber: 469,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                            lineNumber: 462,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                textAlign: "center"
                                            },
                                            className: "jsx-11e0cc8a9ea0fe70",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        background: '#79a33d',
                                                        color: 'white',
                                                        width: '60px',
                                                        height: '60px',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto 10px',
                                                        fontSize: '30px',
                                                        fontWeight: 'bold'
                                                    },
                                                    className: "jsx-11e0cc8a9ea0fe70",
                                                    children: "D"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                    lineNumber: 474,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: "14px",
                                                        fontWeight: 600,
                                                        color: "#2d3436"
                                                    },
                                                    className: "jsx-11e0cc8a9ea0fe70",
                                                    children: "Sümeyye Hanım"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                    lineNumber: 477,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: "12px",
                                                        color: "#95a5a6",
                                                        marginTop: "2px"
                                                    },
                                                    className: "jsx-11e0cc8a9ea0fe70",
                                                    children: "Diyetisyen"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                    lineNumber: 478,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                            lineNumber: 473,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                    lineNumber: 461,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: "20px"
                                    },
                                    className: "jsx-11e0cc8a9ea0fe70",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: "20px",
                                                color: "#79a33d",
                                                borderBottom: "1px dashed #ccc",
                                                paddingBottom: "10px",
                                                marginBottom: "25px"
                                            },
                                            className: "jsx-11e0cc8a9ea0fe70",
                                            children: [
                                                activeDay + 1,
                                                ". Gün Programı"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                            lineNumber: 484,
                                            columnNumber: 29
                                        }, this),
                                        [
                                            "breakfast",
                                            "lunch",
                                            "snacks",
                                            "dinner"
                                        ].map((meal)=>{
                                            const mealItems = diet[activeDay][meal] || [];
                                            if (mealItems.length === 0) return null;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginBottom: "25px"
                                                },
                                                className: "jsx-11e0cc8a9ea0fe70",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            background: "#d6e5c5",
                                                            padding: "10px 15px",
                                                            fontSize: "16px",
                                                            fontWeight: 600,
                                                            color: "#3d5a2d",
                                                            textTransform: "uppercase",
                                                            letterSpacing: "1px",
                                                            borderLeft: "5px solid #79a33d"
                                                        },
                                                        className: "jsx-11e0cc8a9ea0fe70",
                                                        children: meal === "breakfast" ? "Kahvaltı" : meal === "lunch" ? "Öğle Yemeği" : meal === "snacks" ? "Ara Öğün" : "Akşam Yemeği"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                        lineNumber: 494,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            background: "white",
                                                            padding: "15px 20px",
                                                            border: "1px solid #e0e0e0",
                                                            borderTop: "none"
                                                        },
                                                        className: "jsx-11e0cc8a9ea0fe70",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            style: {
                                                                margin: 0,
                                                                paddingLeft: "15px",
                                                                color: "#34495e",
                                                                fontSize: "15px",
                                                                lineHeight: "1.6"
                                                            },
                                                            className: "jsx-11e0cc8a9ea0fe70",
                                                            children: mealItems.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    style: {
                                                                        marginBottom: "8px"
                                                                    },
                                                                    className: "jsx-11e0cc8a9ea0fe70",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontWeight: 600
                                                                            },
                                                                            className: "jsx-11e0cc8a9ea0fe70",
                                                                            children: item.portion
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                                            lineNumber: 510,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        " ",
                                                                        item.food
                                                                    ]
                                                                }, idx, true, {
                                                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                                    lineNumber: 509,
                                                                    columnNumber: 53
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                            lineNumber: 507,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                        lineNumber: 506,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, meal, true, {
                                                fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                                lineNumber: 493,
                                                columnNumber: 37
                                            }, this);
                                        })
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                    lineNumber: 483,
                                    columnNumber: 25
                                }, this),
                                diet[activeDay]?.notes && diet[activeDay].notes.trim() !== "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: "40px"
                                    },
                                    className: "jsx-11e0cc8a9ea0fe70",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: "#dae5cc",
                                                padding: "10px 15px",
                                                fontSize: "16px",
                                                fontWeight: 600,
                                                color: "#3d5a2d",
                                                textTransform: "uppercase",
                                                letterSpacing: "1px",
                                                borderLeft: "5px solid #79a33d"
                                            },
                                            className: "jsx-11e0cc8a9ea0fe70",
                                            children: "NOTLAR VE TAVSİYELER"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                            lineNumber: 523,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: "white",
                                                padding: "15px 20px",
                                                border: "1px solid #e0e0e0",
                                                borderTop: "none",
                                                fontSize: "14px",
                                                color: "#7f8c8d",
                                                lineHeight: "1.6",
                                                whiteSpace: "pre-line"
                                            },
                                            className: "jsx-11e0cc8a9ea0fe70",
                                            children: diet[activeDay].notes
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                            lineNumber: 535,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                                    lineNumber: 522,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                            lineNumber: 459,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: "50px",
                                textAlign: "center",
                                fontSize: "13px",
                                color: "#95a5a6",
                                borderTop: "1px solid #eee",
                                paddingTop: "20px"
                            },
                            className: "jsx-11e0cc8a9ea0fe70",
                            children: "merhaba@diyetisyen.web.tr | Bu diyet listesi kişiye özel olarak hazırlanmıştır."
                        }, void 0, false, {
                            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                            lineNumber: 543,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
                    lineNumber: 445,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/clients/[id]/diet/page.tsx",
            lineNumber: 256,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
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
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3778acab._.js.map