import React, { useState } from "react";
import axios from "axios";

function AdminLogin() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Logged in successfully!");
      window.location.href = "/dashboard";
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <section>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" value={form.username} onChange={handleChange} placeholder="Username" />
        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </section>
  );
}

export default AdminLogin;
