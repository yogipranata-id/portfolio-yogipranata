# DESIGN.md — hafidzhumaidi.vercel.app

> Source: https://hafidzhumaidi.vercel.app/

## Colors

### Primary

- `#14B8A6` — used 14×
- `#2DD4BF` — used 8×
- `#6366F1` — used 5×
- `#FB7185` — used 4×
- `#3B82F6` — used 3×
- `#F43F5E` — used 3×
- `#818CF8` — used 3×
- `#1F2937` — used 2×

### Neutral

- `#000000` — used 28×
- `#FFFFFF` — used 16×
- `#9CA3AF` — used 4×
- `#4B5563` — used 4×
- `#1A1A1A` — used 4×
- `#6B7280` — used 3×
- `#E5E7EB` — used 2×
- `#374151` — used 2×
- `#F3F4F6` — used 1×
- `#D1D5DB` — used 1×

## Typography Scale

Fonts: Outfit, ui-monospace, ui-sans-serif

### Outfit

| element | size            | weight | line-height | uses |
| ------- | --------------- | ------ | ----------- | ---- |
| button  | 100%            | —      | —           | 1    |
| input   | 100%            | —      | —           | 1    |
| h3      | min(5svh,3em)   | 600    | —           | 1    |
| p       | 16px            | 600    | —           | 1    |
| h3      | min(4svh,2.5em) | —      | —           | 1    |
| p       | 14px            | —      | —           | 1    |
| h3      | min(3.5svh,2em) | —      | —           | 1    |
| p       | 12px            | —      | —           | 1    |
| h3      | min(3svh,1.5em) | —      | —           | 1    |
| p       | 11px            | —      | —           | 1    |

## Radii

- `.75rem`
- `50%`
- `50px`
- `.25rem`

## Extraction Audit

- Method: Static parse of the page's real HTML, <style> blocks, style attributes and linked stylesheets. Values are as declared in CSS — not browser-computed, and cascade/media-query overrides are approximated by preferring concrete values.
- Stylesheets: 2/2 fetched · 527 rules · 45 KB CSS
- Color accuracy: 82% (high) — 149 literal color declarations parsed from 2 stylesheet(s) + inline CSS.
- Typography accuracy: 40% (low) — 12/30 type fields resolved to concrete declared values (size · weight · line-height).

### CSS sources

- `inline` <style> blocks in HTML — 0 KB · 0 rules · 0 colors · 0 type hits (unavailable)
- `style-attr` inline style="…" attributes — 0 KB · 0 rules · 0 colors · 0 type hits (unavailable)
- `stylesheet` https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap — 2 KB · 4 rules · 0 colors · 0 type hits
- `stylesheet` https://hafidzhumaidi.vercel.app/assets/index-BUfaNDDF.css — 44 KB · 523 rules · 149 colors · 16 type hits
