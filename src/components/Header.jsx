import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        width: "100%", // full width
        padding: "12px 16px",
        backgroundColor: "#113F67",
        color: "white",
        fontFamily: "'Poppins', sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        boxSizing: "border-box", // ensures padding doesn’t exceed width
      }}
    >
      {/* Menu Button */}
      <div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            whiteSpace: "nowrap",
            background: "#F3F4F6",
            color: "#374151",
            border: "1px solid #D1D5DB",
            padding: "8px 14px",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "600",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          <span style={{ fontSize: "1.2rem" }}>☰</span>
        </button>

        {menuOpen && (
          <div
            style={{
              position: "absolute",
              top: "60px",
              left: "16px",
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
              }}
            >
              🛒 Cart
            </Link>
          </div>
        )}
      </div>

      {/* Title (Centered using flex-grow) */}
      <div
        style={{
          flexGrow: 1,
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(1.2rem, 3vw, 1.6rem)", // responsive size
            margin: "5px 0",
            fontWeight: "600",
            wordWrap: "break-word",
          }}
        >
          🛍️ PiMart
        </h1>
        <p
          style={{
            fontSize: "clamp(0.8rem, 2vw, 0.95rem)", // responsive size
            margin: "0",
            fontWeight: "400",
          }}
        >
          Smart Inventory & Self-Checkout
        </p>
      </div>

      {/* Spacer (keeps symmetry so text stays centered) */}
      <div style={{ width: "72px" }}></div>
    </header>
  );
};

export default Header;
