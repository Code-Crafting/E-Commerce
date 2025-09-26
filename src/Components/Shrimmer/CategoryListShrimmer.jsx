import { useContext } from "react";
import { Theme } from "../../Contexts/Theme";

function CategoryListShrimmer() {
  const [isDark] = useContext(Theme);

  return (
    <div
      className={`sm:min-w-[180px] 420px:min-w-[150px] min-w-[120px] 512px:h-[45px] h-[35px] rounded-full ${
        isDark ? "bg-blue-light" : "bg-gray-300"
      }`}
    ></div>
  );
}
export default CategoryListShrimmer;
