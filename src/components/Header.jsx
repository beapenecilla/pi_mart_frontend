import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        padding: "12px 16px",
        backgroundColor: "#000000ff", // neutral gray tone
        color: "white",
        borderRadius: "8px",
        marginBottom: "20px",
        position: "relative",
        fontFamily: "'Poppins', sans-serif",
        display: "flex",
        alignItems: "center", // aligns contents vertically center
        justifyContent: "center", // keeps title centered
      }}
    >
      {/* Dropdown Button (Left Corner but vertically centered) */}
      <div
        style={{
          position: "absolute",
          left: "16px",
          top: "50%",
          transform: "translateY(-50%)", // centers button shape vertically
        }}
      >
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "#F3F4F6", // light gray
            color: "#374151", // dark gray text
            border: "1px solid #D1D5DB",
            padding: "8px 14px",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "600",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          ☰ Menu
        </button>

        {menuOpen && (
          <div
            style={{
              position: "absolute",
              top: "50px",
              left: "0",
              backgroundColor: "#F3F4F6",
              border: "1px solid #D1D5DB",
              borderRadius: "6px",
              boxShadow: "0px 3px 8px rgba(0,0,0,0.1)",
              zIndex: 10,
              minWidth: "140px",
            }}
          >
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "10px",
                textDecoration: "none",
                color: "#374151",
                fontWeight: "500",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              🏠 Home
            </Link>
            <Link
              to="/scanner"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "10px",
                textDecoration: "none",
                color: "#374151",
                fontWeight: "500",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              📷 Scanner
            </Link>
            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "10px",
                textDecoration: "none",
                color: "#374151",
                fontWeight: "500",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              🛒 Cart
            </Link>
          </div>
        )}
      </div>

      {/* Title (Centered) */}
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "1.6rem", margin: "5px 0", fontWeight: "600" }}>
          🛍️ PiMart
        </h1>
        <p style={{ fontSize: "0.95rem", margin: "0", fontWeight: "400" }}>
          Smart Inventory & Self-Checkout
        </p>
      </div>
    </header>
  );
};

export default Header;
