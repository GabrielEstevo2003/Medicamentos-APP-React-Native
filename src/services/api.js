import axios from "axios";

export const MOCK_URL = "https://68aa3d4b909a5835049beae1.mockapi.io/app_med"

export const medicamentoHttp = axios.create({
    baseURL: MOCK_URL,
    timeout: 10000,
    headers:{
        "Content-Type": "application/json"
    },
});

export const authHttp = axios.create({
    baseURL: "https://reqres.in/api",
    timeout:10000,
    headers:{
        "x-api-key": "reqres-free-v1",
        "Content-Type": "application/json"
    }
})