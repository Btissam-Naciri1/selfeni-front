import axios from 'axios';

// Create an Axios instance
const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
});

// Add a request interceptor
api.interceptors.request.use(
    async (config) => {
        const accessToken = localStorage.getItem('access_token');
        if (accessToken) {
            config.headers.Authorization = Bearer ${accessToken};
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Add a response interceptor
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (
            error.response &&
            error.response.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            const refreshToken = localStorage.getItem('refresh_token');
            if (refreshToken) {
                try {
                    const { data } = await axios.post('http://127.0.0.1:8000/api/token/refresh/', {
                        refresh: refreshToken,
                    });
                    localStorage.setItem('access_token', data.access);
                    originalRequest.headers.Authorization = Bearer ${data.access};
                    return axios(originalRequest);
                } catch (refreshError) {
                    localStorage.removeItem('access_token');
                    localStorage.removeItem('refresh_token');
                    window.location.href = '/login';
                }
            }
        }

        return Promise.reject(error);
    }
);

export default api;