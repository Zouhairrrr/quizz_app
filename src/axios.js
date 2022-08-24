import axios from "axios";

export const api = axios.create({
  baseUrl: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

