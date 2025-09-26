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
    <div className="con grid lg:grid-cols-4 grid-cols-2 place-items-start gap-6 lg:gap-0 xl:my-28 512px:my-24 my-20 px-8 sm:w-[90%] lg:w-full mx-auto">
      {data.map((el) => (
        <div key={el.id} className="flex gap-4 items-center">
          <div className="text-primary xl:text-5xl sm:text-3xl 420px:text-2xl text-lg">
            {el.img}
          </div>
          <div>
            <h1
              className={`xl:text-xl sm:text-lg 420px:text-lg text-[12px] font-bold ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              {el.title}
            </h1>
            <p className="text-gray-600 sm:text-[12px] text-[10px]">
              {el.subTitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Facitily;
