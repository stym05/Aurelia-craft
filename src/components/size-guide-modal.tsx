"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

export function SizeGuideModal({ onClose }: { onClose: () => void }) {
  const [tab, setTab] = useState<"necklace" | "ring">("necklace");
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = [...dialogRef.current.querySelectorAll<HTMLElement>("button:not([disabled]), a[href]")];
        if (focusable.length === 0) return;
        if (event.shiftKey && document.activeElement === focusable[0]) { event.preventDefault(); focusable.at(-1)?.focus(); }
        else if (!event.shiftKey && document.activeElement === focusable.at(-1)) { event.preventDefault(); focusable[0].focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = oldOverflow; window.removeEventListener("keydown", onKey); };
  }, [onClose]);

  return <div className="fixed inset-0 z-[80] flex items-center justify-center p-4"><button aria-label="Close sizing guide" onClick={onClose} className="absolute inset-0 bg-ink/45 backdrop-blur-[3px]"/><div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="size-title" className="relative z-10 w-full max-w-[660px] overflow-hidden rounded-md bg-canvas"><div className="flex items-start justify-between border-b border-line px-5 py-5 sm:px-7"><div><p className="eyebrow text-[9px]">Jaipur Atelier Diagnostic</p><h2 id="size-title" className="mt-1 font-serif text-2xl">Atelier Sizing & Layering Guide</h2><p className="mt-1 text-xs text-muted">Find your bespoke fit and stacking arrangement.</p></div><button ref={closeRef} onClick={onClose} aria-label="Close guide" className="p-1"><X size={19}/></button></div><div className="flex gap-5 border-b border-line px-5 sm:px-7">{[{value:"necklace",label:"Necklace & Chain Layering"},{value:"ring",label:"Ring Size Guide"}].map((item) => <button key={item.value} className={`border-b-2 py-4 text-[10px] font-semibold uppercase tracking-wider ${tab === item.value ? "border-gold text-gold" : "border-transparent text-muted"}`} onClick={() => setTab(item.value as "necklace" | "ring")}>{item.label}</button>)}</div>
      {tab === "necklace" ? <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-7"><div className="rounded border border-line bg-paper p-4"><p className="eyebrow mb-3 text-[9px]">Drape Anatomy</p><svg viewBox="0 0 260 230" className="h-[225px] w-full" role="img" aria-label="Illustration of 16, 18, 20 and 24 inch layered necklace lengths"><path d="M64 10 L78 44 42 83 32 214 228 214 218 83 182 44 196 10" fill="#f9f5ed" stroke="#d1c5b4" strokeWidth="1"/><path d="M78 44 Q130 75 182 44" fill="none" stroke="#b5a99a"/><path d="M92 68 Q130 120 168 68" fill="none" stroke="#c98f86" strokeWidth="2"/><path d="M85 74 Q130 143 175 74" fill="none" stroke="#b97874" strokeWidth="2"/><path d="M78 82 Q130 173 182 82" fill="none" stroke="#8f4f52" strokeWidth="2"/><path d="M67 95 Q130 210 193 95" fill="none" stroke="#c98f86" strokeDasharray="3 3" strokeWidth="2"/><circle cx="130" cy="173" r="5" fill="#c98f86"/><circle cx="130" cy="210" r="4" fill="#c98f86"/></svg><p className="text-[11px] leading-6 text-muted">16″ sits close to the collarbone · 18″ at the base of the neck · 20″ drapes just below · 24″ forms a longer statement.</p></div><div className="space-y-3">{[{number:"01",title:"The Anchor",text:"Choose your focal heirloom (18″ or 20″ sculptural talisman) as the grounding centerpiece."},{number:"02",title:"The Frame",text:"Add a delicate contrast with a shorter 14″–16″ textured collar, then keep it lightweight."},{number:"03",title:"The Cascade",text:"Finish with an elongated 20″–24″ chain to guide the eye downward."}].map((step) => <div key={step.number} className="rounded border border-line bg-paper p-3"><p className="eyebrow text-[9px]">{step.number} &nbsp; {step.title}</p><p className="mt-1 text-xs leading-6 text-muted">{step.text}</p></div>)}</div></div> : <div className="space-y-4 p-5 sm:p-7"><p className="text-sm leading-7 text-muted">Measure the inside diameter of a ring that already fits the intended finger. Compare the measurement in millimetres with the guide below.</p><div className="grid grid-cols-3 gap-2 text-center text-xs">{[{size:"5",mm:"15.7"},{size:"6",mm:"16.5"},{size:"7",mm:"17.3"},{size:"8",mm:"18.1"},{size:"9",mm:"18.9"},{size:"10",mm:"19.8"}].map((entry) => <div className="rounded border border-line bg-paper p-3" key={entry.size}><p className="font-serif text-xl">US {entry.size}</p><p className="mt-1 text-muted">{entry.mm} mm</p></div>)}</div><p className="text-xs text-muted">This is an approximate guide; sizing can differ by band width. Contact the atelier for bespoke fitting.</p></div>}
      <div className="flex items-center justify-between gap-2 border-t border-line bg-paper px-5 py-4 sm:px-7"><span className="text-xs text-muted">Unsure of your silhouette? <span className="text-gold">Contact our atelier.</span></span><button onClick={onClose} className="btn-dark shrink-0 px-4 py-2.5">Got it / Close Guide</button></div></div></div>;
}
