import axios from "axios";

export const apiAuth = axios.create({
  baseURL: `http://172.16.0.162:3333`,
});
