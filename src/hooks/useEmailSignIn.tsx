import { api } from "@/services/api";
import { Alert } from "react-native";

export const useEmailSignIn = () => {
  async function signInWithEmail(email: string) {
    try {
      const res = await api.auth.post("/sessions/email", {
        email,
      });

      return res;
    } catch (err) {
      Alert.alert("erro");
    }
  }
  return { signInWithEmail };
};
