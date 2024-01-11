import axios from 'axios';

// const axiosServices = axios.create();

// // interceptor for http
// axiosServices.interceptors.response.use(
//   (response) => response,
//   (error) =>
//     Promise.reject((error.response && error.response.data) || "Wrong Services")
// );

// export default axiosServices;

/**
 * axios setup to use mock service
 *
 */

const api = axios.create({
    baseURL: 'http://test.auth.api.tourops.online/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;
