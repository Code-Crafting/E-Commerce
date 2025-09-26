import earphone from "../../assets/category/earphone.png";
import gaming from "../../assets/category/gaming.png";
import macbook from "../../assets/category/macbook.png";
import speaker from "../../assets/category/speaker.png";
import vr from "../../assets/category/vr.png";
import watch from "../../assets/category/watch.png";

function Category() {
  return (
    <div className="con grid lg:grid-cols-4 sm:grid-cols-4 grid-rows-2 gap-x-4 gap-y-8 mt-12 mb-4">
      {/* Earphone */}
      <div className="sm:h-[320px] 420px:h-[250px] h-[200px]  relative rounded-2xl flex bg-linear-to-br from-black/90 to-black/70 lg:col-span-1 col-span-2">
        <div className="flex flex-col justify-center pl-6 420px:mt-16 mt-4">
          <p className="text-gray-400 sm:text-[16px] text-[12px]">Enjoy</p>
          <p className="sm:text-2xl text-xl text-white font-semibold">With</p>
          <h1 className="sm:text-5xl text-4xl font-bold text-[#555555]">
            Earphone
          </h1>
          <div className="w-max bg-primary text-white py-1 p-6 mt-4 rounded-full hover:cursor-pointer sm:text-[16px] text-[12px]">
            Browse
          </div>
        </div>
        <img
          src={earphone}
          alt="earphone"
          className="absolute right-0 bottom-0 xl:w-[300px] sm:w-[250px] 420px:w-[220px] w-[180px]"
        />
      </div>

      {/* Watches */}
      <div className="sm:h-[320px] 420px:h-[250px] h-[200px]  relative rounded-2xl flex bg-linear-to-br from-yellow/90 to-yellow lg:col-span-1 col-span-2 overflow-hidden">
        <div className="flex flex-col justify-center pl-6 420px:mt-16 mt-4">
          <p className="text-white sm:text-[16px] text-[12px]">Enjoy</p>
          <p className="sm:text-2xl text-xl text-white font-semibold">With</p>
          <h1 className="sm:text-5xl text-4xl font-bold text-lightYellow">
            Watches
          </h1>
          <div className="w-max bg-white text-yellow py-1 p-6 mt-4 rounded-full hover:cursor-pointer sm:text-[16px] text-[12px]">
            Browse
          </div>
        </div>
        <img
          src={watch}
          alt="watch"
          className="absolute -right-6 top-1/2 -translate-y-1/2 sm:w-[300px] 420px:w-[250px] w-[220px]"
        />
      </div>

      {/* Laptops */}
      <div className="sm:h-[320px] 420px:h-[250px] h-[200px]   relative rounded-2xl flex bg-linear-to-br from-primary to-primary/70 lg:col-span-2  col-span-2">
        <div className="flex flex-col justify-center pl-6 420px:mt-16 mt-4">
          <p className="text-white sm:text-[16px] text-[12px]">Enjoy</p>
          <p className="sm:text-2xl text-xl text-white font-semibold">With</p>
          <h1 className="sm:text-5xl text-4xl font-bold text-lightRed">
            Laptops
          </h1>
          <div className="w-max bg-white text-primary py-1 p-6 mt-4 rounded-full hover:cursor-pointer sm:text-[16px] text-[12px]">
            Browse
          </div>
        </div>
        <img
          src={macbook}
          alt="mackbook"
          className="absolute right-0 top-1/2 -translate-y-1/2 xl:w-[250px] sm:w-[200px] 420px:w-[180px] w-[150px]"
        />
      </div>

      {/* Gaming */}
      <div className="sm:h-[320px] 420px:h-[250px] h-[200px]   relative rounded-2xl flex bg-linear-to-br from-gray-400 to-gray-100 lg:col-span-2  col-span-2">
        <div className="flex flex-col justify-center pl-6 420px:mt-16 mt-4">
          <p className="text-white sm:text-[16px] text-[12px]">Enjoy</p>
          <p className="sm:text-2xl text-xl text-white font-semibold">With</p>
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-300">
            Gaming
          </h1>
          <div className="w-max bg-primary text-white py-1 px-6 mt-4 rounded-full hover:cursor-pointer sm:text-[16px] text-[12px]">
            Browse
          </div>
        </div>
        <img
          src={gaming}
          alt="gaming"
          className="absolute right-0 top-1/2 -translate-y-1/2 xl:w-[250px] sm:w-[180px] 420px:w-[150px] w-[130px]"
        />
      </div>

      {/* VR */}
      <div className="sm:h-[320px] 420px:h-[250px] h-[200px] relative rounded-2xl flex bg-linear-to-br from-green/90 to-green/90 lg:col-span-1 col-span-2">
        <div className="flex flex-col justify-start pl-6 420px:mt-12 mt-8">
          <p className="text-white sm:text-[16px] text-[12px]">Enjoy</p>
          <p className="sm:text-2xl text-xl text-white font-semibold">With</p>
          <h1 className="sm:text-5xl text-4xl font-bold text-lightGreen">
            Earphone
          </h1>
          <div className="w-max bg-white text-green py-1 p-6 mt-4 rounded-full hover:cursor-pointer z-1 sm:text-[16px] text-[12px]">
            Browse
          </div>
        </div>
        <img
          src={vr}
          alt="vr"
          className="absolute right-0 bottom-0 xl:w-[300px] sm:w-[250px] 420px:w-[200px] w-[180px]"
        />
      </div>

      {/* Speaker */}
      <div className="sm:h-[320px] 420px:h-[250px] h-[200px] relative rounded-2xl flex bg-linear-to-br from-blue to-blue/90 lg:col-span-1 col-span-2">
        <div className="flex flex-col justify-start pl-6 420px:mt-12 mt-8">
          <p className="text-white sm:text-[16px] text-[12px]">Enjoy</p>
          <p className="sm:text-2xl text-xl text-white font-semibold">With</p>
          <h1 className="sm:text-5xl text-4xl font-bold text-lightBlue">
            Speaker
          </h1>
          <div className="w-max bg-white text-blue py-1 p-6 mt-4 rounded-full hover:cursor-pointer z-1 sm:text-[16px] text-[12px]">
            Browse
          </div>
        </div>
        <img
          src={speaker}
          alt="speaker"
          className="absolute right-0 bottom-0 xl:w-[250px] sm:w-[200px] 420px:w-[180px] w-[160px]"
        />
      </div>
    </div>
  );
}

export default Category;
