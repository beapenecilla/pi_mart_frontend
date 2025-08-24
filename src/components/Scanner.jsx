import React, { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";

const Scanner = ({ onAddToCart }) => {
  const videoRef = useRef(null);
  const [product, setProduct] = useState(null);
  const [isScanning, setIsScanning] = useState(false); 
  const [controls, setControls] = useState(null);

  // Fake database (replace later with API or DB)
  const mockDatabase = {
    "12345": { name: "Coca-Cola", category: "Beverage", price: 25 },
    "67890": { name: "Oreo", category: "Snacks", price: 15 },
    "11111": { name: "Lays", category: "Snacks", price: 20 }
  };

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    if (isScanning) {
      const c = codeReader.decodeFromVideoDevice(
        null,
        videoRef.current,
        (result, err) => {
          if (result) {
            const barcode = result.getText();
            const foundProduct = mockDatabase[barcode] || {
              name: "Unknown Product",
              category: "N/A",
              price: 0,
            };
            setProduct(foundProduct);
          }
        }
      );
      setControls(c);
    } else {
      if (controls && typeof controls.stop === "function") {
        controls.stop();
      }
    }

    return () => {
      if (controls && typeof controls.stop === "function") {
        controls.stop();
      }
    };
  }, [isScanning]);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "20px",
        fontFamily: "'Poppins', sans-serif", // ✅ Same font as Home.jsx
      }}
    >
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "600",
          marginBottom: "15px",
        }}
      >
        📷 Scan Product
      </h2>

      <button
        onClick={() => setIsScanning(!isScanning)}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
          borderRadius: "8px",
          background: isScanning ? "#393939ff" : "#4e3c07ff",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "500",
          transition: "0.3s",
        }}
      >
        {isScanning ? "Stop Camera" : "Start Camera"}
      </button>

      {/* ✅ Centered Video */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <video
          ref={videoRef}
          style={{
            width: "100%",
            maxWidth: "400px",
            border: "2px solid #ccc",
            borderRadius: "12px",
            display: isScanning ? "block" : "none",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        />
      </div>

      {product && (
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "20px",
            marginTop: "20px",
            maxWidth: "320px",
            marginLeft: "auto",
            marginRight: "auto",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            background: "#fff",
          }}
        >
          <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>
            {product.name}
          </h3>
          <p style={{ margin: "5px 0", fontSize: "16px", color: "#555" }}>
            Category: {product.category}
          </p>
          <p style={{ margin: "5px 0", fontSize: "18px", fontWeight: "600" }}>
            ₱{product.price}
          </p>
          <button
            onClick={() => onAddToCart(product)}
            style={{
              padding: "10px 15px",
              borderRadius: "8px",
              background: "#264653",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: "500",
              transition: "0.3s",
            }}
          >
            Add to Cart 🛒
          </button>
        </div>
      )}
    </div>
  );
};

export default Scanner;
