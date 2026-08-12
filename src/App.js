import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Hero from "./components/Hero";
import Services from "./components/Services";
import Menu from "./components/Menu";
import Work from "./components/Work";
import Barbers from "./components/Barbers";
import About from "./components/About";
import Footer from "./components/Footer";

import Appointment from "./components/Appointment";
import AppointmentsDashboard from "./pages/AppointmentsDashboard";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <div style={{ position: "relative" }}>
              
              {/* Small Admin Login Link in the top-right corner */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  zIndex: 9999
                }}
              >
                <Link
                  to="/admin-login"
                  style={{
                    color: "#555",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: "600",
                    padding: "6px 10px",
                    borderRadius: "6px",
                    background: "rgba(255,255,255,0.8)",
                    boxShadow: "0 0 4px rgba(0, 0, 0, 0.15)"
                  }}
                >
                  Admin Login
                </Link>
              </div>

              <Hero />
              <Services />
              <Menu />
              <Work />
              <Barbers />
              <About />
              <Footer />
            </div>
          }
        />

        {/* Appointment Page */}
        <Route path="/appointment" element={<Appointment />} />

        {/* Admin Login */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Dashboard Page (Protected) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AppointmentsDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
