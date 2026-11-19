"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { useStore } from "./store-provider";

const menu = [
  { label: "Shop", href: "/collections" },
  { label: "Pendants", href: "/collections?category=Pendants" },
  { label: "Rings", href: "/collections?category=Rings" },
  { label: "Necklaces", href: "/collections?category=Necklaces" },
  { label: "Our Story", href: "/our-story" },
];

const secondaryMenu = [
  { label: "Journal", href: "/journal" },
  { label: "Care Guide", href: "/care-guide" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { cart, wishlist, openCart } = useStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const count = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = query.trim().slice(0, 120);
    router.push(trimmed ? `/collections?search=${encodeURIComponent(trimmed)}` : "/collections");
    setSearchOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/95 shadow-[0_1px_18px_rgba(60,40,35,.035)] backdrop-blur-xl">
      <div className="bg-gold px-4 py-2 text-center text-[9px] font-semibold uppercase tracking-[.14em] text-white sm:text-[10px]">
        <span>Complimentary Pan-India shipping above ₹2,500</span>
        <span className="mx-3 text-white/50">◆</span>
        <span className="hidden sm:inline">A temporary jewellery reference edit</span>
        <span className="sm:hidden">Temporary reference edit</span>
      </div>

      <div className="container-site grid h-[78px] grid-cols-[1fr_auto_1fr] items-center gap-3 xl:h-[88px]">
        <nav aria-label="Main navigation" className="hidden items-center gap-5 xl:flex 2xl:gap-7">
          {menu.map((link) => {
            const active = link.href === "/collections"
              ? pathname === "/collections"
              : !link.href.includes("?") && pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative whitespace-nowrap py-3 text-[10px] font-semibold uppercase tracking-[.1em] transition-colors after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:bg-gold after:transition-transform hover:text-gold ${active ? "text-gold after:scale-x-100" : "text-ink after:scale-x-0 hover:after:scale-x-100"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="justify-self-start xl:hidden">
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-paper"
          >
            {mobileMenuOpen ? <X size={21} strokeWidth={1.5} /> : <Menu size={21} strokeWidth={1.5} />}
          </button>
        </div>

        <Link href="/" aria-label="Aurelia Craft home" className="group flex flex-col items-center justify-self-center text-center leading-none">
          <span className="font-serif text-[1.35rem] uppercase tracking-[-.035em] transition-colors group-hover:text-gold sm:text-[1.65rem]">Aurelia Craft</span>
          <span className="mt-1.5 hidden text-[8px] font-semibold uppercase tracking-[.25em] text-muted sm:block">Jewellery atelier</span>
        </Link>

        <div className="flex items-center justify-self-end gap-0.5 sm:gap-1.5">
          <button
            type="button"
            onClick={() => setSearchOpen((open) => !open)}
            aria-label="Search products"
            aria-expanded={searchOpen}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-paper hover:text-gold ${searchOpen ? "bg-paper text-gold" : ""}`}
          >
            <Search size={18} strokeWidth={1.5} />
          </button>
          <Link href="/wishlist" aria-label={`Wishlist, ${wishlist.length} saved items`} className="relative hidden h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-paper hover:text-gold sm:flex">
            <Heart size={18} strokeWidth={1.5} />
            {wishlist.length > 0 && <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[9px] font-semibold text-white">{wishlist.length}</span>}
          </Link>
          <button
            type="button"
            onClick={openCart}
            aria-label={`Open bag, ${count} items`}
            className="ml-0.5 flex h-10 items-center gap-2 rounded-full border border-line bg-paper/70 px-3 transition-colors hover:border-champagne hover:bg-[#f3e4e1] sm:px-4"
          >
            <ShoppingBag size={16} strokeWidth={1.5} />
            <span className="hidden text-[10px] font-semibold uppercase tracking-[.1em] sm:inline">Bag</span>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[9px] font-semibold text-white">{count}</span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-line bg-canvas xl:hidden">
          <div className="container-site grid gap-8 py-7 sm:grid-cols-[1.25fr_.75fr]">
            <nav aria-label="Mobile navigation">
              <p className="eyebrow mb-3">Shop the edit</p>
              <div className="grid grid-cols-2 gap-x-5">
                {menu.map((link) => (
                  <Link key={link.href} href={link.href} className="border-b border-line/70 py-3.5 font-serif text-xl transition-colors hover:text-gold">{link.label}</Link>
                ))}
              </div>
            </nav>
            <div className="rounded-sm bg-[#f3e4e1] p-5">
              <p className="eyebrow mb-3">The atelier</p>
              <nav aria-label="More navigation" className="space-y-3">
                {secondaryMenu.map((link) => <Link key={link.href} href={link.href} className="block text-sm text-muted transition-colors hover:text-gold">{link.label}</Link>)}
                <Link href="/wishlist" className="block text-sm text-muted transition-colors hover:text-gold">Saved pieces ({wishlist.length})</Link>
              </nav>
            </div>
          </div>
        </div>
      )}

      {searchOpen && (
        <form role="search" onSubmit={handleSearch} className="absolute left-0 right-0 top-full border-y border-line bg-canvas/98 shadow-[0_18px_45px_rgba(60,40,35,.08)]">
          <div className="container-site flex items-center gap-3 py-5">
            <Search size={20} strokeWidth={1.4} className="shrink-0 text-gold" />
            <input
              ref={searchRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              maxLength={120}
              placeholder="Search pendants, rings, necklaces…"
              aria-label="Search catalogue"
              className="min-w-0 flex-1 border-0 bg-transparent py-2 font-serif text-xl outline-none placeholder:text-muted/55 sm:text-2xl"
            />
            <button type="submit" className="btn-dark hidden sm:inline-flex">Search</button>
            <button type="button" onClick={() => setSearchOpen(false)} aria-label="Close search" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full hover:bg-paper"><X size={19} /></button>
          </div>
        </form>
      )}
    </header>
  );
}
