import React from 'react'
import HomeScreen from './HomeScreen'
import { useNavigate } from "react-router";
const HomeScreenContainer = () => {

   const navigate = useNavigate();
   const categories = [
      { id: 1, name: "อาหารจานเดียว" },
      { id: 2, name: "ต้ม / แกง" },
      { id: 3, name: "เครื่องดื่ม" },
      { id: 4, name: "ของหวาน" },
   ];

   return (
      <HomeScreen navigate={navigate} categories={categories}/>
   )
}

export default HomeScreenContainer