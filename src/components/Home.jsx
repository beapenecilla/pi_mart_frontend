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
        marginTop: "10vh", // scales with screen height
        fontFamily: "'Poppins', sans-serif",
        padding: "0 16px", // padding for small screens
      }}
    >
      <h2
        style={{
          color: "#000000ff",
          fontSize: "clamp(1.4rem, 4vw, 1.8rem)", // responsive font size
          fontWeight: "600",
          marginBottom: "12px",
        }}
      >
        Welcome to 🛍️ PiMart
      </h2>
      <p
        style={{
          color: "#000000ff",
          fontSize: "clamp(0.9rem, 2.5vw, 1rem)", // responsive font size
          marginBottom: "20px",
          maxWidth: "500px", // keeps text from stretching on large screens
          marginInline: "auto",
        }}
      >
        Smart Inventory & Self-Checkout System
      </p>

      <button
        onClick={handleStart}
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          fontSize: "clamp(0.9rem, 2.5vw, 1rem)", // adjusts on smaller screens
          fontWeight: "bold",
          backgroundColor: "#34699A",
          color: "#FAF3E0",
          border: "1px solid #D9CBBE",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "0.3s",
          width: "clamp(150px, 60%, 250px)", // button scales with screen width
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#34699A")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#58A0C8")}
      >
        Start Shopping
      </button>
    </div>
  );
};

export default Home;
