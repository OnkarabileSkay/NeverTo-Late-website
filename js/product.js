// Catalog registry mapped to product HTML table items
const catalogData = {
    "hoodie1": {
        id: "hoodie1",
        name: "Asymmetric Tech-Pouch Pullover",
        price: 500.00,
        image: "_image/hoodies/hoodie1.png",
        description: "400 GSM Heavyweight Organic Cotton Fleece with Matte Nylon Accents. Features an asymmetrical kangaroo pocket with an extended side zipper, high-funnel neck hood with dual-tone drawstrings, electric blue shoulder paneling, and a small woven patch on the chest with a full-back print."
    },
    "hoodie2": {
        id: "hoodie2",
        name: "Tri-Block Utility Hoodie",
        price: 600.00,
        image: "_image/hoodies/hoodie2.png",
        description: "360 GSM Premium Cotton-Polyester Blend (Fleece-Lined). Classic color-blocked design (Royal Blue, Pure White, Jet Black), front kangaroo pouch, white drawstrings with metal aglets, dual screen-printed branding on both front chest and back."
    },
    "hoodie3": {
        id: "hoodie3",
        name: "Tactical Raglan",
        price: 550.00,
        image: "_image/hoodies/hoodie3.png",
        description: "420 GSM French Terry Cotton. High-contrast black and white raglan sleeve construction, a functional front tactical cargo pouch secured with an adjustable royal blue strap buckle, and high-impact screen printing on both sides."
    },
    "hoodie4": {
        id: "hoodie4",
        name: "Geometric Split-Zip Hoodie",
        price: 800.00,
        image: "_image/hoodies/hoodie4.png",
        description: "380 GSM Heavyweight Brushed Fleece. Full-length front zipper with a side-hem expansion zip, dynamic geometric color-splicing (Black, White, Royal Blue), subtle left-chest crest branding, and a bold full-back centerpiece graphic."
    },
    "sidebag1": {
        id: "sidebag1",
        name: "Tactical Utility Crossbody",
        price: 280.00,
        image: "_image/bags/sidebag1.png",
        description: "Heavy-Duty Ballistic Nylon with Water-Resistant Coating. Features front MOLLE webbing, bright blue contrast zippers, a metal quick-release cobra buckle, woven NeverToLate graphic patch on front, and bold \"Wa robala otla jangg\" typography printed along the strap."
    },
    "sidebag2": {
        id: "sidebag2",
        name: "Mapara Blocking",
        price: 400.00,
        image: "_image/bags/sidebag2.png",
        description: "High-Density 600D Cordura Nylon with Breathable Air-Mesh Backing. Features a tri-tone color scheme (Royal Blue, Jet Black, Off-White), thick blue crossbody harness, mesh padded shoulder panel for comfort, and a diagonal NeverToLate block text graphic printed on the front pocket."
    },
    "sidebag3": {
        id: "sidebag3",
        name: "Dual-Strap",
        price: 350.00,
        image: "_image/bags/sidebag3.png",
        description: "Reinforced Heavyweight Canvas with Nylon Webbing. Features a dual-tone cream and black compartment structure, vibrant royal blue cross-back harness straps, waterproof sealed zips, and a rubberized circular emblem badge on the front pocket."
    },
    "NVTL-Black-Beanie": {
        id: "NVTL-Black-Beanie",
        name: "Essential-Black-Beanie",
        price: 120.00,
        image: "_image/Hats/NVTL-Black-Beanie.png",
        description: "Our Classic Cuff Beanie combines everyday comfort with a clean streetwear look. Designed for everyday wear, this beanie features a soft knitted construction, a fold-over cuff and our signature NeverTo Late logo."
    },
    "NVTL-White-Beanie": {
        id: "NVTL-White-Beanie",
        name: "Essential-White-Beanie",
        price: 120.00,
        image: "_image/Hats/NVTL-White-Beanie.png",
        description: "Our Classic Cuff Beanie combines everyday comfort with a clean streetwear look. Designed for everyday wear, this beanie features a soft knitted construction, a fold-over cuff and our signature NeverTo Late logo."
    },
    "more-effort-Hoodie-Black": {
        id: "more-effort-Hoodie-Black",
        name: "Heavy Duty (Black)",
        price: 600.00,
        color: "Black",
        image: "_image/combo/more-effort-Hoodie-Black.png",
        tags: ["HEAVYWEIGHT", "FLEECE-LINED", "UTILITY"],
        description: "360 GSM Premium Cotton-Polyester Blend (Fleece-Lined). Jet black colorway, featuring hanging black utility straps and metal buckles, dual screen-printed branding with NVTL chest logo on the front and the man carrying the world graphic on the back, Monna ke spane."
    },
    "more-effort-Hoodie-White": {
        id: "more-effort-Hoodie-White",
        name: "Heavy Duty (White)",
        price: 600.00,
        color: "White",
        image: "_image/combo/more-effort-Hoodie-White.jpg",
        tags: ["HEAVYWEIGHT", "FLEECE-LINED", "UTILITY"],
        description: "360 GSM Premium Cotton-Polyester Blend (Fleece-Lined). Clean white colorway, featuring hanging utility straps and metal buckles, dual screen-printed branding with NVTL chest logo on the front and the man carrying the world graphic on the back, Monna ke spane."
    }
};

