function FooterLinks({ title, links, isDark }) {
  return (
    <div className="flex flex-col 420px:gap-4 gap-1 sm:col-span-1 col-span-2">
      <h1
        className={`420px:text-xl text-md font-bold ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h1>
      {links.map((el, i) => {
        return (
          <p
            className={`text-gray-500 hover:${
              isDark ? "text-white" : "text-black"
            } hover:cursor-pointer 420px:text-[16px] text-[12px]`}
            key={i}
          >
            {el}
          </p>
        );
      })}
    </div>
  );
}

export default FooterLinks;
