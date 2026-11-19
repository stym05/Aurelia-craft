import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { StoreProvider } from "@/components/store-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CartDrawer } from "@/components/cart-drawer";

export const metadata: Metadata = {
  title: { default: "Aurelia Craft | Handcrafted Jewellery from Jaipur", template: "%s | Aurelia Craft" },
  description: "Browse a temporary reference catalogue of rose-gold and sterling-silver pendants, rings, and necklaces.",
  keywords: ["Aurelia Craft", "rose gold jewellery", "sterling silver jewellery", "pendants", "rings", "necklaces"],
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en"><body className="min-h-screen antialiased"><StoreProvider><Header/><main id="main-content" className="min-h-[65vh]">{children}</main><Footer/><CartDrawer/></StoreProvider></body></html>;
}
