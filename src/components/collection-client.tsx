"use client";

import { Fragment, useEffect, useMemo, useState } from "react";
import { BadgeCheck, ChevronDown, RotateCcw, SlidersHorizontal, Sparkles, Truck, X } from "lucide-react";
import Link from "next/link";
import { editorialImage, products } from "@/data/products";
import { ProductCard } from "./product-card";
import { EditorialImage } from "./editorial-image";

type Filters = {
  category: string;
  material: string;
  price: string;
  search: string;
  stock: boolean;
  sort: string;
};

const EMPTY: Filters = {
  category: "all",
  material: "all",
  price: "all",
  search: "",
  stock: false,
  sort: "featured",
};

const categoryOptions = ["Pendants", "Rings", "Necklaces"];
const materialOptions = ["925 Silver · Rose Gold Plated", "925 Sterling Silver", "Oxidised 925 Silver"];
const curatedOrder = ["giva-drop-wreath-pendant", "giva-wreath-ring", "giva-deer-heart-necklace", "giva-solitaire-heart-pendant", "giva-floral-chic-ring", "giva-infinity-heart-necklace", "giva-mystic-prism-pendant", "giva-pure-poise-ring", "giva-star-necklace", "giva-ocean-heart-pendant", "giva-solitaire-spin-ring", "giva-sparkling-infinity-necklace"];

function matchesPrice(price: number, range: string) {
  if (range === "under3000") return price < 3000;
  if (range === "3000to5000") return price >= 3000 && price <= 5000;
  if (range === "over5000") return price > 5000;
  return true;
}

