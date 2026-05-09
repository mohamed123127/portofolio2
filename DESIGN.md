# Design System Specification: High-End Engineering Portfolio

## 1. Overview & Creative North Star

### The Creative North Star: "The Digital Architect"
This design system moves away from the "template-heavy" look of typical developer portfolios. Instead of a standard grid of boxes, we are building a bespoke environment that mirrors the complexity and precision of high-end software engineering. We view the UI not as a flat screen, but as a multi-dimensional workspace.

To achieve this, the system leverages **Intentional Asymmetry** and **Tonal Depth**. We break the rigid column structure by allowing elements to overlap and breath. The goal is an editorial feel—think high-end tech journals meet advanced IDE interfaces. We are moving beyond "Modern" into "Sophisticated AI & Systems Engineering," where the interface feels like it was designed by a human, not a framework.

---

## 2. Colors & Surface Logic

The palette is rooted in a deep, atmospheric "Midnight" base, punctuated by high-energy electric blues and cyans.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Traditional borders create visual noise and feel "cheap." 
*   **Defining Boundaries:** Sections must be defined exclusively through shifts in background color. For example, a `surface-container-low` (`#131939`) section should sit directly against the `surface` background (`#0a1030`).
*   **The Transition:** Use generous vertical padding (see Spacing) to let the color shifts feel intentional and architectural.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the `surface-container` tiers to create depth:
1.  **Level 0 (Base):** `surface` (`#0a1030`) — The infinite canvas.
2.  **Level 1 (Sections):** `surface-container-low` (`#131939`) — Major content blocks.
3.  **Level 2 (Cards/Modules):** `surface-container` (`#171d3d`) — Interactive elements sitting on sections.
4.  **Level 3 (Pop-overs/Modals):** `surface-container-highest` (`#2d3354`) — Critical focus points.

### The "Glass & Gradient" Rule
To elevate the "AI" and "Desktop Engineer" aesthetic, use Glassmorphism for floating UI elements (like Navigation Bars or Tooltips). 
*   **Formula:** `surface-variant` (`#2d3354`) at 60% opacity + 20px Backdrop Blur.
*   **Signature Textures:** For primary CTAs and Hero accents, use a linear gradient from `primary_container` (`#1d4ed8`) to `secondary` (`#5de6ff`) at a 135-degree angle. This provides a "soul" to the UI that flat colors lack.

---

## 3. Typography

The system uses a high-contrast pairing of **Space Grotesk** (for technical authority) and **Inter** (for functional clarity).

*   **Display & Headline (Space Grotesk):** These should feel massive and confident. Use `display-lg` (3.5rem) for hero statements. Set letter-spacing to `-0.02em` to give it a tight, premium editorial feel.
*   **Body & Labels (Inter):** These are for data and descriptions. Inter’s tall x-height ensures readability against dark backgrounds.
*   **Hierarchy as Identity:** Use `label-md` (`#8e90a0`) in all-caps with `0.1em` tracking for category tags (e.g., "AI MODELS," "SYSTEM ARCHITECTURE") to create a technical, "blueprint" aesthetic.

---

## 4. Elevation & Depth

### The Layering Principle
Depth is achieved through **Tonal Layering** rather than shadows. Place a `surface-container-lowest` card on a `surface-container-low` section to create a "recessed" look, or a `surface-container-high` card on a `surface` background to create "lift."

### Ambient Shadows
Shadows should only be used on elements that truly "float" (modals, dropdowns).
*   **Shadow Specs:** Use a blur of 32px-48px. The color must not be black; it should be a tinted version of `on_surface` at 6% opacity (e.g., `rgba(222, 224, 255, 0.06)`).

### The "Ghost Border" Fallback
If an element requires a container but color shifting isn't enough, use a **Ghost Border**.
*   **Rule:** Use `outline_variant` (`#434655`) at 15% opacity. This creates a hint of a boundary that disappears and reappears depending on the user's screen angle, adding to the high-end feel.

---

## 5. Components

### Buttons
*   **Primary:** Gradient fill (`primary_container` to `secondary`). No border. `xl` roundedness (0.75rem).
*   **Secondary:** Glassmorphic. `surface_variant` at 20% opacity with a `Ghost Border`.
*   **Tertiary:** Text-only using `primary` (`#b7c4ff`) with a subtle underline that expands on hover.

### Cards & Projects
**Forbid the use of divider lines.**
*   Separate content using `title-lg` and `body-md` with at least 1.5rem of vertical space. 
*   Use `surface-container-low` as the card background. On hover, transition the background to `surface-container-high` and apply a subtle `secondary` (`#5de6ff`) inner-glow (0.5px stroke at 30% opacity).

### Code & Technical Snippets
As a software engineer portfolio, code is a first-class citizen.
*   **Container:** `surface_container_lowest` (`#050b2b`).
*   **Typography:** `ui-monospace`.
*   **Detail:** Add a small "status light" in the top left using `secondary` (pulsing) to indicate "Live System."

### Input Fields
*   **Default:** `surface_container_low` background with a bottom-only `Ghost Border`.
*   **Focus State:** The bottom border transforms into a 2px `secondary` (`#5de6ff`) line with a soft glow effect.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace Negative Space:** Give headings room to breathe. High-end design is defined by what you *don't* cram onto the screen.
*   **Use Subtle Animation:** Elements should "drift" into place or fade using a `cubic-bezier(0.16, 1, 0.3, 1)` easing curve.
*   **Mix Weights:** Pair a `headline-lg` (Bold) with a `title-sm` (Light) for a sophisticated hierarchy.

### Don't:
*   **Don't use pure black (#000) or pure white (#FFF):** It causes eye strain in dark mode. Always use the provided `surface` and `on_surface` tokens.
*   **Don't use 100% opaque borders:** They break the "Glass & Depth" illusion.
*   **Don't center everything:** Use asymmetrical layouts (e.g., text on the left 60%, image/code overlapping on the right 40%) to avoid a "Bootstrap" appearance.