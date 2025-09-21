import { useEffect, useState } from "react";
import CategoryListShrimmer from "../Shrimmer/CategoryListShrimmer";
import ProductsShrimmer from "../Shrimmer/ProductsShrimmer";

function Product() {
  const [categoryName, setCategoryName] = useState("products");
  const [productsData, setProductsData] = useState(null);
  const [categoryList, setCategoryList] = useState(null);

  //   categories list
  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list")
      .then((res) => res.json())
      .then((data) => setCategoryList(data));
  }, []);

  //all products details
  useEffect(() => {
    fetch(
      `https://dummyjson.com/${
        categoryName === "products"
          ? "products"
          : `products/category/${categoryName}`
      }`
    )
      .then((res) => res.json())
      .then((data) => setProductsData(data.products));
  }, [categoryName]);

  return (
    <div className="con min-h-dvh py-24">
      {/* categories */}
      <div className="flex gap-4 overflow-x-scroll no-scrollbar">
        <div
          className={`capitalize grid place-items-center min-w-[180px] rounded-full  py-2 hover:cursor-pointer font-semibold ${
            categoryName === "products"
              ? "text-primary bg-white border boder-primary"
              : "bg-primary text-white"
          } transition-all duration-150`}
          onClick={() => setCategoryName("products")}
        >
          all
        </div>
        {categoryList ? (
          categoryList.map((el, i) => (
            <div
              className={`capitalize grid place-items-center min-w-[180px] rounded-full  py-2 hover:cursor-pointer font-semibold ${
                categoryName === el
                  ? "text-primary bg-white border boder-primary"
                  : "bg-primary text-white"
              } transition-all duration-150`}
              key={i}
              onClick={() => setCategoryName(el)}
            >
              {el.split("-").join(" ")}
            </div>
          ))
        ) : (
          <>
            <CategoryListShrimmer />
            <CategoryListShrimmer />
            <CategoryListShrimmer />
            <CategoryListShrimmer />
            <CategoryListShrimmer />
            <CategoryListShrimmer />
            <CategoryListShrimmer />
            <CategoryListShrimmer />
            <CategoryListShrimmer />
            <CategoryListShrimmer />
            <CategoryListShrimmer />
          </>
        )}
      </div>

      {/* show products */}
      <div className="mt-12 grid grid-cols-5 gap-4">
        {productsData ? (
          productsData.map((el) => {
            const { id, title, brand, images, price, rating } = el;
            return (
              <div
                className="w-full  flex flex-col justify-between pb-4 rounded-xl overflow-hidden border border-gray-400"
                key={id}
              >
                <div className="bg-gray-200">
                  <img src={images[0]} alt="productImg" />
                </div>

                <div className="mt-4 flex flex-col gap-2 px-2 justify-between">
                  <h1 className="text-xl font-semibold">{title}</h1>
                  <p className="text-lg">{brand}</p>
                  <p className="text-lg">₹{Math.floor(price * 85)}</p>
                  <div className="flex gap-2 items-center">
                    <i class="fa-solid fa-star text-yellow text-xl text-shadow-md/30"></i>
                    <p className="text-lg">{rating}/5</p>
                  </div>
                </div>

                <div className="w-max mt-2 ml-2 px-4 py-2 bg-primary text-white font-semibold text-sm rounded-full hover:cursor-pointer hover:scale-105 duration-200">
                  Add to Cart
                </div>
              </div>
            );
          })
        ) : (
          <>
            <ProductsShrimmer />
            <ProductsShrimmer />
            <ProductsShrimmer />
            <ProductsShrimmer />
            <ProductsShrimmer />
            <ProductsShrimmer />
            <ProductsShrimmer />
            <ProductsShrimmer />
            <ProductsShrimmer />
            <ProductsShrimmer />
            <ProductsShrimmer />
            <ProductsShrimmer />
            <ProductsShrimmer />
            <ProductsShrimmer />
            <ProductsShrimmer />
          </>
        )}
      </div>
    </div>
  );
}
export default Product;
