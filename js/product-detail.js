// Catalog to product HTML table items
const catalogData = {
    "hoodie1": {
        id: "hoodie1",
        name: "Asymmetric Tech-Pouch Pullover",
        price: 500.00,
        color: "Black / Blue",
        image: "_image/hoodies/hoodie1.png",
        description: "400 GSM Heavyweight Organic Cotton Fleece with Matte Nylon Accents. Features an asymmetrical kangaroo pocket with an extended side zipper, high-funnel neck hood with dual-tone drawstrings, electric blue shoulder paneling, and a small woven patch on the chest with a full-back print."
    },
    "hoodie2": {
        id: "hoodie2",
        name: "Tri-Block Utility Hoodie",
        price: 600.00,
        color: "Royal Blue / White / Black",
        image: "_image/hoodies/hoodie2.png",
        description: "360 GSM Premium Cotton-Polyester Blend (Fleece-Lined). Classic color-blocked design (Royal Blue, Pure White, Jet Black), front kangaroo pouch, white drawstrings with metal aglets, dual screen-printed branding on both front chest and back."
    },
    "hoodie3": {
        id: "hoodie3",
        name: "Tactical Raglan",
        price: 550.00,
        color: "Black / White",
        image: "_image/hoodies/hoodie3.png",
        description: "420 GSM French Terry Cotton. High-contrast black and white raglan sleeve construction, a functional front tactical cargo pouch secured with an adjustable royal blue strap buckle, and high-impact screen printing on both sides."
    },
    "hoodie4": {
        id: "hoodie4",
        name: "Geometric Split-Zip Hoodie",
        price: 800.00,
        color: "Black / Blue",
        image: "_image/hoodies/hoodie4.png",
        description: "380 GSM Heavyweight Brushed Fleece. Full-length front zipper with a side-hem expansion zip, dynamic geometric color-splicing (Black, White, Royal Blue), subtle left-chest crest branding, and a bold full-back centerpiece graphic."
    },
    "sidebag1": {
        id: "sidebag1",
        name: "Tactical Utility Crossbody",
        price: 280.00,
        color: "Black / Blue",
        image: "_image/bags/sidebag1.png",
        description: "Heavy-Duty Ballistic Nylon with Water-Resistant Coating. Features front MOLLE webbing, bright blue contrast zippers, a metal quick-release cobra buckle, woven NeverToLate graphic patch on front, and bold \"Wa robala otla jangg\" typography printed along the strap."
    },
    "sidebag2": {
        id: "sidebag2",
        name: "Mapara Blocking",
        price: 400.00,
        color: "Multi / Blue",
        image: "_image/bags/sidebag2.png",
        description: "High-Density 600D Cordura Nylon with Breathable Air-Mesh Backing. Features a tri-tone color scheme (Royal Blue, Jet Black, Off-White), thick blue crossbody harness, mesh padded shoulder panel for comfort, and a diagonal NeverToLate block text graphic printed on the front pocket."
    },
    "sidebag3": {
        id: "sidebag3",
        name: "Dual-Strap",
        price: 350.00,
        color: "Cream / Black",
        image: "_image/bags/sidebag3.png",
        description: "Reinforced Heavyweight Canvas with Nylon Webbing. Features a dual-tone cream and black compartment structure, vibrant royal blue cross-back harness straps, waterproof sealed zips, and a rubberized circular emblem badge on the front pocket."
    },
    "NVTL-Black-Beanie": {
        id: "NVTL-Black-Beanie",
        name: "Essential-Black-Beanie",
        price: 120.00,
        color: "Black",
        image: "_image/Hats/NVTL-Black-Beanie.png",
        description: "Our Classic Cuff Beanie combines everyday comfort with a clean streetwear look. Designed for everyday wear, this beanie features a soft knitted construction, a fold-over cuff and our signature NeverTo Late logo."
    },
    "NVTL-White-Beanie": {
        id: "NVTL-White-Beanie",
        name: "Essential-White-Beanie",
        price: 120.00,
        color: "White",
        image: "_image/Hats/NVTL-White-Beanie.png",
        description: "Our Classic Cuff Beanie combines everyday comfort with a clean streetwear look. Designed for everyday wear, this beanie features a soft knitted construction, a fold-over cuff and our signature NeverTo Late logo."
    },
    "more-effort-Hoodie-Black": {
        id: "more-effort-Hoodie-Black",
        name: "Heavy Duty (Black)",
        price: 600.00,
        color: "Black",
        image: "_image/combo/more-effort-Hoodie-Black.png",
        description: "360 GSM Premium Cotton-Polyester Blend (Fleece-Lined). Jet black colorway, featuring hanging black utility straps and metal buckles, dual screen-printed branding with NVTL chest logo on the front and the man carrying the world graphic on the back, Monna ke spane."
    },
    "more-effort-Hoodie-White": {
        id: "more-effort-Hoodie-White",
        name: "Heavy Duty (White)",
        price: 600.00,
        color: "White",
        image: "_image/combo/more-effort-Hoodie-White.jpg",
        description: "360 GSM Premium Cotton-Polyester Blend (Fleece-Lined). Clean white colorway, featuring hanging utility straps and metal buckles, dual screen-printed branding with NVTL chest logo on the front and the man carrying the world graphic on the back, Monna ke spane."
    }
};

