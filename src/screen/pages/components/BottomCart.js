import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import '../styles/BottomCart.css';

export default function BottomCart() {
   const { cart, removeFromCart } = useContext(CartContext);
   if (!cart || cart.length === 0) return null;

   // คำนวณราคารวมทั้งหมด
   const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

   return (
      <div className="bottom-cart">
         <h2>🛒 ตะกร้าของคุณ</h2>

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
      </div>
   );
}
