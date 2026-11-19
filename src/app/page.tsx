import Link from "next/link";
import { Gem, Leaf, ShieldCheck } from "lucide-react";
import { Bestsellers } from "@/components/bestsellers";
import { EditorialImage } from "@/components/editorial-image";
import { categories, editorialImage, heroImage, products } from "@/data/products";

const collectionTiles = [
  { ...categories[0], className: "md:col-span-7 md:row-span-2", aspect: "aspect-[4/5] md:aspect-auto" },
  { ...categories[1], className: "md:col-span-5", aspect: "aspect-[4/3]" },
  { ...categories[2], className: "md:col-span-5", aspect: "aspect-[4/3]" },
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero overflow-hidden border-b border-line/70">
        <div className="container-site grid min-h-[calc(100svh-110px)] items-center gap-10 py-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-16 lg:py-14">
          <div className="order-2 max-w-xl pb-5 lg:order-1 lg:pb-0">
            <p className="eyebrow flex items-center gap-3 before:h-px before:w-9 before:bg-champagne">The Rose & Silver Edit</p>
            <h1 className="mt-5 font-serif text-[3.35rem] leading-[.98] tracking-[-.045em] sm:text-[4.5rem] lg:text-[5.4rem]">
              Made by hand.<br />Meant to be<br /><em className="font-normal text-gold">kept close.</em>
            </h1>
            <p className="mt-7 max-w-md text-base leading-8 text-muted">A temporary edit of GIVA pendants, rings, and necklaces in softly luminous rose-gold and sterling-silver finishes.</p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link href="/collections" className="btn-dark">Discover the collection</Link>
              <Link href="/our-story" className="text-link">How each piece is made</Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-5 text-[11px] uppercase tracking-[.11em] text-muted">
              <span>Hand-finished in Jaipur</span>
              <span>Rose gold & sterling silver</span>
              <span>Made in small batches</span>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-[760px] px-6 pb-10 sm:px-12 lg:px-0 lg:pb-12 lg:pl-16">
              <div className="hero-orbit absolute left-0 top-[9%] hidden h-28 w-28 rounded-full border border-champagne/50 sm:block lg:left-5" aria-hidden="true" />
              <div className="relative ml-auto aspect-[4/5] w-[92%] overflow-hidden rounded-t-[10rem] bg-[#e8dfd6] sm:w-[86%]">
                <EditorialImage src={heroImage.src} fallback={heroImage.fallback} alt="Model wearing softly sculpted jewellery" className="object-cover object-center" priority sizes="(max-width: 1024px) 90vw, 51vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/15 via-transparent to-white/5" />
              </div>
              <Link href={`/products/${products[0].slug}`} className="absolute bottom-0 left-0 w-[45%] max-w-[250px] bg-canvas p-2 shadow-[0_20px_60px_rgba(75,55,35,.12)] sm:left-6 lg:left-0" aria-label={`View ${products[0].name}`}>
                <div className="relative aspect-square overflow-hidden bg-paper">
                  <EditorialImage src={products[0].image} fallback={products[0].fallback} alt={`${products[0].name} detail`} sizes="250px" />
                </div>
                <div className="flex items-end justify-between gap-3 px-2 pb-1 pt-3">
                  <div><p className="eyebrow text-[9px]">GIVA reference</p><p className="mt-1 font-serif text-sm sm:text-base">Wreath Pendant</p></div>
                  <span className="pb-0.5 text-xs text-muted">₹1,999</span>
                </div>
              </Link>
              <div className="absolute bottom-14 right-2 hidden bg-canvas/90 px-4 py-3 backdrop-blur sm:block">
                <p className="font-serif text-lg italic">Softly luminous</p>
                <p className="mt-1 text-[10px] uppercase tracking-[.12em] text-muted">Temporary catalogue</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-site py-20 text-center md:py-28">
        <p className="eyebrow">Jewellery with a gentler rhythm</p>
        <h2 className="mx-auto mt-5 max-w-4xl font-serif text-[2.35rem] leading-[1.15] tracking-[-.025em] md:text-[3.6rem]">Not saved for someday.<br className="hidden sm:block" /> <em className="font-normal text-gold">Made for every day.</em></h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted">Aurelia pieces are designed to move easily through your life—subtle enough to live in, distinctive enough to feel entirely your own.</p>
      </section>

      <section className="bg-[#f4efea] py-16 md:py-24">
        <div className="container-site">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div><p className="eyebrow mb-3">Begin with what draws you in</p><h2 className="editorial-title">Choose your <em className="font-normal text-gold">signature</em></h2></div>
            <Link href="/collections" className="text-link self-start md:self-auto">Explore every piece</Link>
          </div>
          <div className="grid gap-4 md:h-[720px] md:grid-cols-12 md:grid-rows-2 md:gap-5">
            {collectionTiles.map((category) => (
              <Link key={category.category} href={`/collections?category=${category.category}`} className={`group relative overflow-hidden bg-[#e8e0d7] ${category.aspect} ${category.className}`}>
                <EditorialImage src={category.image.image} fallback={category.image.fallback} alt={category.label} className="hover-image" sizes="(max-width: 768px) 100vw, 60vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                  <p className="text-[10px] uppercase tracking-[.16em] text-white/75">{category.count} pieces</p>
                  <h3 className="mt-2 font-serif text-3xl tracking-tight md:text-4xl">{category.label}</h3>
                  <span className="mt-4 inline-block border-b border-white/70 pb-1 text-[10px] font-semibold uppercase tracking-[.14em]">Shop {category.category.toLowerCase()}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Bestsellers />

      <section className="overflow-hidden bg-[#ddd2c8]">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[520px] lg:min-h-[720px]">
            <EditorialImage src={editorialImage.src} fallback={editorialImage.fallback} alt="Jewellery artisan working by hand in the Jaipur atelier" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div className="flex items-center px-6 py-16 sm:px-12 lg:px-[10%] lg:py-24">
            <div className="max-w-xl">
              <p className="eyebrow mb-4">Made slowly in Jaipur</p>
              <h2 className="font-serif text-[2.7rem] leading-[1.08] tracking-[-.035em] md:text-[4rem]">You can see the hand<br />in <em className="font-normal text-gold">every detail.</em></h2>
              <p className="mt-7 text-base leading-8 text-[#5f5852]">Every piece begins as a form shaped in wax, then cast, polished, and finished by hand. Those faint textures and subtle variations are part of its character—and the reason it could only be yours.</p>
              <Link href="/our-story" className="btn-outline mt-9">Meet the making process</Link>
              <div className="mt-12 grid grid-cols-3 gap-4 border-t border-[#bfb1a5] pt-7">
                <div><Leaf size={19} strokeWidth={1.4} className="text-gold"/><p className="mt-3 text-xs font-medium">Considered metals</p></div>
                <div><Gem size={19} strokeWidth={1.4} className="text-gold"/><p className="mt-3 text-xs font-medium">Rose gold & silver</p></div>
                <div><ShieldCheck size={19} strokeWidth={1.4} className="text-gold"/><p className="mt-3 text-xs font-medium">Made to last</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-site py-20 md:py-28">
        <div className="relative overflow-hidden border border-line bg-[#f5eee6] px-6 py-14 text-center sm:px-12 md:py-20">
          <div className="absolute -left-20 -top-28 h-64 w-64 rounded-full border border-champagne/30" aria-hidden="true" />
          <div className="absolute -bottom-40 -right-16 h-72 w-72 rounded-full border border-champagne/30" aria-hidden="true" />
          <div className="relative">
            <p className="eyebrow">For someone you know by heart</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-serif text-[2.35rem] leading-tight tracking-[-.025em] md:text-[3.5rem]">Mark the moment with<br className="hidden sm:block" /> <em className="font-normal text-gold">something lasting.</em></h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted">For milestones, new chapters, or no occasion at all—choose a piece they will reach for, remember, and make their own.</p>
            <Link href="/collections" className="btn-dark mt-8">Find their piece</Link>
          </div>
        </div>
      </section>
    </>
  );
}
