import axios from "axios"

export const axiosconfiguracion = axios.create({
   // baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:5500/api'
   
   baseURL: process.env.REACT_APP_BASE_URL || 'https://movies-backend-m8kh.onrender.com/api'
})
