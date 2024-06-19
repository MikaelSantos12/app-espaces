import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { useSmsSignIn } from "@/hooks/useSmsSignIn";
import { zodResolver } from "@hookform/resolvers/zod";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Toast from "react-native-toast-message";
import { useTheme } from "styled-components/native";
import { z } from "zod";
import { Container, Content, Main, Title } from "./styles";
const sendSmschema = z.object({
  phone: z.string(),
});
type SendSmsSchema = z.infer<typeof sendSmschema>;
export function SendSmsAuth() {
  const { signInWihSms } = useSmsSignIn();
  const navigation = useNavigation();
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<SendSmsSchema>({
    resolver: zodResolver(sendSmschema),
  });
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: SendSmsSchema) => {
      try {
        await signInWihSms(data.phone);
      } catch (err) {}
    },
    onSuccess: async () => {
      Toast.show({
        type: "success",
        text1: "SMS enviado!",
      });
      await AsyncStorage.setItem("loginType", "sms");
      navigation.navigate("emailSended", {
        type: "sms",
        phone: watch("phone"),
      });
    },
  });

  const handleSendEmail = (data: SendSmsSchema) => {
    mutate(data);
  };

  return (
    <Container>
      <Header logoOnly />
      <Content>
        <Title>Entrar com celular</Title>

        <Main>
          <Input
            keyboardType="numeric"
            control={control}
            name="phone"
            mask="(99) 99999-9999"
            placeholder="Informe seu celular"
            error={errors.phone?.message}
          />
          <Button
            title="Enviar"
            size="full"
            onPress={handleSubmit(handleSendEmail)}
            isLoading={isPending}
          />
        </Main>
      </Content>
    </Container>
  );
}
