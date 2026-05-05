import React from "react";

import NewLogo from "../../assets/logo_new.png"
const Banner = () => {
  return (
    <div>
      <section className="flex flex-col-reverse md:flex-row items-center justify-between flex-1 px-10 md:px-20 gap-6 pt-6 md:pt-10">

        {/* Left Text Content */}
        <div className="w-full md:w-1/2 max-w-xl space-y-6">
          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            We offer a wide <br /> range of logistics <br /> solutions.
          </h2>

          <ul className="space-y-2 text-gray-800 font-medium">
            <li>1. Easy booking</li>
            <li>2. Global Coverage</li>
            <li>3. Customer Support</li>
            <li>4. Free Pickup Services</li>
            <li>5. Domestic and international courier</li>
            <li>6. Packers & Movers (Home and Office Relocation)</li>
          </ul>

          <a
            href="#"
            className="inline-block border-b-2 border-gray-900 text-gray-900 font-semibold mt-4 hover:opacity-80"
          >
            Get Started
          </a>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
          <img
            src={NewLogo}
            alt="Delivery Rider"
            className="w-[80%] md:w-[90%] max-w-[600px] object-contain"
          />
        </div>

      </section >

    </div >
  );
};

export default Banner;
