import { useContext } from "react";
import { Theme } from "../../Contexts/Theme";

function ProductsShrimmer() {
  const [isDark] = useContext(Theme);
  const gray = isDark ? "bg-blue-light" : "bg-gray-300";

  return (
    <div
      className={`w-full  flex flex-col justify-between pb-4 rounded-xl overflow-hidden border ${
        isDark ? "border-footer bg-footer" : "border-gray-400"
      }`}
    >
      <div className={`${gray} h-[200px]`}></div>

      <div className="mt-4 flex flex-col gap-2 px-2 justify-between">
        <div className={`${gray} w-[80%] h-[25px] rounded-lg`}></div>
        <div className={`${gray} w-[60%] h-[20px] rounded-lg`}></div>
        <div className={`${gray} w-[60%] h-[20px] rounded-lg`}></div>
        <div className={`${gray} w-[60%] h-[20px] rounded-lg`}></div>
      </div>

      <div className={`w-[60px] h-[20px] rounded-lg mt-2 ml-2 ${gray}`}></div>
    </div>
  );
}

export default ProductsShrimmer;
