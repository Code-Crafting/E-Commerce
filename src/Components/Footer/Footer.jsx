import FooterLinks from "./FooterLinks";
import Logo from "../Logo";
import { useContext } from "react";
import { Theme } from "../../Contexts/Theme";

function Footer() {
  const [isDark] = useContext(Theme);

  const webLinks = [
    { name: "Insragram", img: <i className="fa-brands fa-instagram"></i> },
    { name: "Facebook", img: <i className="fa-brands fa-facebook"></i> },
    { name: "LinkedIn", img: <i className="fa-brands fa-linkedin"></i> },
  ];

  const addSecLinks = [
    {
      details: "Noida , Uttar Pradesh",
      img: <i className="fa-solid fa-location-dot text-xl"></i>,
    },
    {
      details: "+91 1234567890",
      img: <i className="fa-solid fa-mobile-screen-button text-xl "></i>,
    },
  ];

  return (
    <div className={`${isDark ? "bg-footer" : "bg-white"}`}>
      <div className="con grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-4 gap-4 pt-20 pb-28 1424px:px-0 px-4">
        {/* col-1 */}
        <div className="flex flex-col lg:col-span-2 sm:col-span-3 col-span-4 420px:gap-3 gap-1 w-[70%]">
          <Logo />
          <p
            className={`${
              isDark ? "text-gray-400" : "text-gray-700"
            } 420px:text-[16px] text-[12px]`}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
            aliquid
          </p>
          <p className="py-1 text-gray-600 420px:text-[16px] text-[12px]">
            Made with 💖 by Monojit Sen
          </p>
          <div
            className="w-max 420px:px-4 420px:py-2 px-2 py-1 bg-primary text-white hover:cursor-pointer rounded-full 420px:text-[16px] text-[12px]"
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            Back to top
          </div>
        </div>

        {/* col-2 */}
        <FooterLinks
          title="Important Links"
          links={["Home", "About", "Contact", "Blog"]}
          isDark={isDark}
        />

        {/* col-3 */}
        <FooterLinks
          title="Quick Links"
          links={["Home", "About", "Contact", "Blog"]}
          isDark={isDark}
        />

        {/* col-4 */}
        <div
          className={`flex flex-col 420px:gap-4 gap-2 ${
            isDark ? "text-white" : "text-black"
          } sm:col-span-1 col-span-4`}
        >
          <h1 className="420px:text-xl text-md font-bold">Address</h1>

          {addSecLinks.map((el, i) => {
            return (
              <div className="flex gap-2 items-center" key={i}>
                <div className="420px:text-xl text-[10px]">{el.img}</div>
                <p className="420px:text-lg text-[13px]">{el.details}</p>
              </div>
            );
          })}

          <div className="flex gap-3">
            {webLinks.map((el, i) => {
              return (
                <div
                  key={i}
                  className="420px:text-3xl text-2xl hover:cursor-pointer"
                >
                  {el.img}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
