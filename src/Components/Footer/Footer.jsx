import FooterLinks from "./FooterLinks";
import Logo from "../Logo";

function Footer() {
  const webLinks = [
    { name: "Insragram", img: <i class="fa-brands fa-instagram"></i> },
    { name: "Facebook", img: <i class="fa-brands fa-facebook"></i> },
    { name: "LinkedIn", img: <i class="fa-brands fa-linkedin"></i> },
  ];

  const addSecLinks = [
    {
      details: "Noida , Uttar Pradesh",
      img: <i class="fa-solid fa-location-dot text-xl"></i>,
    },
    {
      details: "+91 1234567890",
      img: <i class="fa-solid fa-mobile-screen-button text-xl "></i>,
    },
  ];

  return (
    <div className="con grid grid-cols-5 gap-4 mt-20 mb-28">
      {/* col-1 */}
      <div className="flex flex-col col-span-2 gap-3 w-[70%]">
        <Logo />
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt aliquid
        </p>
        <p className="py-1 text-gray-600">Made with 💖 by Monojit Sen</p>
        <div className="w-max px-4 py-2 bg-primary text-white hover:cursor-pointer rounded-full">
          Back to top
        </div>
      </div>

      {/* col-2 */}
      <FooterLinks
        title="Important Links"
        links={["Home", "About", "Contact", "Blog"]}
      />

      {/* col-3 */}
      <FooterLinks
        title="Quick Links"
        links={["Home", "About", "Contact", "Blog"]}
      />

      {/* col-4 */}
      <div className="flex flex-col gap-4 ">
        <h1 className="text-xl font-bold">Address</h1>

        {addSecLinks.map((el, i) => {
          return (
            <div className="flex gap-2 items-center" key={i}>
              <div className="text-xl">{el.img}</div>
              <p className="text-lg">{el.details}</p>
            </div>
          );
        })}

        <div className="flex gap-3">
          {webLinks.map((el, i) => {
            return (
              <div key={i} className="text-3xl hover:cursor-pointer">
                {el.img}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Footer;
