import axios, { AxiosInstance } from "axios";

const endereco = "https://unresinous-judy-undulatingly.ngrok-free.dev"
// use seu endereço ngrok

const api:AxiosInstance = axios.create({
    baseURL: endereco,
});

export default api;