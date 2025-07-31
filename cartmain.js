// Handling the quantity update for products in the "Latest Products" section
document.querySelectorAll('.box').forEach((box, index) => {
    const quantityButton = box.querySelector('.quantity-button');
    const decreaseButton = quantityButton.querySelector('.bi-cart-dash');
    const increaseButton = quantityButton.querySelector('.bi-cart-plus');
    const quantityDisplay = quantityButton.querySelector('.price-quantity');

    // Retrieve the stored quantity for each product from localStorage
    let quantity = JSON.parse(localStorage.getItem('productQuantities'))?.[index] || 0;

    quantityDisplay.textContent = quantity;

    decreaseButton.addEventListener('click', () => {
        if (quantity > 0) {
            quantity--;
            localStorage.setItem('productQuantities', JSON.stringify(updateProductQuantities(index, quantity)));
            quantityDisplay.textContent = quantity;
        }
    });

    increaseButton.addEventListener('click', () => {
        quantity++;
        localStorage.setItem('productQuantities', JSON.stringify(updateProductQuantities(index, quantity)));
        quantityDisplay.textContent = quantity;
    });
});

// Handling the quantity update for products in the "Featured" section
document.querySelectorAll('.featured-quantity-button').forEach((buttonContainer, index) => {
    const decreaseButton = buttonContainer.querySelector('.bi-cart-dash');
    const increaseButton = buttonContainer.querySelector('.bi-cart-plus');
    const quantityDisplay = buttonContainer.querySelector('.price-quantity');

    // Retrieve the stored quantity for each product from localStorage
    let quantity = JSON.parse(localStorage.getItem('featuredProductQuantities'))?.[index] || 0;

    quantityDisplay.textContent = quantity;

    decreaseButton.addEventListener('click', () => {
        if (quantity > 0) {
            quantity--;
            localStorage.setItem('featuredProductQuantities', JSON.stringify(updateFeaturedProductQuantities(index, quantity)));
            quantityDisplay.textContent = quantity;
        }
    });

    increaseButton.addEventListener('click', () => {
        quantity++;
        localStorage.setItem('featuredProductQuantities', JSON.stringify(updateFeaturedProductQuantities(index, quantity)));
        quantityDisplay.textContent = quantity;
    });
});

// Helper function to update product quantities in localStorage
function updateProductQuantities(index, quantity) {
    let quantities = JSON.parse(localStorage.getItem('productQuantities')) || [];
    quantities[index] = quantity;
    return quantities;
}

// Helper function to update featured product quantities in localStorage
function updateFeaturedProductQuantities(index, quantity) {
    let quantities = JSON.parse(localStorage.getItem('featuredProductQuantities')) || [];
    quantities[index] = quantity;
    return quantities;
}

// Function to update the cart display
let totalCartQuantity = 0; // Initialize total cart quantity

function updateCartAmountDisplay() {
    const cartAmountDisplay = document.querySelector('.cartAmount');
    cartAmountDisplay.textContent = totalCartQuantity;
}
// Update the cart amount when returning to the homepage
window.addEventListener('load', () => {
    // Get the cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Calculate total quantity
    let totalCartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    // Update the cart icon display (Assuming the cart icon has the class 'cartAmount')
    const cartAmountDisplay = document.querySelector('.cartAmount');
    if (cartAmountDisplay) {
        cartAmountDisplay.textContent = totalCartQuantity;
    }
});

updateCartAmountDisplay();
