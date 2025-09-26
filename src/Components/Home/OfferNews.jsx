import greenWatch from "../../assets/category/watch2.png";

function OfferNews() {
  return (
    <div className="con bg-green text-white xl:h-[300px] md:h-[250px] h-auto rounded-2xl px-8 md:py-0 py-4 512px:my-32 my-20">
      <div className="flex md:flex-row flex-col justify-between items-center md:gap-2 gap-4 h-full">
        <div className="md:w-1/3 sm:w-1/2 w-[80%] flex flex-col gap-2">
          <p className="text-md">30% OFF</p>
          <h1 className="uppercase xl:text-7xl 928px:text-5xl text-3xl font-bold">
            Happy Hours
          </h1>
          <p>10 Jan to 28 Jan</p>
        </div>

        <img
          src={greenWatch}
          alt="greenWatch"
          className=" xl:w-[380px] sm:w-[300px] 420px:w-[250px] w-[200px] drop-shadow-[-10px_10px_12px_rgba(0,0,0,.6)] "
        />

        <div className="md:w-1/3 sm:w-1/2 w-[80%] flex flex-col gap-3">
          <p className="928px:text-xl text-md font-bold">Smart Solo</p>
          <h1 className="uppercase xl:text-5xl 928px:text-4xl text-2xl font-bold">
            Winter Sale
          </h1>
          <p className="928px:text-[16px] text-[12px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            officiis omnis
          </p>
          <div className="w-max bg-white text-green xl:py-2 py-1 px-4 rounded-full hover:cursor-pointer 928px:text-[16px] text-[12px]">
            Shop Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferNews;
