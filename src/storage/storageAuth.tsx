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
  await AsyncStorage.setItem(USER_TOKEN, JSON.stringify({ token }));
  await AsyncStorage.setItem(
    USER_REFRESH_TOKEN,
    JSON.stringify({ refreshToken })
  );
}

export async function getStorageToken() {
  const response = await AsyncStorage.getItem(USER_TOKEN);

  const { token, refreshToken }: AuthTokenProps = response
    ? JSON.parse(response)
    : {};

  return { token, refreshToken };
}
export async function removeStorageToken() {
  await AsyncStorage.removeItem(USER_TOKEN);
}
