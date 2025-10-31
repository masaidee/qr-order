import { BrowserRouter, Routes, Route } from "react-router";
import { CartProvider } from "./context/CartContext";

import HomeScreenContainer from "./screen/home/HomeScreenContainer";
import CheckoutPage from "./screen/pages/CheckoutPage";

function App() {
  return (
   <CartProvider>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/menu/:tableId" element={<MenuPage />} /> */}
        <Route path="/" element={<HomeScreenContainer />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
   </CartProvider>

  );
}

export default App;
