import { Route, Routes } from "react-router";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product/Porduct";
import AddToCart from "./Components/AddToCart/AddToCart";
import { useState } from "react";
import { Bounce, ToastContainer } from "react-toastify";
import { createPortal } from "react-dom";

function App() {
  const [itemDetails, setItemsDetails] = useState(
    JSON.parse(localStorage.getItem("itemDetails")) || []
  );
  localStorage.setItem("itemDetails", JSON.stringify(itemDetails));

  return (
    <div className="">
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
    </div>
  );
}

export default App;
