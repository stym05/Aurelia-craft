"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { BadgeCheck, Gift, LockKeyhole, ShoppingBag, X } from "lucide-react";
import { useStore } from "./store-provider";
import { EditorialImage } from "./editorial-image";
import { QuantityStepper } from "./quantity-stepper";
import { products } from "@/data/products";
import { calculateTotals, formatINR, FREE_SHIPPING_THRESHOLD } from "@/lib/commerce";

export function CartDrawer() {
  const store = useStore();
  const { cartOpen, closeCart } = store;
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const lines = store.cart.flatMap((line) => {
    const product = products.find((p) => p.id === line.productId);
    return product ? [{ ...line, product }] : [];
  });
  const itemCount = store.cart.reduce((count, line) => count + line.quantity, 0);
  const subtotal = lines.length ? lines.reduce((sum, line) => sum + line.quantity * line.product.price, 0) + (store.polishingCloth ? 250 : 0) : 0;
  const totals = calculateTotals(subtotal, store.promotionApplied);
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progress = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));

  useEffect(() => {
    if (!cartOpen) return;
    previousFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCart();
      if (event.key === "Tab" && panelRef.current) {
        const focusable = [...panelRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), input:not([disabled]), select:not([disabled])")];
        if (focusable.length === 0) return;
        if (event.shiftKey && document.activeElement === focusable[0]) { event.preventDefault(); focusable.at(-1)?.focus(); }
        else if (!event.shiftKey && document.activeElement === focusable.at(-1)) { event.preventDefault(); focusable[0].focus(); }
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = original;
      document.removeEventListener("keydown", closeOnEscape);
      previousFocus.current?.focus();
    };
  }, [cartOpen, closeCart]);

  if (!cartOpen) return null;
  return (
    <div className="fixed inset-0 z-[70]">
      <button type="button" onClick={store.closeCart} aria-label="Close shopping bag overlay" className="absolute inset-0 h-full w-full bg-ink/40 backdrop-blur-[3px]" />
      <aside ref={panelRef} role="dialog" aria-modal="true" aria-labelledby="bag-title" className="absolute inset-y-0 right-0 flex h-full w-full max-w-[480px] flex-col bg-canvas">
        <div className="border-b border-line px-5 pb-4 pt-6 sm:px-7">
          <div className="flex items-center justify-between"><div className="flex items-center gap-3"><h2 id="bag-title" className="font-serif text-[25px]">Your Bag</h2><span className="rounded bg-paper px-2 py-1 text-[11px]">{itemCount} {itemCount === 1 ? "Item" : "Items"}</span></div><button ref={closeRef} onClick={store.closeCart} aria-label="Close bag" className="p-2"><X size={21}/></button></div>
          <div className="mt-4 rounded bg-paper p-3"><div className="mb-2 flex items-center justify-between gap-2 text-xs font-semibold uppercase tracking-wider"><span className="flex items-center gap-1.5"><span className="text-champagne">✥</span>{remaining ? `Add ${formatINR(remaining)} for free shipping` : "Free insured Pan-India shipping unlocked"}</span><span className="text-gold">{progress}%</span></div><div className="h-[5px] overflow-hidden rounded-full bg-line"><div className="h-full rounded-full bg-champagne transition-all duration-300" style={{ width: `${progress}%` }}/></div></div>
        </div>
        <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5 sm:px-7">
          {lines.length === 0 ? <div className="flex h-full flex-col items-center justify-center gap-4 text-center"><ShoppingBag className="text-champagne" size={36} strokeWidth={1.3}/><h3 className="font-serif text-2xl">Your bag is waiting</h3><p className="max-w-xs text-sm text-muted">Consider something handcrafted just for you.</p><Link onClick={store.closeCart} href="/collections" className="btn-dark">Explore Heirlooms</Link></div> : <>
            {lines.map(({ product, ...line }) => <article key={line.key} className="flex gap-3 rounded-lg bg-paper p-3">
              <Link href={`/products/${product.slug}`} onClick={store.closeCart} className="relative h-[104px] w-[88px] shrink-0 overflow-hidden rounded-[3px]"><EditorialImage src={product.image} fallback={product.fallback} alt={product.name} sizes="88px"/></Link>
              <div className="flex min-w-0 flex-1 flex-col justify-between"><div className="flex items-start justify-between gap-2"><div className="min-w-0"><span className="eyebrow text-[9px]">{product.tag ?? "Atelier original"}</span><Link href={`/products/${product.slug}`} onClick={store.closeCart} className="block truncate font-serif text-[16px] hover:text-gold">{product.name}</Link><p className="truncate text-[11px] text-muted">{[line.finish || product.material, line.size].filter(Boolean).join(" · ")}</p></div><button onClick={() => store.removeFromCart(line.key)} className="shrink-0 p-1 text-muted hover:text-red-700" aria-label={`Remove ${product.name}`}><X size={16}/></button></div><div className="flex items-end justify-between gap-2"><QuantityStepper compact value={line.quantity} max={Math.min(product.stock,20)} onChange={(quantity) => store.updateQuantity(line.key, quantity)}/><span className="whitespace-nowrap text-[13px] font-semibold">{formatINR(product.price * line.quantity)}</span></div></div>
            </article>)}
            <label className="flex cursor-pointer gap-2 rounded bg-white/70 p-3"><input type="checkbox" checked={store.giftWrap} onChange={(event) => store.setGiftWrap(event.target.checked)} className="mt-1 accent-ink"/><span><span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider"><Gift size={14}/>Artisanal gift packaging <span className="font-normal normal-case text-gold">(complimentary)</span></span><span className="mt-1 block text-xs text-muted">Wax-sealed keepsake box & handwritten calligraphy card</span></span></label>
            <div className="flex items-center justify-between gap-2 rounded bg-white/70 p-3"><div><p className="text-xs font-semibold">Organic Polishing Cloth</p><p className="mt-1 text-[11px] text-gold">+₹250</p></div><button className="btn-light px-3 py-2" onClick={() => store.setPolishingCloth(!store.polishingCloth)}>{store.polishingCloth ? "Added ✓" : "+ Add"}</button></div>
          </>}
        </div>
        <div className="border-t border-line bg-paper px-5 py-5 sm:px-7">
          {lines.length > 0 && <>
            <label className="mb-4 flex items-center justify-between gap-2 rounded bg-[#eae8e5] px-3 py-2"><span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold"><BadgeCheck size={17}/><input type="checkbox" className="accent-gold" checked={store.promotionApplied} onChange={(event) => store.setPromotionApplied(event.target.checked)}/> Code AURELIA10 {store.promotionApplied ? "applied" : "available"}</span><span className="text-xs text-gold">-{formatINR(totals.discount)}</span></label>
            <dl className="space-y-2 text-xs text-muted"><div className="flex justify-between"><dt>Bag Subtotal</dt><dd className="text-ink">{formatINR(totals.subtotal)}</dd></div><div className="flex justify-between"><dt>First Order Privilege (10%)</dt><dd className="text-gold">-{formatINR(totals.discount)}</dd></div><div className="flex justify-between"><dt>Insured Shipping</dt><dd className="text-gold">{totals.shipping ? formatINR(totals.shipping) : "FREE"}</dd></div><div className="flex items-center justify-between border-t border-line pt-3 text-ink"><dt className="font-serif text-[20px]">Estimated Total</dt><dd className="text-right text-xl font-semibold">{formatINR(totals.total)}<span className="block text-[10px] font-normal text-muted">Demo total · tax setup pending</span></dd></div></dl>
            <Link href="/checkout" onClick={store.closeCart} className="btn-dark mt-5 w-full">Review Order <LockKeyhole size={14}/></Link>
          </>}
          <p className="mt-3 text-center text-[11px] uppercase tracking-wider text-muted">Front-end demonstration · No live payments</p>
        </div>
      </aside>
    </div>
  );
}
