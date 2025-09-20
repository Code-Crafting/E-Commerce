function Navbar() {
  const menuLinks = [
    { id: 1, menuName: "Home" },
    { id: 2, menuName: "Shop" },
    { id: 3, menuName: "About" },
    { id: 4, menuName: "Blogs" },
  ];
  const dropdown = [
    { id: 1, list: "Trading Products" },
    { id: 2, list: "Best Selling" },
    { id: 3, list: "Top Rated" },
  ];
  return (
    <div className="fixed w-full shadow-navbar">
      <div className="con flex justify-between items-center py-4">
        {/* Right */}
        <div className="flex gap-10 items-center tracking-wider">
          <h1 className="text-red-500 font-medium text-3xl hover:cursor-pointer">
            ESHOP
          </h1>
          <ul className="text-gray-500 font-medium flex gap-10">
            {/* menu links */}
            {menuLinks.map((el) => (
              <li
                className="hover:cursor-pointer hover:text-gray-400"
                key={el.id}
              >
                {el.menuName}
              </li>
            ))}

            {/* dropdown */}
            <div className="group">
              <li className="hover:cursor-pointer flex gap-2 items-center">
                <p className="group-hover:text-gray-400">Quick Liks</p>
                <i class="fa-solid fa-caret-down group-hover:rotate-180 transition-all duration-150 group-hover:text-gray-400"></i>
              </li>

              <div className="z-[9999] absolute hidden group-hover:block bg-white w-[200px] px-2 py-2 rounded-sm shadow-navbar">
                {dropdown.map((el) => (
                  <div className="px-4 py-2 hover:bg-red-200 hover:cursor-pointer hover:text-white transition-all duration-200 rounded-sm">
                    {el.list}
                  </div>
                ))}
              </div>
            </div>
          </ul>
        </div>

        {/* Left */}
        <div className="flex items-center justify-between gap-10 text-gray-500">
          <div className="group relative">
            <input
              type="text"
              placeholder="Search..."
              className="absolute -top-[2px] -right-3 group-hover:border group-hover: border-gray-500 outline-none px-4 w-0 group-hover:w-[250px] h-[30px] rounded-full transition-all duration-250"
            />
            <i class="fa-solid fa-magnifying-glass hover:cursor-pointer group-hover:text-red-500"></i>
          </div>

          <div className="relative">
            <i class="fa-solid fa-cart-shopping hover:cursor-pointer"></i>
            <div className="absolute -top-2 -right-2 bg-red-500 w-[17px] h-[17px] grid place-items-center text-[12px] rounded-full text-white">
              4
            </div>
          </div>
          <i class="fa-solid fa-sun hover:cursor-pointer"></i>
          <i class="fa-solid fa-moon hover:cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
