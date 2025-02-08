import axios from "axios";

const api = axios.create({
  baseURL: "https://crudnatorapi.onrender.com/api",
});

export default api;