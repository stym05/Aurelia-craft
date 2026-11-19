import type { Metadata } from "next";
import { CollectionClient } from "@/components/collection-client";

export const metadata: Metadata = { title: "Pendants, Rings & Necklaces", description: "Browse the temporary GIVA reference edit of rose-gold and sterling-silver pendants, rings, and necklaces." };
export default async function CollectionsPage({ searchParams }: { searchParams: Promise<{ category?: string; search?: string }> }) {
  const params = await searchParams;
  return <CollectionClient initial={{ category: typeof params.category === "string" ? params.category : undefined, search: typeof params.search === "string" ? params.search : undefined }}/>
}
