import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_URL}/haircut`;

export const getHaircutRecommendation = async (photoFile) => {
    const formData = new FormData();
    formData.append("photo", photoFile);

    const response = await axios.post(`${API_URL}/recommend`, formData, {
        headers: {"Content-Type": "multipart/form-data"},
    });

    return response.data;
};