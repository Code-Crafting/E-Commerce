function ProductsShrimmer() {
  return (
    <div className="w-full  flex flex-col justify-between pb-4 rounded-xl overflow-hidden border border-gray-400">
      <div className="bg-gray-200 h-[200px]"></div>

      <div className="mt-4 flex flex-col gap-2 px-2 justify-between">
        <div className="bg-gray-300 w-[80%] h-[25px] rounded-lg"></div>
        <div className="bg-gray-300 w-[60%] h-[20px] rounded-lg"></div>
        <div className="bg-gray-300 w-[60%] h-[20px] rounded-lg"></div>
        <div className="bg-gray-300 w-[60%] h-[20px] rounded-lg"></div>
      </div>

      <div className="w-[60px] h-[20px] rounded-lg mt-2 ml-2 bg-gray-300 "></div>
    </div>
  );
}

export default ProductsShrimmer;
