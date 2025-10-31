import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ➕ เพิ่มของลงตะกร้า
  const addToCart = (item) => {
    const exist = cart.find((c) => c.id === item.id);
    if (exist) {
      setCart(
        cart.map((c) =>
          c.id === item.id ? { ...c, qty: c.qty + 1 } : c
        )
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  // ➖ ลดจำนวน หรือเอาออกถ้าเหลือ 0
  const removeFromCart = (id) => {
   console.log('id',id)
    const exist = cart.find((c) => c.id === id);
    if (!exist) return; // ถ้าไม่มีในตะกร้า ไม่ทำอะไร

    if (exist.qty > 1) {
      // ลดจำนวน
      setCart(
        cart.map((c) =>
          c.id === id ? { ...c, qty: c.qty - 1 } : c
        )
      );
    } else {
      // ลบออกจากตะกร้าเลย
      setCart(cart.filter((c) => c.id !== id));
    }
  };

  // ❌ ลบสินค้าทั้งชิ้นออกจากตะกร้า (ไม่ลด qty)
  const deleteItem = (id) => {
    setCart(cart.filter((c) => c.id !== id));
  };

  // 🧹 ล้างตะกร้าทั้งหมด
  const clearCart = () => setCart([]);

  // 💰 ยอดรวมทั้งหมด
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, deleteItem, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
