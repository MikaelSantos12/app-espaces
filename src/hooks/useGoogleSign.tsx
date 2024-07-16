import { useAuth } from "@/context/AuthContext";
import { api, apis } from "@/services/api";
import { isFirstLogin } from "@/storage/storageAuth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Alert } from "react-native";

export const useGoogleSignIn = () => {
  const navigation = useNavigation();
  const { setUser, updateUser } = useAuth();
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "782600279407-sbgbq57tcukta7na24doqgi4mdnqhfct.apps.googleusercontent.com",
      iosClientId:
        "782600279407-cgtifm6c5g1ln9v9jkk1a43pj5vu8g8t.apps.googleusercontent.com",

      offlineAccess: true,
    });
  }, []);

  async function signInWithGoogle() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (!userInfo) {
        return;
      }
      const res = await api.auth.post("/sessions/google", {
        token: userInfo?.idToken,
      });
      const { data } = res;
      apis.forEach((api) => {
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data.access_token}`;
      });

      const firstLogin = await isFirstLogin();
      if (firstLogin) {
        setUser({
          firstLoginProps: {
            access_token: data.access_token,
            refresh_token: data.refresh_token,
          },
        });
        return navigation.navigate("enableNotifications" as never);
      }
      updateUser(data.access_token, data.refresh_token);
    } catch (err) {
      Alert.alert("erro");
    }
  }
  return { signInWithGoogle };
};
