import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_URL}/appointments`;

export const createAppointment = async (appointmentData) => {
    const response = await axios.post(API_URL, appointmentData);
    return response.data;
};
