import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/scanner"); // redirects to scanner page
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "60px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h2 style={{ color: "#000000ff", fontSize: "1.8rem", fontWeight: "600" }}>
        Welcome to 🛍️ PiMart
      </h2>
      <p style={{ color: "#000000ff", fontSize: "1rem", marginBottom: "20px" }}>
        Smart Inventory & Self-Checkout System
      </p>

      <button
        onClick={handleStart}
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          fontSize: "1rem",
          fontWeight: "bold",
          backgroundColor: "#5d5d5dff", // Match Header
          color: "#FAF3E0",
          border: "1px solid #D9CBBE",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#3E2C25")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#5C4033")}
      >
        Start Shopping
      </button>
    </div>
  );
};

export default Home;
