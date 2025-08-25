import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        padding: "12px 16px",
        backgroundColor: "#000000ff",
        color: "white",
        borderRadius: "8px",
        marginBottom: "20px",
        fontFamily: "'Poppins', sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", // ensures spacing between menu and title
        position: "relative",
      }}
    >
      {/* Menu Button */}
      <div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "flex",           // keeps icon + text in a row
            alignItems: "center",      // vertical alignment
            gap: "6px",                // space between ☰ and "Menu"
            whiteSpace: "nowrap",      // prevents line break
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
          <span>Menu</span>
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
            fontSize: "1.6rem",
            margin: "5px 0",
            fontWeight: "600",
            wordWrap: "break-word",
          }}
        >
          🛍️ PiMart
        </h1>
        <p
          style={{
            fontSize: "0.95rem",
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
