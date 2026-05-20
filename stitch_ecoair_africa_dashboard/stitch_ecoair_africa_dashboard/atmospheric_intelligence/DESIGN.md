---
name: Atmospheric Intelligence
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daea'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eefe'
  surface-container-high: '#e2e8f8'
  surface-container-highest: '#dce2f3'
  on-surface: '#151c27'
  on-surface-variant: '#3c4a42'
  inverse-surface: '#2a313d'
  inverse-on-surface: '#ebf1ff'
  outline: '#6c7a71'
  outline-variant: '#bbcabf'
  surface-tint: '#006c49'
  primary: '#006c49'
  on-primary: '#ffffff'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#4edea3'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#5c5f60'
  on-tertiary: '#ffffff'
  tertiary-container: '#a1a3a4'
  on-tertiary-container: '#37393b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#f9f9ff'
  on-background: '#151c27'
  surface-variant: '#dce2f3'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 24px
  margin: 32px
  max_width: 1440px
---

## Brand & Style
The design system is engineered for environmental monitoring SaaS platforms, focusing on clarity, precision, and a sense of ecological responsibility. The brand personality is "Clinical yet Hopeful"—combining the rigor of scientific data with a fresh, modern aesthetic that reflects the vitality of the natural world.

The visual direction follows a **Modern Corporate** style with a heavy emphasis on **Minimalism** and **Tonal Layering**. The interface prioritizes high legibility and breathability through expansive whitespace, ensuring that complex environmental datasets remain accessible and actionable. The emotional response should be one of calm control and professional reliability.

## Colors
The palette is rooted in a "Vitality Green" primary and "Atmospheric Blue" secondary, symbolizing earth and sky. The background architecture utilizes a clean white base with off-white (`#F9FAFB`) surface containers to distinguish dashboard modules without the use of heavy lines.

A specialized AQI (Air Quality Index) scale is integrated as a functional semantic set. These colors should be used exclusively for status indicators, data visualizations, and environmental alerts. Neutral tones are kept cool-toned to maintain the professional, clinical feel of the SaaS environment.

## Typography
The design system employs **Geist** for its technical precision and developer-centric clarity. The typographic scale is optimized for data density, using tight letter-spacing on larger displays to maintain a cohesive look. 

For the dashboard, use `label-sm` for table headers and metadata descriptors to provide a clear contrast against data values. `display-lg` is reserved for primary metric highlights (e.g., a massive AQI number), while `title-lg` should be the standard for card headings.

## Layout & Spacing
This design system utilizes a **12-column fluid grid** for the main workspace, constrained to a maximum width of 1440px for desktop viewing. 

**Desktop:** 12 columns, 24px gutters, 32px side margins. 
**Tablet:** 8 columns, 16px gutters, 24px side margins.
**Mobile:** 4 columns, 16px gutters, 16px side margins.

A modular 8px spatial rhythm governs all padding and margins. Dashboard cards should use `lg` (24px) internal padding to provide the "breathable" feel requested. All elements should align to the grid to maintain a professional, structured hierarchy.

## Elevation & Depth
Depth is created through **Tonal Layering** rather than heavy shadows. The primary workspace sits on the background (`#FFFFFF`), while secondary widgets or navigation sidebars reside on the surface tier (`#F9FAFB`).

Low-contrast outlines (`1px solid #E5E7EB`) are the primary method for defining card boundaries. Use "Atmospheric Shadows"—very soft, highly diffused blurs (Y: 4px, Blur: 12px) at 5% opacity using the primary blue or neutral color—only for floating elements like dropdowns, modals, or active card states to suggest interactivity.

## Shapes
The design system adopts a **Rounded** aesthetic to soften the technical nature of the data. 

- **Small Components:** Buttons, input fields, and tags use a radius of `0.5rem` (8px).
- **Medium Components:** Dashboard cards and containers use a radius of `0.75rem` (12px) to `1rem` (16px).
- **Status Badges:** Use a full pill-shape (`rounded-full`) to differentiate them from interactive buttons.

## Components
- **Buttons:** Primary buttons use the `#10B981` background with white text. Secondary buttons use a white background with a `#E5E7EB` border and `#374151` text.
- **Badges/Status Chips:** Use a subtle background (10% opacity of the AQI status color) with a dark version of the same color for the text. They must be pill-shaped.
- **Cards:** White background, 1px `#E5E7EB` border, and `16px` corner radius. Do not use shadows by default; use them only on hover to indicate clickability.
- **Input Fields:** 8px corner radius, `#F9FAFB` background, and a 1px `#E5E7EB` border. On focus, the border transitions to Primary Green with a 2px soft glow.
- **Icons:** Use 2px stroke-width icons. Avoid filled icons unless indicating an "active" state in the sidebar.
- **Data Tables:** Remove vertical borders. Use horizontal dividers in `#F3F4F6`. Row height should be a minimum of 48px for readability.
- **Progress Bars/Gauges:** Use the AQI status colors to dynamically reflect the data value being displayed.