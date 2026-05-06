import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

// Icons
const TruckIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v4h-7V8z"/>
    <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
);
const PlaneIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
  </svg>
);
const ZapIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const HomeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const PackageIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
);
const BuildingIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><line x1="6" y1="11" x2="6" y2="11.01"/><line x1="10" y1="11" x2="10" y2="11.01"/><line x1="14" y1="11" x2="14" y2="11.01"/><line x1="18" y1="11" x2="18" y2="11.01"/>
  </svg>
);
const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.79-1.79a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/>
  </svg>
);

const services = [
  {
    id: "domestic",
    icon: <TruckIcon />,
    title: "Domestic Courier",
    tagline: "Pan-India Delivery",
    desc: "Fast and reliable courier delivery across all major cities and towns in India. We ensure your parcel reaches safely, on time, every time.",
    color: "teal",
    features: ["Door-to-door delivery", "Real-time tracking", "Same-day dispatch", "Fragile item handling", "Proof of delivery", "SMS & email alerts"],
    price: "Starting ₹49",
    time: "1–5 Business Days",
    badge: "Most Popular",
  },
  {
    id: "international",
    icon: <PlaneIcon />,
    title: "International Courier",
    tagline: "Worldwide Shipping",
    desc: "Ship your parcels to 30+ countries worldwide with competitive rates, customs clearance assistance, and full tracking visibility.",
    color: "blue",
    features: ["30+ countries covered", "Customs clearance support", "Insurance available", "Document & parcel shipping", "Priority handling", "Online tracking"],
    price: "Starting ₹799",
    time: "3–10 Business Days",
    badge: "Global",
  },
  {
    id: "express",
    icon: <ZapIcon />,
    title: "Express Delivery",
    tagline: "Same Day / Next Day",
    desc: "When every hour counts, our express delivery service guarantees same-day or next-day delivery within the city and nearby regions.",
    color: "amber",
    features: ["Same-day delivery", "Next-day guarantee", "Priority pickup", "Dedicated delivery agent", "Live GPS tracking", "Urgent document service"],
    price: "Starting ₹149",
    time: "Same Day / Next Day",
    badge: "Fastest",
  },
  {
    id: "home-relocation",
    icon: <HomeIcon />,
    title: "Home Relocation",
    tagline: "Packers & Movers",
    desc: "Complete home shifting solutions with professional packing, safe loading, transport, unloading, and unpacking at your new home.",
    color: "rose",
    features: ["Professional packing", "Furniture disassembly", "Safe transportation", "Unloading & unpacking", "Insurance coverage", "Pan-India service"],
    price: "Starting ₹4,999",
    time: "Scheduled",
    badge: "Full Service",
  },
  {
    id: "office-relocation",
    icon: <BuildingIcon />,
    title: "Office Relocation",
    tagline: "Business Shifting",
    desc: "Seamless office and commercial relocation services with minimal downtime. We handle IT equipment, furniture, and sensitive documents with care.",
    color: "violet",
    features: ["IT equipment handling", "Server & hardware moving", "Document management", "Weekend shifting available", "Minimal business downtime", "Post-move setup support"],
    price: "Starting ₹9,999",
    time: "Scheduled",
    badge: "Business",
  },
  {
    id: "free-pickup",
    icon: <PackageIcon />,
    title: "Free Pickup",
    tagline: "We Come to You",
    desc: "Book online and our agent will arrive at your doorstep to collect your parcel — completely free for orders above ₹199.",
    color: "green",
    features: ["Free doorstep pickup", "Flexible time slots", "Same-day pickup available", "Online booking", "Instant confirmation", "Trained pickup agents"],
    price: "Free (orders ₹199+)",
    time: "Within 2–4 Hours",
    badge: "Free",
  },
];