let currentSelectedProduct = null;
let currentSelectedSize = "S";

function openProductModal(productId) {
    currentSelectedProduct = catalogData[productId];
    if (!currentSelectedProduct) return;

    currentSelectedSize = "S"; // reset default

    document.getElementById("modalProductImg").src = currentSelectedProduct.image;
    document.getElementById("modalProductName").textContent = currentSelectedProduct.name;
    document.getElementById("modalProductPrice").textContent = `R${currentSelectedProduct.price.toFixed(2)}`;
    document.getElementById("modalProductDesc").textContent = currentSelectedProduct.description;

    document.querySelectorAll(".size-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.size === "S");
    });

    renderRecommendations(productId);

    document.getElementById("productModal")?.classList.add("active");
    document.getElementById("productModalOverlay")?.classList.add("active");
}

function closeProductModal() {
    document.getElementById("productModal")?.classList.remove("active");
    document.getElementById("productModalOverlay")?.classList.remove("active");
}

function renderRecommendations(currentId) {
    const recGrid = document.getElementById("recommendationsGrid");
    if (!recGrid) return;

    const allKeys = Object.keys(catalogData).filter(key => key !== currentId);
    
    recGrid.innerHTML = allKeys.map(key => {
        const item = catalogData[key];
        return `
            <div class="rec-card" onclick="openProductModal('${item.id}')">
                <img src="${item.image}" alt="${item.name}">
                <h4>${item.name}</h4>
                <span>R${item.price.toFixed(2)}</span>
            </div>
        `;
    }).join('');
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("modalSizeOptions")?.addEventListener("click", (e) => {
        if (e.target.classList.contains("size-btn")) {
            document.querySelectorAll(".size-btn").forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            currentSelectedSize = e.target.dataset.size;
        }
    });

    document.getElementById("modalAddToCartBtn")?.addEventListener("click", () => {
        if (!currentSelectedProduct) return;

        if (typeof addToCart === "function") {
            addToCart({
                id: currentSelectedProduct.id,
                name: currentSelectedProduct.name,
                price: currentSelectedProduct.price,
                image: currentSelectedProduct.image,
                size: currentSelectedSize,
                quantity: 1
            });
        }

        closeProductModal();
    });
});

// Toggle filter options bar visibility
function toggleMainFilter() {
    const filterBar = document.getElementById('filterOptionsBar');
    if (filterBar) {
        filterBar.classList.toggle('hidden');
    }
}

