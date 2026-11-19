import { strict as assert } from "node:assert";
import { test } from "node:test";
import { calculateTotals, clampQuantity, formatINR } from "../src/lib/commerce";

test("cart totals match the reference 3-piece bag", () => {
  assert.deepEqual(calculateTotals(10_540, true), { subtotal: 10_540, discount: 1_054, shipping: 0, total: 9_486 });
});

test("shipping threshold is applied only to nonempty orders", () => {
  assert.equal(calculateTotals(0, true).shipping, 0);
  assert.equal(calculateTotals(2_499, false).shipping, 199);
  assert.equal(calculateTotals(2_500, false).shipping, 0);
});

test("totals reject negative or invalid subtotals", () => {
  assert.equal(calculateTotals(-50, true).total, 0);
  assert.equal(calculateTotals(Number.NaN, true).total, 0);
});

test("quantity inputs are safely clamped", () => {
  assert.equal(clampQuantity(0), 1);
  assert.equal(clampQuantity(21), 20);
  assert.equal(clampQuantity(Number.NaN), 1);
  assert.equal(clampQuantity(4), 4);
});

test("INR prices are formatted for India", () => {
  assert.match(formatINR(9_486), /9,486/);
});
