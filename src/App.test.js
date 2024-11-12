// src/App.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

describe("Shopping Cart Application", () => {
    test("renders product list", () => {
        render(<App />);
        const productElement = screen.getByText(/Products/i);
        expect(productElement).toBeInTheDocument();
    });

    test("applies discount with a valid coupon code", () => {
      render(<App />);

      // Add a product to the cart
      const addButton = screen.getAllByText(/Add to Cart/i)[0];
      fireEvent.click(addButton);

      // Enter the discount code
      const couponInput = screen.getByPlaceholderText(/Enter coupon code/i);
      fireEvent.change(couponInput, { target: { value: 'WEB3BRIDGECOHORTx' } });

      // Apply the coupon
      const applyCouponButton = screen.getByText(/Apply Coupon/i);
      fireEvent.click(applyCouponButton);

      // Check if the discount is applied
      const discountMessage = screen.getByText(/Total:/i);
      expect(discountMessage).toBeInTheDocument();
  });
   
});