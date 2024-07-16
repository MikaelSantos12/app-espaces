import {
  getStorageToken,
  removeStorageToken,
  saveStorageToken,
} from "@/storage/storageAuth";
import { CommonActions, useNavigation } from "@react-navigation/native";
import axios, { AxiosError } from "axios";
import { apiAuth } from "./api-auth";
import { apiFeed } from "./api-feed";

const refreshToken = async () => {
  const navigation = useNavigation();
  try {
    let { refreshToken } = await getStorageToken();

    const response = await apiAuth.post("/sessions/refresh-token", {
      refresh_token: refreshToken,
    });
    await saveStorageToken({
      token: response.data.access_token,
      refreshToken: response.data.refresh_token,
    });
    return response.data.access_token;
  } catch (err) {
    await removeStorageToken();
    navigation.dispatch(
      CommonActions.navigate({
        name: "signIn",
        params: {},
      })
    );
  }
};

const handleAuthError = async (error: AxiosError) => {
  const originalRequest = error.config!;
  const navigation = useNavigation();
  if (
    error.response?.data?.message?.statusCode === 401 &&
    (error.response.data.message.message == "token expired" ||
      error.response.data.message.message == "jwt expired")
  ) {
    const newToken = await refreshToken();
    originalRequest.headers.Authorization = `Bearer ${newToken}`;
    return axios(originalRequest);
  }
  await removeStorageToken();
  navigation.dispatch(
    CommonActions.navigate({
      name: "signIn",
      params: {},
    })
  );
  return Promise.reject(error);
};

export const apis = [apiAuth, apiFeed];

apis.forEach((api) => {
  api.interceptors.response.use((response) => response, handleAuthError);
  api.interceptors.request.use(async (config) => {
    if (!config.headers.Authorization) {
      const { token } = await getStorageToken();
      if (token !== null) {
        config.headers.Authorization = "Bearer " + token;
      }
    }
    return config;
  });
});

export const api = {
  auth: apiAuth,
  feed: apiFeed,
};
