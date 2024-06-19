import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { api } from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { Phone } from "phosphor-react-native";
import { useForm } from "react-hook-form";
import Toast from "react-native-toast-message";
import { useTheme } from "styled-components/native";
import { z } from "zod";
import { Container, Content, IconWrapper, Main, Title } from "./styles";
const sendEmailSchema = z.object({
  phone: z.string(),
});
type SendEmailSchema = z.infer<typeof sendEmailSchema>;
export function SendSmsOtp() {
  const navigation = useNavigation();
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<SendEmailSchema>({
    resolver: zodResolver(sendEmailSchema),
  });
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: SendEmailSchema) => {
      return api.auth.post("/sessions/otp/phone", {
        phone: data.phone,
      });
    },
    onSuccess: ({ data }) => {
      Toast.show({
        type: "success",
        text1: "Sms enviado!",
      });
      navigation.navigate("confirmOTP", {
        otp: data.code,
        phone: watch("phone"),
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleSendEmail = (data: SendEmailSchema) => {
    mutate(data);
  };

  return (
    <Container>
      <Header logoOnly />
      <Content>
        <Title>Telefone</Title>
        <IconWrapper>
          <Phone size={128} color={theme.colors.main} />
        </IconWrapper>

        <Main>
          <Input
            keyboardType="numeric"
            control={control}
            name="phone"
            placeholder="(xx) xxxxx-xxxx"
            mask="(99) 99999-9999"
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
