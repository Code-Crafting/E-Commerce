import { Route, Routes } from "react-router";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product/Porduct";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
