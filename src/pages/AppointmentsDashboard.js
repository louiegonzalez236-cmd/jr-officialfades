import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AppointmentsDashboard.css";

function AppointmentsDashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    const res = await axios.get("http://localhost:5000/api/appointments");
    setAppointments(res.data);
  };

  const deleteAppointment = async (id) => {
    await axios.delete(`http://localhost:5000/api/appointments/${id}`);
    fetchAppointments(); // refresh list
  };

  return (
    <section className="dashboard">
      <h2>Appointments Dashboard</h2>

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
