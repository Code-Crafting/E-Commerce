import { useContext } from "react";
import CartProducts from "./CartProducts";
import { Theme } from "../../Contexts/Theme";

function AddToCart({ itemDetails, setItemsDetails }) {
  const [isDark] = useContext(Theme);
  return (
    <div
      className={`min-h-dvh pt-28 pb-10 ${
        isDark ? "bg-primary-dark" : "bg-white"
      }`}
    >
      <div
        className={`border max-w-5xl mx-auto border-gray-500 rounded-2xl px-4 py-4 ${
          isDark ? "bg-blue-light" : ""
        }`}
      >
        {/* content */}
        <div>
          <h1
            className={`${
              isDark ? "text-gray-400" : "text-primary"
            } text-2xl font-semibold`}
          >
            My Cart
          </h1>
          <hr className="text-gray-500 mt-2" />
          <div>
            <CartProducts
              itemDetails={itemDetails}
              setItemsDetails={setItemsDetails}
              isDark={isDark}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddToCart;
