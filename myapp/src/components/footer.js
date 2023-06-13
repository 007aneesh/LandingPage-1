import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white px-6 pt-6 pb-2">
      <div className="flex flex-col items-center justify-center mb-5">
        <h1 className="font-sans font-bold text-2xl">
          Team<span className="text-[#FFCA1D]">Flow</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:ml-24 p-4 mb-8">
        <div>
          <h1 className="text-xl mb-2 font-semibold">Product</h1>
          <ul className="list-none opacity-70">
            <li>Product</li>
            <li>Pricing</li>
            <li>Enterprise</li>
            <li>Partners</li>
            <li>Affiliate</li>
            <li>Integrations</li>
            <li>Developers</li>
            <li>Students</li>
            <li>Work OS</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl mb-2 font-semibold">Team</h1>
          <ul className="list-none opacity-70">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Find a partner</li>
            <li>In the news</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl mb-2 font-semibold">Solutions</h1>
          <ul className="list-none opacity-70">
            <li>Project Management</li>
            <li>Marketing</li>
            <li>CRM and Sales</li>
            <li>Software Development</li>
            <li>Constructions</li>
            <li>Creative Production</li>
            <li>Remote Work</li>
            <li>See more solutions</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl mb-2 font-semibold">Resources</h1>
          <ul className="list-none opacity-70">
            <li>Knowledge Base</li>
            <li>Guides</li>
            <li>Daily Webinars</li>
            <li>Community</li>
            <li>Customer Stories</li>
            <li>Templates</li>
            <li>Profesionals Services</li>
            <li>Video Tutorials</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p className="opacity-70 font-sans">All Rights Reserved @Aneesh</p>
      </div>
    </div>
  );
};

export default Footer;
