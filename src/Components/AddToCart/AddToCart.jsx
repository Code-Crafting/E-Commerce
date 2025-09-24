import CartProducts from "./CartProducts";

function AddToCart({ itemDetails, setItemsDetails }) {
  return (
    <div className=" min-h-dvh bg-white pt-28">
      <div className=" border max-w-5xl mx-auto border-gray-400 rounded-2xl px-4 py-4">
        {/* content */}
        <div>
          <h1 className="text-primary text-2xl font-semibold">My Cart</h1>
          <hr className="text-gray-400 mt-2" />
          <div>
            <CartProducts
              itemDetails={itemDetails}
              setItemsDetails={setItemsDetails}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddToCart;
