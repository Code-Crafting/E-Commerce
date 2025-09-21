import greenWatch from "../../assets/category/watch2.png";

function OfferNews() {
  return (
    <div className="con bg-green text-white h-[300px] rounded-2xl px-8 relative mt-32">
      <div className="flex justify-between items-center gap-2 h-full  place-items-center">
        <div className="w-1/3 flex flex-col gap-2">
          <p className="text-md">30% OFF</p>
          <h1 className="uppercase text-7xl font-bold">Happy Hours</h1>
          <p>10 Jan to 28 Jan</p>
        </div>

        <img
          src={greenWatch}
          alt="greenWatch"
          className="absolute w-[380px] left-1/2 -translate-x-1/2 drop-shadow-[-10px_10px_12px_rgba(0,0,0,.6)] "
        />

        <div className="w-1/3 flex flex-col gap-3">
          <p className="text-xl font-bold">Smart Solo</p>
          <h1 className="uppercase text-5xl font-bold">Winter Sale</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            officiis omnis
          </p>
          <div className="w-max bg-white text-green py-2 px-4 rounded-full hover:cursor-pointer">
            Shop Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferNews;
