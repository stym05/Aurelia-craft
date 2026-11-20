"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

const links = [
  {
    title: "Shop",
    items: [
      ["All jewellery", "/collections"],
      ["Pendants", "/collections?category=Pendants"],
      ["Rings", "/collections?category=Rings"],
      ["Necklaces", "/collections?category=Necklaces"],
      ["Saved pieces", "/wishlist"],
    ],
  },
  {
    title: "Discover",
    items: [
      ["Our story", "/our-story"],
      ["The atelier journal", "/journal"],
      ["Material care", "/care-guide"],
      ["Craft and provenance", "/our-story"],
    ],
  },
  {
    title: "Client care",
    items: [
      ["Contact us", "/contact"],
      ["Shipping and returns", "/care-guide"],
      ["Sizing guidance", "/care-guide"],
      ["Product enquiries", "/contact"],
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setJoined(true);
  }

  return (
    <footer className="mt-16">
      <section className="border-y border-line bg-canvas">
        <div className="container-site grid items-end gap-10 py-14 md:grid-cols-[1.1fr_.9fr] md:py-16 lg:gap-24">
          <div>
            <p className="eyebrow mb-3">Private letters from Aurelia</p>
            <h2 className="font-serif text-[2.35rem] leading-[1.08] tracking-[-.035em] md:text-[3.2rem]">A quieter way to<br className="hidden sm:block" /> discover what is new.</h2>
          </div>
          <form onSubmit={submit}>
            <label htmlFor="footer-email" className="mb-2 block text-xs font-medium uppercase tracking-[.14em] text-muted">Your email address</label>
            <div className="flex border-b border-ink/50">
              <input
                id="footer-email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email address"
                className="min-w-0 flex-1 bg-transparent py-3 font-serif text-lg outline-none placeholder:text-muted/50"
              />
              <button type="submit" className="pl-5 text-xs font-medium uppercase tracking-[.14em] text-ink transition-colors hover:text-gold">Subscribe</button>
            </div>
            {joined && <p role="status" className="mt-3 text-xs text-gold">Email validated locally. Connect an email service before launch.</p>}
            <p className="mt-3 text-xs leading-5 text-muted">Occasional notes only. This demonstration does not send or store submissions.</p>
          </form>
        </div>
      </section>

      <div className="bg-[#262220] text-canvas">
        <div className="container-site">
          <div className="grid gap-14 border-b border-white/10 py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
            <div className="lg:col-span-5">
              <Link href="/" className="inline-flex flex-col leading-none" aria-label="Aurelia Craft home">
                <span className="font-serif text-[2.4rem] tracking-[-.045em]">Aurelia <em className="font-normal">Craft</em></span>
                <span className="mt-3 text-[11px] font-medium uppercase tracking-[.26em] text-white/45">Jewellery atelier</span>
              </Link>
              <p className="mt-7 max-w-md font-serif text-xl leading-8 text-white/65">Jewellery chosen for the quiet rituals of every day—and the moments that stay with you.</p>
              <div className="mt-8 h-px w-16 bg-champagne" />
            </div>

            <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
              {links.map((column) => (
                <div key={column.title}>
                  <h3 className="mb-6 text-xs font-medium uppercase tracking-[.16em] text-champagne">{column.title}</h3>
                  <ul className="space-y-4">
                    {column.items.map(([label, href]) => (
                      <li key={label}><Link href={href} className="text-sm text-white/55 transition-colors hover:text-white">{label}</Link></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 py-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 Aurelia Craft</span>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 uppercase tracking-[.11em]">
              <Link href="/care-guide" className="transition-colors hover:text-white">Terms</Link>
              <Link href="/contact" className="transition-colors hover:text-white">Privacy</Link>
              <Link href="/our-story" className="transition-colors hover:text-white">Provenance</Link>
            </div>
            <span className="uppercase tracking-[.13em] text-white/50">INR · India</span>
          </div>
          <p className="pb-7 text-xs leading-5 text-white/30">Storefront demonstration using temporary GIVA reference products. Replace catalogue data and connect live services before launch.</p>
        </div>
      </div>
    </footer>
  );
}
