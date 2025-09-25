import Hero from "./Hero";
import Category from "./Category";
import Facitily from "./Facility";
import OfferNews from "./OfferNews";
import Brand from "./Brand";
import { useContext } from "react";
import { Theme } from "../../Contexts/Theme";

function Home() {
  const [isDark, setIsDark] = useContext(Theme);

  return (
    <div className={`${isDark ? "bg-primary-dark" : "bg-white"}`}>
      <Hero isDark={isDark} />
      <Category />
      <Facitily isDark={isDark} />
      <OfferNews />
      <Brand isDark={isDark} />
    </div>
  );
}

export default Home;
