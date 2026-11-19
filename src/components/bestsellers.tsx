"use client";

import { useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "./product-card";

const tabs = ["All Pieces", "Rose Gold", "Sterling Silver", "Pendants"] as const;
type Tab = typeof tabs[number];

export function Bestsellers() {
  const [active, setActive] = useState<Tab>("All Pieces");
  const selected = products.filter((product) => {
    if (active === "Rose Gold") return product.material.includes("Rose Gold");
    if (active === "Sterling Silver") return product.material.includes("Sterling Silver");
    if (active === "Pendants") return product.category === "Pendants";
    return true;
  }).slice(0, 4);
  return <section className="container-site py-20 md:py-28"><div className="mb-10 flex flex-col justify-between gap-7 lg:flex-row lg:items-end"><div><p className="eyebrow mb-3">The ones you come back to</p><h2 className="editorial-title">Most-loved pieces</h2></div><div aria-label="Filter bestsellers" className="flex max-w-full gap-5 overflow-x-auto border-b border-line">{tabs.map((tab) => <button key={tab} onClick={() => setActive(tab)} aria-pressed={active === tab} className={`shrink-0 border-b-2 px-0.5 pb-3 text-[10px] font-semibold uppercase tracking-[.1em] transition-colors ${active === tab ? "border-gold text-gold" : "border-transparent text-muted hover:text-ink"}`}>{tab}</button>)}</div></div><div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">{selected.map((product) => <ProductCard key={product.id} product={product} square/>)}</div>{selected.length === 0 && <p className="py-8 text-sm text-muted">No pieces in this edit.</p>}</section>;
}
