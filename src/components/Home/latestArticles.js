import React, { useState } from "react";

export default function LatestArticles() {
  
  const articles = [
    {
      id: 1,
      img: "https://demo.templatesjungle.com/deliver/images/plane.png",
      title: "Learn and stay updated with",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting Ipsum has been the industry's standard dummy text ever since",
    },
    {
      id: 2,
      img: "https://demo.templatesjungle.com/deliver/images/box.png",
      title: "Asia-Pacific shipping update",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting Ipsum has been the industry's standard dummy text ever since",
    },
    {
      id: 3,
      img: "https://demo.templatesjungle.com/deliver/images/plane.png",
      title: "Stay up to date with logistics",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting Ipsum has been the industry's standard dummy text ever since",
    },
  ];
 
  return (
    <section className="py-10 bg-white flex flex-col md:flex-row justify-between items-center px-6 md:px-20 gap-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center text-teal-900 mb-12">
          Latest Articles
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
  );
}
