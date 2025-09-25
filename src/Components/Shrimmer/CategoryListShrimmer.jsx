import { useContext } from "react";
import { Theme } from "../../Contexts/Theme";

function CategoryListShrimmer() {
  const [isDark] = useContext(Theme);

  return (
    <div
      className={`min-w-[180px] h-[45px] rounded-full ${
        isDark ? "bg-blue-light" : "bg-gray-300"
      }`}
    ></div>
  );
}
export default CategoryListShrimmer;
