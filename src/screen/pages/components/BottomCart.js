import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import '../styles/BottomCart.css';

export default function BottomCart() {
   const { cart, removeFromCart, clearCart } = useContext(CartContext);
   if (!cart || cart.length === 0) return null;

   const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

   const handleCheckout = () => {
      // ตัวอย่าง: alert แสดงรายการและราคารวม
      let summary = "รายการสั่งซื้อ:\n";
      cart.forEach((item) => {
         summary += `${item.name} × ${item.qty} = ${item.price * item.qty} บาท\n`;
      });
      summary += `รวมทั้งหมด: ${total} บาท`;
      alert(summary);

      // หลังจากสั่งซื้อแล้ว ล้างตะกร้า
      clearCart();
   };

   return (
      <div className="bottom-cart">
         <div className="cart-header">
            <h2>🛒 ตะกร้าของคุณ</h2>
            <p onClick={ () => clearCart()}>ลบทั้งหมด</p>
         </div>
         <div className="cart-items">
            {cart.map((item, index) => (
               <div key={index} className="cart-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                  <span style={{ flex: 1 }}>{item.name} × {item.qty}</span>
                  <span style={{ minWidth: '60px', textAlign: 'right' }}>{item.price * item.qty} บาท</span>
                  <button onClick={() => removeFromCart(item.id)}>❌</button>
               </div>
            ))}
         </div>

         <hr />

         <p className="cart-total">
            รวมทั้งหมด: {total} บาท
         </p>

         <button
            onClick={handleCheckout}
            style={{
               marginTop: "10px",
               width: "100%",
               padding: "10px",
               backgroundColor: "#1976D2",
               color: "#fff",
               border: "none",
               borderRadius: "8px",
               cursor: "pointer",
               fontSize: "1rem"
            }}
         >
            สั่งซื้อเลย
         </button>
      </div>
   );
}
