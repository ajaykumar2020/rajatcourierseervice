import React from "react";
import LeftLog from "../../assets/imagelogo.png"
import LeftLog1 from "../../assets/imagelogo1.png"
const Banner = () => {
  return (
    <div>
      {" "}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between flex-1 px-10 md:px-20 bg-gray-100">
        {/* Left Text Content */}
        <div className="max-w-xl space-y-6">
          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            We offer a wide <br /> range of logistics <br /> solutions.
          </h2>

          <ul className="space-y-2 text-gray-800 font-medium">
            <li>1. Easy booking</li>
            <li>2. Global Coverage</li>
            <li>3. Customer Support</li>
            <li>4. Free Pickup Services</li>
          </ul>

          <a
            href="#"
            className="inline-block border-b-2 border-gray-900 text-gray-900 font-semibold mt-4 hover:opacity-80"
          >
            Get Started
          </a>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end mt-10 md:mt-0">
          <img
            src={LeftLog}
            alt="Delivery Rider"
            className="w-[400px] md:w-[500px] lg:w-[550px]"
          />
        </div>
      </section>
    </div>
  );
};

export default Banner;
