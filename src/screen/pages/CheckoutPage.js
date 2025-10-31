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
         {
            position: "top-right",
            autoClose: 2800,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
         }
      );

      // ล้างตะกร้าและ navigate หลัง toast แสดง
      setTimeout(() => {
         clearCart();
         navigate("/");
      }, 3000);
   };


   if (!cart || cart.length === 0)
      return (
         <div style={{ textAlign: "center", marginTop: "50px", fontSize: "1.2rem" }}>
            ไม่มีสินค้าในตะกร้า
         </div>
      );

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
         <h2 style={{ textAlign: "center", color: "#e53935", marginBottom: "20px" }}>
            🛒 สรุปคำสั่งซื้อ
         </h2>

         <div>
            {cart.map((item) => (
               <div
                  key={item.id}
                  style={{
                     display: "flex",
                     justifyContent: "space-between",
                     alignItems: "center",
                     padding: "10px 15px",
                     marginBottom: "10px",
                     backgroundColor: "#fff",
                     borderRadius: "8px",
                     boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
                  }}
               >
                  <span style={{ fontWeight: "500" }}>{item.name} × {item.qty}</span>
                  <span style={{ fontWeight: "bold", color: "#e53935" }}>
                     {item.price * item.qty} บาท
                  </span>
               </div>
            ))}
         </div>

         <p
            style={{
               fontWeight: "bold",
               fontSize: "1.2rem",
               textAlign: "right",
               marginTop: "15px",
            }}
         >
            รวมทั้งหมด: {total} บาท
         </p>

         <div style={{ margin: "30px 0" }}>
            <h3 style={{ marginBottom: "10px" }}>เลือกวิธีชำระเงิน</h3>
            <div style={{ display: "flex", gap: "20px" }}>
               <label
                  style={{
                     flex: 1,
                     padding: "10px",
                     backgroundColor: paymentMethod === "cash" ? "#e53935" : "#fff",
                     color: paymentMethod === "cash" ? "#fff" : "#000",
                     border: "1px solid #ddd",
                     borderRadius: "8px",
                     textAlign: "center",
                     cursor: "pointer",
                     transition: "all 0.2s",
                  }}
               >
                  <input
                     type="radio"
                     value="cash"
                     checked={paymentMethod === "cash"}
                     onChange={() => setPaymentMethod("cash")}
                     style={{ display: "none" }}
                  />
                  เงินสด
               </label>

               <label
                  style={{
                     flex: 1,
                     padding: "10px",
                     backgroundColor: paymentMethod === "credit" ? "#e53935" : "#fff",
                     color: paymentMethod === "credit" ? "#fff" : "#000",
                     border: "1px solid #ddd",
                     borderRadius: "8px",
                     textAlign: "center",
                     cursor: "pointer",
                     transition: "all 0.2s",
                  }}
               >
                  <input
                     type="radio"
                     value="credit"
                     checked={paymentMethod === "credit"}
                     onChange={() => setPaymentMethod("credit")}
                     style={{ display: "none" }}
                  />
                  บัตรเครดิต
               </label>
            </div>
         </div>

         <button
            onClick={handleConfirm}
            style={{
               width: "100%",
               padding: "15px",
               backgroundColor: "#e53935",
               color: "#fff",
               fontWeight: "bold",
               border: "none",
               borderRadius: "8px",
               fontSize: "1rem",
               cursor: "pointer",
               transition: "background-color 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#d32f2f")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#e53935")}
         >
            ยืนยันการสั่งซื้อ
         </button>
         <ToastContainer />
      </div>
   );
}
