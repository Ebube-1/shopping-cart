import React, { useState, useEffect } from 'react';
import { products } from './products';
import './styles/style.css';

const DISCOUNT_CODE = "WEB3BRIDGECOHORTx";
const DISCOUNT_PERCENTAGE = 0.1;

function App() {
    const [cart, setCart] = useState([]);
    const [couponCode, setCouponCode] = useState("");
    const [discount, setDiscount] = useState(0);

    // Load cart from localStorage on first render
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart"));
        if (savedCart && Array.isArray(savedCart)) {
            setCart(savedCart);
        }
    }, []);

    // Save cart to localStorage whenever the cart changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Add product to cart
    const addToCart = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);
        if (existingItem) {
            setCart(
                cart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    // Remove product from cart
    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.id !== productId));
    };

    // Update product quantity in cart
    const updateQuantity = (productId, quantity) => {
        setCart(
            cart.map((item) =>
                item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };

    // Calculate total price
    const calculateTotal = () => {
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        return total - total * discount;
    };

    // Apply coupon code
    const applyCoupon = () => {
        const couponRegex = /^WEB3BRIDGECOHORTx/;
        if (couponRegex.test(couponCode) && couponCode === DISCOUNT_CODE) {
            setDiscount(DISCOUNT_PERCENTAGE);
            alert("Coupon applied successfully! You get a 10% discount.");
        } else {
            alert("Invalid coupon code.");
        }
    };

    // Calculate total number of items (sum of quantities) in the cart
    const totalItemsInCart = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="app">
            <h1>Shopping Cart</h1>
            <div className="container">
                <div className="product-list">
                    <h2>Products</h2>
                    {products.map((product) => (
                        <div key={product.id} className="product">
                            <span>{product.name} - ${product.price}</span>
                            <button onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                    ))}
                </div>

                <div className="cart">
                    <h2>Shopping Cart</h2>
                    <p>Total Items in Cart: <strong>{totalItemsInCart}</strong></p>
                    {cart.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        <ul className="cart-list">
                            {cart.map((item) => (
                                <li key={item.id} className="cart-item">
                                    <span className="cart-item-name">{item.name}</span>
                                    <span className="cart-item-price">${item.price}</span>
                                    <input
                                        type="number"
                                        min="1"
                                        value={item.quantity}
                                        onChange={(e) =>
                                            updateQuantity(item.id, parseInt(e.target.value, 10))
                                        }
                                    />
                                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className="coupon">
                        <input
                            type="text"
                            placeholder="Enter coupon code"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                        />
                        <button onClick={applyCoupon}>Apply Coupon</button>
                    </div>

                    <h3>Total: ${calculateTotal().toFixed(2)}</h3>
                </div>
            </div>
        </div>
    );
}

export default App;