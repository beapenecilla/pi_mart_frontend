import React from "react";
import { useNavigate } from "react-router-dom";

const Item = ({ cart, onQuantityChange, onDelete, onSubmit }) => {
  const navigate = useNavigate();

  // Redirect to scanner page
  const handleScan = () => {
    navigate("/scanner");
  };

  // Calculate total of all items
  const grandTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "20px",
        fontFamily: "'Poppins', sans-serif",
        color: "#000000ff",
        padding: "0 10px",
        boxSizing: "border-box",
      }}
    >
      {/* Header with Scan Button + Title */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginBottom: "15px",
          gap: "12px",
        }}
      >
        <button
          onClick={handleScan}
          style={{
            padding: "8px 16px",
            fontSize: "0.9rem",
            fontWeight: "600",
            backgroundColor: "#34699A",
            color: "#FAF3E0",
            border: "1px solid #D9CBBE",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          + Scan Item
        </button>

        <h2
          style={{
            fontSize: "clamp(1.2rem, 4vw, 1.6rem)",
            fontWeight: "600",
            margin: 0,
            marginRight: "50px",
          }}
        >
          🛒 Shopping Cart
        </h2>
      </div>

      {cart.length === 0 ? (
        <p style={{ color: "#7B6F5A" }}>No items scanned yet.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                marginBottom: "20px",
                backgroundColor: "#FAF3E0",
                border: "1px solid #D9CBBE",
                borderRadius: "10px",
                padding: "12px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                textAlign: "left",
                position: "relative",
              }}
            >
              {/* Delete button inside the item container */}
              <button
                onClick={() => onDelete(item.name)}
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  backgroundColor: "#E74C3C",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  padding: "4px 8px",
                  fontSize: "0.75rem",
                  cursor: "pointer",
                }}
              >
                ✖
              </button>

              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "clamp(10px, 2vw, 14px)",
                }}
              >
                <tbody>
                  <tr>
                    <td style={{ fontWeight: "600", padding: "6px" }}>Item</td>
                    <td style={{ padding: "6px" }}>{item.name}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "600", padding: "6px" }}>
                      Category
                    </td>
                    <td style={{ padding: "6px" }}>{item.category}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "600", padding: "6px" }}>Price</td>
                    <td style={{ padding: "6px" }}>₱{item.price}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "600", padding: "6px" }}>
                      Quantity
                    </td>
                    <td style={{ padding: "6px" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <button
                          onClick={() =>
                            onQuantityChange(
                              item.name,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                          style={{
                            padding: "2px 6px",
                            fontSize: "0.75rem",
                            border: "1px solid #D9CBBE",
                            borderRadius: "4px",
                            backgroundColor: "#EADBC8",
                            cursor: "pointer",
                          }}
                        >
                          ➖
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            onQuantityChange(
                              item.name,
                              parseInt(e.target.value) || 1
                            )
                          }
                          style={{
                            width: "38px",
                            textAlign: "center",
                            border: "1px solid #D9CBBE",
                            borderRadius: "4px",
                            padding: "2px",
                            fontSize: "0.75rem",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                        />
                        <button
                          onClick={() =>
                            onQuantityChange(item.name, item.quantity + 1)
                          }
                          style={{
                            padding: "2px 6px",
                            fontSize: "0.75rem",
                            border: "1px solid #D9CBBE",
                            borderRadius: "4px",
                            backgroundColor: "#58A0C8",
                            cursor: "pointer",
                          }}
                        >
                          ➕
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "600", padding: "6px" }}>Total</td>
                    <td style={{ padding: "6px" }}>
                      ₱{item.price * item.quantity}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}

          {/* Display Grand Total */}
          <h3
            style={{
              marginTop: "20px",
              color: "#000000ff",
              fontSize: "clamp(1rem, 3vw, 1.3rem)",
              fontWeight: "600",
            }}
          >
            Grand Total: ₱{grandTotal}
          </h3>

          {/* Submit Button */}
          <button
            onClick={onSubmit}
            style={{
              marginTop: "20px",
              padding: "12px 24px",
              fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
              fontWeight: "bold",
              backgroundColor: "#34699A",
              color: "#FDF5AA",
              border: "1px solid #000000ff",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
};

export default Item;
