// src/dashboard/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://zerodha-majorproject-2.onrender.com", // backend URL
  withCredentials: true, // use this if you are using cookies
});

export default api;