// Master filter logic
function applyAllFilters() {
    const selectedCategory = document.getElementById('filterCategory').value;
    const selectedColor = document.getElementById('filterColor').value.toLowerCase();
    const selectedSize = document.getElementById('filterSize').value;
    const selectedPriceSort = document.getElementById('filterPrice').value;
    const showOnlyAvailable = document.getElementById('filterAvailability').checked;

    // Fetch live stock status from localStorage
    const stockData = JSON.parse(localStorage.getItem('nt_inventory_v2')) || [];
    const stockMap = {};
    stockData.forEach(item => {
        stockMap[item.id] = item.isSoldOut;
    });

    const productCells = document.querySelectorAll('.product-table td:not(.empty-cell)');

    productCells.forEach(cell => {
        const onclickAttr = cell.getAttribute('onclick') || '';
        
        // Extract product ID safely whether using query string or openProductModal
        let productId = '';
        const idMatch = onclickAttr.match(/id=([^'&]+)/) || onclickAttr.match(/openProductModal\(['"]([^'"]+)['"]\)/);
        if (idMatch) {
            productId = idMatch[1];
        }

        const titleText = (cell.querySelector('.product-title')?.textContent || '').toLowerCase();
        const descText = (cell.querySelector('.description')?.textContent || '').toLowerCase();
        const isSoldOut = stockMap[productId] || false;

        let matches = true;

        // Category Filter (Supports Hoodies, Side Bags, Hats)
        if (selectedCategory === 'hoodies' && !productId.startsWith('hoodie')) {
            matches = false;
        } else if (selectedCategory === 'sidebags' && !productId.startsWith('sidebag')) {
            matches = false;
        } else if (selectedCategory === 'hats' && !productId.includes('Beanie')) {
            matches = false;
        }

        // Colour Filter
        if (selectedColor !== 'all') {
            if (!titleText.includes(selectedColor) && !descText.includes(selectedColor)) {
                matches = false;
            }
        }

        // Availability Filter
        if (showOnlyAvailable && isSoldOut) {
            matches = false;
        }

        // Apply display result
        cell.style.display = matches ? 'flex' : 'none';
    });

    // 4. Price Sorting
    if (selectedPriceSort !== 'default') {
        const tables = document.querySelectorAll('.product-table');
        tables.forEach(table => {
            const row = table.querySelector('tr');
            if (!row) return;

            const cellsArray = Array.from(row.querySelectorAll('td:not(.empty-cell)'));
            
            cellsArray.sort((a, b) => {
                const priceA = parseFloat(a.querySelector('.price')?.textContent.replace(/[^0-9.]/g, '') || 0);
                const priceB = parseFloat(b.querySelector('.price')?.textContent.replace(/[^0-9.]/g, '') || 0);

                return selectedPriceSort === 'cheap' ? priceA - priceB : priceB - priceA;
            });

            // Re-append sorted cards
            cellsArray.forEach(cell => row.appendChild(cell));
        });
    }
}

// Reset all filters back to initial state
function resetFilters() {
    document.getElementById('filterCategory').value = 'all';
    document.getElementById('filterColor').value = 'all';
    document.getElementById('filterSize').value = 'all';
    document.getElementById('filterPrice').value = 'default';
    document.getElementById('filterAvailability').checked = false;

    const productCells = document.querySelectorAll('.product-table td');
    productCells.forEach(cell => cell.style.display = 'flex');
}
// Load more hoodies buttom 
function toggleLoadMoreHoodies() {
    const extraCells = document.querySelectorAll('.extra-hoodie-cell');
    const btn = document.getElementById('loadMoreHoodiesBtn');
    
    if (extraCells.length === 0 || !btn) return;

    // Check current state based on the first extra cell
    const isHidden = extraCells[0].style.display === 'none' || extraCells[0].style.display === '';

    extraCells.forEach(cell => {
        cell.style.display = isHidden ? 'flex' : 'none';
    });

    btn.textContent = isHidden ? 'Show Less Hoodies' : 'Load More Hoodies';
}

// Hide extra hoodie cells by default on page load
document.addEventListener("DOMContentLoaded", () => {
    const extraCells = document.querySelectorAll('.extra-hoodie-cell');
    extraCells.forEach(cell => {
        cell.style.display = 'none';
    });
});