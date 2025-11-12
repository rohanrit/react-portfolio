import { FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import Heading from "../Heading/Heading";
import ContactMap from "./ContactMap";

const Contact = () => {
  return (
    <section className="container mx-auto px-4 min-h-[80vh] py-24 lg:px-10 md:px-10 px-8">
      <Heading heading="Get In" span="Touch" />
      <div className="lg:flex ">
        <div className="flex w-[100%] py-8 text-gray-700 dark:text-gray-300 flex-col gap-6 rounded">
          <div className="flex items-center gap-8 ">
            <span>
              <FaLocationDot className="w-[30px] h-[30px]" />
            </span>
            <span>
              <p>Gurugram, Haryana</p>
            </span>
          </div>
          <div className="flex items-center gap-8 ">
            <span>
              <CiMail className="w-[30px] h-[30px]" />
            </span>
            <span>
              <NavLink
                to="https://mail.google.com/mail/u/0/#inbox"
                target="_blank"
              >
                info@devokdev.com
              </NavLink>
            </span>
          </div>
          <div className="flex items-center gap-8 ">
            <span>
              <FaGithub className="w-[30px] h-[30px]" />
            </span>
            <span>
              <NavLink to="https://github.com/rohanrit" target="_blank">
                https://github.com/rohanrit
              </NavLink>
            </span>
          </div>
        </div>
        <div className="w-[100%] md:w-[100%]  lg:w-[100%] sm:w-[100%]">
          <ContactMap />
        </div>
      </div>
    </section>
  );
};

export default Contact;
