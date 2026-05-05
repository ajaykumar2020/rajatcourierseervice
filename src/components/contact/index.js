import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

const MapPin = () => (
	<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
		<circle cx="12" cy="10" r="3" />
	</svg>
);

const Phone = () => (
	<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.79-1.79a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
	</svg>
);

const Mail = () => (
	<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
		<polyline points="22,6 12,13 2,6" />
	</svg>
);

const Clock = () => (
	<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<circle cx="12" cy="12" r="10" />
		<polyline points="12 6 12 12 16 14" />
	</svg>
);

const CheckCircle = () => (
	<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
		<polyline points="22 4 12 14.01 9 11.01" />
	</svg>
);

const Send = () => (
	<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<line x1="22" y1="2" x2="11" y2="13" />
		<polygon points="22 2 15 22 11 13 2 9 22 2" />
	</svg>
);

export default function ContactPage() {
	const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
	const [submitted, setSubmitted] = useState(false);
	const [focused, setFocused] = useState("");

	const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
	};

	const services = [
		"Domestic Courier",
		"International Courier",
		"Express Delivery",
		"Packers & Movers",
		"Free Pickup",
		"Other",
	];

	const contactInfo = [
		{ icon: <MapPin />, label: "Address", value: "Shop 2 North South City park near tibetan colony sahastradhara road Dehradun India" },
		{ icon: <Phone />, label: "Phone", value: "+91 8650779013\n+91 7668254662" },
		{ icon: <Mail />, label: "Email", value: "support@rajatcourier.com\nrs4610914@gmail.com" },
		{ icon: <Clock />, label: "Working Hours", value: "Mon–Sat: 9:00 AM – 8:00 PM\nSunday: 10:00 AM – 5:00 PM" },
	];

	const inputClass = (field) =>
		`w-full px-4 py-3 rounded-xl border-2 outline-none text-sm transition-all duration-200 bg-white ${focused === field
			? "border-teal-500 shadow-[0_0_0_4px_rgba(20,184,166,0.12)]"
			: "border-gray-200 hover:border-teal-300"
		} text-gray-800 placeholder-gray-400`;

	return (
		<div className="min-h-screen bg-gray-50 font-sans">
			{/* Navbar */}
			<Header />
			{/* Hero Banner */}
			<div className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-900 py-16 px-6 text-center relative overflow-hidden">
				<div className="absolute inset-0 opacity-10">
					{[...Array(20)].map((_, i) => (
						<div
							key={i}
							className="absolute w-2 h-2 rounded-full bg-white"
							style={{ left: `${(i * 5.3) % 100}%`, top: `${(i * 7.1) % 100}%`, opacity: 0.4 + (i % 3) * 0.2 }}
						/>
					))}
				</div>
				<div className="relative">
					<p className="text-teal-200 text-sm font-semibold uppercase tracking-widest mb-3">Get In Touch</p>
					<h1 className="text-4xl md:text-5xl font-black text-white mb-4">Contact Us</h1>
					<p className="text-teal-100 text-lg max-w-xl mx-auto leading-relaxed">
						Have a question or need a quote? Our team is ready to help with all your courier and logistics needs.
					</p>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-6xl mx-auto px-6 py-16">
				<div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

					{/* Left – Contact Info */}
					<div className="lg:col-span-2 space-y-6">
						<div>
							<h2 className="text-2xl font-bold text-gray-900 mb-1">We're here for you</h2>
							<p className="text-gray-500 text-sm">Reach out through any channel and we'll respond promptly.</p>
						</div>

						<div className="space-y-4">
							{contactInfo.map((info) => (
								<div
									key={info.label}
									className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-teal-200 hover:shadow-md transition-all duration-200 group"
								>
									<div className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-100 transition-colors">
										{info.icon}
									</div>
									<div>
										<p className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1">{info.label}</p>
										{info.value.split("\n").map((line, i) => (
											<p key={i} className="text-sm text-gray-700 leading-relaxed">{line}</p>
										))}
									</div>
								</div>
							))}
						</div>

						{/* Quick facts */}
						<div className="bg-teal-600 rounded-2xl p-6 text-white">
							<h3 className="font-bold text-lg mb-4">Why Choose Rajat?</h3>
							<div className="space-y-3">
								{["Free doorstep pickup", "Real-time tracking", "Pan-India + International", "Safe & insured delivery"].map((feat) => (
									<div key={feat} className="flex items-center gap-3 text-sm text-teal-100">
										<span className="text-teal-300"><CheckCircle /></span>
										<span>{feat}</span>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Right – Form */}
					<div className="lg:col-span-3">
						<div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8">
							{submitted ? (
								<div className="flex flex-col items-center justify-center py-16 text-center">
									<div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mb-5">
										<CheckCircle />
									</div>
									<h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
									<p className="text-gray-500 text-sm max-w-xs">
										Thank you for reaching out. Our team will get back to you within 24 hours.
									</p>
									<button
										onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
										className="mt-6 px-6 py-2.5 rounded-xl border-2 border-teal-500 text-teal-600 text-sm font-semibold hover:bg-teal-50 transition-colors"
									>
										Send Another
									</button>
								</div>
							) : (
								<>
									<div className="mb-8">
										<h2 className="text-2xl font-bold text-gray-900">Send us a message</h2>
										<p className="text-gray-400 text-sm mt-1">Fill in the details below and we'll be in touch.</p>
									</div>

									<form onSubmit={handleSubmit} className="space-y-5">
										<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
											<div>
												<label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Full Name *</label>
												<input
													type="text"
													name="name"
													required
													placeholder="e.g. Rajat Sharma"
													value={form.name}
													onChange={handleChange}
													onFocus={() => setFocused("name")}
													onBlur={() => setFocused("")}
													className={inputClass("name")}
												/>
											</div>
											<div>
												<label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Phone Number</label>
												<input
													type="tel"
													name="phone"
													placeholder="+91 98765 43210"
													value={form.phone}
													onChange={handleChange}
													onFocus={() => setFocused("phone")}
													onBlur={() => setFocused("")}
													className={inputClass("phone")}
												/>
											</div>
										</div>

										<div>
											<label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Email Address *</label>
											<input
												type="email"
												name="email"
												required
												placeholder="you@example.com"
												value={form.email}
												onChange={handleChange}
												onFocus={() => setFocused("email")}
												onBlur={() => setFocused("")}
												className={inputClass("email")}
											/>
										</div>

										<div>
											<label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Service Required</label>
											<select
												name="service"
												value={form.service}
												onChange={handleChange}
												onFocus={() => setFocused("service")}
												onBlur={() => setFocused("")}
												className={inputClass("service") + " cursor-pointer"}
											>
												<option value="">Select a service...</option>
												{services.map((s) => (
													<option key={s} value={s}>{s}</option>
												))}
											</select>
										</div>

										<div>
											<label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Your Message *</label>
											<textarea
												name="message"
												required
												rows={5}
												placeholder="Tell us about your shipment, pickup location, destination, or any special requirements..."
												value={form.message}
												onChange={handleChange}
												onFocus={() => setFocused("message")}
												onBlur={() => setFocused("")}
												className={inputClass("message") + " resize-none leading-relaxed"}
											/>
										</div>

										<button
											type="submit"
											className="w-full py-4 rounded-xl bg-teal-600 hover:bg-teal-700 active:scale-[0.98] text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-200 shadow-md shadow-teal-200"
										>
											<Send />
											Send Message
										</button>

										<p className="text-center text-xs text-gray-400">
											We typically respond within 1–2 business hours.
										</p>
									</form>
								</>
							)}
						</div>
					</div>
				</div>

				{/* Map placeholder */}
				<div className="mt-14 rounded-3xl overflow-hidden border border-gray-100 shadow-md bg-white">
					<div className="bg-teal-50 px-6 py-4 border-b border-teal-100 flex items-center gap-2">
						<span className="text-teal-600"><MapPin size={18} /></span>
						<span className="font-semibold text-teal-800 text-sm">
							Our Location — Shop 2 North South City park near tibetan colony sahastradhara road Dehradun India
						</span>
					</div>

					{/* Exact location marker using lat/long */}
					<iframe
						title="Rajat Courier Location"
						src="https://www.google.com/maps?q=30.3698942,78.096296&z=17&output=embed"
						width="100%"
						height="400"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>

					{/* Open in Maps button */}
					<div className="px-6 py-3 bg-white border-t border-gray-100 flex justify-end">
						<a
							href="https://www.google.com/maps?q=Rajat+Courier+Services+DTDC&ll=30.3698942,78.096296"
							target="_blank"
							rel="noopener noreferrer"
							className="text-xs text-teal-600 font-semibold hover:text-teal-800 flex items-center gap-1"
						>
							<MapPin size={13} /> Open in Google Maps →
						</a>
					</div>
				</div>
			</div>

			{/* Footer strip */}
			<Footer />
		</div>
	);
}