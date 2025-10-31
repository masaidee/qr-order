import React, { useState } from "react";
import MenuPage from "../../pages/MenuPage";

export default function Categories({ categories }) {
   const [selectedCategory, setSelectedCategory] = useState(1);

   return (
      <div style={{ width: "100%", }}>
         <div
            style={{
               display: "flex",
               flexDirection: "row",
               gap: "15px",
               overflowX: "auto",       // เปิด scroll แนวนอน
               padding: "10px 0",       // ระยะด้านบน/ล่าง
               scrollbarWidth: "thin",  // สำหรับ Firefox
            }}
         >
            {categories.map((cat) => (
               <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                     flex: "0 0 auto",      // ให้ปุ่มไม่ยืดตาม container
                     padding: "10px 20px",
                     fontSize: "1.2rem",
                     borderRadius: "12px",
                     border: "2px solid #a3d9a5",
                     backgroundColor: "#fff",
                     cursor: "pointer",
                     whiteSpace: "nowrap",  // ป้องกันข้อความขึ้นบรรทัดใหม่
                  }}
               >
                  {cat.name}
               </button>
            ))}
         </div>


         {selectedCategory && <MenuPage categoryId={selectedCategory} />}
      </div>
   );
}
