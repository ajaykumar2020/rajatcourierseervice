import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./auth/login";
import Dashboard from "./pages/dashboard/dashboard";
import ProtectedRoute from "./auth/ProtectedRoute";
import ContactPage from "./components/contact";
import AboutPage from "./components/about";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage/>} />
          {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
          <Route
            exact
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
