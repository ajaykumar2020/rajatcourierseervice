import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Bell,
  Search,
  User,
  ShoppingCart,
  Package,
  Users,
} from "lucide-react";
import { signOut } from "firebase/auth";
import { auth, db } from "../../firebase";
import { collection, getDocs, doc, updateDoc,onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("new"); // "new" | "accepted"
  const [requests, setRequests] = useState([]);
  const [acceptedRequests, setAcceptedRequests] = useState([]);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  // 🔹 Fetch requests
  useEffect(() => {
    let unsubscribe;
  
    if (activePage === "new") {
      unsubscribe = onSnapshot(collection(db, "default"), (snapshot) => {
        const allRequests = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
  
        // 🔹 Sort newest first — assuming you store createdAt (timestamp)
        const sorted = allRequests
          .filter((r) => r.status === "new")
          .sort((a, b) => {
            if (a.createdAt && b.createdAt) {
              return b.createdAt.seconds - a.createdAt.seconds; // newest first
            }
            return 0;
          });
  
        setRequests(sorted);
      });
    } else if (activePage === "accepted") {
      unsubscribe = onSnapshot(collection(db, "default"), (snapshot) => {
        const allRequests = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
  
        const sorted = allRequests
          .filter((r) => r.status === "accepted")
          .sort((a, b) => {
            if (a.createdAt && b.createdAt) {
              return b.createdAt.seconds - a.createdAt.seconds;
            }
            return 0;
          });
  
        setAcceptedRequests(sorted);
      });
    }
  
    return () => unsubscribe && unsubscribe();
  }, [activePage]);
  
  

  // 🔹 Handle Accept
  const handleAccept = async (id) => {
    try {
      const docRef = doc(db, "default", id);
      await updateDoc(docRef, { status: "accepted" });

      // Update local UI
      const acceptedItem = requests.find((r) => r.id === id);
      setRequests((prev) => prev.filter((r) => r.id !== id));
      if (acceptedItem) {
        setAcceptedRequests((prev) => [...prev, { ...acceptedItem, status: "accepted" }]);
      }
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  useEffect(() => {
    if (activePage === "new" || activePage === "accepted") {
      // this forces React to re-render the current data from state
      setRequests((r) => [...r]);
      setAcceptedRequests((r) => [...r]);
    }
  }, [activePage]);
  
  // 🔹 Table UI
  const renderTable = (data, showAcceptBtn = false) => (
    <div className="bg-white rounded-xl shadow overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="p-4 font-medium">Name</th>
            <th className="p-4 font-medium">Email</th>
            <th className="p-4 font-medium">Phone No.</th>
            <th className="p-4 font-medium">From</th>
            <th className="p-4 font-medium">To</th>
            {showAcceptBtn && <th className="p-4 font-medium">Action</th>}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center p-6 text-gray-500">
                No records found.
              </td>
            </tr>
          ) : (
            data.map((item, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium">
                  {item.firstName} {item.lastName}
                </td>
                <td className="p-4 text-gray-600">{item.email}</td>
                <td className="p-4 font-medium">{item.phone}</td>
                <td className="p-4 text-gray-600">{item.fromAddress}</td>
                <td className="p-4">{item.toAddress}</td>
                {showAcceptBtn && (
                  <td className="p-4">
                    <button
                      onClick={() => handleAccept(item.id)}
                      className="bg-[#134e4a] text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
                    >
                      Accept
                    </button>
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed z-40 inset-y-0 left-0 w-64 bg-[#134e4a] text-white transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 md:static md:inset-0`}
      >
        <div className="flex items-center justify-center h-16 text-2xl font-bold border-b border-white/10">
          Rajat-Dashboard
        </div>

        <nav className="p-4 space-y-2">
          <button
            onClick={() => setActivePage("new")}
            className={`flex w-full items-center gap-3 p-2 rounded-md ${
              activePage === "new" ? "bg-white/20" : "hover:bg-white/10"
            }`}
          >
            <Users size={18} /> New Requests
          </button>

          <button
            onClick={() => setActivePage("accepted")}
            className={`flex w-full items-center gap-3 p-2 rounded-md ${
              activePage === "accepted" ? "bg-white/20" : "hover:bg-white/10"
            }`}
          >
            <Package size={18} /> Accepted Requests
          </button>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between bg-white shadow-md px-4 h-16 sticky top-0 z-30">
          <div className="flex items-center gap-2">
            <button
              className="md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex items-center bg-gray-100 rounded-lg px-3 py-1">
              <Search size={18} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none px-2 text-sm w-32 md:w-64"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Bell size={20} className="text-gray-600" />
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="p-6 space-y-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow p-6 flex gap-5 items-center">
              <div className="bg-[#e6f8fa] p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center">
                <Users className="text-[#134e4a] mb-2" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">8,282</h3>
                <p className="text-gray-500">New Users</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6 flex gap-5 items-center">
              <div className="bg-[#e6f8fa] p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center">
                <ShoppingCart className="text-[#134e4a] mb-2" size={32} />
              </div>

              <div>
                <h3 className="text-2xl font-bold">200,521</h3>
                <p className="text-gray-500">Total Orders</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6 flex gap-5 items-center">
              <div className="bg-[#e6f8fa] p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center">
                <Package className="text-[#134e4a] mb-2" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">215,542</h3>
                <p className="text-gray-500">Available Products</p>
              </div>
            </div>
          </div>
          {activePage === "new" && (
            <>
              <h2 className="text-2xl font-bold mb-4">🆕 New Requests</h2>
              {renderTable(requests, true)}
            </>
          )}

          {activePage === "accepted" && (
            <>
              <h2 className="text-2xl font-bold mb-4">✅ Accepted Requests</h2>
              {renderTable(acceptedRequests, false)}
            </>
          )}
        </main>
      </div>
    </div>
  );
}
