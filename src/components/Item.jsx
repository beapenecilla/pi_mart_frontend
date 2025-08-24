import React from "react";

const Item = ({ cart, onQuantityChange, onSubmit }) => {
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
      }}
    >
      <h2 style={{ fontSize: "1.6rem", fontWeight: "600", marginBottom: "15px" }}>
        🛒 Shopping Cart
      </h2>
      {cart.length === 0 ? (
        <p style={{ color: "#7B6F5A" }}>No items scanned yet.</p>
      ) : (
        <>
          <table
            style={{
              margin: "0 auto",
              borderCollapse: "collapse",
              width: "80%",
              maxWidth: "700px",
              backgroundColor: "#FAF3E0",
              border: "1px solid #D9CBBE",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <thead style={{ backgroundColor: "#5C4033", color: "#FAF3E0" }}>
              <tr>
                <th style={{ padding: "10px" }}>Item</th>
                <th style={{ padding: "10px" }}>Category</th>
                <th style={{ padding: "10px" }}>Price</th>
                <th style={{ padding: "10px" }}>Quantity</th>
                <th style={{ padding: "10px" }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr
                  key={index}
                  style={{
                    borderBottom: "1px solid #000000ff",
                  }}
                >
                  <td style={{ padding: "10px" }}>{item.name}</td>
                  <td style={{ padding: "10px" }}>{item.category}</td>
                  <td style={{ padding: "10px" }}>₱{item.price}</td>
                  <td style={{ padding: "10px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "5px",
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
                          padding: "5px 10px",
                          border: "1px solid #D9CBBE",
                          borderRadius: "6px",
                          backgroundColor: "#EADBC8",
                          cursor: "pointer",
                          transition: "0.3s",
                        }}
                        onMouseOver={(e) =>
                          (e.target.style.backgroundColor = "#D9CBBE")
                        }
                        onMouseOut={(e) =>
                          (e.target.style.backgroundColor = "#EADBC8")
                        }
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
                          width: "50px",
                          textAlign: "center",
                          border: "1px solid #D9CBBE",
                          borderRadius: "4px",
                          padding: "5px",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      />
                      <button
                        onClick={() =>
                          onQuantityChange(item.name, item.quantity + 1)
                        }
                        style={{
                          padding: "5px 10px",
                          border: "1px solid #D9CBBE",
                          borderRadius: "6px",
                          backgroundColor: "#EADBC8",
                          cursor: "pointer",
                          transition: "0.3s",
                        }}
                        onMouseOver={(e) =>
                          (e.target.style.backgroundColor = "#D9CBBE")
                        }
                        onMouseOut={(e) =>
                          (e.target.style.backgroundColor = "#EADBC8")
                        }
                      >
                        ➕
                      </button>
                    </div>
                  </td>
                  <td style={{ padding: "10px" }}>
                    ₱{item.price * item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Display Grand Total */}
          <h3
            style={{
              marginTop: "20px",
              color: "#000000ff",
              fontSize: "1.3rem",
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
              fontSize: "1rem",
              fontWeight: "bold",
              backgroundColor: "#000000ff",
              color: "#FAF3E0",
              border: "1px solid #000000ff",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = "#3E2C25")
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = "#5C4033")
            }
          >
           Submit
          </button>
        </>
      )}
    </div>
  );
};

export default Item;
