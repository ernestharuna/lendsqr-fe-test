import axios from "axios";
import { env } from "../utils/config";

const interceptor = axios.create();

interceptor.interceptors.request.use((config) => {
    const token = env.VITE_API_KEY;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

interceptor.interceptors.response.use((response) => {
    return response;
}, (error) => {
    try {
        const { response } = error;
        if (response.status === 401) {
            alert('Unauthorized');
            window.location.href = '/login';
        }
    } catch (error) {
        console.log(error);
    }

    throw error
});

export default interceptor