export function CollectionClient({ initial }: { initial: { category?: string; search?: string } }) {
  const initialCategory = categoryOptions.includes(initial.category ?? "") ? initial.category! : "all";
  const [filters, setFilters] = useState<Filters>({ ...EMPTY, category: initialCategory, search: (initial.search ?? "").slice(0, 120) });
  const [limit, setLimit] = useState(8);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    setFilters((previous) => ({
      ...previous,
      category: categoryOptions.includes(initial.category ?? "") ? initial.category! : "all",
      search: (initial.search ?? "").slice(0, 120),
    }));
    setLimit(8);
  }, [initial.category, initial.search]);

  const update = (patch: Partial<Filters>) => {
    setFilters((previous) => ({ ...previous, ...patch }));
    setLimit(8);
  };

  const sorted = useMemo(() => {
    const matches = products.filter((product) => (
      (filters.category === "all" || product.category === filters.category) &&
      (filters.material === "all" || product.material === filters.material) &&
      matchesPrice(product.price, filters.price) &&
      (!filters.stock || product.stock > 0) &&
      (filters.search.trim() === "" || `${product.name} ${product.category} ${product.material} ${product.description}`.toLowerCase().includes(filters.search.trim().toLowerCase()))
    ));

    const ordered = [...matches];
    if (filters.sort === "price-low") ordered.sort((a, b) => a.price - b.price);
    if (filters.sort === "price-high") ordered.sort((a, b) => b.price - a.price);
    if (filters.sort === "rating") ordered.sort((a, b) => b.rating - a.rating);
    if (filters.sort === "name") ordered.sort((a, b) => a.name.localeCompare(b.name));
    if (filters.sort === "featured") ordered.sort((a, b) => curatedOrder.indexOf(a.id) - curatedOrder.indexOf(b.id));
    return ordered;
  }, [filters]);

  const visible = sorted.slice(0, limit);
  const showAtelierStory = visible.length >= 6 && filters.category === "all" && !filters.search;
  const active = [
    filters.category !== "all" ? ["category", filters.category] : null,
    filters.material !== "all" ? ["material", filters.material] : null,
    filters.price !== "all" ? ["price", { under3000: "Under ₹3,000", "3000to5000": "₹3,000–₹5,000", over5000: "Above ₹5,000" }[filters.price] ?? ""] : null,
    filters.stock ? ["stock", "In stock"] : null,
    filters.search ? ["search", `“${filters.search}”`] : null,
  ].filter((entry): entry is string[] => entry !== null);

  const selectClass = "w-full appearance-none rounded-[3px] border border-line bg-canvas py-2.5 pl-3 pr-9 text-[13px] font-medium text-ink outline-none transition-colors hover:border-champagne focus:border-gold";

  return (
    <>
      <section className="overflow-hidden border-b border-line bg-[#f6eeec]">
        <div className="container-site grid items-center gap-9 py-10 md:py-14 lg:grid-cols-[1fr_.82fr] lg:gap-16 lg:py-16">
          <div>
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-[11px] uppercase tracking-[.12em] text-muted">
              <Link href="/" className="transition-colors hover:text-gold">Home</Link>
              <span className="text-champagne">/</span>
              <span>Collections</span>
            </nav>
            <p className="eyebrow flex items-center gap-3 before:h-px before:w-8 before:bg-champagne">The rose & silver edit</p>
            <h1 className="mt-4 max-w-3xl font-serif text-[3rem] leading-[1.02] tracking-[-.04em] sm:text-[4.25rem] lg:text-[4.8rem]">
              Pieces for your<br /><em className="font-normal text-gold">everyday ritual.</em>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted">A temporary reference edit of GIVA pendants, rings, and necklaces in rose-gold plated and sterling-silver finishes.</p>
            <div className="mt-8 flex flex-wrap gap-2" aria-label="Shop by category">
              {["all", ...categoryOptions].map((category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={filters.category === category}
                  onClick={() => update({ category })}
                  className={`rounded-[3px] border px-4 py-2.5 text-xs font-semibold uppercase tracking-[.1em] transition-colors ${filters.category === category ? "border-gold bg-gold text-white" : "border-line bg-canvas/70 text-ink hover:border-champagne"}`}
                >
                  {category === "all" ? "Shop all" : category}
                </button>
              ))}
            </div>
          </div>

          <div className="relative hidden min-h-[430px] sm:block lg:min-h-[500px]">
            <div className="absolute bottom-0 right-0 top-0 w-[72%] overflow-hidden rounded-t-[7rem] bg-[#eadbd8]">
              <EditorialImage src={products[0].image} fallback={products[0].fallback} alt="Rose-gold pendant from the temporary GIVA reference edit" priority sizes="(max-width: 1024px) 65vw, 34vw" />
            </div>
            <div className="absolute bottom-6 left-0 aspect-[4/5] w-[42%] overflow-hidden border-[8px] border-[#f6eeec] bg-paper shadow-[0_18px_55px_rgba(95,55,58,.13)]">
              <EditorialImage src={products[4].image} fallback={products[4].fallback} alt="Rose-gold plated silver ring from the temporary GIVA reference edit" sizes="280px" />
            </div>
            <div className="absolute left-[21%] top-6 flex h-20 w-20 items-center justify-center rounded-full border border-champagne/70 bg-canvas/80 text-center text-[11px] font-semibold uppercase tracking-[.1em] text-gold backdrop-blur">
              12 GIVA<br />references
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-[106px] z-30 border-b border-line bg-canvas/95 backdrop-blur-md xl:top-[116px]">
        <div className="container-site py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="btn-light flex items-center gap-2 px-3 py-2 lg:hidden"
                aria-expanded={showMobileFilters}
                onClick={() => setShowMobileFilters((open) => !open)}
              >
                <SlidersHorizontal size={14} /> Refine
              </button>
              <p className="hidden text-sm text-muted sm:block"><span className="font-semibold text-ink">{sorted.length}</span> {sorted.length === 1 ? "piece" : "pieces"}</p>
            </div>

            <div className="relative w-[165px] sm:w-[190px]">
              <label className="sr-only" htmlFor="sort-filter">Sort collection</label>
              <select id="sort-filter" className={selectClass} value={filters.sort} onChange={(event) => update({ sort: event.target.value })}>
                <option value="featured">Featured first</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
                <option value="rating">Most loved</option>
                <option value="name">Name: A to Z</option>
              </select>
              <ChevronDown aria-hidden="true" size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted" />
            </div>
          </div>

          <div className={`${showMobileFilters ? "grid" : "hidden"} mt-3 gap-3 border-t border-line pt-3 lg:grid lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-center`}>
            <div className="relative">
              <label className="sr-only" htmlFor="category-filter">Category</label>
              <select id="category-filter" className={selectClass} value={filters.category} onChange={(event) => update({ category: event.target.value })}>
                <option value="all">All categories</option>
                {categoryOptions.map((value) => <option key={value} value={value}>{value}</option>)}
              </select>
              <ChevronDown aria-hidden="true" size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted" />
            </div>
            <div className="relative">
              <label className="sr-only" htmlFor="material-filter">Material</label>
              <select id="material-filter" className={selectClass} value={filters.material} onChange={(event) => update({ material: event.target.value })}>
                <option value="all">All materials</option>
                {materialOptions.map((value) => <option key={value} value={value}>{value}</option>)}
              </select>
              <ChevronDown aria-hidden="true" size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted" />
            </div>
            <div className="relative">
              <label className="sr-only" htmlFor="price-filter">Price range</label>
              <select id="price-filter" className={selectClass} value={filters.price} onChange={(event) => update({ price: event.target.value })}>
                <option value="all">Any price</option>
                <option value="under3000">Under ₹3,000</option>
                <option value="3000to5000">₹3,000–₹5,000</option>
                <option value="over5000">Above ₹5,000</option>
              </select>
              <ChevronDown aria-hidden="true" size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted" />
            </div>
            <label className="flex cursor-pointer items-center gap-2 py-2 text-xs font-semibold uppercase tracking-[.08em] text-ink">
              <input type="checkbox" checked={filters.stock} onChange={(event) => update({ stock: event.target.checked })} className="h-4 w-4 accent-gold" />
              In stock
            </label>
          </div>

          {active.length > 0 && (
            <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-line pt-3">
              <span className="mr-1 text-xs uppercase tracking-[.12em] text-muted">Your edit</span>
              {active.map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-[3px] bg-[#f3e4e1] px-2.5 py-1.5 text-xs font-medium text-gold transition-colors hover:bg-[#ead3cf]"
                  onClick={() => update(key === "stock" ? { stock: false } : { [key]: key === "search" ? "" : "all" })}
                >
                  {label}<X size={12} />
                </button>
              ))}
              <button type="button" onClick={() => update(EMPTY)} className="ml-1 text-xs font-semibold uppercase tracking-[.1em] text-muted underline decoration-line underline-offset-4 hover:text-gold">Clear all</button>
            </div>
          )}
        </div>
      </section>

      <section className="container-site py-12 md:py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-2">The current collection</p>
            <h2 className="font-serif text-3xl tracking-[-.02em] md:text-[2.6rem]">Find what feels <em className="font-normal text-gold">like you</em></h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm leading-6 text-muted md:block">Temporary reference data sourced from public GIVA listings and ready to be replaced with your final catalogue.</p>
        </div>

        {sorted.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-4">
            {visible.map((product, index) => (
              <Fragment key={product.id}>
                <div className="min-w-0"><ProductCard product={product} /></div>
                {index === 3 && showAtelierStory && (
                  <article className="col-span-2 grid overflow-hidden border border-line bg-[#f1e5e2] sm:grid-cols-2 lg:col-span-4 lg:grid-cols-[.9fr_1.1fr]">
                    <div className="relative min-h-[320px] sm:min-h-[380px]">
                      <EditorialImage src={editorialImage.src} fallback={editorialImage.fallback} alt="Jewellery artisan shaping a piece by hand" sizes="(max-width: 1024px) 100vw, 45vw" />
                    </div>
                    <div className="flex items-center px-6 py-10 sm:px-9 lg:px-14">
                      <div className="max-w-lg">
                        <p className="eyebrow mb-3 flex items-center gap-2"><Sparkles size={14} /> Inside the atelier</p>
                        <h3 className="font-serif text-[2rem] leading-[1.12] tracking-[-.025em] md:text-[2.75rem]">Shaped slowly.<br /><em className="font-normal text-gold">Finished by hand.</em></h3>
                        <p className="mt-5 text-sm leading-7 text-muted">Every design starts with a sculpted form, then passes through casting, polishing, and finishing. The result is jewellery with a softer surface and a trace of the person who made it.</p>
                        <Link href="/our-story" className="text-link mt-6">See how it is made</Link>
                      </div>
                    </div>
                  </article>
                )}
              </Fragment>
            ))}
          </div>
        ) : (
          <div className="border border-line bg-paper px-6 py-20 text-center">
            <h2 className="font-serif text-3xl">Nothing matches this edit</h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-muted">Try another material, price range, or category to reveal more pieces.</p>
            <button type="button" className="btn-dark mt-7" onClick={() => update(EMPTY)}>Reset filters</button>
          </div>
        )}

        {sorted.length > 0 && (
          <div className="mt-14 flex flex-col items-center gap-4 text-center">
            <p className="text-xs uppercase tracking-[.12em] text-muted">Showing {visible.length} of {sorted.length} pieces</p>
            <div className="h-px w-24 bg-champagne" />
            {visible.length < sorted.length && <button type="button" onClick={() => setLimit((value) => value + 8)} className="btn-outline min-w-56">View more pieces</button>}
          </div>
        )}
      </section>

      <section className="border-y border-line bg-[#f4efed] py-10">
        <div className="container-site grid gap-7 md:grid-cols-3">
          {[
            { icon: BadgeCheck, title: "Rose gold & silver", body: "A focused edit of warm rose tones and classic sterling silver." },
            { icon: Truck, title: "Pan-India delivery", body: "Delivery options and final timelines are confirmed at checkout." },
            { icon: RotateCcw, title: "Care guidance", body: "Simple guidance for cleaning, storage, sizing, and finish care." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-champagne/60 bg-canvas text-gold"><Icon size={18} strokeWidth={1.5} /></span>
              <div><h3 className="font-serif text-lg">{title}</h3><p className="mt-1 text-sm leading-6 text-muted">{body}</p></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
