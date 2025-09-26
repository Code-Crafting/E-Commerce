import { addCommaToINR, convertToINR } from "../../functions";
// import emptycart from "../../assets/emptyCart.gif";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function CartProducts({ itemDetails, setItemsDetails, isDark }) {
  const calculateTotal = (details) => {
    return details.reduce((acc, el) => acc + Number(convertToINR(el.price)), 0);
  };

  return itemDetails.length ? (
    <>
      {itemDetails.map((el) => {
        const { id, title, brand, images, price } = el;
        return (
          <div className="flex justify-between items-center gap-2" key={id}>
            {/* basic details  */}
            <div className="mt-4 flex items-center gap-2 ">
              <img
                src={images}
                alt="img"
                className="512px:w-[80px] w-[50px] bg-gray-200 512px:rounded-2xl rounded-md"
              />
              <div>
                <h1
                  className={`${
                    isDark ? "text-gray-200" : "text-black"
                  } 512px:text-lg text-sm`}
                >
                  {title}
                </h1>
                <p className="text-gray-400 text-sm">{brand}</p>
              </div>
            </div>
            {/* price */}
            <div className="flex 512px:gap-4 gap-1 items-center">
              <h1
                className={`512px:text-xl text-md font-semibold ${
                  isDark ? "text-gray-300" : "text-black"
                }`}
              >
                ₹{addCommaToINR(convertToINR(price))}
              </h1>
              <i
                className="fa-solid fa-trash text-primary hover:cursor-pointer 512px:text-lg text-[12px]"
                onClick={() => {
                  const filteredItems = itemDetails.filter(
                    (el) => el.id !== id
                  );
                  localStorage.setItem(
                    "itemDetails",
                    JSON.stringify(filteredItems)
                  );
                  setItemsDetails(filteredItems);
                }}
              ></i>
            </div>
          </div>
        );
      })}
      <hr className="text-gray-500 my-4" />
      <div className="text-right">
        <h1
          className={`512px:text-2xl text-lg ${
            isDark ? "text-gray-300" : "text-black"
          }`}
        >
          Total -
          <span className="font-semibold pl-2">
            ₹{addCommaToINR(calculateTotal(itemDetails))}
          </span>
        </h1>
      </div>
    </>
  ) : (
    <div className="max-w-4xl mx-auto">
      <DotLottieReact
        src={`${
          isDark
            ? "https://lottie.host/bfe535f1-9ee8-45b7-9aeb-1c72f118b28a/dL04DoLYDD.lottie"
            : "https://lottie.host/a36153b7-adc9-4976-be94-a164f860a6bc/9Xoe3UjzEY.lottie"
        }`}
        loop
        autoplay
      />
    </div>
  );
}
export default CartProducts;
