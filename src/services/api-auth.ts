import axios from "axios";

export const apiAuth = axios.create({
  baseURL: "http://192.168.1.8:3333",
});
