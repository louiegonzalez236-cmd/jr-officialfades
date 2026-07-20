import axios from "axios";

const API_URL = "http://localhost:5000/api/appointments";

export const createAppointment = async (appointmentData) => {
    const response = await axios.post(API_URL, appointmentData);
    return response.data;
};