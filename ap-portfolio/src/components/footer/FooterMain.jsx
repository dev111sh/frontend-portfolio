import { Link } from "react-scroll";

const FooterMain = () => {
  const footerLinks = [
    {
      name: "About Me",
      section: "about",
    },
    {
      name: "Skills",
      section: "skills",
    },
    {
      name: "Experience",
      section: "experience",
    },
    {
      name: "Projects",
      section: "projects",
    },
    {
      name: "Contact",
      section: "contact",
    },
  ];
  return (
    <div className="px-4">
      <div className="w-full h-[2px] bg-lightGrey mt-24"></div>
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
        <p className="text-3xl text-sunflowerGold ">Adesioye Raymond Tunmise</p>
        <ul className="flex gap-4 text-pretty text-xl">
          {footerLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  to={item.section}
                  className="text-white hover:text-cyan transition-all duration-500 cursor-pointer"
                >
                  <a href="#" cursor="pointer" text-white hover  >{item.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[260px] mx-auto text-center mt-2 mb-2 text-sm text-rosyCopper">
        ©2025 ART | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;