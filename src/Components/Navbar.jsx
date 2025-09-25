import { Link } from "react-router";
import Logo from "./Logo";
import { useContext } from "react";
import { Theme } from "../Contexts/Theme";

function Navbar({ cartValue }) {
  const [isDark, setIsDark] = useContext(Theme);
  // console.log(value);
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
      className={`fixed w-full shadow-navbar ${
        isDark ? "bg-primary-dark" : "bg-white"
      } z-[100]`}
    >
      <div className="con flex justify-between items-center py-4 relative">
        {/* Left */}
        <div className="flex gap-10 items-center tracking-wider">
          <Logo />
          <ul className="text-gray-500 font-medium flex gap-10">
            {/* menu links */}
            {menuLinks.map((el) => (
              <Link to={el.link} key={el.id}>
                <li className="hover:cursor-pointer hover:text-gray-400">
                  {el.menuName}
                </li>
              </Link>
            ))}

            {/* dropdown */}
            <div className="group">
              <li className="hover:cursor-pointer flex gap-2 items-center">
                <p className="group-hover:text-gray-400">Quick Liks</p>
                <i className="fa-solid fa-caret-down group-hover:rotate-180 transition-all duration-150 group-hover:text-gray-400"></i>
              </li>

              <div
                className={`z-[9999] absolute hidden group-hover:block ${
                  isDark ? "bg-primary-dark" : "bg-white"
                } w-[200px] px-2 py-2 rounded-sm shadow-navbar`}
              >
                {dropdown.map((el, i) => (
                  <div
                    key={i}
                    className={`px-4 py-2 ${
                      isDark ? "hover:bg-dropdown-list" : "hover:bg-red-200"
                    } hover:cursor-pointer hover:text-white transition-all duration-200 rounded-sm`}
                  >
                    {el.list}
                  </div>
                ))}
              </div>
            </div>
          </ul>
        </div>

        {/* Right */}
        <div className="flex items-center justify-between gap-10 text-gray-500">
          <div className="group relative">
            <i className="fa-solid fa-magnifying-glass hover:cursor-pointer group-hover:text-red-500 opacity-100 relative z-10"></i>
            <input
              type="text"
              placeholder="Search..."
              className={`absolute -top-[2px] -right-3  group-hover:border group-hover: border-gray-500 outline-none group-hover:px-4 w-0  group-hover:w-[250px] h-[30px] rounded-full transition-all duration-250 z-0  ${
                isDark ? "bg-blue-light" : ""
              }`}
            />
          </div>

          <Link to={`/cart`} className="relative">
            <i className="fa-solid fa-cart-shopping hover:cursor-pointer"></i>
            <div className="absolute -top-2 -right-2 bg-red-500 w-[17px] h-[17px] grid place-items-center text-[12px] rounded-full text-white">
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
              className="fa-solid fa-moon hover:cursor-pointer"
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
