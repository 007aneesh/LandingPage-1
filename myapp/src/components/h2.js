import React from "react";
import i1 from "../assets/i1.png";
import i2 from "../assets/i2.png";
import i3 from "../assets/i3.png";
import feature from "../assets/feature_img.png";
import lap from "../assets/lap.png";
import {FaFacebook} from "react-icons/fa";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
const H2 = () => {
  return (
    <div>
      <div className="p-6 py-8 bg-black lg:bg-[#FAFAFF] flex flex-col items-center select-none">
        <div className="flex flex-col items-center mb-4 pt-4">
          <div className="bg-[#FFCA1D] h-1 w-16 mb-3 lg:mb-5"></div>
          <h1 className="text-white text-xl lg:text-2xl lg:text-black font-semibold">
            What you <span className="text-[#FFCA1D]">can do?</span>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-3 select-none">
          <div className="text-white lg:text-[#585858] flex flex-col items-center p-10">
            <img
              src={i1}
              alt="i1"
              className="max-w-[5rem] mb-4 pointer-events-none"
            />
            <h1 className="font-semibold text-lg mb-3 lg:text-[#2B3377]">
              Business Planning
            </h1>
            <p className="text-center md:max-w-[437px]">
              Our Business Plan is a written document describing a company’s
              core business activities.
            </p>
          </div>
          <div className="text-white lg:text-[#585858] flex flex-col items-center p-10">
            <img
              src={i2}
              alt="i2"
              className="max-w-[5rem] mb-4 pointer-events-none"
            />
            <h1 className="font-semibold text-lg mb-3 lg:text-[#2B3377]">
              Financial Planning
            </h1>
            <p className="text-center md:max-w-[437px]">
              Our expert team sensible decision about their money, to ensure
              they achieve the life goals. A financial plan.
            </p>
          </div>
          <div className="text-white lg:text-[#585858] flex flex-col items-center p-10">
            <img
              src={i3}
              alt="i3"
              className="max-w-[5rem] mb-4 pointer-events-none"
            />
            <h1 className="font-semibold text-lg mb-3 lg:text-[#2B3377]">
              Market Analysis
            </h1>
            <p className="text-center md:max-w-[437px]">
              A market analysis is a quantitative and qualitative assessment of
              a market. It looks into the size of the market.
            </p>
          </div>
        </div>
      </div>
      <div className="p-6 bg-white flex flex-col items-center mb-12 mt-8">
        <div className="flex flex-col items-center mt-3 mb-4">
          <div className="bg-[#FFCA1D] h-1 w-16 mb-3 lg:mb-5"></div>
          <h1 className="text-black text-xl lg:text-2xl lg:text-black font-semibold">
            Our <span className="text-[#FFCA1D]">Features</span>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center md:gap-10 justify-around">
          <div className="flex items-center justify-center select-none pointer-events-none md:w-1/2 mt-6 mb-10 md:mt-0 md:mb-0">
            <img src={feature} alt="feature" className="w-[90%] md:w-[50%]" />
          </div>
          <div className="md:w-1/2 flex flex-col items-center md:items-start">
            <h1 className="mb-3 font-semibold text-lg md:text-3xl md:text-left text-[#2B3377] text-center">
              Manage everything in one workspace
            </h1>
            <p className="text-center max-w-sm md:max-w-md text-[#585858] md:text-left">
              Planning, tracking and delivering your team’s best work has never
              been easier. An integrated workspace that’s simple to use,
              TeamFlow lets you spend less time managing your work and more time
              actually doing it.
            </p>
          </div>
        </div>
      </div>
      <div className="p-6 mb-16 w-full bg-black lg:bg-[#FAFAFF] gap-10 flex flex-col justify-around md:flex-row items-center">
        <div className="md:w-1/2 text-white flex flex-col items-center md:items-start md:ml-20">
          <h1 className="mb-3 font-semibold text-lg md:text-2xl lg:text-[#2B3377]">
            Set up in <span className="text-[#FFCA1D]">minutes</span>
          </h1>
          <div className="bg-[#FFCA1D] h-1 w-16 mb-4 lg:mb-5"></div>
          <p className="text-center max-w-sm md:max-w-md lg:text-[#585858] md:text-left">
            Get started fast with hundreds of visual and customizable templates
            - or create your own. Use our free online template maker to create
            beautiful template in minutes. Choose from hundreds of pre-made
            templates and tell stories with data with our easy drag-and-drop
            infographic creator.
          </p>
        </div>
        <div className="md:w-1/2 flex items-center pointer-events-none select-none justify-center">
          <img
            src={lap}
            alt="lap"
            className="w-[80%] p-6 pointer-events-none select-none"
          />
        </div>
      </div>
      <div className="p-6 mb-14 flex flex-col items-center">
        <div className="bg-[#FFCA1D] h-1 w-16 mb-4 lg:mb-5"></div>
        <h1 className="mb-3 font-semibold text-lg md:text-2xl md:text-[#2B3377]">
          Connect with us on
        </h1>
        <div className="flex flex-row items-center gap-5">
          <FaFacebook size={30} color="#4267B2" />
          <AiFillLinkedin size={30} color="#0077B5" />
          <AiFillTwitterCircle size={30} color="#1DA1F2" />
          <AiFillYoutube size={30} color="red" />
        </div>
      </div>
    </div>
  );
};

export default H2;
