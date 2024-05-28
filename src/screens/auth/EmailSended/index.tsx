import { Header } from "@/components/Header";
import { useAuth } from "@/context/AuthContext";
import { apiAuth } from "@/services/api-auth";
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
  const { updateUser } = useAuth();
  const navigation = useNavigation();

  async function authenticate() {
    try {
      await apiAuth.post(
        "/sessions/validate",
        {},
        {
          headers: {
            Authorization: `Bearer ${route.params.token}`,
          },
        }
      );

      updateUser(route.params?.token);
    } catch (err) {
      console.log(route.params?.token);
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
        <Title>Email enviado!</Title>
        <IconWrapper>
          <EnvelopeSimple size={128} color={theme.colors.main} />
        </IconWrapper>

        <Subtitle>Verifiqsue sua caixa de entrada</Subtitle>

        <Main></Main>
      </Content>
    </Container>
  );
}
