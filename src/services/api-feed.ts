import axios from "axios";

export const apiFeed = axios.create({
  baseURL: `http://172.16.0.162:3334`,
});
