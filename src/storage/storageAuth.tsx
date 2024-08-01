import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_REFRESH_TOKEN, USER_TOKEN } from "./storageContanst";

type AuthTokenProps = {
  token: string;
  refreshToken: string;
};

export async function saveStorageToken({
  token,
  refreshToken,
}: AuthTokenProps) {
  await AsyncStorage.setItem(USER_TOKEN, JSON.stringify(token));
  await AsyncStorage.setItem(USER_REFRESH_TOKEN, JSON.stringify(refreshToken));
}

export async function getStorageToken() {
  const response = await AsyncStorage.getItem(USER_TOKEN);
  const responseRefreshToken = await AsyncStorage.getItem(USER_REFRESH_TOKEN);
  const token = response ? JSON.parse(response) : null;

  const refreshToken = responseRefreshToken
    ? JSON.parse(responseRefreshToken)
    : null;

  return { token, refreshToken };
}
export async function setFirstLogin() {
  await AsyncStorage.setItem("isFirstLogin", JSON.stringify(false));
}
export async function isFirstLogin() {
  const isFirstLogin = await AsyncStorage.getItem("isFirstLogin");

  return isFirstLogin === null;
}
export async function removeStorageToken() {
  await AsyncStorage.removeItem(USER_TOKEN);
  await AsyncStorage.removeItem(USER_REFRESH_TOKEN);
  // await AsyncStorage.removeItem("isFirstLogin");
}
