import { Link } from "react-router";

function NavItems({ menuLinks, dropdown, isDark }) {
  return (
    <>
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
    </>
  );
}

export default NavItems;
