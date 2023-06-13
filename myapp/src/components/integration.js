import React from 'react'
import DropBox from "../assets/dropbox.png";
import Adobe from "../assets/adobe.png";
import Drive from "../assets/drive.png";
import Slack from "../assets/slack.png";
import Zoom from "../assets/zoom.png";
import "../App.css";
const Integration = () => {
  return (
    <div className="mt-14 p-6 flex flex-col items-center mb-14">
      <div className="bg-[#FFCA1D] h-1 w-16 mb-3 lg:mb-5"></div>
      <h1 className="text-lg text-center max-w-xs md:max-w-none lg:text-2xl font-semibold">
        <span className="text-[#FFCA1D] ">Integrate</span> with your existing
        tools in a few clicks
      </h1>
      <div className="flex flex-row overflow-scroll scroll-m-4 gap-14 mb-10 select-none sc h-24 mt-10">
        <img src={DropBox} alt="dropbox" />
        <img src={Adobe} alt="adobe" />
        <img src={Slack} alt="slack" />
        <img src={Zoom} alt="zoom" />
        <img src={Drive} alt="drive" />
      </div>
      <div>
        <button className="bg-[#FFCA1D] rounded-md px-7 py-3">View All</button>
      </div>
    </div>
  );
}

export default Integration