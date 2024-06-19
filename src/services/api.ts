import { getStorageToken } from "@/storage/storageAuth";
import axios, { AxiosError } from "axios";
import { apiAuth } from "./api-auth";
import { apiFeed } from "./api-feed";

const refreshToken = async () => {
  try {
    let { refreshToken } = await getStorageToken();

    const response = await apiAuth.post("/sessions/refresh-token", {
      refresh_token: refreshToken,
    });

    return response.data.access_token;
  } catch (err) {
    console.log("CATCHH", err);
    // removeStorageToken();
  }
};

const handleAuthError = async (error: AxiosError) => {
  const originalRequest = error.config!;

  console.log("responseError", error.response.data);
  if (
    error.response?.data?.message?.statusCode === 401 &&
    (error.response.data.message.message == "token expired" ||
      error.response.data.message.message == "jwt expired")
  ) {
    const newToken = await refreshToken();
    originalRequest.headers.Authorization = `Bearer ${newToken}`;
    return axios(originalRequest);
  }

  return Promise.reject(error);
};

const apis = [apiAuth, apiFeed];

apis.forEach((api) => {
  api.interceptors.response.use((response) => response, handleAuthError);
});

export const api = {
  auth: apiAuth,
  feed: apiFeed,
};
