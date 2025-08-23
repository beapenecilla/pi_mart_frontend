import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Scanner from "./components/Scanner";
import Item from "./components/Item";

function App() {
  const [cart, setCart] = useState([]);

  // Add product to cart when scanned
  const handleAddToCart = (product, navigate) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.name === product.name);
      if (existing) {
        return prevCart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    // ✅ Redirect to cart page after adding
    navigate("/");
  };

  // Handle quantity changes from Item component
  const handleQuantityChange = (itemName, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === itemName ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <Router>
      <Header /> {/* Always displayed on all pages */}
      <Routes>
        {/* Wrap Scanner with navigate */}
        <Route path="/Scanner" element={<ScannerWithNav onAddToCart={handleAddToCart} />} />
        <Route
          path="/"
          element={<Item cart={cart} onQuantityChange={handleQuantityChange} />}
        />
      </Routes>
    </Router>
  );
}

// ✅ Wrapper to inject navigate into Scanner
const ScannerWithNav = ({ onAddToCart }) => {
  const navigate = useNavigate();
  return <Scanner onAddToCart={(product) => onAddToCart(product, navigate)} />;
};

export default App;
