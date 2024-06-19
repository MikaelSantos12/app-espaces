import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { Cake } from "phosphor-react-native";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components/native";
import { z } from "zod";
import { Container, Content, IconWrapper, Main, Title } from "./styles";
const birthdaySchema = z.object({
  birthday: z.string(),
});
type BirthdaySchema = z.infer<typeof birthdaySchema>;

export function Birthday({ route }) {
  const navigation = useNavigation();
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    setValue,

    formState: { errors },
  } = useForm<BirthdaySchema>({
    resolver: zodResolver(birthdaySchema),
  });
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: BirthdaySchema) => {},
  });

  const handleSendEmail = (data: BirthdaySchema) => {
    navigation.navigate("selectCity", {
      birthday: data.birthday,
      ...route.params,
    });
  };

  return (
    <Container>
      <Header logoOnly />
      <Content>
        <Title>Data de Nascimento</Title>
        <IconWrapper>
          <Cake size={128} color={theme.colors.main} />
        </IconWrapper>

        <Main>
          <Input
            keyboardType="numeric"
            control={control}
            name="birthday"
            placeholder="xx/xx/xxx"
            mask="99/99/9999"
            error={errors.birthday?.message}
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
