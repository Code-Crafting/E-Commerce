import { convertToINR } from "../../functions";
// import emptycart from "../../assets/emptyCart.gif";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function CartProducts({ itemDetails, setItemsDetails }) {
  const calculateTotal = (details) => {
    return details.reduce((acc, el) => acc + Number(convertToINR(el.price)), 0);
  };
  return itemDetails.length ? (
    <>
      {itemDetails.map((el) => {
        const { id, title, brand, images, price } = el;
        return (
          <div className="flex justify-between items-center" key={id}>
            {/* basic details  */}
            <div className="mt-4 flex items-center gap-2 ">
              <img
                src={images}
                alt="img"
                className="w-[80px] bg-gray-200 rounded-2xl"
              />
              <div>
                <h1 className="text-black text-lg">{title}</h1>
                <p className="text-gray-400 text-sm">{brand}</p>
              </div>
            </div>
            {/* price */}
            <div className="flex gap-4 items-center">
              <h1 className="text-xl font-semibold">₹{convertToINR(price)}</h1>
              <i
                className="fa-solid fa-trash text-primary hover:cursor-pointer"
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
      <hr className="text-gray-400 my-4" />
      <div className="text-right">
        <h1 className="text-2xl">
          Total -
          <span className="font-semibold pl-2">
            ₹{calculateTotal(itemDetails)}
          </span>
        </h1>
      </div>
    </>
  ) : (
    <div className="w-4xl mx-auto">
      <DotLottieReact
        src="https://lottie.host/a36153b7-adc9-4976-be94-a164f860a6bc/9Xoe3UjzEY.lottie"
        loop
        autoplay
      />
    </div>
  );
}
export default CartProducts;
