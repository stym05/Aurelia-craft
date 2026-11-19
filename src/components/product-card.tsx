"use client";

import Link from "next/link";
import { Heart, Plus, Star } from "lucide-react";
import { Product } from "@/data/products";
import { formatINR } from "@/lib/commerce";
import { useStore } from "./store-provider";
import { EditorialImage } from "./editorial-image";

export function ProductCard({ product, square = false }: { product: Product; square?: boolean }) {
  const { addToCart, isWishlisted, toggleWishlist } = useStore();
  const saved = isWishlisted(product.id);
  return <article className="group flex h-full flex-col overflow-hidden rounded-md border border-line/50 bg-paper transition-colors duration-300 hover:border-champagne">
    <div className={`relative overflow-hidden bg-[#e9e5dc] ${square ? "aspect-square" : "aspect-[4/5]"}`}>
      <Link href={`/products/${product.slug}`} className="absolute inset-0 z-[1]" aria-label={`View ${product.name}`}><EditorialImage src={product.image} fallback={product.fallback} alt={product.name} className="hover-image"/></Link>
      {product.tag && <span className="pointer-events-none absolute left-3 top-3 z-[2] rounded-[2px] bg-canvas/90 px-2 py-1 text-[9px] font-semibold uppercase tracking-wider text-gold">{product.tag}</span>}
      <button type="button" aria-label={saved ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`} aria-pressed={saved} onClick={() => toggleWishlist(product.id)} className={`absolute right-3 top-3 z-[3] flex h-8 w-8 items-center justify-center rounded-full bg-canvas/90 transition-colors hover:text-gold ${saved ? "text-gold" : "text-ink"}`}><Heart size={17} fill={saved ? "currentColor" : "none"} strokeWidth={1.5}/></button>
      <button type="button" onClick={() => addToCart(product.id)} aria-label={`Quick add ${product.name} to bag`} className="absolute bottom-3 left-3 right-3 z-[2] flex items-center justify-center gap-2 rounded-sm bg-ink/90 py-2.5 text-[10px] font-semibold uppercase tracking-editorial text-white opacity-100 transition-all hover:bg-gold sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:focus:translate-y-0 sm:focus:opacity-100"><Plus size={14}/> Quick Add</button>
    </div>
    <div className="flex flex-1 flex-col justify-between gap-2 p-3.5"><div><div className="mb-1 flex justify-between gap-2 text-[9px] uppercase tracking-[.08em] text-muted"><span>{product.category}</span><span className="truncate">{product.sourceName ? `Reference · ${product.sourceName}` : product.material}</span></div><Link href={`/products/${product.slug}`} className="block font-serif text-[17px] leading-6 transition-colors hover:text-gold sm:text-[19px]">{product.name}</Link></div><div className="flex items-center justify-between gap-2"><span className="text-[13px] font-semibold">{formatINR(product.price)}</span><span className="flex items-center gap-1 text-[11px] text-muted"><Star size={12} fill="#C98F86" className="text-champagne"/>{product.rating.toFixed(1)}</span></div></div>
  </article>;
}
