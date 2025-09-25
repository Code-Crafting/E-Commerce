function FooterLinks({ title, links, isDark }) {
  return (
    <div className="flex flex-col gap-4">
      <h1
        className={`text-xl font-bold ${isDark ? "text-white" : "text-black"}`}
      >
        {title}
      </h1>
      {links.map((el, i) => {
        return (
          <p
            className={`text-gray-500 hover:${
              isDark ? "text-white" : "text-black"
            } hover:cursor-pointer`}
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
