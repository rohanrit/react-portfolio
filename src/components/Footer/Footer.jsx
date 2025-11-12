import { NavLink } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import FooterListTitle from "./FooterListTitle";
import logoimg from "../../assets/devokdev-logo.jpg";

const Footer = () => {
  const footerPageLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/" },
  ];
  const footerAcountLinks = [
    { id: 1, name: "Portfolio", path: "/about" },
    { id: 2, name: "Projects", path: "/projects" },
  ];
  return (
    <div className="w-full bg-[#F5F5F3] py-20">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  xl:grid-cols-4 lg:px-10 md:px-10 px-8 gap-10">
        <div className="col-span-2">
          <FooterListTitle title="" />
          <div className="flex flex-col gap-6">
            <img
              src={logoimg}
              alt=""
              className="max-w-32 w-full overflow-hidden md:text-center  shadow-green-200"
            />
            <ul className="flex items-center gap-2 ">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-black hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaYoutube />
                </li>
              </a>
              <a
                href="https://github.com/rohanrit"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-black hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaGithub />
                </li>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-black hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaFacebook />
                </li>
              </a>
              <a
                href="www.linkedin.com/in/ritesh-rohan-419599197"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-black hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaLinkedin />
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div>
          <FooterListTitle title="About-Me" />

          <ul className="flex flex-col gap-2">
            {footerPageLinks.map((data) => (
              <NavLink
                to={data.path}
                key={data.id}
                className="font-titleFont text-gray-900 dark:text-gray-700 text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300"
              >
                {data.name}
              </NavLink>
            ))}
          </ul>
        </div>
        <div>
          <FooterListTitle title="Your account" />
          <div className="flex flex-col gap-2">
            {footerAcountLinks?.map((data) => (
              <NavLink
                key={data?.id}
                to={data?.path}
                className="font-titleFont  text-gray-900 dark:text-gray-700 text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300"
              >
                {data?.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
