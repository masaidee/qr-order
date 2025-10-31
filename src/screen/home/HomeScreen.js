import React from "react";
import { useNavigate } from "react-router";
import Categories from "./components/Categories";
import TopBar from "./components/Topbar";
import "./styles/HomeScreen.css";

export default function HomeScreen({ categories }) {
   const navigate = useNavigate();

   return (
      <div className="home-container">
         {/* TopBar */}
         <TopBar title="โคตรกระเพรา" />

         {/* Banner */}
         <div className="banner">
            <img
               src="https://file.aimcontent.co/BrandAge/images/content/F92CB8D-5A9F083-78873CC.jpg"
               alt="ร้านอาหาร"
            />
         </div>

         {/* Title */}
         <h1 className="home-title">ประเภทอาหาร/เครื่องดื่ม</h1>

         {/* Categories */}
         <Categories navigate={navigate} categories={categories} />
      </div>
   );
}
