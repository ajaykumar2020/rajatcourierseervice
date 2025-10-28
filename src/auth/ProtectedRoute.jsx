import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // ✅ Listen to Firebase auth changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    // Optional: Loading spinner or message while checking
    return (
      <div className="flex justify-center items-center h-screen text-lg font-semibold">
        Checking authentication...
      </div>
    );
  }

  // ✅ If no user → redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // ✅ If user is logged in → show dashboard
  return children;
}
