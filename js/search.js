// Global Search Logic for NeverToLate

// Open Search Overlay Modal
function openSearchModal() {
    const searchModal = document.getElementById("searchModal");
    const searchInput = document.getElementById("searchInput");
    
    if (searchModal) {
        searchModal.classList.add("active");
        document.body.style.overflow = "hidden"; // Block page scrolling behind modal
        
        if (searchInput) {
            searchInput.value = "";
            searchInput.focus();
            renderSearchResults(""); // Show initial full catalog or prompt
        }
    }
}

// Close Search Overlay Modal
function closeSearchModal() {
    const searchModal = document.getElementById("searchModal");
    if (searchModal) {
        searchModal.classList.remove("active");
        document.body.style.overflow = ""; // Restore scrolling
    }
}

// Close Modal when pressing the Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeSearchModal();
    }
});

// Attach keyup/input listeners as soon as DOM loads
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    
    if (searchInput) {
        // 'input' captures every character typed, pasted, or deleted instantly
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.trim().toLowerCase();
            renderSearchResults(query);
        });
    }
});

// Live filter and render product catalog
function renderSearchResults(query) {
    const resultsContainer = document.getElementById("searchResults");
    if (!resultsContainer) return;

    // Retrieve catalog array from global catalogData object or window
    const catalog = window.catalogData || (typeof catalogData !== "undefined" ? catalogData : null);

    if (!catalog) {
        resultsContainer.innerHTML = `<p class="no-results-msg">Catalog loading...</p>`;
        return;
    }

    const items = Array.isArray(catalog) ? catalog : Object.values(catalog);

    // Filter items based on query
    const filtered = items.filter(item => {
        if (!query) return true; // Show all products when query is empty
        
        const nameMatch = item.name && item.name.toLowerCase().includes(query);
        const colorMatch = item.color && item.color.toLowerCase().includes(query);
        const tagMatch = item.tags && item.tags.some(tag => tag.toLowerCase().includes(query));
        
        return nameMatch || colorMatch || tagMatch;
    });

    if (filtered.length === 0) {
        resultsContainer.innerHTML = `<p class="no-results-msg">NO PRODUCTS FOUND MATCHING "${query.toUpperCase()}"</p>`;
        return;
    }

    // Render matches dynamically
    resultsContainer.innerHTML = filtered.map(item => `
        <div class="search-result-item" onclick="window.location.href='product-detail.html?id=${item.id}'">
            <img src="${item.image}" alt="${item.name}">
            <div class="search-result-info">
                <h5>${item.name}</h5>
                <span>R ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}</span>
            </div>
        </div>
    `).join('');
}