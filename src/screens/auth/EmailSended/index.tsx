import { Header } from "@/components/Header";
import { useAuth } from "@/context/AuthContext";
import { api, apis } from "@/services/api";
import { isFirstLogin } from "@/storage/storageAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { EnvelopeSimple } from "phosphor-react-native";
import { useEffect } from "react";
import Toast from "react-native-toast-message";
import { useTheme } from "styled-components/native";
import {
  Container,
  Content,
  IconWrapper,
  Main,
  Subtitle,
  Title,
} from "./styles";

export function EmailSended({ route }) {
  const theme = useTheme();
  const { setUser, updateUser } = useAuth();
  const navigation = useNavigation();

  async function authenticate() {
    try {
      const { data } = await api.auth.post(
        "/sessions/login",
        {},
        {
          headers: {
            Authorization: `Bearer ${route.params.token}`,
          },
        }
      );

      const firstLogin = await isFirstLogin();

      if (firstLogin) {
        apis.forEach((api) => {
          api.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${data.access_token}`;
        });
        setUser({
          firstLoginProps: {
            access_token: data.access_token,
            refresh_token: data.refresh_token,
          },
        });
        const loginType = await AsyncStorage.getItem("loginType");
        const nextRoute = loginType == "sms" ? "email" : "enableNotifications";

        return navigation.navigate(nextRoute, {
          type: loginType,
        });
      }

      updateUser(data.access_token, data.refresh_token);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: "Link invalido!",
      });
    }
  }
  useEffect(() => {
    if (route.params?.token) {
      authenticate();
    }
  }, [route.params?.token]);

  return (
    <Container>
      <Header logoOnly />
      <Content>
        <Title>Link enviado!</Title>
        <IconWrapper>
          <EnvelopeSimple size={128} color={theme.colors.main} />
        </IconWrapper>

        <Subtitle>
          {route.params?.type == "sms"
            ? "Verifique suas mensagens"
            : "Verifique sua caixa de entrada"}
          Verifiqsue sua caixa de entrada
        </Subtitle>

        <Main></Main>
      </Content>
    </Container>
  );
}
