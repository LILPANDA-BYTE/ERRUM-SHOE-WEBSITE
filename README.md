# Shoe Website Project

## 1. Introduction
This repository contains the source code for a modern, responsive e-commerce website specializing in shoes. The project aims to provide a user-friendly interface for browsing products, managing a shopping cart, and proceeding through a checkout process. This document outlines the project structure, key features, technologies used, and instructions for setup and usage.

https://images.menshealth.com/image/upload/f_auto,q_auto/v165.../xyz.jpg

## 2. Project Structure
The project is organized into the following files and directories:
```bash
.
├── index.html            # Main landing page of the website
├── style.css             # Stylesheet for the main page
├── main.js               # JavaScript for main page functionalities (sliders, animations)
├── cart.html             # Shopping cart page
├── cartstyle.css         # Stylesheet for the shopping cart page
├── cart.js               # JavaScript for cart functionalities (add, remove, update quantity)
├── cartmain.js           # Additional JavaScript for cart interactions and quantity management
├── checkout.html         # Checkout page for payment method selection
├── checkoutstyle.css     # Stylesheet for the checkout page
├── popup.html            # Popup for payment details input
├── popup.js              # JavaScript for popup functionality
└── img/                  # Directory for all image assets
    ├── (product images)
    ├── (payment method icons)
    └── (background images)
````

## 3. Key Features

* **Homepage (`index.html`):**

  * Dynamic product sliders showcasing different shoe models
  * Sections for “Latest Products” and “Featured Products”
  * Interactive quantity selectors for adding items to the cart directly from product listings
  * Navigation bar with links to Home, Products, Featured, Blog, News
  * Cart icon displaying the total number of items in the cart
  * Newsletter subscription and social media links in the footer

* **Shopping Cart (`cart.html`):**

  * Displays a table of items added to the cart (product name, price, quantity, total)
  * Increase, decrease, or remove items from the cart
  * Calculates and displays the grand total of all items
  * Section for applying coupon codes (validation not fully implemented)
  * “Back to Homepage” and “Proceed to Checkout” buttons

* **Checkout Page (`checkout.html`):**

  * Selection of various payment methods (Bank Transfer, PayPal, bKash, Rocket, Apple Pay, Google Pay, MasterCard, Nagad)
  * Clicking a payment method opens a popup for entering payment details
  * “Back to Cart” and “Proceed to Shipping” buttons

* **Payment Popup (`popup.html`):**

  * Simple form for entering “Account Number” and “Password”
  * “Confirm” and “Cancel” buttons (Cancel closes the popup)

* **Responsive Design:**

  * Adapts layout and elements for desktop, tablet, and mobile

## 4. Technologies Used

* **HTML5** – Structuring web content
* **CSS3** – Styling, responsive design, animations, gradients

  * `style.css` – Main homepage styles
  * `cartstyle.css` – Shopping cart styles
  * `checkoutstyle.css` – Checkout page styles
* **JavaScript (ES6+)** – Interactive functionality, DOM manipulation, localStorage

  * `main.js` – Homepage sliders and interactions
  * `cart.js` – Cart logic (add/remove/update)
  * `cartmain.js` – Quantity updates for homepage products
  * `popup.js` – Payment popup behavior
* **Google Fonts (Poppins)** – Modern typography
* **Bootstrap Icons** – Icons for cart, heart, share, eye, etc.

## 5. Setup and Usage

To set up and run the project locally:

1. **Clone the repository:**

   ```bash
   git clone <repository_url>
   cd <repository_name>
   ```
2. **Open in browser:**

   * Double-click or open `index.html` in your preferred web browser.
   * All other HTML, CSS, and JavaScript files are linked relatively and will load automatically.

## 6. Local Storage Usage

The website uses `localStorage` to persist cart items across browsing sessions:

* **cartItems**: Array of objects representing products in the cart (name, price, quantity)
* **productQuantities**: Quantities selected for “Latest Products” on the homepage
* **featuredProductQuantities**: Quantities selected for “Featured Products” on the homepage
* **sessionStorage**: Clears `localStorage` cart items on new sessions for a fresh cart

## 7. Future Enhancements

* **Backend Integration**: User authentication, order processing, persistent data storage
* **Coupon Code Validation**: Robust server-side coupon system
* **Payment Gateway Integration**: Real APIs (Stripe, PayPal) instead of generic popup
* **Search Functionality**: Search bar for finding products
* **User Accounts**: Registration and login for personalized experiences
* **Order History**: View past orders
* **Product Detail Pages**: Individual pages with detailed info, images, and reviews
* **Improved Error Handling**: Enhanced client- and server-side validation and error messages

---

> *Feel free to open issues or submit pull requests for any bugs or feature requests!*
