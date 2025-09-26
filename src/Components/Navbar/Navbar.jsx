import { Link } from "react-router";
import Logo from "../Logo";
import { useContext, useEffect, useState } from "react";
import { Theme } from "../../Contexts/Theme";
import NavItems from "./NavItems";
import Sidebar from "./Sidebar";

function Navbar({ cartValue }) {
  const [isDark, setIsDark] = useContext(Theme);
  const [showSidebar, setShowSidebar] = useState(false);
  const menuLinks = [
    { id: 1, menuName: "Home", link: "/" },
    { id: 2, menuName: "Shop", link: "/products" },
    { id: 3, menuName: "About", link: "/" },
    { id: 4, menuName: "Blogs", link: "/" },
  ];
  const dropdown = [
    { id: 1, list: "Trading Products" },
    { id: 2, list: "Best Selling" },
    { id: 3, list: "Top Rated" },
  ];

  return (
    <div
      className={`fixed w-dvw shadow-navbar ${
        isDark ? "bg-primary-dark" : "bg-white"
      } z-[100] `}
    >
      <div className="con flex justify-between items-center py-4 relative 1424px:px-0 px-4">
        {/* Left */}
        <div className="flex lg:gap-10 928px:gap-6 gap-2 items-center tracking-wider">
          {/* menu icon for sidebar */}
          <div
            className="928px:hidden flex items-center"
            onClick={() => setShowSidebar(true)}
          >
            <i
              className={`fa-solid fa-bars text-2xl ${
                isDark ? "text-gray-600" : "text-gray-400"
              } text-[16px] 420px:text-xl`}
            ></i>
          </div>

          <Link to={"/"}>
            <Logo />
          </Link>

          {/* menu */}
          <ul
            className={`text-gray-500 font-medium 928px:flex hidden lg:gap-10 gap-6`}
          >
            {/* menu links */}
            <NavItems
              menuLinks={menuLinks}
              dropdown={dropdown}
              isDark={isDark}
            />
          </ul>

          {/* sidebar */}
          <Sidebar
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            menuLinks={menuLinks}
            isDark={isDark}
          />
        </div>

        {/* Right */}
        <div className="flex items-center justify-between lg:gap-10 gap-6 text-gray-500">
          <div className="group relative">
            <i className="fa-solid fa-magnifying-glass hover:cursor-pointer group-hover:text-red-500 opacity-100 relative z-10 420px:text-[16px] text-[12px]"></i>
            <input
              type="text"
              placeholder="Search..."
              className={`absolute -top-[2px] -right-3  group-hover:border group-hover:border-gray-500 outline-none group-hover:px-4 w-0 sm:group-hover:w-[250px] 512px:group-hover:w-[200px] 412px:group-hover:w-[150px] group-hover:w-[100px] h-[30px] rounded-full transition-all duration-250 z-0  ${
                isDark ? "bg-blue-light" : ""
              } 412px:text-[16px] text-[12px] 412px:placeholder:text-[16px] placeholder:text-[12px]`}
            />
          </div>

          <Link to={`/cart`} className="relative">
            <i className="fa-solid fa-cart-shopping hover:cursor-pointer 420px:text-[16px] text-[12px]"></i>
            <div className="absolute 420px:-top-2 -top-1 -right-2 bg-red-500 420px:w-[17px] 420px:h-[17px] w-[15px] h-[15px] grid place-items-center 420px:text-[12px] text-[10px] rounded-full text-white ">
              {cartValue}
            </div>
          </Link>
          {isDark ? (
            <i
              className="fa-solid fa-sun hover:cursor-pointer"
              onClick={() => setIsDark((prev) => (prev ? false : true))}
            ></i>
          ) : (
            <i
              className="fa-solid fa-moon hover:cursor-pointer 420px:text-[16px] text-[12px]"
              onClick={() => {
                setIsDark((prev) => (prev ? false : true));
              }}
            ></i>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
