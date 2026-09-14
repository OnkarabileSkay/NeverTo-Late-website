# CHANGELOG

Changes for my NeverToLate Website

---

## 2026-09-05

### Changed
- **Header & Navigation Structure (`main.css` & HTML Headers)**
  - Refactored legacy Part 1 table-based header layout (`<table>`, `<tr>`, `<td>`) to a modern, semantic `<div>` container system (`.header-container`).
  - Implemented 3-column CSS Grid header structure (`grid-template-columns: 180px 1fr 180px`) balancing the legacy logo (`oldlogo.png`), central branding/navigation, and new logo (`newlogo.png`).
  - Implemented mobile and tablet media query breakpoints (`1024px` and `768px`) that reflow the 3-column header into a vertical layout with full-width stacked navigation buttons.

---

## 2026-09-06

### Changed 
- **Product Catalog Layout (`product.html` & `product.css`)**
  - Converted product display markup from Part 1 table rows and cells (`<table>`, `<tr>`, `<td>`) into modular `<div>` card elements (`.product-card`, `.product-grid`).
  - Converted table markup into a responsive CSS Grid system (`display: grid` with `grid-template-columns: repeat(4, 1fr)`) to display equal-width product cards across desktop viewports.
  - Styled product cards with subtle borders, background fills, hover lift effects, uniform image containers (`height: 220px`, `object-fit: contain`), and typography rules for product titles, prices, and fabric descriptions.
  - Added responsive layout breakpoints for 3-column (`1050px`), 2-column (`768px`), and 1-column (`500px`) displays.

---

## 2026-09-10

### Added
- **Global Stylesheet (`main.css`)**
  - Configured universal reset rules (`* { box-sizing: border-box; margin: 0; padding: 0; }`) and default typography settings (`Arial, sans-serif`).
  - Defined base layout rules for `<main>` containers and global paragraph formatting across all pages.
  - Built interactive navigation controls with a CSS sliding curtain animation (`::before` pseudo-element on hover) and attribute-driven tooltip popups (`data-tooltip`).
  - Styled header action icons (User, Search, Cart) with hover color changes and smooth scaling transforms (`transform: scale(1.15)`).
  - Applied dark footer styling (`#111111`) across all site templates.

---

## 2026-09-10

### Added
- **Products Page & Stylesheet (`product.html` & `product.css`)**
  - Integrated header component featuring dual brand logos (`oldlogo.png` and `newlogo.png`), navigation controls, and Font Awesome action icons.
  - Added filter control UI bar (`.filter-container`) with icon-triggered filtering options.
  - Configured core page layout with a centered container (`max-width: 1300px`).
  - Implemented interactive button styling (`.filter-btn`, `.load-more-btn`) with background transitions and hover displacement (`transform: translateY(-2px)`).
  - Applied color-coded heading themes: Royal Blue (`#0044cc`) for NVTL Hoodies and Street Green (`#008800`) for NVTL Side Bags.
  - Formatted catalog layout featuring:
    - **NVTL Hoodies Collection:** Integrated 4 featured hoodie products with product images, titling, Rand pricing (R500–R800), and detailed fabric/GSM spec descriptions.
    - **NVTL Side Bags Collection:** Integrated 3 featured bag products with pricing (R280–R400) and material specifications.
  - Included dynamic "Load More" pagination buttons for each product category section.
  - Added a "Coming Soon..." teaser section showcasing the upcoming NVTL Tracksuit collection with hero banner imagery (`tract collection.jpg`).
  - Styled the "Coming Soon..." showcase banner (`.banner-img`) with auto-scaling, capped width (`1000px`), and drop shadow elevation.
  - Linked global stylesheet (`css/main.css`), page-specific stylesheet (`css/product.css`), Font Awesome CDN, and protection script (`js/protection.js`).

---

## 2026-09-10

### Added
- **Home Page & Stylesheet (`index.html` & `index.css`)**
  - Integrated header structure featuring dual brand logos (`oldlogo.png` on left, `newlogo.png` on right), brand title, slogan (*"Wa Robala Otla Jangg"*), navigation menu, and user action icons.
  - Added primary layout container rules restricting main section width to `1400px` with centered alignment and responsive padding.
  - Configured full-width hero image styles (`main img[alt="heroshoot"]`) with `object-fit: cover` and a capped maximum height of `500px`.
  - Added formatted typography rules for the hero copy block, limiting text width to `900px` with a line height of `1.7`.
  - Included brand introduction narrative introducing the streetwear movement, product philosophy, and signature style values.
  - Integrated secondary store/team imagery (`_image/employees.png`) below the brand welcome message with soft drop shadows (`box-shadow: 0 4px 12px rgba(0,0,0,0.1)`), fixed desktop width (`400px`), and rounded corners (`border-radius: 8px`).
  - Implemented `@media screen and (max-width: 768px)` media query breakpoints for scalable padding and font-size adjustments on mobile viewports.
  - Linked global stylesheet (`css/main.css`), page-specific stylesheet (`css/index.css`), Font Awesome icons, and `js/protection.js`.

