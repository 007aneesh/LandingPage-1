import Navbar from "./navbar";
import React from "react";
import Asset1 from "../assets/asset1.png"
import "../App.css";
const Hero = () => {
  return (
    <div className="h-screen md:h-[60vh] lg:h-screen w-full hero ">
      <Navbar />
      <div className="lg:pt-32 lg:pl-20 pt-28 p-6 md:p-8 md:pt-32 flex flex-col lg:block justify-around md:flex-row">
        <div className=" flex flex-col">
          <div className="bg-white px-7 py-2 w-max rounded-md">
            <p className="text-[#606060] select-none">👋 Welcome to TeamFlow</p>
          </div>
          <div className="text-white text-4xl lg:text-5xl font-bold font-sans pt-5 ">
            <h1 className="md:leading-relaxed">Work the way that</h1>
            <h1>works for you</h1>
          </div>
          <div className="bg-green-400 h-1 w-16 mt-7 mb-4 ml-1"></div>
          <div>
            <p className="text-white max-w-[80%] md:max-w-[26rem] mt-3 lg:text-xl">
              Create, Build, Collaborate and ship products very faster
            </p>
          </div>
          <div className="mt-4">
            <button className="bg-[#FFCA1D] px-7 py-2 rounded-md">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center lg:hidden py-10">
          <img src={Asset1} alt="asset" className="md:max-w-sm" />
        </div>
      </div>
      <h2 className="text-white lg:hidden sm:pt-10 blink_me flex items-center justify-center">Scroll down to know more!</h2>
    </div>
  );
};

export default Hero;
