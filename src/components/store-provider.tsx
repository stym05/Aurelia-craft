"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { clampQuantity } from "@/lib/commerce";
import { products } from "@/data/products";

export type CartLine = { key: string; productId: string; quantity: number; finish: string; size: string };
export type ProductOptions = { finish?: string; size?: string };
type StoreContextValue = {
  cart: CartLine[];
  wishlist: string[];
  cartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (productId: string, quantity?: number, options?: ProductOptions) => void;
  updateQuantity: (key: string, quantity: number) => void;
  removeFromCart: (key: string) => void;
  isWishlisted: (productId: string) => boolean;
  toggleWishlist: (productId: string) => void;
  giftWrap: boolean;
  setGiftWrap: (value: boolean) => void;
  polishingCloth: boolean;
  setPolishingCloth: (value: boolean) => void;
  promotionApplied: boolean;
  setPromotionApplied: (value: boolean) => void;
  clearCart: () => void;
};

const StoreContext = createContext<StoreContextValue | undefined>(undefined);
const initialCart: CartLine[] = [
  { key: "giva-drop-wreath-pendant::Rose Gold::18\" Classic", productId: "giva-drop-wreath-pendant", quantity: 1, finish: "Rose Gold", size: '18" Classic' },
  { key: "giva-wreath-ring::Rose Gold::US 6", productId: "giva-wreath-ring", quantity: 1, finish: "Rose Gold", size: "US 6" },
  { key: "giva-deer-heart-necklace::Sterling Silver::18\" Classic", productId: "giva-deer-heart-necklace", quantity: 1, finish: "Sterling Silver", size: '18" Classic' },
];
const STORAGE_KEY = "aurelia-craft-demo-v1";

function parseSaved(raw: string): { cart: CartLine[]; wishlist: string[]; giftWrap: boolean; polishingCloth: boolean; promotionApplied: boolean } | null {
  try {
    const data: unknown = JSON.parse(raw);
    if (!data || typeof data !== "object") return null;
    const record = data as Record<string, unknown>;
    const cart: CartLine[] = Array.isArray(record.cart)
      ? record.cart.slice(0, 40).flatMap((line: unknown): CartLine[] => {
          if (!line || typeof line !== "object") return [];
          const item = line as Record<string, unknown>;
          if (typeof item.productId !== "string" || !products.some((p) => p.id === item.productId)) return [];
          const finish = typeof item.finish === "string" ? item.finish.slice(0, 60) : "";
          const size = typeof item.size === "string" ? item.size.slice(0, 60) : "";
          const quantity = clampQuantity(Number(item.quantity));
          return [{ key: `${item.productId}::${finish}::${size}`, productId: item.productId, quantity, finish, size }];
        })
      : [];
    const wishlist = Array.isArray(record.wishlist)
      ? record.wishlist.filter((id): id is string => typeof id === "string" && products.some((p) => p.id === id)).slice(0, products.length)
      : [];
    return {
      cart, wishlist: [...new Set(wishlist)],
      giftWrap: typeof record.giftWrap === "boolean" ? record.giftWrap : true,
      polishingCloth: record.polishingCloth === true,
      promotionApplied: typeof record.promotionApplied === "boolean" ? record.promotionApplied : true,
    };
  } catch {
    return null; // Corrupted storage should never prevent rendering.
  }
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>(initialCart);
  const [wishlist, setWishlist] = useState<string[]>(["giva-drop-wreath-pendant", "giva-infinity-heart-necklace"]);
  const [cartOpen, setCartOpen] = useState(false);
  const [giftWrap, setGiftWrap] = useState(true);
  const [polishingCloth, setPolishingCloth] = useState(false);
  const [promotionApplied, setPromotionApplied] = useState(true);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const parsed = saved ? parseSaved(saved) : null;
      if (parsed) {
        setCart(parsed.cart);
        setWishlist(parsed.wishlist);
        setGiftWrap(parsed.giftWrap);
        setPolishingCloth(parsed.polishingCloth);
        setPromotionApplied(parsed.promotionApplied);
      }
    } catch { /* Cookies/storage may be blocked; in-memory cart still works. */ }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ cart, wishlist, giftWrap, polishingCloth, promotionApplied })); }
    catch { /* Degrade gracefully to session-only state. */ }
  }, [cart, wishlist, giftWrap, polishingCloth, promotionApplied, hydrated]);

  const openCart = useCallback(() => setCartOpen(true), []);
  const closeCart = useCallback(() => setCartOpen(false), []);

  const addToCart = useCallback((productId: string, quantity = 1, options: ProductOptions = {}) => {
    const product = products.find((p) => p.id === productId);
    if (!product || product.stock < 1) return;
    const finish = options.finish?.slice(0, 60) ?? "";
    const size = options.size?.slice(0, 60) ?? "";
    const key = `${productId}::${finish}::${size}`;
    setCart((prev) => {
      const current = prev.find((item) => item.key === key);
      const updated = current
        ? prev.map((item) => item.key === key ? { ...item, quantity: Math.min(product.stock, 20, item.quantity + clampQuantity(quantity)) } : item)
        : [...prev, { key, productId, finish, size, quantity: Math.min(product.stock, clampQuantity(quantity)) }];
      return updated;
    });
    setCartOpen(true);
  }, []);

  const updateQuantity = useCallback((key: string, quantity: number) => {
    setCart((prev) => prev.map((item) => {
      if (item.key !== key) return item;
      const stock = products.find((p) => p.id === item.productId)?.stock ?? 1;
      return { ...item, quantity: Math.min(stock, clampQuantity(quantity)) };
    }));
  }, []);
  const removeFromCart = useCallback((key: string) => setCart((prev) => prev.filter((item) => item.key !== key)), []);
  const toggleWishlist = useCallback((productId: string) => {
    if (!products.some((p) => p.id === productId)) return;
    setWishlist((prev) => prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]);
  }, []);
  const isWishlisted = useCallback((productId: string) => wishlist.includes(productId), [wishlist]);
  const value = useMemo(() => ({
    cart, wishlist, cartOpen, openCart, closeCart,
    addToCart, updateQuantity, removeFromCart, isWishlisted, toggleWishlist,
    giftWrap, setGiftWrap, polishingCloth, setPolishingCloth, promotionApplied, setPromotionApplied,
    clearCart: () => { setCart([]); setPolishingCloth(false); },
  }), [cart, wishlist, cartOpen, openCart, closeCart, addToCart, updateQuantity, removeFromCart, isWishlisted, toggleWishlist, giftWrap, polishingCloth, promotionApplied]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore(): StoreContextValue {
  const value = useContext(StoreContext);
  if (!value) throw new Error("useStore must be used inside StoreProvider");
  return value;
}
