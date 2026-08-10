import { BrowserRouter, Routes, Route } from "react-router-dom";

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
            <div>
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

