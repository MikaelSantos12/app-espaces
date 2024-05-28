import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_TOKEN } from "./storageContanst";

type AuthTokenProps = {
  token: string;
};

export async function saveStorageToken({ token }: AuthTokenProps) {
  await AsyncStorage.setItem(USER_TOKEN, JSON.stringify({ token }));
}

export async function getStorageToken() {
  const response = await AsyncStorage.getItem(USER_TOKEN);

  const { token }: AuthTokenProps = response ? JSON.parse(response) : {};

  return { token };
}
export async function removeStorageToken() {
  await AsyncStorage.removeItem(USER_TOKEN);
}
