import { Link } from "react-router";

function Sidebar({ showSidebar, setShowSidebar, menuLinks, isDark }) {
  return (
    <div
      className={`${
        showSidebar ? "flex" : "hidden"
      } 928px:hidden  flex-col absolute top-6 left-0 ${
        isDark ? "bg-primary-dark" : "bg-sidebar"
      } w-3xs h-[250px] px-4 py-4 rounded-lg shadow-navbar z-12 `}
    >
      <div
        className="928px:hidden block text-right text-primary"
        onClick={() => setShowSidebar(false)}
      >
        <i class="fa-solid fa-circle-xmark text-3xl text-shadow-md"></i>
      </div>

      <ul
        className={`text-gray-500 font-medium flex flex-col gap-4 420px:text-xl text-lg`}
      >
        {menuLinks.map((el) => (
          <Link to={el.link} key={el.id}>
            <li
              className="hover:cursor-pointer hover:text-gray-400"
              onClick={() => setShowSidebar(false)}
            >
              {el.menuName}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
export default Sidebar;
