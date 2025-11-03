import React, { useState } from "react";

export default function HamburgerMenu({ items = [], title}) {
  const [open, setOpen] = useState(false);
  
return (
   <>
      {/* ปุ่ม Hamburger */}
      <button
         onClick={() => setOpen(!open)}
         style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "25px",
            height: "20px",
            padding: 0,
         }}
      >
         <span style={{ height: "3px", background: "#fff", borderRadius: "2px" }}></span>
         <span style={{ height: "3px", background: "#fff", borderRadius: "2px" }}></span>
         <span style={{ height: "3px", background: "#fff", borderRadius: "2px" }}></span>
      </button>

      {/* Overlay */}
      <div
         onClick={() => setOpen(false)}
         style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: open ? "rgba(0,0,0,0.3)" : "transparent",
            transition: "background-color 0.3s ease",
            pointerEvents: open ? "auto" : "none",
            zIndex: 998,
         }}
      />

      {/* Side Menu */}
      <div
         style={{
            position: "fixed",
            top: 0,
            left: open ? 0 : "-1000px",
            width: "30%",
            height: "100%",
            background: "#fff",
            boxShadow: "2px 0 8px rgba(0,0,0,0.15)",
            padding: "20px",
            transition: "left 0.3s ease",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
         }}
      >
         {/* Store Icon and Title */}
<div style={{ 
   display: 'flex',          // ทำให้ container เป็น flex
   justifyContent: 'center', // กึ่งกลางแนวนอน
   alignItems: 'center',     // กึ่งกลางแนวตั้ง
   marginBottom: '20px',
   gap: '10px'               // เว้นระยะระหว่างรูปกับข้อความ
}}>
   <img 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPRiWgM2iHkJpNb3HfNYrmJIJ7mYEqXlcyw&s" 
      alt="icon" 
      style={{
         width: '40px',
         height: '40px',
         borderRadius: '50%',  // ถ้าอยากให้เป็นวงกลม
         objectFit: 'cover',   // ครอบรูปให้เต็มกล่อง
      }}
   />
   <h3 style={{ color: "#000", margin: 0 }}>{title}</h3>
</div>

          
         {items.map((item, index) => (
            <div
               key={index}
               style={{
                  padding: "10px 0",
                  borderBottom: index !== items.length - 1 ? "1px solid #eee" : "none",
                  cursor: "pointer",
                  color: "#000",
               }}
               onClick={() => {
                  item.onClick && item.onClick();
                  setOpen(false);
               }}
            >
               {item.label}
            </div>
         ))}
      </div>
   </>
);
}
