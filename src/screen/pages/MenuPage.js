import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import BottomCart from "./components/BottomCart";

export default function MenuPage({ categoryId }) {
   const { addToCart } = useContext(CartContext);

   const allMenus = {
      1: [
         { id: 1, name: "ข้าวผัดกุ้ง", price: 60, img: 'https://plus.unsplash.com/premium_photo-1661265874417-f9a2f1981eda?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMG1lbnV8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000' },
         { id: 2, name: "ข้าวผัดหมู", price: 50, img: 'https://t3.ftcdn.net/jpg/01/31/12/84/360_F_131128415_avZoE8AH3ngCMTLUtoyLdgg9n5Fnamr1.jpg' },
         { id: 9, name: "ข้าวผัดไก่", price: 55, img: 'https://www.shutterstock.com/image-photo/panang-curry-pork-white-bowl-600w-2447691641.jpg' },
         { id: 10, name: "ข้าวผัดรวมมิตร", price: 65, img: 'https://img.freepik.com/free-photo/chicken-green-curry-bowl_1150-23914.jpg?semt=ais_hybrid&w=740&q=80' },
      ],
      2: [
         { id: 3, name: "แกงจืดเต้าหู้หมูสับ", price: 70 },
         { id: 4, name: "ต้มยำกุ้ง", price: 120 },
      ],
      3: [
         { id: 5, name: "ชาเย็น", price: 35 },
         { id: 6, name: "น้ำเปล่า", price: 15 },
      ],
      4: [
         { id: 7, name: "ไอศกรีมวนิลา", price: 45 },
         { id: 8, name: "บัวลอย", price: 40 },
      ],
   };

   const menuItems = allMenus[categoryId] || [];

   return (
      <div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh", paddingBottom: "100px" }}>
         <div
            style={{
               width: "95%",
               maxWidth: "600px",
               margin: "0 auto",
               paddingTop: "20px",
            }}
         >
            {menuItems.map((item) => (
               <div
                  key={item.id}
                  style={{
                     backgroundColor: "#fff",
                     padding: "10px",
                     borderRadius: "12px",
                     marginBottom: "10px",
                     boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                     display: "flex",
                     alignItems: "center",
                     gap: "15px",
                  }}
               >
                  {/* รูปภาพฝั่งซ้าย */}
                  <div style={{ flexShrink: 0, width: 80, height: 80, overflow: "hidden", borderRadius: "10px" }}>
                     {item.img ? (
                        <img
                           src={item.img}
                           alt={item.name}
                           style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                     ) : (
                        <div style={{ width: "100%", height: "100%", backgroundColor: "#eee" }} />
                     )}
                  </div>

                  {/* ข้อมูลชื่อและราคา */}
                  <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                     <span style={{ fontWeight: 500, fontSize: "1.1rem" }}>{item.name}</span>
                     <span style={{ color: "#e53935", fontWeight: "bold" }}>{item.price} บาท</span>
                  </div>

                  {/* ปุ่มเพิ่มตะกร้า */}
                  <button
                     onClick={() => addToCart(item)}
                     style={{
                        padding: "8px 12px",
                        backgroundColor: "#e53935",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontSize: "0.95rem",
                     }}
                  >
                     ➕
                  </button>
               </div>
            ))}

         </div>

         {/* ✅ BottomCart ติดล่างและกว้างเท่ากับ container */}
         <div
            style={{
               position: "fixed",
               bottom: 15,
               left: "50%",
               transform: "translateX(-50%)",
               width: "90%",
               maxWidth: "600px",
               zIndex: 999,
            }}
         >
            <BottomCart />
         </div>
      </div>
   );
}
