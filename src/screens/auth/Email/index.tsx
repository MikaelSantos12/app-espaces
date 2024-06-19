import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components/native";
import { z } from "zod";
import { Container, Content, Main, Title } from "./styles";
const emailSchema = z.object({
  email: z.string().email(),
});
type BirthdaySchema = z.infer<typeof emailSchema>;

export function Email({ route }) {
  const navigation = useNavigation();
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    setValue,

    formState: { errors },
  } = useForm<BirthdaySchema>({
    resolver: zodResolver(emailSchema),
  });
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: BirthdaySchema) => {},
  });

  const handleSendEmail = (data: BirthdaySchema) => {
    navigation.navigate("enableNotifications", {
      email: data.email,
      ...route.params,
    });
  };

  return (
    <Container>
      <Header logoOnly />
      <Content>
        <Title>Confirme seu email</Title>

        <Main>
          <Input
            control={control}
            name="email"
            placeholder="Digite seu email"
            error={errors.email?.message}
          />
          <Button
            title="Enviar"
            size="full"
            onPress={handleSubmit(handleSendEmail)}
          />
        </Main>
      </Content>
    </Container>
  );
}
