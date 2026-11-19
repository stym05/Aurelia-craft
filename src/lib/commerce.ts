export const FREE_SHIPPING_THRESHOLD = 2500;
export const STANDARD_SHIPPING = 199;
export const FIRST_ORDER_DISCOUNT_RATE = 0.1;

export function formatINR(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function clampQuantity(value: number): number {
  return Number.isInteger(value) ? Math.max(1, Math.min(20, value)) : 1;
}

export function calculateTotals(subtotal: number, applyDiscount: boolean) {
  const safeSubtotal = Number.isFinite(subtotal) ? Math.max(0, Math.round(subtotal)) : 0;
  const discount = applyDiscount ? Math.round(safeSubtotal * FIRST_ORDER_DISCOUNT_RATE) : 0;
  const shipping = safeSubtotal === 0 || safeSubtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING;
  return { subtotal: safeSubtotal, discount, shipping, total: safeSubtotal - discount + shipping };
}
