import axios from "axios";

const interceptor = axios.create({
    // baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
});

interceptor.interceptors.request.use((config) => {
    const token = "6fhw5nzl4y7l1miyxa7ck23bm4sydycstdwqv5gs";
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
        }
    } catch (error) {
        console.log(error);
    }

    throw error
});

export default interceptor