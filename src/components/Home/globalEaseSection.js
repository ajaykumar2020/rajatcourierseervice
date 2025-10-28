import React from "react";

const features = [
  {
    title: "Easy booking, multiple services",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
  },
  {
    title: "One place to manage all your shipments",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
  },
  {
    title: "Giving you clear visibility",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
  },
];

const GlobalEaseSection = () => {
  return (
    <section className="pt-20 pb-10 bg-white flex flex-col md:flex-row justify-between items-center px-6 md:px-20 gap-12">
      {/* Left Content */}
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-5xl font-bold text-[#073b3a] mb-6 leading-snug">
          Go global with ease
        </h2>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          We simplify your logistics, while plugging your company into a world of opportunities. 
          We believe every company deserves to feel the excitement of going global, regardless of size.
        </p>

        <button className="px-8 py-3 border border-teal-400 text-teal-500 rounded-full hover:bg-teal-50 transition font-medium">
          Read More
        </button>
      </div>

      {/* Right Features List */}
      <div className="w-full md:w-1/2 space-y-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-md p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold text-[#073b3a] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GlobalEaseSection;
