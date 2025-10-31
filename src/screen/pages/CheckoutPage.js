// src/pages/CheckoutPage.js
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CheckoutPage() {
  const { cart, total, clearCart } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const navigate = useNavigate();

  const handleConfirm = () => {
    toast.success(
      `สั่งซื้อเรียบร้อย!\nชำระด้วย: ${paymentMethod === "cash" ? "เงินสด" : "บัตรเครดิต"}\nรวมทั้งหมด: ${total} บาท`,
      { position: "top-right", autoClose: 2800 }
    );

    setTimeout(() => {
      clearCart();
      navigate("/");
    }, 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  if (!cart || cart.length === 0)
    return (
      <div style={{ textAlign: "center", marginTop: "50px", fontSize: "1.2rem" }}>
        ไม่มีสินค้าในตะกร้า
      </div>
    );

  const now = new Date();
  const formattedDate = now.toLocaleString();

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "30px auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#e53935", marginBottom: "20px" }}>🛒 สรุปคำสั่งซื้อ</h2>

      {/* Receipt */}
      <div id="printableArea" style={{ padding: "15px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.05)" }}>
        <div style={{ textAlign: "center", marginBottom: "15px" }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPRiWgM2iHkJpNb3HfNYrmJIJ7mYEqXlcyw&s" alt="Logo" style={{ marginBottom: "5px" }} />
          <h3>ร้านอาหารโคตรกระเพรา</h3>
          <small>{formattedDate}</small>
        </div>

        <hr />

        {cart.map((item) => (
          <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
            <span>{item.name} × {item.qty}</span>
            <span>{item.price * item.qty} บาท</span>
          </div>
        ))}

        <hr />

        <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: "1.1rem", marginTop: "10px" }}>
          <span>รวมทั้งหมด</span>
          <span>{total} บาท</span>
        </div>

        <div style={{ marginTop: "10px" }}>
          <span>วิธีชำระเงิน: {paymentMethod === "cash" ? "เงินสด" : "บัตรเครดิต"}</span>
        </div>

        <p style={{ textAlign: "center", marginTop: "15px", fontSize: "0.9rem", color: "#777" }}>ขอบคุณที่ใช้บริการ!</p>
      </div>

      {/* Payment Method */}
      <div style={{ margin: "30px 0", display: "flex", gap: "20px" }}>
        <label style={{ flex: 1, padding: "10px", backgroundColor: paymentMethod === "cash" ? "#e53935" : "#fff", color: paymentMethod === "cash" ? "#fff" : "#000", border: "1px solid #ddd", borderRadius: "8px", textAlign: "center", cursor: "pointer" }}>
          <input type="radio" value="cash" checked={paymentMethod === "cash"} onChange={() => setPaymentMethod("cash")} style={{ display: "none" }} />
          เงินสด
        </label>

        <label style={{ flex: 1, padding: "10px", backgroundColor: paymentMethod === "credit" ? "#e53935" : "#fff", color: paymentMethod === "credit" ? "#fff" : "#000", border: "1px solid #ddd", borderRadius: "8px", textAlign: "center", cursor: "pointer" }}>
          <input type="radio" value="credit" checked={paymentMethod === "credit"} onChange={() => setPaymentMethod("credit")} style={{ display: "none" }} />
          บัตรเครดิต
        </label>
      </div>

      {/* Buttons */}
      <button onClick={handleConfirm} style={{ width: "100%", padding: "15px", backgroundColor: "#e53935", color: "#fff", fontWeight: "bold", border: "none", borderRadius: "8px", fontSize: "1rem", cursor: "pointer", marginBottom: "10px" }}>
        ยืนยันการสั่งซื้อ
      </button>

      <button onClick={handlePrint} style={{ width: "100%", padding: "15px", backgroundColor: "#1976D2", color: "#fff", fontWeight: "bold", border: "none", borderRadius: "8px", fontSize: "1rem", cursor: "pointer" }}>
        พิมพ์ใบสั่งซื้อ
      </button>

      <ToastContainer />

      <style>
        {`
          @media print {
            body * { visibility: hidden; }
            #printableArea, #printableArea * { visibility: visible; }
            #printableArea { position: absolute; left: 0; top: 0; width: 100%; }
          }
        `}
      </style>
    </div>
  );
}
