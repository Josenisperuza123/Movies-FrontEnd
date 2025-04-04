import axios from "axios"

export const axiosconfiguracion = axios.create({
   baseURL: process.env.REACT_APP_BASE_URL || "https://movies-backend-1-belf.onrender.com"
 });
 