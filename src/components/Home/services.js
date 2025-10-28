import { Truck, Ship, Headphones, Tag } from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Truck className="w-14 h-14 text-teal-900" />,
    title: "Fast Transportation",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting Ipsum has been the industry's standard dummy text ever since",
  },
  {
    id: 2,
    icon: <Ship className="w-14 h-14 text-teal-900" />,
    title: "Ocean Freight",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting Ipsum has been the industry's standard dummy text ever since",
  },
  {
    id: 3,
    icon: <Headphones className="w-14 h-14 text-teal-900" />,
    title: "Customs Services",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting Ipsum has been the industry's standard dummy text ever since",
  },
  {
    id: 4,
    icon: <Tag className="w-14 h-14 text-teal-900" />,
    title: "Monthly Rates",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting Ipsum has been the industry's standard dummy text ever since",
  },
];

export default function Services() {
  return (
    <section className="py-10 bg-white flex flex-col md:flex-row justify-between items-center px-6 md:px-20 gap-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center text-teal-900 mb-12">
          Our Services
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 p-8 rounded-lg text-left shadow-sm hover:shadow-md transition"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-lg font-semibold text-teal-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-md mb-6 leading-relaxed">
                {service.desc}
              </p>
              <a
                href="#"
                className="text-md text-teal-900 font-medium border-b border-b-gray-900"
              >
                More info
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-[#083c3e] text-white rounded-full border-0 px-5 py-3 mt-12">
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
}