// --- LIGHTBOX FUNCTIONS ---
function openLightbox(imgSrc, imgAlt) {
    const lightbox = document.getElementById("galleryLightbox");
    const lightboxImg = document.getElementById("lightboxImage");
    const lightboxCaption = document.getElementById("lightboxCaption");
    
    if (lightbox && lightboxImg) {
        lightboxImg.src = imgSrc;
        if (lightboxCaption) {
            lightboxCaption.textContent = imgAlt || "";
        }
        lightbox.classList.add("active");
    }
}

function closeLightbox() {
    const lightbox = document.getElementById("galleryLightbox");
    if (lightbox) {
        lightbox.classList.remove("active");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // 1. Parse query parameter for product ID (e.g., product-detail.html?id=hoodie1)
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    const product = catalogData[productId];

    if (!product) {
        // Fallback if product ID is missing or invalid
        document.getElementById("detailProductName").textContent = "PRODUCT NOT FOUND";
        document.getElementById("detailProductDesc").textContent = "The requested product could not be loaded.";
        document.getElementById("detailProductPrice").textContent = "R0.00";
        return;
    }

    // 2. Populate main product details
    document.getElementById("detailProductName").textContent = product.name;
    document.getElementById("detailProductPrice").textContent = `R${product.price.toFixed(2)}`;
    document.getElementById("detailProductDesc").textContent = product.description;
    document.getElementById("detailColourLabel").textContent = `Colour: ${product.color || "Standard"}`;
    
    const mainImg = document.getElementById("detailProductImg");
    mainImg.src = product.image;
    mainImg.alt = product.name;

    // 3. Attach click event and zoom trigger to the product detail image
    mainImg.style.cursor = "zoom-in";
    mainImg.addEventListener("click", () => {
        openLightbox(product.image, product.name);
    });

    // 4. Populate sticky purchase bar info
    document.getElementById("stickyProductName").textContent = product.name;
    document.getElementById("stickyProductPrice").textContent = `R ${product.price.toFixed(2)}`;
    const stickyThumb = document.getElementById("stickyProductThumb");
    stickyThumb.src = product.image;
    stickyThumb.alt = product.name;

    // 5. Handle "Add to Cart" functionality from sticky bar
    const addToCartBtn = document.getElementById("stickyAddToCartBtn");
    if (addToCartBtn) {
        addToCartBtn.addEventListener("click", () => {
            const sizeSelect = document.getElementById("sizeSelect");
            const selectedSize = sizeSelect ? sizeSelect.value : "S";

            if (typeof addToCart === "function") {
                addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    size: selectedSize,
                    quantity: 1
                });
            } else {
                console.warn("addToCart function from cart.js is not loaded.");
            }
        });
    }

    // 6. Render Recommendations Grid ("You May Also Like...")
    renderRecommendations(productId);
});

function renderRecommendations(currentId) {
    const recGrid = document.getElementById("recommendationsGrid");
    if (!recGrid) return;

    // Filter out the current product and pick up to 4 other items
    const otherKeys = Object.keys(catalogData).filter(key => key !== currentId);
    
    recGrid.innerHTML = otherKeys.map(key => {
        const item = catalogData[key];
        return `
            <div class="recommendation-card" onclick="window.location.href='product-detail.html?id=${item.id}'" style="cursor: pointer;">
                <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 180px; object-fit: contain; background: #f4f4f4; border-radius: 4px; margin-bottom: 8px;">
                <h4 style="font-size: 0.95rem; margin: 0 0 4px 0; color: #111;">${item.name}</h4>
                <span style="font-weight: bold; color: #0044cc; font-size: 0.9rem;">R${item.price.toFixed(2)}</span>
            </div>
        `;
    }).join('');
}