import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import laptop from "../../assets/category/macbook.png";
import vr from "../../assets/category/vr.png";
import headphone from "../../assets/hero/headphone.png";

function Hero({ isDark }) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderInfo = [
    {
      id: 1,
      category: "headphones",
      type: "Wireless",
      title: "HeadPhone",
      link: "/products",
      img: headphone,
    },
    {
      id: 2,
      category: "laptops",
      type: "Branded",
      title: " Laptop",
      link: "/products",
      img: laptop,
    },
    {
      id: 3,
      category: "gadgets",
      type: "Wireless",
      title: " Virtual",
      link: "/products",
      img: vr,
    },
  ];

  return (
    <div className="con 420px:pt-24 pt-18 z-0 ">
      <div
        className={`w-full xl:min-h-[600px] my-auto flex justify-center items-center  ${
          isDark
            ? "bg-[linear-gradient(to_right,#111827,#1D2635)]"
            : "bg-[linear-gradient(90deg,rgba(219,222,227,1)_0%,rgba(243,244,246,1)_100%)]"
        } 1424px:rounded-4xl`}
      >
        <div className="lg:container w-full 928px:px-24 md:px-18 420px:px-10 px-2 h-full">
          <Slider {...settings}>
            {sliderInfo.map((el) => {
              return (
                <div key={el.id}>
                  <div className="relative px-2 flex justify-between sm:h-[500px] h-[400px]">
                    <div className="h-full flex flex-col 512px:gap-2 gap-1 font-bold justify-center">
                      <p
                        className={`xl:text-2xl sm:text-xl 512px:text-md text-[12px] ${
                          isDark ? "text-white" : "text-black"
                        } `}
                      >
                        Beats Solo
                      </p>
                      <h1
                        className={`xl:text-7xl 928px:text-5xl sm:text-4xl 512px:text-2xl text-xl ${
                          isDark ? "text-white" : "text-black"
                        } `}
                      >
                        {el.type}
                      </h1>
                      <h1
                        className={`xl:text-[150px] 928px:text-[100px] sm:text-[80px] 512px:text-6xl text-4xl ${
                          isDark ? "text-blue-light" : "text-white"
                        } uppercase`}
                      >
                        {el.title}
                      </h1>
                      <button className="w-max 512px:px-6 px-2 512px:py-2 py-1 text-[12px] 512px:text-[16px] rounded-full bg-primary text-white font-normal hover:cursor-pointer hover:scale-105 duration-300">
                        Shop By Category
                      </button>
                    </div>
                    <img
                      src={el.img}
                      alt={el.category}
                      className="absolute right-0 top-1/2 -translate-y-1/2 xl:w-[450px] 928px:w-[350px] sm:w-[300px] 512px:w-3xs w-[200px] drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] "
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Hero;
