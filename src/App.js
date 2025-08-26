import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Scanner from "./components/Scanner";
import Item from "./components/Item";
import Home from "./components/Home";

function App() {
  const [cart, setCart] = useState([]);

  // ✅ Add product to cart when scanned
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
    navigate("/cart");
  };

  // ✅ Handle quantity changes
  const handleQuantityChange = (itemName, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === itemName ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // ✅ Delete item from cart
  const handleDelete = (itemName) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== itemName));
  };

  // ✅ Submit checkout (clear cart)
  const handleSubmit = () => {
    alert("Checkout submitted!");
    setCart([]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* ✅ Home Page */}
        <Route path="/scanner" element={<ScannerWithNav onAddToCart={handleAddToCart} />} />
        <Route
          path="/cart"
          element={
            <Item
              cart={cart}
              onQuantityChange={handleQuantityChange}
              onDelete={handleDelete}   // 👈 pass delete
              onSubmit={handleSubmit}   // 👈 pass submit
            />
          }
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
