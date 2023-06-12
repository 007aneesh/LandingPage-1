import React, { useRef } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import "./navbar.css";
const Navbar = () => {
  const navRef = useRef();
  const showNav = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <>
      <header className="lg:pl-20 absolute z-20 w-full top-0 left-0 lg:pr-20 text-black">
        <h3 className="text-white text-2xl">TeamFlow</h3>
        <nav ref={navRef} className="mb-2 flex lg:pl-16">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:ml-24 mb-7 lg:mb-0">
            <a href="/#" className="mb-6 lg:mb-0">
              Product
            </a>
            <a href="/#" className="mb-6 lg:mb-0">
              Solutions
            </a>
            <a href="/#" className="mb-6 lg:mb-0">
              Enterprise
            </a>
            <a href="/#" className="mb-6 lg:mb-0">
              Pricing
            </a>
            <button className="nav-btn nav-close" onClick={showNav}>
              <AiOutlineClose />
            </button>
          </div>

          <div className="flex flex-col lg:flex-row lg:pl-7">
            <button id="login" className="px-7 text-[#757575] text-xl lg:text-base bg-transparent outline-none border-none mb-6 lg:mb-0">
              Login
            </button>
            <button id="signup" className="px-7 py-2 bg-[#FFCA1D] text-xl lg:text-base rounded-md mb-4 lg:mb-0">
              Sign Up
            </button>
          </div>
        </nav>

        <button className="nav-btn" onClick={showNav}>
          <FaBars />
        </button>
      </header>
    </>
  );
};

export default Navbar;
