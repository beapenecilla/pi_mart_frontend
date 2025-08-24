// Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/scanner"); // redirects to scanner page
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Welcome to 🛍️ PiMart</h2>
      <p>Smart Inventory & Self-Checkout System</p>

      <button
        onClick={handleStart}
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          fontSize: "1rem",
          fontWeight: "bold",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Start Shopping
      </button>
    </div>
  );
};

export default Home;
