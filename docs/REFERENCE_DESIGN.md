---
name: Artisanal Luxury Editorial
colors:
  surface: '#fbf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#fbf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f0'
  surface-container: '#efeeeb'
  surface-container-high: '#eae8e5'
  surface-container-highest: '#e4e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#4e4639'
  inverse-surface: '#30312f'
  inverse-on-surface: '#f2f0ed'
  outline: '#7f7667'
  outline-variant: '#d1c5b4'
  surface-tint: '#775a19'
  primary: '#775a19'
  on-primary: '#ffffff'
  primary-container: '#c5a059'
  on-primary-container: '#4e3700'
  inverse-primary: '#e9c176'
  secondary: '#785918'
  on-secondary: '#ffffff'
  secondary-container: '#fed487'
  on-secondary-container: '#785a19'
  tertiary: '#615e5b'
  on-tertiary: '#ffffff'
  tertiary-container: '#a9a4a1'
  on-tertiary-container: '#3d3a38'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdea5'
  primary-fixed-dim: '#e9c176'
  on-primary-fixed: '#261900'
  on-primary-fixed-variant: '#5d4201'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c175'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4200'
  tertiary-fixed: '#e7e1de'
  tertiary-fixed-dim: '#cbc5c2'
  on-tertiary-fixed: '#1d1b19'
  on-tertiary-fixed-variant: '#494644'
  background: '#fbf9f6'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2df'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.12em
  label-ui:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.02em
  price-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: -0.01em
  price-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-lg: 2.5rem
  margin: 1.25rem
  margin-md: 2.5rem
  margin-lg: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system embodies "quiet luxury"—an editorial, tactile aesthetic created for discerning collectors of handmade fine jewelry. It balances the timeless discipline of high-fashion print magazines with the effortless precision of a contemporary direct-to-consumer digital flagship.

The emotional tone is serene, confident, and intentional. Rather than relying on aggressive promotional patterns, the UI recedes to allow macro-photography, material provenance, and metallic lusters to command focus. Spatial rhythm is expansive; surfaces echo raw linen, honed alabaster, and warm limestone. Visual structure is disciplined by razor-thin architectural hairline borders and delicate typography.

## Colors

The palette draws directly from natural mineral tones and warm precious metals:

- **Primary Accent (`#C5A059` - Brushed Champagne Gold):** Reserved for focal moments, high-level interactive accents, curated badges, and subtle hover glows.
- **Secondary Accent (`#9E7C38` - Antique Gold):** Used for pressed/active interactive states, contextual badges, and high-contrast gold typography on light fields.
- **Text & Structure Primary (`#22201E` - Deep Charcoal):** Grounded obsidian charcoal replacing absolute black to maintain organic warmth across editorial typography and iconography.
- **Text Muted (`#6E665E` - Warm Taupe):** Secondary descriptions, captions, dimensions, and structural metadata.
- **Background Foundation (`#FAF8F5` - Warm Alabaster):** The base canvas tone, offering an inviting, museum-grade parchment quality.
- **Surface / Card Neutral (`#F2EDE4` - Soft Ivory):** Layered card containers, flyouts, and drawer backdrops that lift gently off the alabaster base.
- **Hairline Border (`#E5DFD5` - Warm Stone):** A consistent 1px divider tone that creates structure without harsh visual stops.

## Typography

The typographical treatment pairings evoke artisanal ateliers:
- **Playfair Display** supplies deliberate editorial elegance. Used for collection titles, evocative storytelling hooks, and hero displays. Italics should be used sparingly for artistic emphasis or foreign atelier terminologies (e.g., *pièce unique*).
- **Plus Jakarta Sans** grounds the system with geometric clarity, unembellished readability, and contemporary functional rhythm.
- **Editorial Sub-headers & Micro-labels:** Always employ `label-caps` in uppercase with wide tracking (`0.12em`) to introduce catalog categories, artisan notes, and product metadata.

## Layout & Spacing

