function FooterLinks({ title, links }) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-bold">{title}</h1>
      {links.map((el, i) => {
        return (
          <p className="text-gray-600 hover:text-black hover:cursor-pointer">
            {el}
          </p>
        );
      })}
    </div>
  );
}

export default FooterLinks;
