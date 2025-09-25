import { Route, Routes } from "react-router";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product/Porduct";
import AddToCart from "./Components/AddToCart/AddToCart";
import { useContext, useState } from "react";
import { Theme } from "./Contexts/Theme";

function App() {
  // dark mode
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark")) || false
  );
  localStorage.setItem("isDark", JSON.stringify(isDark));

  // specific item details
  const [itemDetails, setItemsDetails] = useState(
    JSON.parse(localStorage.getItem("itemDetails")) || []
  );
  localStorage.setItem("itemDetails", JSON.stringify(itemDetails));

  return (
    <Theme.Provider value={[isDark, setIsDark]}>
      <Navbar cartValue={itemDetails.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <Product
              setItemsDetails={setItemsDetails}
              itemDetails={itemDetails}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <AddToCart
              itemDetails={itemDetails}
              setItemsDetails={setItemsDetails}
            />
          }
        />
      </Routes>
      <Footer />
    </Theme.Provider>
  );
}

export default App;
