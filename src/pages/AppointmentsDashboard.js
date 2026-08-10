import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AppointmentsDashboard.css";

function AppointmentsDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] =useState("");

  // FETCH ALL APPOINTMENTS (this was missing)
  const fetchAppointments = async () => {
    const res = await api.get("http://localhost:5000/api/appointments");
    setAppointments(res.data);
  };

  // FETCH TODAY'S APPOINTMENTS
  const fetchTodayAppointments = async () => {
    const res = await api.get("http://localhost:5000/api/appointments/today");
    setAppointments(res.data);
  };

  const fetchAppointmentsByDate = async () => {
    if (!selectedDate) return;
    
    const res = await api.get(
        `http://localhost:5000/api/appointments/date/${selectedDate}`
    );

    setAppointments(res.data);
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const deleteAppointment = async (id) => {
    await api.delete(`http://localhost:5000/api/appointments/${id}`);
    fetchAppointments(); // refresh list
  };

  const api = axios.create({
  baseURL: "http://localhost:5000/api/appointments",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});


  return (
    <section className="dashboard">
      <h2>Appointments Dashboard</h2>

      <button onClick={fetchTodayAppointments} className="today-btn">
        Show Today's Appointments
      </button>

      <button onClick={fetchAppointments} className="show-all-btn">
        Show All Appointments
      </button>
      <input
      type="date"
      value={selectedDate}
      onChange={(e) => setSelectedDate(e.target.value)}
      />

      <button onClick={fetchAppointmentsByDate} className="date-filter-btn">
  Filter by Date
</button>


      <table className="appointments-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Barber</th>
            <th>Date</th>
            <th>Time</th>
            <th>Service</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((appt) => (
            <tr key={appt._id}>
              <td>{appt.name}</td>
              <td>{appt.barber}</td>
              <td>{appt.date}</td>
              <td>{appt.time}</td>
              <td>{appt.service}</td>
              <td>
                <button onClick={() => deleteAppointment(appt._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default AppointmentsDashboard;
