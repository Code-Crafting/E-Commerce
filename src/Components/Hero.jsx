import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import laptop from "../assets/category/macbook.png";
import vr from "../assets/category/vr.png";
import headphone from "../assets/hero/headphone.png";

function Hero() {
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
    <div className="con pt-24  ">
      <div className="w-full min-h-[600px] flex justify-center items-center  bg-[linear-gradient(90deg,rgba(219,222,227,1)_0%,rgba(243,244,246,1)_100%)] rounded-4xl">
        <div className="container px-24 h-full">
          <Slider {...settings}>
            {sliderInfo.map((el) => {
              return (
                <div key={el.id} className="">
                  <div className="relative px-2 flex justify-between h-[500px]">
                    <div className="h-full flex flex-col gap-2 font-bold justify-center">
                      <p className="text-2xl">Beats Duo</p>
                      <h1 className="text-7xl">{el.type}</h1>
                      <h1 className="text-[150px] text-white uppercase">
                        {el.title}
                      </h1>
                      <button className="w-max px-6 py-2 rounded-full bg-primary text-white font-normal hover:cursor-pointer hover:scale-105 duration-300">
                        Shop By Category
                      </button>
                    </div>
                    <img
                      src={el.img}
                      alt={el.category}
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-[450px] drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] "
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
