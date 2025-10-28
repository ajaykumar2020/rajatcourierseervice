import React, { useState } from "react";
import {
  Menu,
  X,
  Bell,
  Search,
  User,
  ShoppingCart,
  Package,
  Users,
  Edit,
  Trash2,
} from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed z-40 inset-y-0 left-0 w-64 bg-[#134e4a] text-white transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 md:static md:inset-0`}
      >
        <div className="flex items-center justify-center h-16 text-2xl font-bold border-b border-white/10">
          V-Dashboard
        </div>

        <nav className="p-4 space-y-2">
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-white/10"
          >
            <Users size={18} /> Dashboard
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-white/10"
          >
            <Package size={18} /> UI Elements
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-white/10"
          >
            <ShoppingCart size={18} /> Tables
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-white/10"
          >
            <User size={18} /> Forms
          </a>
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

        {/* Dashboard Content */}
        <main className="p-6 space-y-6">
          {/* Cards */}
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

          {/* Table */}
          <div className="bg-white rounded-xl shadow overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="p-4 font-medium">Name</th>
                  <th className="p-4 font-medium">Title</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Role</th>
                  <th className="p-4 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(6)].map((_, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="p-4 flex items-center gap-3">
                      <img
                        src={`https://i.pravatar.cc/40?img=${i + 1}`}
                        alt="avatar"
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="font-medium">John Doe</p>
                        <p className="text-sm text-gray-500">
                          john@example.com
                        </p>
                      </div>
                    </td>
                    <td className="p-4 text-gray-600">
                      Software Engineer
                      <br />
                      <span className="text-sm text-gray-400">Web dev</span>
                    </td>
                    <td className="p-4">
                      <span className="text-[#1f2937] font-semibold bg-[#e6f8fa] px-2 py-1 rounded-full text-sm">
                        Active
                      </span>
                    </td>
                    <td className="p-4 text-gray-600">Owner</td>
                    <td className="p-4 text-[#134e4a] font-medium flex items-center gap-3">
                      <button
                        onClick={() => console.log("Edit user:", i)}
                        className="hover:text-blue-600 text-[#1f2937] transition"
                        title="Edit"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => console.log("Delete user:", i)}
                        className="hover:text-red-600 text-red-600 transition"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
