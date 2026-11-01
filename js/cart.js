/*Java Script for the cart drower*/

// Helper: Retrieve cart items from localStorage
function getCart() {
    try {
        const cartData = localStorage.getItem("nvtl_cart");
        return cartData ? JSON.parse(cartData) : [];
    } catch (error) {
        console.error("Error reading cart from localStorage:", error);
        return [];
    }
}

// Helper: Save cart items to localStorage and emit cart update event
function saveCart(cart) {
    try {
        localStorage.setItem("nvtl_cart", JSON.stringify(cart));
        window.dispatchEvent(new Event("cartUpdated"));
    } catch (error) {
        console.error("Error saving cart to localStorage:", error);
    }
}

// Update Header Cart Badge Number
function updateHeaderCartCount() {
    const badge = document.getElementById("cartCountBadge");
    if (!badge) return;

    const cart = getCart();
    const totalQuantity = cart.reduce((total, item) => total + (parseInt(item.quantity, 10) || 1), 0);

    badge.textContent = totalQuantity;

    if (totalQuantity > 0) {
        badge.classList.remove("hidden");
    } else {
        badge.classList.add("hidden");
    }
}

// Open Left Side Cart Drawer
function openCartDrawer() {
    renderCartDrawer();
    document.getElementById("cartDrawer")?.classList.add("open");
    document.getElementById("cartOverlay")?.classList.add("active");
}

// Close Left Side Cart Drawer
function closeCartDrawer() {
    document.getElementById("cartDrawer")?.classList.remove("open");
    document.getElementById("cartOverlay")?.classList.remove("active");
}

// Render cart contents into the drawer
function renderCartDrawer() {
    const bodyContainer = document.getElementById("cartDrawerBody");
    const footerContainer = document.getElementById("cartDrawerFooter");
    const drawerTotalEl = document.getElementById("cartDrawerTotal");
    const checkoutTotalEl = document.getElementById("checkoutBtnTotal");

    if (!bodyContainer) return;

    const cart = getCart();

    // Empty state
    if (cart.length === 0) {
        bodyContainer.innerHTML = `<div class="cart-empty-message">YOUR CART IS EMPTY</div>`;
        if (footerContainer) footerContainer.classList.add("hidden");
        return;
    }

    // Active cart state
    if (footerContainer) footerContainer.classList.remove("hidden");

    let subtotal = 0;
    let html = `<div class="shipping-notice">You won't regret it!</div>`;

    cart.forEach((item, index) => {
        const itemPrice = parseFloat(item.price) || 0;
        const itemQuantity = parseInt(item.quantity, 10) || 1;
        const itemTotal = itemPrice * itemQuantity;
        subtotal += itemTotal;

        html += `
            <div class="cart-drawer-item">
                <img src="${item.image || '_image/oldlogo.png'}" alt="${item.name}">
                <div class="cart-drawer-item-details">
                    <div>
                        <h4>${item.name}</h4>
                        <div class="cart-item-price">R ${itemPrice.toFixed(2)}</div>
                        <div class="cart-item-variant">${item.color || 'BLACK'} / ${item.size || 'M'}</div>
                    </div>
                    <div class="cart-item-controls">
                        <div class="qty-picker">
                            <button onclick="changeQty(${index}, -1)">&minus;</button>
                            <span>${itemQuantity}</span>
                            <button onclick="changeQty(${index}, 1)">&plus;</button>
                        </div>
                        <button class="remove-item-btn" onclick="removeCartItem(${index})">Remove</button>
                    </div>
                </div>
            </div>
        `;
    });

    bodyContainer.innerHTML = html;

    const formattedTotal = `R ${subtotal.toFixed(2)}`;
    if (drawerTotalEl) drawerTotalEl.textContent = formattedTotal;
    if (checkoutTotalEl) checkoutTotalEl.textContent = formattedTotal;
}

// Increment or decrement quantity inside drawer
function changeQty(index, amount) {
    const cart = getCart();
    if (!cart[index]) return;

    cart[index].quantity = (parseInt(cart[index].quantity, 10) || 1) + amount;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    saveCart(cart);
    renderCartDrawer();
}

// Remove item from cart inside drawer
function removeCartItem(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    renderCartDrawer();
}

/**
 * Global function to add item to cart from product buttons
 * @param {Object} product - { id, name, price, image, size, color, quantity }
 */
function addToCart(product) {
    const cart = getCart();
    
    const existingIndex = cart.findIndex(
        item => item.id === product.id && item.size === product.size && item.color === product.color
    );

    if (existingIndex > -1) {
        cart[existingIndex].quantity += (product.quantity || 1);
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image || '_image/oldlogo.png',
            size: product.size || 'M',
            color: product.color || 'BLACK',
            quantity: product.quantity || 1
        });
    }

    saveCart(cart);
    openCartDrawer();
}

// Initialize badge and event listeners
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateHeaderCartCount);
} else {
    updateHeaderCartCount();
}

window.addEventListener("cartUpdated", () => {
    updateHeaderCartCount();
    if (document.getElementById("cartDrawer")?.classList.contains("open")) {
        renderCartDrawer();
    }
});