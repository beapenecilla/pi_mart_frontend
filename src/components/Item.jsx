import React from "react";

const Item = ({ cart, onQuantityChange, onSubmit }) => {
  // Calculate total of all items
  const grandTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>🛒 Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>No items scanned yet.</p>
      ) : (
        <>
          <table
            style={{
              margin: "0 auto",
              borderCollapse: "collapse",
              width: "80%",
              maxWidth: "600px",
            }}
          >
            <thead>
              <tr>
                <th style={{ border: "1px solid #ccc", padding: "8px" }}>Item</th>
                <th style={{ border: "1px solid #ccc", padding: "8px" }}>Category</th>
                <th style={{ border: "1px solid #ccc", padding: "8px" }}>Price</th>
                <th style={{ border: "1px solid #ccc", padding: "8px" }}>Quantity</th>
                <th style={{ border: "1px solid #ccc", padding: "8px" }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td style={{ border: "1px solid #ccc", padding: "8px" }}>{item.name}</td>
                  <td style={{ border: "1px solid #ccc", padding: "8px" }}>{item.category}</td>
                  <td style={{ border: "1px solid #ccc", padding: "8px" }}>₱{item.price}</td>
                  <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}>
                      <button
                        onClick={() => onQuantityChange(item.name, Math.max(1, item.quantity - 1))}
                        style={{
                          padding: "5px 10px",
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                          backgroundColor: "#f0f0f0",
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
                          onQuantityChange(item.name, parseInt(e.target.value) || 1)
                        }
                        style={{ width: "50px", textAlign: "center" }}
                      />
                      <button
                        onClick={() => onQuantityChange(item.name, item.quantity + 1)}
                        style={{
                          padding: "5px 10px",
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                          backgroundColor: "#f0f0f0",
                          cursor: "pointer",
                        }}
                      >
                        ➕
                      </button>
                    </div>
                  </td>
                  <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                    ₱{item.price * item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Display Grand Total */}
          <h3 style={{ marginTop: "15px" }}>Grand Total: ₱{grandTotal}</h3>

          {/* Submit Button */}
          <button
            onClick={onSubmit}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            ✅ Submit
          </button>
        </>
      )}
    </div>
  );
};

export default Item;
