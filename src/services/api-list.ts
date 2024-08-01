import axios from "axios";

export const apiList = axios.create({
  baseURL: `http://172.16.0.162:3335`,
});
