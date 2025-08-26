import React, { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";

const Scanner = ({ onAddToCart }) => {
  const videoRef = useRef(null);
  const [product, setProduct] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [controls, setControls] = useState(null);
  const [scanningStatus, setScanningStatus] = useState(""); // 👈 New state

  // Fake database (replace later with API or DB)
  const mockDatabase = {
    "12345": { name: "Coca-Cola", category: "Beverage", price: 25 },
    "67890": { name: "Oreo", category: "Snacks", price: 15 },
    "11111": { name: "Lays", category: "Snacks", price: 20 }
  };

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    if (isScanning) {
      setScanningStatus("scanning"); // 👈 Show scanning status
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

            // 👇 Show success animation before popup
            setScanningStatus("success");
            setTimeout(() => setScanningStatus("done"), 800);
          }
        }
      );
      setControls(c);
    } else {
      if (controls && typeof controls.stop === "function") {
        controls.stop();
      }
      setScanningStatus(""); // Reset when camera stops
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
        fontFamily: "'Poppins', sans-serif",
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
          background: isScanning ? "#34699A" : "#58A0C8",
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

      {/* ✅ Camera with scanning overlay */}
      <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
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

        {/* 🔴 Scanning animation */}
        {isScanning && scanningStatus === "scanning" && (
          <div
            style={{
              position: "absolute",
              top: "10%",
              width: "90%",
              height: "4px",
              background: "red",
              animation: "scanline 2s linear infinite",
              borderRadius: "2px",
            }}
          />
        )}

        {/* ✅ Success flash */}
        {scanningStatus === "success" && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 255, 0, 0.4)",
              borderRadius: "12px",
              animation: "flash 0.6s ease-out",
            }}
          />
        )}
      </div>

      {/* ✅ Product popup after scan */}
      {product && scanningStatus === "done" && (
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
            animation: "fadeIn 0.5s ease-in-out",
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
              background: "#34699A",
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

      {/* 🔑 Animations */}
      <style>
        {`
          @keyframes scanline {
            0% { top: 10%; }
            50% { top: 80%; }
            100% { top: 10%; }
          }
          @keyframes flash {
            from { opacity: 1; }
            to { opacity: 0; }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default Scanner;