const colorMap = {
  teal:   { bg: "bg-teal-50",   icon: "bg-teal-100 text-teal-600",   badge: "bg-teal-600 text-white",   border: "border-teal-200",   btn: "bg-teal-600 hover:bg-teal-700",   dot: "bg-teal-500" },
  blue:   { bg: "bg-blue-50",   icon: "bg-blue-100 text-blue-600",   badge: "bg-blue-600 text-white",   border: "border-blue-200",   btn: "bg-blue-600 hover:bg-blue-700",   dot: "bg-blue-500" },
  amber:  { bg: "bg-amber-50",  icon: "bg-amber-100 text-amber-600", badge: "bg-amber-500 text-white",  border: "border-amber-200",  btn: "bg-amber-500 hover:bg-amber-600", dot: "bg-amber-500" },
  rose:   { bg: "bg-rose-50",   icon: "bg-rose-100 text-rose-600",   badge: "bg-rose-600 text-white",   border: "border-rose-200",   btn: "bg-rose-600 hover:bg-rose-700",   dot: "bg-rose-500" },
  violet: { bg: "bg-violet-50", icon: "bg-violet-100 text-violet-600", badge: "bg-violet-600 text-white", border: "border-violet-200", btn: "bg-violet-600 hover:bg-violet-700", dot: "bg-violet-500" },
  green:  { bg: "bg-green-50",  icon: "bg-green-100 text-green-600", badge: "bg-green-600 text-white",  border: "border-green-200",  btn: "bg-green-600 hover:bg-green-700", dot: "bg-green-500" },
};

