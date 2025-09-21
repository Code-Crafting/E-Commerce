import br1 from "../../assets/brand/br-1.png";
import br2 from "../../assets/brand/br-2.png";
import br3 from "../../assets/brand/br-3.png";
import br4 from "../../assets/brand/br-4.png";
import br5 from "../../assets/brand/br-5.png";

function Brand() {
  const brands = [br1, br2, br3, br4, br5];
  return (
    <div className="bg-gray-200 py-8 mt-28">
      <div className="con flex justify-evenly itmes-center">
        {brands.map((el, i) => (
          <img
            src={el}
            key={i}
            alt="brandImg"
            className="w-[70px] opacity-50"
          />
        ))}
      </div>
    </div>
  );
}

export default Brand;
