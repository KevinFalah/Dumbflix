import axios from 'axios'

export const API = axios.create({
    baseUrl: "http://localhost:5000/api/v1"
})