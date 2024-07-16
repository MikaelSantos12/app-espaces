import { useAuth } from "@/context/AuthContext";
import { api, apis } from "@/services/api";
import { isFirstLogin } from "@/storage/storageAuth";
import { useNavigation } from "@react-navigation/native";
import * as AppleAuthentication from "expo-apple-authentication";
export function useAppleSignIn() {
  const navigation = useNavigation();
  const { setUser, updateUser } = useAuth();

  async function signInWithApple() {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      const { data } = await api.auth.post("/sessions/apple", {
        token: credential.identityToken,
      });
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
    } catch (e: any) {
      console.log(e);
      if (e.code === "ERR_REQUEST_CANCELED") {
        // handle that the user canceled the sign-in flow
      } else {
        // handle other errors
      }
    }
  }
  return {
    signInWithApple,
  };
}
