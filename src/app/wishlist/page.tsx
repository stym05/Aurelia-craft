import type { Metadata } from "next";
import { WishlistView } from "@/components/wishlist-view";
export const metadata: Metadata = { title: "Saved Keepsakes" };
export default function WishlistPage() { return <WishlistView/>; }
