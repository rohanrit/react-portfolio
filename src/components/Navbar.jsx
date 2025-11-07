import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { CgMenuRightAlt } from "react-icons/cg";
import Modal from "./Modal";
import { useModal } from "../hooks/useModal";
import AuthForm from "./About/AuthForm";
import logoimg from "../assets/devokdev-logo.jpg";
import { useTheme } from "../hooks/useTheme";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [showmenu, setShowmenu] = useState(false);
  const { isOpen, openModal, closeModal } = useModal();
  const [authType, setAuthType] = useState("login");
  const showBtn = () => {
    setShowmenu(!showmenu);
  };
  const { theme, toggleTheme } = useTheme();

  const user = JSON.parse(localStorage.getItem("user"));
  const name = user?.split("@")[0];

  const logOutUser = () => {
    localStorage.removeItem("user");
    alert("Loged Out Successfully");
  };
  return (
    <div className="relative bg-navbar z-50">
      <div className="header w-[100%] mt-3 fixed">
        <div className="row inset-y-0 m-auto lg:px-10 md:px-10 px-8 md:mx-0 md:rounded-none  py-3 lg:mx-10 navbar w-100 flex items-center justify-between text-black gap-10 bg-[#cfe1f5] slate-600 transparent lg:rounded-xl ">
          <div className="logo">
            <NavLink to="/" className="text-3xl font-bold">
              <img src={logoimg} alt="" className="max-w-32 w-full overflow-hidden md:text-center  shadow-green-200" />
            </NavLink>
          </div>

          <div className="lg:hidden">
            <span>
              <CgMenuRightAlt onClick={showBtn} className="text-2xl" />
            </span>
          </div>
           <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition" aria-label="Toggle theme">
          {theme === "light" ? <FaMoon className="w-5 h-5 text-gray-800" /> : <FaSun className="w-5 h-5 text-yellow-400" />}
        </button>
        </div>
      </div>

      {showmenu && (
        <div className="">
          {/* <div className="toggleNav "> */}
          <ul
            className={`toggleNav z-20 ${showmenu && "menuWidth"} nav-links navLinks flex flex-col gap-10 absoluet fixed  lg:p-8 md:p-8 p-5 bg-white h-[100vh] top-0 right-0 nav `}
            // className="nav-links navLinks ``
          >
            <li className="links">
              <RxCross2 onClick={showBtn} className="text-2xl" />
            </li>
            <li className="links active" onClick={showBtn}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="links" onClick={showBtn}>
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="links" onClick={showBtn}>
              <NavLink to="/skills">Skills</NavLink>
            </li>

            <li className="links" onClick={showBtn}>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <div className="border-y-2 py-5">
              <li className="links" onClick={showBtn}>
                <NavLink to="/login">Login</NavLink>
              </li>
            </div>
          </ul>
        </div>
      )}

      <Modal isOpen={isOpen} onClose={closeModal}>
        <AuthForm authType={authType} closeModal={closeModal} setAuthType={setAuthType} />
        <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition" aria-label="Toggle theme">
          {theme === "dark" ? <FaMoon className="w-5 h-5 text-gray-800" /> : <FaSun className="w-5 h-5 text-yellow-400" />}
        </button>
      </Modal>
    </div>
  );
};

export default Navbar;
