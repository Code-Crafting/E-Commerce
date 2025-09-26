function Facitily({ isDark }) {
  const data = [
    {
      id: 1,
      img: <i className="fa-solid fa-car-side"></i>,
      title: "Free Shipping",
      subTitle: "Free Shipping On All Order",
    },
    {
      id: 2,
      img: <i className="fa-solid fa-circle-check"></i>,
      title: "Safe Money",
      subTitle: "30 Days Money Back",
    },
    {
      id: 3,
      img: <i className="fa-solid fa-wallet"></i>,
      title: "Secure Payment",
      subTitle: "All Payment Secure",
    },

    {
      id: 4,
      img: <i className="fa-solid fa-headphones"></i>,
      title: "Online Support 24/7",
      subTitle: "Technical Support 24/7",
    },
  ];

  return (
    <div className="con grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] 512px:place-items-start place-items-center gap-6 lg:gap-0 xl:my-28 512px:my-24 my-20 lg:px-8 px-2 sm:w-[90%] lg:w-full mx-auto">
      {data.map((el) => (
        <div key={el.id} className="flex sm:gap-4 gap-2 items-center">
          <div className="text-primary xl:text-5xl sm:text-3xl text-2xl">
            {el.img}
          </div>
          <div>
            <h1
              className={`xl:text-xl sm:text-lg text-lg font-bold ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              {el.title}
            </h1>
            <p className="text-gray-600 text-[12px] ">{el.subTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Facitily;
