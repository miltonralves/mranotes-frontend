import axios from "axios";

export const api = axios.create({
  baseURL: "https://mranotes-api.onrender.com",
});
