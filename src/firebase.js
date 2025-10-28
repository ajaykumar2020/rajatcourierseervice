// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDxnPCbTa6-A0VCnYwudr05CxGBnaSLas0",
	authDomain: "rajatcourierservice.firebaseapp.com",
	projectId: "rajatcourierservice",
	storageBucket: "rajatcourierservice.firebasestorage.app",
	messagingSenderId: "505987702779",
	appId: "1:505987702779:web:5f04ed3a0c3ca12f11f55e",
	measurementId: "G-827H38WP0P"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

 