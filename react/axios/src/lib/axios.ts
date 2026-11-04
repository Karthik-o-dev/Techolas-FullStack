import axios from "axios";

export const api = axios.create({
    baseURL: "https://dummyjson.com",
    timeout: 10000
})

// interceptor

api.interceptors.request.use((config) => {
    config.headers.Authorization = "bearer";
    return config;
})

api.interceptors.response.use((Response) => {
    return Response;
}, (error) => {
    return Promise.reject(error)
})