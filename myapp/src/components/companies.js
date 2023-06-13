import React from 'react'
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import Image4 from "../assets/image4.png";
const Companies = () => {
  return (
    <div className="lg:pl-16 pt-14 mb-10 p-6 items-center">
      <div className="bg-[#FFCA1D] h-1 w-16 mt-7 mb-4 md:mb-0"></div>
      <div className="flex flex-col md:flex-row w-full items-center justify-between">
        <div className='md:w-1/3'>
          <p className="font-semibold text-lg md:text-base lg:text-xl md:max-w-sm">See why over 100,000 teams choose TeamFlow.com</p>
        </div>
        <div className='flex gap-3 md:gap-7 lg:gap-10 flex-col md:h-16 lg:h-20 md:flex-row w-2/3 justify-center mt-2 md:mt-0'>
            <img src={Image1} alt='img1'/>
            <img src={Image2} alt='img2'/>
            <img src={Image3} alt='img3'/>
            <img src={Image4} alt='img4'/>
        </div>
      </div>
    </div>
  );
}

export default Companies