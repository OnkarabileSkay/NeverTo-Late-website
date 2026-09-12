# NeverToLate — Official Website

> **Brand Slogan:** *Wa Robala Otla Jangg*

Welcome to the official repository for the **NeverToLate** streetwear clothing brand website. This platform serves as a responsive, modern digital storefront showcasing our latest apparel collections, brand evolution, physical store locations, embedded media, and customer inquiry interfaces.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Website Structure](#website-structure)
- [Technologies & Languages Used](#technologies--languages-used)
- [Getting Started](#getting-started)
- [Changelog](#changelog)

---

## Project Overview
The **NeverToLate** web platform delivers a clean, accessible, and highly structured multi-page experience built with core web development standards. The site represents the brand's identity—from its legacy origins to its modern streetwear identity—featuring interactive product showcases, dynamic hover animations, store locators with map embeds, and media integration.

---

## Key Features
- **3-Column Header Architecture:** Balances legacy (`oldlogo.png`) and modern (`newlogo.png`) brand identities with full central navigation and action controls.
- **Interactive Sliding Curtain Navigation:** Pure CSS hover animations (`::before` sliding pseudo-elements) accompanied by attribute-driven tooltip popups (`data-tooltip`).
- **Responsive Product Catalog Grid:** Dynamic CSS Grid layout (`repeat(4, 1fr)`) auto-adjusting across 4-column, 3-column, 2-column, and single-column displays for mobile devices.
- **Store Locator Integration:** Interactive Google Maps (`iframe`) embeds alongside physical store listings for Akasia Mall and Menlyn Mall.
- **Embedded Media:** Showcase brand video playback (`_video/mortivation.mp4`) with loop, muted autoplay, and poster controls on the About page.
- **Interactive Customer Enquiry Interface:** Form controls with real-time focus feedback and animated submission actions.
- **Content Protection:** Integrated protection script (`js/protection.js`) linked across all web pages.

---

## Website Structure

### Core Web Pages
- `index.html`: Home page featuring hero banner imagery, brand mission, and store/team highlights.
- `about.html`: Brand narrative detailing the company history, logo evolution, and embedded video showcase.
- `product.html`: Structured catalog displaying the NVTL Hoodies and Side Bags collections, pricing, material specs, category filters, and upcoming collection teasers.
- `contact.html`: Physical store locator with interactive Google Maps embeds, operating hours, and full store details.
- `enquiries.html`: Dedicated customer service submission form with customized form controls.

### Stylesheets (`css/`)
- `main.css`: Global stylesheet managing the reset rules, typography, 3-column header grid, sliding navigation animations, action icons, tooltips, dark footer, and core media query breakpoints.
- `index.css`: Layout specifications, hero banner sizing, and welcome section styling for the home page.
- `about.css`: Side-by-side identity comparison layouts, media wrapper styles, and responsive flex containers.
- `product.css`: Responsive CSS grid rules (`td`), card borders, hover lift transitions, color-coded section titles, filter bar positioning, and responsive breakpoint collapses.
- `contact.css`: Store table layouts, map container styling, and responsive stacking queries.
- `enquiries.css`: Form layout alignment, focus state highlighting, and submission button hover animations.

### Media & Assets (`_image/`, `_video/`, `js/`)
- `_image/`: Directory housing brand logos (`oldlogo.png`, `newlogo.png`), product photography, store fronts, and hero banners.
- `_video/`: Holds brand promotional video media (`mortivation.mp4`).
- `js/protection.js`: Core client-side protection script linked across all HTML templates.

---

## Technologies & Languages Used
- **HTML5**: Semantic web structure, embedded media elements, interactive forms, and table components.
- **CSS3**: CSS Grid, Flexbox, keyframe/hover animations, pseudo-elements (`::before`, `::after`), attribute selectors, and fluid media queries (`@media`).
- **JavaScript**: Client-side protection script integration (`protection.js`).
- **Font Awesome**: Vector icons for header navigation actions and UI elements.
- **Git & GitHub**: Version control tracking, branch management, and remote repository hosting.

---

## Getting Started
To view my project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/OnkarabileSkay/NeverTo-Late-website.git
   ```
---

## Changelog
A full, dated record of every change made during Part 2 development — including what was added, changed, and removed on each day — is kept in [`CHANGELOG.md`](./CHANGELOG.md).

---

## References
External resources, libraries, and tools used in this project (Font Awesome, Google Maps Embed API, and general web development references) are credited in [`References.md`](./References.md).