# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commonly Used Commands

- **Serve Local Pages**: Run a local static server to preview the landing pages and platform:
  ```bash
  npx serve propuesta
  ```
- **Generate Repository Documentation**: Regenerate the technical and executive documentation (`docs/GUIA_DEL_REPOSITORIO.md`, `docs/guia_del_repositorio.html`, and update `README.md`):
  ```bash
  node scripts/generate_repo_guide.js
  ```
- **Inspect / Validate Pages**: Run the page inspection script:
  ```bash
  node scripts/inspect_pages.js
  ```

## High-Level Architecture & Structure

Envíos DosRuedas is a design system and high-performance static web platform consisting of **19 specialized landing pages** for logistics, courier, fulfillment, and e-commerce services in Mar del Plata, Argentina.

### Directory Layout
- `propuesta/`: Root directory containing all HTML pages, CSS styles, JavaScript interactivity, and media assets.
  - `index.html` (and alias `inicio.html`): Main platform landing page (featuring 8 strategic sections: Hero, carousel, core services, calculator, testimonials, app banner, and footer).
  - `cotizar.html`: Interactive shipping rate calculator.
  - `contacto.html`: Direct WhatsApp/phone conversion hub.
  - `servicios-*.html`: Dedicated landing pages for Express, LowCost, Flex (Mercado Libre), Cuenta Corriente (B2B), Fulfillment (3PL), Contrareembolso, and Emprendedores.
  - `nosotros-*.html`, `guias-*.html`, `logistica-dosruedas.html`, `mardelivery.html`, `terminos-y-condiciones.html`, `politica-de-privacidad.html`: Support, institutional, educational, and legal pages.
  - `css/`: `layout.css` (base architecture, header, drawer, carousel, footer, design tokens) and `home.css` (home-specific styles).
  - `js/`: `layout.js` (native interactivity: mobile drawer, dropdowns, sticky header scroll behavior, ESC key handler).
  - `elementos/`, `heroes/`, `img/`: Optimized WebP transparent graphics, hero banners, and photography.
- `docs/`: Master documentation (`GUIA_DEL_REPOSITORIO.md` and printable HTML/PDF guide `guia_del_repositorio.html`).
- `scripts/`: Automation scripts for documentation generation and page auditing.

### Design System Highlights (`DESIGN.md`)
- **Brand Identity**: High-impact bicolor palette combining Electric Blue (`#0950F6`) and Canary Yellow (`#FFEC01`).
- **Typography**: Google Fonts integration using **Anton** (`font-display` for H1/H2), **Bebas Neue** (`font-subheading` for buttons/pills), **Outfit** (`font-sans` for body text), and **Geist Mono** (`font-mono` for metrics/prices).
- **Component Architecture**: Pill-first morphology (`rounded-full`), nested pill CTAs (`.cta-nested-pill`), sticky responsive header with dynamic scroll elevation (`.is-scrolled`), and accessible ARIA drawer menus.
