import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})
axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token'); // Atau di mana pun Anda menyimpan token
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiosInstance;