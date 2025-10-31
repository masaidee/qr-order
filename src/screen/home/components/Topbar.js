import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import '../styles/Topbar.css'

export default function TopBar({ title }) {
   const menuItems = [
      { label: "หน้าหลัก", onClick: () => alert("ไปหน้าหลัก") },
      { label: "ติดต่อเรา", onClick: () => alert("ติดต่อเรา") },
      { label: "เกี่ยวกับ", onClick: () => alert("เกี่ยวกับ") },
   ];

   const hamburgerWidth = 50; // กำหนดขนาดจริงของ HamburgerMenu

   return (
      <div className="topbar">
         <div style={{ width: 50 }}>
            <HamburgerMenu items={menuItems} title={title} />
         </div>

         <h3 className="topbar-title">{title}</h3>

         <div className="topbar-spacer" />
      </div>
   );
}
