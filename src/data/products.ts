import images from "./reference-images.json";

export type Category = "Pendants" | "Rings" | "Necklaces";
export type Product = {
  id: string;
  slug: string;
  name: string;
  category: Category;
  price: number;
  material: string;
  tag?: string;
  stock: number;
  rating: number;
  reviews: number;
  image: string;
  fallback: string;
  gallery?: string[];
  pearl?: boolean;
  featured?: boolean;
  description: string;
  sourceUrl?: string;
  sourceName?: string;
};

// Temporary reference catalogue sourced from public GIVA listings on 20 Nov 2026.
// Replace names, imagery, prices, reviews, and source URLs with final merchant data before launch.
export const products: Product[] = [
  {
    id: "giva-drop-wreath-pendant", slug: "rose-gold-drop-wreath-pendant", name: "Rose Gold Drop Wreath Pendant",
    category: "Pendants", price: 1999, material: "925 Silver · Rose Gold Plated", tag: "Bestseller",
    stock: 20, rating: 4.9, reviews: 456, featured: true,
    image: "https://www.giva.co/cdn/shop/files/PD0434_4.jpg?v=1789641740&width=1200", fallback: "/images/hero-fallback.jpg",
    description: "A rose-gold plated 925 silver wreath pendant set with zircon details and a soft rosebud-inspired motif.",
    sourceUrl: "https://www.giva.co/products/rose-gold-pink-drop-wreath-pendant-with-link-chain", sourceName: "GIVA",
  },
  {
    id: "giva-solitaire-heart-pendant", slug: "silver-solitaire-heart-pendant", name: "Silver Solitaire Heart Pendant",
    category: "Pendants", price: 1999, material: "925 Sterling Silver", tag: "Most Loved",
    stock: 20, rating: 4.9, reviews: 356, featured: true,
    image: "https://www.giva.co/cdn/shop/files/PD0107_4.jpg?v=1789997752&width=1200", fallback: "/images/luna-choker.jpg",
    description: "A polished sterling-silver heart pendant with a solitaire-inspired centre, paired with a fine link chain.",
    sourceUrl: "https://www.giva.co/products/silver-solitaire-heart-pendant-with-link-chain-1", sourceName: "GIVA",
  },
  {
    id: "giva-mystic-prism-pendant", slug: "silver-mystic-prism-pendant", name: "Silver Mystic Prism Pendant",
    category: "Pendants", price: 1999, material: "925 Sterling Silver", tag: "Bestseller",
    stock: 20, rating: 4.8, reviews: 154,
    image: "https://www.giva.co/cdn/shop/files/PD086_1.jpg?v=1786512751&width=1200", fallback: "/images/vesper-coin.jpg",
    description: "A geometric sterling-silver pendant with a prism-like centre, finished with a simple chain for everyday wear.",
    sourceUrl: "https://www.giva.co/products/silver-mystic-prism-pendant-with-chain", sourceName: "GIVA",
  },
  {
    id: "giva-ocean-heart-pendant", slug: "silver-heart-of-the-ocean-pendant", name: "Silver Heart of the Ocean Pendant",
    category: "Pendants", price: 1999, material: "925 Sterling Silver", tag: "Popular",
    stock: 20, rating: 4.9, reviews: 126,
    image: "https://www.giva.co/cdn/shop/files/PD0526_4.jpg?v=1789998533&width=1200", fallback: "/images/selene-moonstone.jpg",
    description: "A heart-shaped sterling-silver pendant with an ocean-blue centre, suspended from a delicate link chain.",
    sourceUrl: "https://www.giva.co/products/silver-drop-in-the-ocean-pendant-with-link-chain", sourceName: "GIVA",
  },
  {
    id: "giva-wreath-ring", slug: "rose-gold-wreath-ring", name: "Rose Gold Wreath Ring",
    category: "Rings", price: 1499, material: "925 Silver · Rose Gold Plated", tag: "Bestseller",
    stock: 20, rating: 4.8, reviews: 94, featured: true,
    image: "https://www.giva.co/cdn/shop/files/R0111_1_bcdd13e8-0d4a-4076-8226-b1819e3a95a4.jpg?v=1786560493&width=1200", fallback: "/images/astraea-ring.jpg",
    description: "A delicate rose-gold plated silver ring with a wreath-inspired silhouette and fine zircon accents.",
    sourceUrl: "https://www.giva.co/products/rose-gold-wreath-ring", sourceName: "GIVA",
  },
  {
    id: "giva-floral-chic-ring", slug: "rose-gold-floral-chic-ring", name: "Rose Gold Floral Chic Ring",
    category: "Rings", price: 2999, material: "925 Silver · Rose Gold Plated", tag: "Floral Edit",
    stock: 20, rating: 4.9, reviews: 29,
    image: "https://www.giva.co/cdn/shop/files/R0279_1_b83df2e5-88b0-458e-bb0e-c20caa06fd9a.jpg?v=1789897258&width=1200", fallback: "/images/soleil-hoops.jpg",
    description: "A rose-gold plated silver ring with a floral arrangement and a softly sparkling finish.",
    sourceUrl: "https://www.giva.co/products/rose-gold-flower-girl-ring", sourceName: "GIVA",
  },
  {
    id: "giva-pure-poise-ring", slug: "rose-gold-pure-poise-ring", name: "Rose Gold Pure Poise Ring",
    category: "Rings", price: 2699, material: "925 Silver · Rose Gold Plated", tag: "Bestseller",
    stock: 20, rating: 4.8, reviews: 42,
    image: "https://www.giva.co/cdn/shop/files/R0189_1_bd7c37dc-fdc4-40ea-8830-993528fb320b.jpg?v=1786554702&width=1200", fallback: "/images/selene-moonstone.jpg",
    description: "A poised rose-gold plated silver ring with clean curves and a refined stone-set profile.",
    sourceUrl: "https://www.giva.co/products/rose-gold-pure-poise-ring", sourceName: "GIVA",
  },
  {
    id: "giva-solitaire-spin-ring", slug: "rose-gold-solitaire-spin-ring", name: "Rose Gold Solitaire Spin Ring",
    category: "Rings", price: 3399, material: "925 Silver · Rose Gold Plated", tag: "Solitaire",
    stock: 20, rating: 4.9, reviews: 28,
    image: "https://www.giva.co/cdn/shop/files/R030_1_561afbfa-6a08-4046-b1f8-b2ecf85252ba.jpg?v=1786558949&width=1200", fallback: "/images/astraea-ring.jpg",
    description: "A rose-gold plated silver solitaire ring with a contemporary spinning-inspired setting.",
    sourceUrl: "https://www.giva.co/products/rose-gold-solitaire-spin-ring", sourceName: "GIVA",
  },
  {
    id: "giva-deer-heart-necklace", slug: "silver-deer-heart-necklace", name: "Silver Deer Heart Necklace",
    category: "Necklaces", price: 2999, material: "925 Sterling Silver", tag: "Bestseller",
    stock: 20, rating: 4.8, reviews: 741, featured: true,
    image: "https://www.giva.co/cdn/shop/files/PD096_4_0de93705-fd99-498a-b0e9-f8a8ce29f2e2.jpg?v=1790014372&width=1200", fallback: "/images/luna-choker.jpg",
    description: "A sterling-silver necklace combining a deer motif with a heart-shaped outline and a polished finish.",
    sourceUrl: "https://www.giva.co/products/silver-deer-heart-pendant", sourceName: "GIVA",
  },
  {
    id: "giva-infinity-heart-necklace", slug: "silver-infinity-heart-necklace", name: "Silver Infinity Heart Necklace",
    category: "Necklaces", price: 2999, material: "925 Sterling Silver", tag: "Most Loved",
    stock: 20, rating: 4.9, reviews: 328,
    image: "https://www.giva.co/cdn/shop/files/PD061_4_1d4e93f2-6060-4fe1-b381-d0ffea4c7f36.jpg?v=1789566971&width=1200", fallback: "/images/hero-fallback.jpg",
    description: "A sterling-silver necklace that joins infinity and heart motifs in a delicate everyday design.",
    sourceUrl: "https://www.giva.co/products/silver-infinity-heart-necklace-with-chain", sourceName: "GIVA",
  },
  {
    id: "giva-star-necklace", slug: "silver-star-constellation-necklace", name: "Silver Star Constellation Necklace",
    category: "Necklaces", price: 2999, material: "Oxidised 925 Silver", tag: "Constellation",
    stock: 20, rating: 4.8, reviews: 385,
    image: "https://www.giva.co/cdn/shop/files/AVPD0102_4_7af2237c-bcd6-4a82-b03c-d6b2ab49eaeb.jpg?v=1786452538&width=1200", fallback: "/images/vesper-coin.jpg",
    description: "An oxidised silver necklace inspired by a star constellation, with fine celestial detailing.",
    sourceUrl: "https://www.giva.co/products/oxidised-silver-star-constellation-necklace", sourceName: "GIVA",
  },
  {
    id: "giva-sparkling-infinity-necklace", slug: "rose-gold-sparkling-infinity-necklace", name: "Rose Gold Sparkling Infinity Necklace",
    category: "Necklaces", price: 3299, material: "925 Silver · Rose Gold Plated", tag: "Rose Gold",
    stock: 20, rating: 4.9, reviews: 163,
    image: "https://www.giva.co/cdn/shop/files/PD0234_1_e282e311-add9-4bdb-aedb-4e27ef51c2dd.jpg?v=1789896758&width=1200", fallback: "/images/cyra-chain.jpg",
    description: "A rose-gold plated silver necklace with a sparkling infinity motif and a fine adjustable chain.",
    sourceUrl: "https://www.giva.co/products/rose-gold-sparkling-infinity-necklace", sourceName: "GIVA",
  },
];

export const editorialImage = { src: images["atelier-artisan"], fallback: "/images/atelier-artisan.jpg" };
export const heroImage = { src: images["hero-model"], fallback: "/images/hero-fallback.jpg" };
export const categories = [
  { label: "Pendants", category: "Pendants", count: 4, description: "Heart, solitaire, and nature-inspired pendants with fine chains.", image: products[0] },
  { label: "Rings", category: "Rings", count: 4, description: "Rose-gold plated silver rings with floral and solitaire details.", image: products[4] },
  { label: "Necklaces", category: "Necklaces", count: 4, description: "Silver and rose-gold necklaces designed for easy everyday styling.", image: products[8] },
] as const;

export function findProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
