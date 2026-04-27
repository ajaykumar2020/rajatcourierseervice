import React, { useState } from "react";
import HouseShift from "../../assets/house_2.jpeg"
export default function LatestArticles() {
  
  const articles = [
    {
      id: 1,
      img: HouseShift,
      title: "Smart Tips for Hassle-Free House Shifting",
      desc: "Moving to a new home can be stressful — but it doesn’t have to be. Learn simple tricks to make your move smooth and organized.",
    },
    {
      id: 2,
      img: "https://demo.templatesjungle.com/deliver/images/box.png",
      title: "Why Professional Packers & Movers Save You Time",
      desc: "Discover how experts ensure faster, safer relocations — without damaging your belongings.",
    },
    {
      id: 3,
      img: "https://demo.templatesjungle.com/deliver/images/plane.png",
      title: "Corporate Logistics Made Easy",
      desc: "From scheduled deliveries to warehouse storage, we streamline business logistics for better efficiency.",
    }
  ];
 
  return (
    <>
    <section className="py-10 bg-white flex flex-col md:flex-row justify-between items-center px-6 md:px-20 gap-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center text-teal-900 mb-12">
        Latest Articles & Updates
        </h2>

        {/* Articles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white  overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img
                src={article.img}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-teal-900 mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {article.desc}
                </p>
                <a
                  href="#"
                  className="text-md text-teal-900 font-medium border-b border-b-gray-900"
                >
                  More info
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
      </div>
    </section>
   

    </>
  );
}
