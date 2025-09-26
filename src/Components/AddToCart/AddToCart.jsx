import { useContext } from "react";
import CartProducts from "./CartProducts";
import { Theme } from "../../Contexts/Theme";

function AddToCart({ itemDetails, setItemsDetails }) {
  const [isDark] = useContext(Theme);
  return (
    <div
      className={`min-h-dvh pt-28 pb-10 412px:px-0 px-2 ${
        isDark ? "bg-primary-dark" : "bg-white"
      }`}
    >
      <div
        className={`border max-w-5xl mx-auto border-gray-500 412px:rounded-2xl rounded-lg px-4 py-4 ${
          isDark ? "bg-blue-light" : ""
        }`}
      >
        {/* content */}
        <div>
          <h1
            className={`${
              isDark ? "text-gray-400" : "text-primary"
            } 412px:text-2xl text-xl font-semibold`}
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
