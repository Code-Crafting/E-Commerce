function Facitily() {
  const data = [
    {
      id: 1,
      img: <i class="fa-solid fa-car-side"></i>,
      title: "Free Shipping",
      subTitle: "Free Shipping On All Order",
    },
    {
      id: 2,
      img: <i class="fa-solid fa-circle-check"></i>,
      title: "Safe Money",
      subTitle: "30 Days Money Back",
    },
    {
      id: 3,
      img: <i class="fa-solid fa-wallet"></i>,
      title: "Secure Payment",
      subTitle: "All Payment Secure",
    },

    {
      id: 4,
      img: <i class="fa-solid fa-headphones"></i>,
      title: "Online Support 24/7",
      subTitle: "Technical Support 24/7",
    },
  ];

  return (
    <div className="con flex justify-between my-28 px-8">
      {data.map((el) => (
        <div key={el.id} className="flex gap-4 items-center">
          <div className="text-primary text-5xl">{el.img}</div>
          <div>
            <h1 className="text-xl font-bold">{el.title}</h1>
            <p className="text-gray-600">{el.subTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Facitily;
