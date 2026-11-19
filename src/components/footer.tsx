"use client";

import Link from "next/link";
import { Gem, Mail, ShieldCheck, Sparkles } from "lucide-react";
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
      <section className="border-y border-[#dfc8c3] bg-[#f1e1de]">
        <div className="container-site grid items-center gap-8 py-10 md:grid-cols-[1fr_1.15fr] md:py-12 lg:gap-16">
          <div>
            <p className="eyebrow mb-2 flex items-center gap-2"><Sparkles size={13} /> Notes from the studio</p>
            <h2 className="font-serif text-[2rem] leading-tight tracking-[-.025em] md:text-[2.6rem]">New pieces, thoughtful stories,<br className="hidden lg:block" /> sent occasionally.</h2>
          </div>
          <form onSubmit={submit}>
            <label htmlFor="footer-email" className="mb-2 block text-[10px] font-semibold uppercase tracking-[.12em] text-muted">Join the Aurelia list</label>
            <div className="flex border-b border-ink/40">
              <Mail size={18} strokeWidth={1.4} className="my-auto mr-3 shrink-0 text-gold" />
              <input
                id="footer-email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email address"
                className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-muted/60"
              />
              <button type="submit" className="px-2 text-[10px] font-semibold uppercase tracking-[.13em] text-ink transition-colors hover:text-gold">Join the list</button>
            </div>
            {joined && <p role="status" className="mt-3 text-xs text-gold">Email validated locally. Connect an email service before launch.</p>}
            <p className="mt-3 text-[10px] leading-5 text-muted">Occasional catalogue notes only. This demonstration does not send or store submissions.</p>
          </form>
        </div>
      </section>

      <div className="bg-ink text-canvas">
        <div className="container-site">
          <div className="grid gap-12 border-b border-white/10 py-14 lg:grid-cols-12 lg:gap-10 lg:py-16">
            <div className="lg:col-span-4">
              <Link href="/" className="inline-flex flex-col leading-none" aria-label="Aurelia Craft home">
                <span className="font-serif text-[1.8rem] uppercase tracking-[-.035em]">Aurelia Craft</span>
                <span className="mt-2 text-[8px] font-semibold uppercase tracking-[.27em] text-white/50">Jewellery atelier</span>
              </Link>
              <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">A soft, editorial storefront currently using temporary GIVA reference products. Replace the seeded catalogue and connect live commerce services before launch.</p>
              <div className="mt-7 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-[10px] uppercase tracking-[.09em] text-white/65"><Gem size={13} className="text-champagne" /> Rose gold & silver</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-[10px] uppercase tracking-[.09em] text-white/65"><ShieldCheck size={13} className="text-champagne" /> Reference catalogue</span>
              </div>
            </div>

            <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8 lg:pl-10">
              {links.map((column) => (
                <div key={column.title}>
                  <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[.16em] text-champagne">{column.title}</h3>
                  <ul className="space-y-3.5">
                    {column.items.map(([label, href]) => (
                      <li key={label}><Link href={href} className="text-sm text-white/60 transition-colors hover:text-white">{label}</Link></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 py-6 text-[10px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 Aurelia Craft. Storefront demonstration.</span>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 uppercase tracking-[.11em]">
              <Link href="/care-guide" className="transition-colors hover:text-white">Terms</Link>
              <Link href="/contact" className="transition-colors hover:text-white">Privacy</Link>
              <Link href="/our-story" className="transition-colors hover:text-white">Provenance</Link>
            </div>
            <span className="rounded-[3px] border border-white/15 px-3 py-2 uppercase tracking-[.11em] text-white/55">INR · India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
