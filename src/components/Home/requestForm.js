import React, { useState } from "react";
import { app } from "../../firebase"
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";
export default function RequestForm() {
  const db = getFirestore(app);
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
  const [formData, setFormData] = useState({
	firstName: "",
	lastName: "",
	email: "",
	phone: "",
	fromAddress: "",
	toAddress: "",
  });

  const handleChange = (e) => {
	setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
	e.preventDefault();
	console.log("Form Submitted:", formData);

	try {
	  // ✅ Reference your Firestore collection
	  const formCollection = collection(db, "default");

	  // ✅ Add a new document with formData
	  const docRef = await addDoc(formCollection, formData);

	  console.log("Document written with ID:", docRef.id);
	  alert("Form submitted successfully!");

	  // Optionally clear the form
	  setFormData({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		fromAddress: "",
		toAddress: "",
	  });
	} catch (error) {
	  console.error("❌ Error adding document:", error);
	  alert("Error submitting form. Check console for details.");
	}
  };
  return (
	<section className="bg-white flex flex-col justify-center items-center px-6 md:px-20">
  <form
    onSubmit={handleSubmit}
    className="bg-white shadow-xl rounded-2xl p-12 w-full max-w-[1200px]"
  >
    <h2 className="text-4xl font-semibold text-center text-teal-900 mb-12">
      Request Form
    </h2>

    {/* Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block mb-1 font-semibold">First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter first name"
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-teal-400"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter last name"
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-teal-400"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-teal-400"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-teal-400"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">From</label>
        <textarea
          name="fromAddress"
          value={formData.fromAddress}
          onChange={handleChange}
          placeholder="Enter pickup address"
          rows="3"
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-teal-400"
          required
        ></textarea>
      </div>

      <div>
        <label className="block mb-1 font-semibold">To</label>
        <textarea
          name="toAddress"
          value={formData.toAddress}
          onChange={handleChange}
          placeholder="Enter delivery address"
          rows="3"
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-teal-400"
          required
        ></textarea>
      </div>
    </div>

    <div className="text-center mt-14">
      <button
        type="submit"
        className="bg-teal-900 text-white px-10 py-3 rounded-full hover:bg-teal-800 transition"
      >
        Submit
      </button>
    </div>
  </form>
</section>

  );
}