---

## 2026-09-10

### Added
- **About Page (`about.html` & `about.css`)**
  - Created brand narrative section detailing the origins of NeverToLate and the story behind the slogan *"Wa Robala Otla Jangg"*.
  - Added visual side-by-side comparison sections highlighting the evolution from the legacy emblem (`oldlogo.png`) to the streamlined black-and-white visual identity (`newlogo.png`).
  - Integrated a featured video showcase element (`_video/mortivation.mp4`) with autoplay, loop, and poster image fallbacks.
  - Implemented responsive CSS layouts using Flexbox with media queries for mobile adjustments.

- **Contact & Locations Page (`contact.html` & `contact.css`)**
  - Designed structured table layouts featuring physical store listings for Akasia Mall and Menlyn Mall.
  - Embedded interactive Google Maps (`iframe`) and storefront preview imagery (`AkasiaOutside.png`, `AkasiaInside.png`, `MenlynStore.jpg`).
  - Added store operation details including full physical addresses, trading hours, and contact phone numbers.
  - Configured media queries (`@media screen and (max-width: 900px)`) to stack store table rows vertically on small screens.

- **Enquiries Page (`enquiries.html` & `enquiries.css`)**
  - Built an enquiry submission form with fields for full name, email, cell phone number, enquiry category dropdown, and message text area.
  - Standardized form inputs with active focus states (`border-color: #111111`) and background transitions.
  - Implemented a custom CSS pseudo-element hover animation (`::before` sliding overlay) for the primary submit button.

### Removed
- **`css/styleSheet.css`** — the original single stylesheet from early development, superseded by the six page-specific stylesheets above (`main.css`, `index.css`, `about.css`, `product.css`, `contact.css`, `enquiries.css`).

### Changed
- **`README.md`**
  - Rewrote and expanded the README to match the new project structure: added a "Key Features" section, split "Technologies Used" into "Technologies & Languages Used" (now covering CSS, JavaScript, and Font Awesome alongside HTML5/Git), and documented the new `css/`, `_video/`, and `js/` folders under "Website Structure".

---

## 2026-09-11

### Changed
- **`css/about.css`**
  - Added a header comment (`/* STYLE SHEET FOR ABOUT PAGE ONLY */`) to clarify the file's scope.
- **`css/contact.css`**
  - Added a header comment (`/* STYLE SHEET FOR CONTACT PAGE ONLY */`) to clarify the file's scope.
- **`css/enquiries.css`**
  - Added a header comment (`/* STYLE SHEET FOR ENQUIRIES PAGE ONLY */`) to clarify the file's scope.
- **`css/index.css`**
  - Added a header comment (`/* STYLE SHEET FOR HOME PAGE ONLY */`) to clarify the file's scope.
- **`css/product.css`**
  - Added a header comment (`/* STYLE SHEET FOR PRODUCT PAGE ONLY */`) to clarify the file's scope.
  

### Removed
- **`Reference.pdf`** — deleted the reference to add more references for part 2

---

## 2026-09-12

### Changed
- **Code comments across all pages** — added explanatory HTML comments to `about.html`, `contact.html`, `enquiries.html`, `index.html`, and `product.html` for better readability and to make others to understand my code.
- **`product.html`**
  - Removed unwanted code that was no longer needed.

### Added
- **`.github/workflows/ci.yml`** — new GitHub Actions workflow ("HTML/CSS Check") that runs on every push and pull request to `main`, verifying the commit builds cleanly.

---

## 2026-09-14

### Added
- **Code comments across all pages** — added explanatory HTML comments to `about.css`, `contact.css`, `enquiries.css`, `index.css`, and `product.css` for better readability and to make others to understand my code.

### Changed
 - **Product Catalog Layout (`contact.html` & `contact.css`)**
 - Replaced the (table) based layout (.contact-table, td cells) with a flexbox layout (.contact-row, .map-cell, .images-cell, .details-cell).
 - Converted the (table,tr,td) structure to (div class="contact-row" , div class="map-cell")  to match the new flexbox CSS.
 - Removed a duplicate (/header) closing tag.
 - **main.css** — Widened the header-container from max-width: 1300px to max-width: 100% for full width of the web page.
 - Increased the header-logo img from 140px to 180px to make them a bit bigger and also to fit in the box.

