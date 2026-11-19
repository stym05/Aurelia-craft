"use client";

import { Minus, Plus } from "lucide-react";

export function QuantityStepper({ value, onChange, max = 20, compact = false }: { value: number; onChange: (value: number) => void; max?: number; compact?: boolean }) {
  return (
    <div className={`inline-flex items-center rounded-[3px] bg-paper ${compact ? "h-8" : "h-11"}`}>
      <button type="button" onClick={() => onChange(Math.max(1, value - 1))} disabled={value <= 1} aria-label="Decrease quantity" className="flex h-full w-9 items-center justify-center disabled:opacity-30"><Minus size={13} /></button>
      <span aria-live="polite" className="min-w-5 text-center text-xs tabular-nums">{value}</span>
      <button type="button" onClick={() => onChange(Math.min(max, value + 1))} disabled={value >= max} aria-label="Increase quantity" className="flex h-full w-9 items-center justify-center disabled:opacity-30"><Plus size={13} /></button>
    </div>
  );
}
