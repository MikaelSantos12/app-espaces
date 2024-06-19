import { api } from "@/services/api";
import { Alert } from "react-native";

export const useSmsSignIn = () => {
  async function signInWihSms(phone: string) {
    try {
      const res = await api.auth.post("/sessions/phone", {
        phone,
      });

      return res;
    } catch (err) {
      Alert.alert("erro");
    }
  }
  return { signInWihSms };
};
