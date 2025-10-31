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
          <div key={index} className="cart-item">
            <span>{item.name} × {item.qty}</span>
            <span>{item.price * item.qty} บาท</span>
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
