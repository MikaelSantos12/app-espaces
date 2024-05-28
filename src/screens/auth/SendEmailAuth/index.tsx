import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { useAuth } from "@/context/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { EnvelopeSimple } from "phosphor-react-native";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Toast from "react-native-toast-message";
import { useTheme } from "styled-components/native";
import { z } from "zod";
import {
  Container,
  Content,
  IconWrapper,
  Main,
  Subtitle,
  Title,
} from "./styles";
const sendEmailSchema = z.object({
  email: z.string().email("Email invalido"),
});
type SendEmailSchema = z.infer<typeof sendEmailSchema>;
export function SendEmailAuth() {
  const { signInWithEmail } = useAuth();
  const navigation = useNavigation();
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    setValue,

    formState: { errors },
  } = useForm<SendEmailSchema>({
    resolver: zodResolver(sendEmailSchema),
  });
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: SendEmailSchema) => {
      try {
        await signInWithEmail(data.email);
      } catch (err) {}
    },
    onSuccess: () => {
      Toast.show({
        type: "success",
        text1: "Email enviado!",
      });
      navigation.navigate("emailSended" as never);
    },
  });

  const handleSendEmail = (data: SendEmailSchema) => {
    mutate(data);
  };

  useEffect(() => {
    setValue("email", "mikaelsantos120@outlook.com");
  }, []);
  console.log(isPending);
  return (
    <Container>
      <Header logoOnly />
      <Content>
        <Title>Entrar com email</Title>
        <IconWrapper>
          <EnvelopeSimple size={128} color={theme.colors.main} />
        </IconWrapper>

        <Subtitle>texto de apoio</Subtitle>

        <Main>
          <Input
            keyboardType="email-address"
            control={control}
            name="email"
            placeholder="Informe seu e-mail"
            error={errors.email?.message}
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
