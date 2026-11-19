"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "./product-card";
import { useStore } from "./store-provider";

export function WishlistView() {
  const { wishlist } = useStore();
  const items = products.filter((product) => wishlist.includes(product.id));
  return <div className="container-site min-h-[55vh] py-12 md:py-20"><p className="eyebrow mb-2">Your Collector Archive</p><h1 className="editorial-title">Saved <em className="font-normal">Keepsakes</em></h1><p className="mt-3 text-sm leading-7 text-muted">Your favorite heirlooms, kept close for the right moment.</p>{items.length ? <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 md:gap-5">{items.map((item) => <ProductCard key={item.id} product={item}/>)}</div> : <div className="flex flex-col items-center gap-5 py-20 text-center"><Heart size={38} strokeWidth={1.3} className="text-champagne"/><h2 className="font-serif text-2xl">Nothing saved yet</h2><p className="text-sm text-muted">Explore our handcrafted collection and save the pieces you love.</p><Link href="/collections" className="btn-dark">Browse the Collection</Link></div>}</div>;
}
