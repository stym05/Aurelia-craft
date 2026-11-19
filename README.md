# Aurelia Craft — Next.js Artisan Jewelry Storefront

A responsive, interactive jewelry storefront implemented from the supplied Aurelia Craft reference screens and `DESIGN.md` design system. Built with the **Next.js App Router**, **React**, **TypeScript (strict mode)**, and **Tailwind CSS**.

## Quick start

Requires Node.js **20.9+** and npm.

```bash
npm install
npm run dev
```

Visit **http://localhost:3000**.

For production checks:

```bash
npm run typecheck
npm run test
npm run build
npm run start
```

## Pages

| URL | Contents |
| --- | --- |
| `/` | Editorial homepage, categories, curated bestsellers, atelier story and collector quotes |
| `/collections` | Filterable/sortable catalog with an editorial atelier insertion and load-more |
| `/collections?category=Rings` | Category deep link |
| `/collections?search=pearl` | Search results |
| `/products/luna-baroque-pearl-pendant` | Product gallery, finish, size, quantity, sizing modal, PIN validation, accordions, pairings and reviews |
| `/products/[slug]` | All other seeded products (nine products total) |
| `/wishlist` | Saved keepsakes |
| `/checkout` | **Demo-only** local checkout validation and order summary |
| `/our-story` | Editorial atelier/about page |
| `/care-guide` | Jewelry care, storage and aftercare |
| `/journal` | Atelier journal and stories |
| `/contact` | Demo local form validation |

## Features

- Responsive navigation with a mobile menu, interactive search, collection links, wishlist and bag count.
- Nine typed product records; category, material, price, in-stock filters and sorting.
- Accessible quick-add, product detail variants (finish and chain/ring size), quantity controls, and a size/layering dialog.
- Cart drawer with shipping threshold progress, optional gift wrapping, polishing cloth add-on, configurable demo promotion and calculated totals.
- Browser `localStorage` persistence for the bag, saved items and preferences. In restricted browsing sessions it gracefully falls back to in-memory state.
- The initial demo state intentionally matches the provided cart screenshot: **3 items and 2 saved keepsakes**. Clear the bag using the remove buttons.
- SEO metadata, semantic sections, descriptive alternative text, keyboard-operable controls and focus states.
- Source photography referenced from the provided HTML's `googleusercontent.com` links. Bundled image previews extracted from the supplied screenshot are used if those links fail.

## Important: Demo vs production commerce

**This is a complete front-end prototype, not a production payment or order processing system.** The checkout, contact and newsletter forms **never submit, transmit, store or process** personal details or payments. The PIN form validates the **format**, not courier serviceability. Pricing, discounts and claimed stock levels are sample catalog data; live inventory and fulfillment must be checked server-side.

Before going live, connect:

1. Real product, variant, price and stock management via an e-commerce backend / database (and validate all prices and stock on the server).
2. Authenticated customer identity and secure session-based carts as needed.
3. A payment provider (e.g., Razorpay / Stripe) through a server-side API using payment intent / order creation and verified webhook callbacks; never expose secret keys to the client.
4. Courier serviceability, delivery estimates, order tracking, returns, tax calculations and merchant-specific policies.
5. Contact and newsletter endpoints with validation, anti-spam controls and appropriate privacy consent.
6. Brand-approved original high-resolution photography stored on a durable image CDN. The fallback crops are for **demo** and were extracted from user-supplied reference imagery; check licensing before production use.
7. Privacy policy, legal terms, customer support details, accessibility audits and E2E tests.

## Structure

```text
src/
  app/                 # Route pages, metadata and global styles
  components/          # Interactive reusable UI and dialogs
  data/products.ts     # Typed sample catalog
  data/reference-images.json # Image URLs from the supplied HTML
  lib/commerce.ts      # Pure money/quantity helpers
public/images/         # Local image fallbacks
 tests/                # Node test runner via tsx
```

## Design fidelity

- Warm alabaster canvas, soft ivory cards, brushed gold accents, thin stone borders.
- Playfair Display headings with Plus Jakarta Sans body and micro labels.
- Asymmetric editorial composition, portrait product images and restrained interactions.
- Screen content and product copy are adapted from the supplied screenshots and HTML reference.

The project does **not** import the Tailwind CDN script from the reference; styling is compiled from source for maintainability and production builds.

## Source references

`docs/REFERENCE_DESIGN.md` and `docs/collection-reference.png` are preserved copies of the design specification and collection screenshot supplied with the request.

## Development status

The TypeScript/TSX source has been syntax-parsed, and the commerce helper calculations were smoke-tested against the supplied ₹10,540 / ₹9,486 cart example. A full Next.js compile and browser E2E run require installing dependencies (`npm install`) in an internet-enabled environment and were **not** executed during package creation.
