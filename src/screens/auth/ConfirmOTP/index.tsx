import { Header } from "@/components/Header";
import { useAuth } from "@/context/AuthContext";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import { useTheme } from "styled-components/native";
import { InputOtp } from "./InputOTP";
import { Container, Content, Main, Title } from "./styles";

export function ConfirmOTP({ route }) {
  const theme = useTheme();
  const [otp, setOtp] = useState("");
  const { updateUser } = useAuth();
  const navigation = useNavigation();

  async function authenticate() {
    try {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: "birthday",
              params: {
                ...route.params,
              },
            },
          ],
        })
      );
    } catch (err) {
      Toast.show({
        type: "error",
        text1: "Link invalido!",
      });
    }
  }
  useEffect(() => {
    if (otp.length === 6 && otp === route.params.otp) {
      authenticate();
    }
    if (otp.length === 6 && otp !== route.params.otp) {
      Toast.show({
        type: "error",
        text1: "Código invalido",
      });
    }
  }, [otp]);

  return (
    <Container>
      <Header logoOnly />
      <Content>
        <Title>Digite o código de confirmação</Title>
        <InputOtp otp={otp} setOTP={setOtp} isLoading={false} />

        <Main></Main>
      </Content>
    </Container>
  );
}