The layout adheres to a 12-column responsive fluid grid with wide, generous gutters designed to let imagery breathe:
- **Mobile (< 768px):** 4 columns, `margin: 1.25rem`, `gutter: 1rem`. Product lists stack in 1 or 2 asymmetric columns.
- **Tablet (768px - 1024px):** 8 columns, `margin: 2.5rem`, `gutter: 1.5rem`.
- **Desktop (> 1024px):** 12 columns, max-width `1440px` centered, `margin: 4rem`, `gutter: 2.5rem`.

Editorial compositions alternate between balanced grid alignment and asymmetrical offset placements. Negative vertical whitespace between curated thematic sections must use `space-2xl` or greater to maintain gallery pacing.

## Elevation & Depth

This system avoids drop shadows. Visual depth is established through a strict flat architectural hierarchy:

1. **Surface Framing:** Elevation is articulated via tonal contrast (`#FAF8F5` ground against `#F2EDE4` surface cards) enclosed in razor-sharp 1px hairline borders (`#E5DFD5`).
2. **Overlays & Drawers:** Slide-over cart panels, modal lookbooks, and mobile navigation overlays utilize a translucent veil backdrop (`rgba(34, 32, 30, 0.25)`) coupled with a gentle backdrop blur (4px) to preserve tactile atmosphere without heavy darkening.
3. **Hover Elevation:** Hover states do not lift via vertical translation or drop shadows. Instead, interactive frames transition their 1px hairline border from `#E5DFD5` to `#C5A059`, occasionally combined with a gentle internal image zoom (scale 1.02, 400ms ease-out).

## Shapes

Shapes reflect precision cutting and masonry stone craftsmanship:
- **Core Elements (Buttons, Inputs, Tag Chips):** Bound to `0.25rem` (4px). This soft, subtle corner softens harsh angles while retaining an architectural, premium silhouette.
- **Cards & Visual Containers:** Set to `rounded-lg` (0.5rem / 8px) to soften larger surface areas without introducing casual roundness.
- **Pill/Full-Round Shapes:** Explicitly avoided, except for small circular thumbnail swatches (gemstone/metal choice selectors).

## Components

### Buttons
- **Primary:** Deep Charcoal (`#22201E`) background, `#FAF8F5` text, 4px corner radius. Padding: `0.875rem 2rem`. Text in `label-caps`. Hover transitions to Brushed Champagne Gold (`#C5A059`) with dark charcoal text.
- **Secondary / Editorial:** Transparent background, 1px solid `#22201E` hairline border, `#22201E` text. Hover fills with `#F2EDE4`.
- **Ghost / Text Action:** Pure text in `label-caps` featuring a persistent 1px hairline underline offset by 4px.

### Product & Editorial Cards
- **Base:** `#F2EDE4` surface background, 1px solid `#E5DFD5` border, 8px border radius.
- **Imagery:** Aspect ratios fixed to 4:5 (portrait editorial) or 1:1 (detailed macro). Flush top alignment with 1px border separation from card content.
- **Details:** Minimalist layout displaying collection tag (`label-caps`, `#6E665E`), product title (`headline-sm`, `#22201E`), and currency formatted with (`price-sm`, `#22201E`).

### Input Fields & Selectors
- **Inputs:** `#FAF8F5` background, 1px `#E5DFD5` border, 4px radius. Font: `body-md`. Focus state shifts the border to `#C5A059` without an outer drop shadow ring.
- **Metal / Stone Swatches:** 24px circular discs encased in a 1px `#E5DFD5` rim. Active selection features an offset 1px outer ring in `#9E7C38`.

### Checkboxes & Radio Controls
- **Form Controls:** Custom 16px squares (checkboxes) and circles (radios) with a 1px `#E5DFD5` frame. Active states fill with `#22201E` containing an ivory glyph.

### Badges & Chips
- **Chips:** Soft Ivory (`#F2EDE4`) fill, 1px `#E5DFD5` border, 4px border radius. Padding: `0.375rem 0.75rem`. Text: `label-caps` in `#6E665E`.
- **Artisan / Limited Badges:** Inset top-left over card imagery with a transparent backdrop, subtle 1px border in `#C5A059`, and text in `#9E7C38`.

### Atelier Highlights & Material Drawers
- Contextual accordion panels with 1px top and bottom hairline borders (`#E5DFD5`), featuring smooth collapsible animation, gold marker accents, and generous vertical line spacing for gemstone provenance.