const faqs = [
  { q: "How do I book a pickup?", a: "You can book a pickup online through our website, call us directly, or send a WhatsApp message. Our agent will arrive at your doorstep within 2–4 hours." },
  { q: "Is my parcel insured?", a: "Yes, all parcels are covered with basic insurance. You can also opt for additional insurance coverage for high-value items at a nominal charge." },
  { q: "Do you provide international shipping?", a: "Absolutely! We ship to 30+ countries worldwide with customs clearance support. Contact us for a customized international shipping quote." },
  { q: "How can I track my shipment?", a: "Every shipment gets a unique tracking ID. You can track your parcel in real-time on our website under the 'Tracking' section, or via SMS updates." },
  { q: "What items are not allowed?", a: "Prohibited items include hazardous materials, flammable substances, live animals, perishable food, and illegal goods. Contact us for a detailed list." },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* Navbar */}
       <Header/>

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="absolute rounded-full border border-white/10"
              style={{ width: `${150 + i * 100}px`, height: `${150 + i * 100}px`, right: `-${50 + i * 30}px`, top: `${-50 + i * 20}px` }} />
          ))}
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <p className="text-teal-300 text-sm font-semibold uppercase tracking-widest mb-4">What We Offer</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Our <span className="text-teal-300">Services</span>
          </h1>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            From local parcels to international shipments, home relocations to office moves — we have a complete logistics solution tailored for you.
          </p>
          {/* Quick trust badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: <ShieldIcon />, text: "Insured Deliveries" },
              { icon: <ClockIcon />, text: "24/7 Support" },
              { icon: <CheckIcon />, text: "Free Pickup Available" },
            ].map((badge) => (
              <div key={badge.text} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 text-white text-sm font-medium">
                <span className="text-teal-300">{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const c = colorMap[service.color];
            const isActive = activeService === service.id;
            return (
              <div key={service.id}
                className={`bg-white rounded-3xl border-2 transition-all duration-300 overflow-hidden cursor-pointer group ${isActive ? `${c.border} shadow-xl` : "border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-200"}`}
                onClick={() => setActiveService(isActive ? null : service.id)}
              >
                {/* Card Top */}
                <div className={`p-6 ${isActive ? c.bg : ""} transition-colors duration-300`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${c.icon} transition-transform duration-300 group-hover:scale-110`}>
                      {service.icon}
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${c.badge}`}>{service.badge}</span>
                  </div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{service.tagline}</p>
                  <h3 className="text-xl font-black text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
                </div>

                {/* Price + Time */}
                <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Price</p>
                    <p className="font-bold text-gray-900 text-sm">{service.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400 mb-0.5">Delivery Time</p>
                    <p className="font-bold text-gray-900 text-sm">{service.time}</p>
                  </div>
                </div>

                {/* Expandable Features */}
                {isActive && (
                  <div className={`px-6 pb-6 ${c.bg} border-t ${c.border}`}>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-4 mb-3">What's Included</p>
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      {service.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className={`w-5 h-5 rounded-full ${c.dot} flex items-center justify-center flex-shrink-0`}>
                            <span className="text-white"><CheckIcon /></span>
                          </div>
                          {f}
                        </div>
                      ))}
                    </div>
                    <Link to="/contact"
                      className={`w-full py-3 rounded-xl ${c.btn} text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Book This Service <ArrowRightIcon />
                    </Link>
                  </div>
                )}

                {/* Expand hint */}
                {!isActive && (
                  <div className="px-6 pb-5">
                    <button className={`w-full py-2.5 rounded-xl border-2 ${c.border} text-sm font-semibold transition-colors hover:${c.bg}`}
                      style={{ color: "inherit" }}>
                      View Details ↓
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Why Choose Us Banner */}
      <div className="bg-teal-700 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-teal-300 text-sm font-semibold uppercase tracking-widest mb-3">Why Rajat Courier?</p>
            <h2 className="text-3xl font-black text-white">The Rajat Difference</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { stat: "10K+", label: "Parcels Delivered" },
              { stat: "99%", label: "On-Time Rate" },
              { stat: "30+", label: "Countries Served" },
              { stat: "4.8★", label: "Customer Rating" },
            ].map((item) => (
              <div key={item.label} className="text-center bg-white/10 rounded-2xl py-8 px-4 border border-white/10">
                <p className="text-4xl font-black text-white mb-2">{item.stat}</p>
                <p className="text-teal-200 text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3">Simple Process</p>
          <h2 className="text-3xl font-black text-gray-900">How It Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-teal-100 z-0" />
          {[
            { step: "01", title: "Book Online", desc: "Choose your service and fill in pickup & delivery details on our website or app." },
            { step: "02", title: "Free Pickup", desc: "Our agent arrives at your doorstep and collects your parcel within hours." },
            { step: "03", title: "We Ship It", desc: "Your parcel enters our secure logistics network with real-time tracking enabled." },
            { step: "04", title: "Delivered!", desc: "Your parcel is delivered safely to the destination with proof of delivery." },
          ].map((item, i) => (
            <div key={i} className="relative z-10 text-center">
              <div className="w-20 h-20 rounded-2xl bg-teal-600 text-white flex flex-col items-center justify-center mx-auto mb-5 shadow-lg shadow-teal-200">
                <span className="text-xs font-bold text-teal-300">STEP</span>
                <span className="text-2xl font-black">{item.step}</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-gray-100 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3">Got Questions?</p>
            <h2 className="text-3xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${openFaq === i ? "border-teal-200 shadow-md" : "border-gray-100 shadow-sm"}`}>
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-gray-900 text-sm pr-4">{faq.q}</span>
                  <span className={`text-teal-600 text-xl font-bold flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="absolute rounded-full bg-white/5"
                style={{ width: `${60 + i * 40}px`, height: `${60 + i * 40}px`, left: `${(i * 13) % 100}%`, top: `${(i * 17) % 100}%` }} />
            ))}
          </div>
          <div className="relative">
            <h2 className="text-3xl font-black text-white mb-4">Ready to Ship?</h2>
            <p className="text-teal-100 mb-8 max-w-md mx-auto">Book a pickup now or contact us for a custom quote on bulk shipments and business contracts.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link to="/contact"
                className="px-8 py-3.5 rounded-xl bg-white text-teal-700 font-bold text-sm hover:bg-teal-50 transition-colors flex items-center gap-2">
                Book a Pickup <ArrowRightIcon />
              </Link>
              <a href="tel:+918650779013"
                className="px-8 py-3.5 rounded-xl border-2 border-white/40 text-white font-bold text-sm hover:bg-white/10 transition-colors flex items-center gap-2">
                <PhoneIcon /> Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
    <Footer/>
    </div>
  );
}