import earphone from "../../assets/category/earphone.png";
import gaming from "../../assets/category/gaming.png";
import macbook from "../../assets/category/macbook.png";
import speaker from "../../assets/category/speaker.png";
import vr from "../../assets/category/vr.png";
import watch from "../../assets/category/watch.png";

function Category() {
  return (
    <div className="con grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-8 mt-12 h-[640px] mb-4">
      {/* Earphone */}
      <div className="relative rounded-2xl flex bg-linear-to-br from-black/90 to-black/70">
        <div className="flex flex-col justify-center pl-6 mt-16">
          <p className="text-gray-400">Enjoy</p>
          <p className="text-2xl text-white font-semibold">With</p>
          <h1 className="text-5xl font-bold text-[#555555]">Earphone</h1>
          <div className="w-max bg-primary text-white py-1 p-6 mt-4 rounded-full hover:cursor-pointer">
            Browse
          </div>
        </div>
        <img
          src={earphone}
          alt="earphone"
          className="absolute right-0 bottom-0 w-[300px]"
        />
      </div>

      {/* Watches */}
      <div className="relative rounded-2xl flex bg-linear-to-br from-yellow/90 to-yellow">
        <div className="flex flex-col justify-center pl-6 mt-16">
          <p className="text-white">Enjoy</p>
          <p className="text-2xl text-white font-semibold">With</p>
          <h1 className="text-5xl font-bold text-lightYellow">Watches</h1>
          <div className="w-max bg-white text-yellow py-1 p-6 mt-4 rounded-full hover:cursor-pointer">
            Browse
          </div>
        </div>
        <img
          src={watch}
          alt="watch"
          className="absolute -right-6 top-1/2 -translate-y-1/2 w-[300px]"
        />
      </div>

      {/* Laptops */}
      <div className="col-span-2 relative rounded-2xl flex bg-linear-to-br from-primary to-primary/70">
        <div className="flex flex-col justify-center pl-6 mt-16">
          <p className="text-white">Enjoy</p>
          <p className="text-2xl text-white font-semibold">With</p>
          <h1 className="text-5xl font-bold text-lightRed">Laptops</h1>
          <div className="w-max bg-white text-primary py-1 p-6 mt-4 rounded-full hover:cursor-pointer">
            Browse
          </div>
        </div>
        <img
          src={macbook}
          alt="mackbook"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[250px]"
        />
      </div>

      {/* Gaming */}
      <div className=" col-span-2 relative rounded-2xl flex bg-linear-to-br from-gray-400 to-gray-100">
        <div className="flex flex-col justify-center pl-6 mt-16">
          <p className="text-white">Enjoy</p>
          <p className="text-2xl text-white font-semibold">With</p>
          <h1 className="text-5xl font-bold text-gray-300">Gaming</h1>
          <div className="w-max bg-primary text-white py-1 px-6 mt-4 rounded-full hover:cursor-pointer">
            Browse
          </div>
        </div>
        <img
          src={gaming}
          alt="gaming"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[250px]"
        />
      </div>

      {/* VR */}
      <div className="relative rounded-2xl flex bg-linear-to-br from-green/90 to-green/90">
        <div className="flex flex-col justify-start pl-6 mt-12">
          <p className="text-white">Enjoy</p>
          <p className="text-2xl text-white font-semibold">With</p>
          <h1 className="text-5xl font-bold text-lightGreen">Earphone</h1>
          <div className="w-max bg-white text-green py-1 p-6 mt-4 rounded-full hover:cursor-pointer z-1">
            Browse
          </div>
        </div>
        <img
          src={vr}
          alt="vr"
          className="absolute right-0 bottom-0 w-[300px]"
        />
      </div>

      {/* Speaker */}
      <div className="relative rounded-2xl flex bg-linear-to-br from-blue to-blue/90">
        <div className="flex flex-col justify-start pl-6 mt-12">
          <p className="text-white">Enjoy</p>
          <p className="text-2xl text-white font-semibold">With</p>
          <h1 className="text-5xl font-bold text-lightBlue">Speaker</h1>
          <div className="w-max bg-white text-blue py-1 p-6 mt-4 rounded-full hover:cursor-pointer z-1">
            Browse
          </div>
        </div>
        <img
          src={speaker}
          alt="speaker"
          className="absolute right-0 bottom-0 w-[250px]"
        />
      </div>
    </div>
  );
}

export default Category;
