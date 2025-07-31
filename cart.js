// Clear localStorage if the session is new
if (!sessionStorage.getItem("sessionActive")) {
    localStorage.removeItem("cartItems");
    sessionStorage.setItem("sessionActive", "true");
}

// Array to store cart items
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

// Function to add an item to the cart
function addToCart(productName, price, quantity) {
    if (quantity <= 0) return; // Skip if quantity is zero

    const existingItem = cartItems.find(item => item.name === productName);

    if (existingItem) {
        // Increment the quantity of an existing item
        existingItem.quantity += quantity;
    } else {
        // Add new item to the cart
        cartItems.push({
            name: productName,
            price: price,
            quantity: quantity,
        });
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateCartAmountDisplay();
}

// Function to render the cart page
function renderCart() {
    const cartTable = document.querySelector("#cart-table tbody");
    const cartTotal = document.querySelector("#cart-total");

    cartTable.innerHTML = ""; // Clear existing table rows
    let total = 0;

    cartItems.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>
                <button class="decrease-btn" data-index="${index}">-</button>
                ${item.quantity}
                <button class="increase-btn" data-index="${index}">+</button>
            </td>
            <td>$${itemTotal.toFixed(2)}</td>
            <td>
                <button class="remove-btn" data-index="${index}">Remove</button>
            </td>
        `;
        cartTable.appendChild(row);
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Event listeners for the cart page
if (window.location.pathname.includes("cart.html")) {
    renderCart();

    document.addEventListener("click", (event) => {
        const index = event.target.dataset.index;

        if (event.target.classList.contains("remove-btn")) {
            cartItems.splice(index, 1); // Remove item from cart
        } else if (event.target.classList.contains("increase-btn")) {
            cartItems[index].quantity += 1; // Increase quantity
        } else if (event.target.classList.contains("decrease-btn")) {
            if (cartItems[index].quantity > 1) {
                cartItems[index].quantity -= 1; // Decrease quantity
            }
        }

        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        renderCart(); // Re-render cart table
    });
}

// Add event listeners for the "Add to Cart" buttons on the homepage
if (!window.location.pathname.includes("cart.html")) {
    document.querySelectorAll(".box").forEach((box) => {
        const productName = box.querySelector("h3").textContent;
        const priceText = box.querySelector(".price").textContent.trim();
        const price = parseFloat(priceText.replace("$", ""));
        const quantityButton = box.querySelector(".quantity-button");
        const quantityDisplay = quantityButton.querySelector(".price-quantity");

        box.querySelector(".bi-cart-plus").addEventListener("click", () => {
            const quantity = parseInt(quantityDisplay.textContent);
            addToCart(productName, price, quantity);
        });
    });

    document.querySelectorAll(".featured-quantity-button").forEach((buttonContainer) => {
        const productName = buttonContainer.closest(".content").querySelector("h3").textContent;
        const priceText = buttonContainer.closest(".content").querySelector(".price").textContent.trim();
        const price = parseFloat(priceText.replace("$", ""));
        const quantityDisplay = buttonContainer.querySelector(".price-quantity");

        buttonContainer.querySelector(".bi-cart-plus").addEventListener("click", () => {
            const quantity = parseInt(quantityDisplay.textContent);
            addToCart(productName, price, quantity);
        });
    });
}

// Update cart amount display
function updateCartAmountDisplay() {
    totalCartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    const cartAmountDisplay = document.querySelector('.cartAmount');
    cartAmountDisplay.textContent = totalCartQuantity;
}

