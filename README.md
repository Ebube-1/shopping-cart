# Shopping Cart Application

This is a simple shopping cart application built with React.js, designed to allow users to browse products, add items to a shopping cart, manage quantities, apply a discount coupon, and view the total cost. The cart persists in `localStorage`, so items remain in the cart even after page refreshes.

## Features

- Display a list of 10 products, each with a name and price.
- Add products to the cart.
- Update item quantity in the cart.
- Remove items from the cart.
- View the total number of items and the total cost of the cart.
- Apply a discount code (`WEB3BRIDGECOHORTx`) for a 10% discount on the total price.
- Cart persists on page refresh using `localStorage`.

## Technologies Used

- React.js
- JavaScript (ES6)
- CSS for styling
- `localStorage` for cart persistence

## Getting Started

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Ebube-1/shopping-cart.git
   cd shopping-cart-app

2. **Install dependencies**:   
npm install

3. **Run the application**:
npm start

- The application should open at http://localhost:3000 on your browser.

### Usage

-	Browse the product list on the left.
-	Click Add to Cart to add an item to the shopping cart.
-	In the Shopping Cart section:
	-	Increase or decrease the quantity of each item by changing the number in the quantity field.
	-	Remove an item by clicking the Remove button.
	-	Apply a discount code by entering WEB3BRIDGECOHORTx and clicking Apply Coupon for a 10% discount.
-	View the total cost and item count at the bottom of the cart.

### Key Functionalities

-	Add to Cart: Adds an item to the cart or updates its quantity if it’s already in the cart.
-	Remove from Cart: Removes an item from the cart based on its ID.
-	Update Quantity: Allows users to adjust the quantity of items in the cart.
-	Apply Coupon: Validates and applies a discount to the total if the correct code is entered.
-	Persist Cart in localStorage: Saves the cart to localStorage on change and loads it on page load.

### Discount Code

- The application includes a discount feature where users can enter **WEB3BRIDGECOHORTx** as a coupon code to receive a 10% discount on their cart total. This discount is applied only once and validated using a regular expression.



