import { BrowserRouter, Routes, Route } from "react-router";
import { CartProvider } from "./context/CartContext";

import HomeScreenContainer from "./screen/home/HomeScreenContainer";

function App() {
  return (
   <CartProvider>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/menu/:tableId" element={<MenuPage />} /> */}
        <Route path="/" element={<HomeScreenContainer />} />
      </Routes>
    </BrowserRouter>
   </CartProvider>

  );
}

export default App;
