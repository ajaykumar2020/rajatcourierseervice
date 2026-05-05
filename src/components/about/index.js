import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const TruckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" rx="1"/>
    <path d="M16 8h4l3 5v4h-7V8z"/>
    <circle cx="5.5" cy="18.5" r="2.5"/>
    <circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const GlobeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ value, suffix, label, start }) {
  const count = useCountUp(value, 1800, start);
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-black text-white mb-1">
        {count}{suffix}
      </div>
      <div className="text-teal-200 text-sm font-medium">{label}</div>
    </div>
  );
}

export default function AboutPage() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const values = [
    { icon: <TruckIcon />, title: "Speed & Reliability", desc: "We commit to on-time delivery every single time. Your shipment is our priority from pickup to doorstep." },
    { icon: <ShieldIcon />, title: "Safe & Insured", desc: "Every parcel is handled with care and covered with insurance, giving you complete peace of mind." },
    { icon: <GlobeIcon />, title: "Wide Coverage", desc: "From local streets in Dehradun to international destinations — we go wherever your package needs to go." },
    { icon: <HeartIcon />, title: "Customer First", desc: "Our 24/7 support team is always ready to assist. We don't rest until you're satisfied." },
  ];

  const team = [
    { name: "Rajat Sharma", role: "Founder & CEO", initials: "RS", color: "bg-teal-100 text-teal-700" },
    { name: "Priya Negi", role: "Operations Head", initials: "PN", color: "bg-amber-100 text-amber-700" },
    { name: "Amit Rawat", role: "Logistics Manager", initials: "AR", color: "bg-blue-100 text-blue-700" },
    { name: "Sunita Bisht", role: "Customer Relations", initials: "SB", color: "bg-rose-100 text-rose-700" },
  ];

  const milestones = [
    { year: "2015", title: "Founded in Dehradun", desc: "Started with a single van and a dream to revolutionize local courier services." },
    { year: "2017", title: "Pan-India Expansion", desc: "Expanded operations across 50+ cities with a dedicated fleet of vehicles." },
    { year: "2020", title: "International Launch", desc: "Launched international courier services covering 30+ countries worldwide." },
    { year: "2023", title: "Packers & Movers", desc: "Added home and office relocation services to our growing portfolio." },
    { year: "2025", title: "10K+ Happy Clients", desc: "Crossed 10,000 satisfied customers with a 4.8★ average rating." },
  ];

  const reviews = [
    { name: "Vikram Singh", text: "Rajat Courier is the most reliable service in Dehradun. My parcels always arrive on time!", rating: 5 },
    { name: "Anita Kapoor", text: "Excellent packers and movers service. They handled everything carefully during our office relocation.", rating: 5 },
    { name: "Rohit Joshi", text: "Best international courier rates I've found. Fast delivery to Dubai within 3 days!", rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navbar */}
     <Header/>

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-teal-700 via-teal-600 to-teal-900 overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="absolute rounded-full bg-white opacity-5"
              style={{ width: `${20 + (i % 5) * 15}px`, height: `${20 + (i % 5) * 15}px`, left: `${(i * 3.3) % 100}%`, top: `${(i * 7.1) % 100}%` }} />
          ))}
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-teal-300 text-sm font-semibold uppercase tracking-widest mb-4">About Us</p>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Delivering Trust<br />
              <span className="text-teal-300">Since 2015</span>
            </h1>
            <p className="text-teal-100 text-lg leading-relaxed mb-8">
              Rajat Courier & Movers Service was born in Dehradun with a simple mission — to make shipping fast, safe, and stress-free for everyone. Today, we're proud to serve thousands of customers across India and internationally.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-6 py-3 rounded-xl bg-white text-teal-700 font-bold text-sm hover:bg-teal-50 transition-colors flex items-center gap-2">
                Get a Quote <ArrowRight />
              </Link>
              <Link to="/services" className="px-6 py-3 rounded-xl border-2 border-teal-300 text-white font-bold text-sm hover:bg-teal-600 transition-colors">
                Our Services
              </Link>
            </div>
          </div>
          {/* Decorative card */}
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="space-y-4">
                {["Easy Booking", "Real-time Tracking", "Free Pickup", "Insured Delivery", "24/7 Support"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-white">
                    <div className="w-6 h-6 rounded-full bg-teal-400 flex items-center justify-center flex-shrink-0">
                      <CheckIcon />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/20 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["RS", "PN", "AR"].map((i) => (
                    <div key={i} className="w-9 h-9 rounded-full bg-teal-400 border-2 border-white flex items-center justify-center text-xs font-bold text-teal-900">{i}</div>
                  ))}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">10,000+ Happy Clients</p>
                  <div className="flex text-yellow-400 gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div ref={statsRef} className="bg-teal-800 py-14 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          <StatCard value={10} suffix="K+" label="Happy Clients" start={statsVisible} />
          <StatCard value={50} suffix="+" label="Cities Covered" start={statsVisible} />
          <StatCard value={30} suffix="+" label="Countries" start={statsVisible} />
          <StatCard value={9} suffix="" label="Years of Service" start={statsVisible} />
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3">Our Story</p>
            <h2 className="text-3xl font-black text-gray-900 mb-6">From One Van to a Nationwide Network</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>It all started in 2015 when Rajat Saini, a young entrepreneur from Dehradun, saw how difficult and unreliable local courier services were for small businesses and individuals alike.</p>
              <p>With just one van, a smartphone, and an unwavering commitment to reliability, he launched Rajat Courier Service. Word spread quickly — packages actually arrived on time, handled with care, and customers were treated with respect.</p>
              <p>Today, we operate a fleet of 50+ vehicles, employ over 100 dedicated staff, and have served customers from the hills of Uttarakhand to every corner of India and beyond.</p>
            </div>
          </div>
          {/* Timeline */}
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{m.year.slice(2)}</div>
                  {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-teal-100 mt-2" />}
                </div>
                <div className="pb-6">
                  <p className="text-xs text-teal-600 font-semibold mb-1">{m.year}</p>
                  <h3 className="font-bold text-gray-900 mb-1">{m.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3">What Drives Us</p>
            <h2 className="text-3xl font-black text-gray-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-teal-200 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-5 group-hover:bg-teal-100 transition-colors">
                  {v.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3">The People Behind It</p>
          <h2 className="text-3xl font-black text-gray-900">Meet Our Team</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center hover:shadow-md hover:border-teal-200 transition-all duration-300 group">
              <div className={`w-16 h-16 rounded-2xl ${member.color} flex items-center justify-center text-xl font-black mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                {member.initials}
              </div>
              <h3 className="font-bold text-gray-900 text-sm">{member.name}</h3>
              <p className="text-xs text-gray-400 mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-teal-700 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal-300 text-sm font-semibold uppercase tracking-widest mb-3">Testimonials</p>
            <h2 className="text-3xl font-black text-white">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex text-yellow-400 gap-1 mb-4">
                  {[...Array(r.rating)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className="text-white/90 text-sm leading-relaxed mb-5">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-teal-400 flex items-center justify-center text-xs font-bold text-teal-900">
                    {r.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <span className="text-white font-semibold text-sm">{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-black text-gray-900 mb-4">Ready to Ship with Us?</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">Join thousands of happy customers who trust Rajat Courier & Movers for all their logistics needs.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/contact" className="px-8 py-3.5 rounded-xl bg-teal-600 text-white font-bold hover:bg-teal-700 transition-colors flex items-center gap-2">
            Book a Pickup <ArrowRight />
          </Link>
          <Link to="/contact" className="px-8 py-3.5 rounded-xl border-2 border-teal-500 text-teal-600 font-bold hover:bg-teal-50 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Footer */}
    <Footer/>
    </div>
  );
}