export function parseUnitAndAmount(input: string): { amount: number, unit: string } | null {
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
    if (["g", "gr", "gram"].includes(unit)) {
        unit = "gram";
    } else if (["adet", "tane"].includes(unit)) {
        unit = "adet";
    }

    return { amount, unit };
}

export function calculateCalories(
    enteredPortion: string,
    baseFood: { unit: string, cal: number | string }
): number | null {
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
    }
    // If the user enters a unit but the base unit didn't have one (e.g. base: "1", entered: "1.5 porsiyon")
    else if (base.unit === "") {
        unitsMatch = true;
    }

    // Prevent comparing mismatched units like "100 gram" vs "2 adet"
    if (!unitsMatch) return null;

    const ratio = entered.amount / base.amount;
    const calculatedCal = Math.round(baseCal * ratio);

    return calculatedCal;
}
