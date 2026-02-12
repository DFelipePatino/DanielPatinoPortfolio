import axios from "axios";

const BASE_URL = "https://dogs-project-d53t.onrender.com";

export const dogsWakeUp = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/dogs`);
        return data;
    } catch (error) {
        console.error("Error fetching dogs:", error);
        return [];
    }
};
