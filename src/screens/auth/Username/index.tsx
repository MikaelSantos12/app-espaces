import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { useAuth } from "@/context/AuthContext";
import { api } from "@/services/api";
import { setFirstLogin } from "@/storage/storageAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useForm } from "react-hook-form";
import Toast from "react-native-toast-message";
import { useTheme } from "styled-components/native";
import { z } from "zod";
import { Container, Content, Main } from "./styles";
dayjs.locale("pt-br");
const UsernameSchema = z.object({
  name: z.string(),
  username: z.string(),
});
type UsernameSchema = z.infer<typeof UsernameSchema>;

export function Username({ route }) {
  const { user, updateUser, setUser } = useAuth();
  const navigation = useNavigation();
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    setValue,

    formState: { errors },
  } = useForm<UsernameSchema>({
    resolver: zodResolver(UsernameSchema),
  });
  const params = route.params;

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: UsernameSchema) => {
      const parts = params.birthday.split("/");
      const formattedInputDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
      const loginType = await AsyncStorage.getItem("loginType");
      return api.auth.post("/user/update", {
        username: data.username,
        name: data.name,
        birthday: formattedInputDate,
        ...(loginType !== "sms" && { phone: params.phone }),

        city: params.address.city,
      });
    },
    onSuccess: (res) => {
      updateUser(
        user.firstLoginProps?.access_token,
        user.firstLoginProps?.refresh_token
      );
      setFirstLogin();
    },
    onError: (err: AxiosError) => {
      if (err.response?.status == 409) {
        Toast.show({
          type: "error",
          text1: "Nome de usuario ja esta sendo usado",
        });
      }
    },
  });

  const handleSendEmail = (data: UsernameSchema) => {
    mutate(data);
  };

  return (
    <Container>
      <Header logoOnly />
      <Content>
        <Main>
          <Input
            placeholder="Nome"
            control={control}
            name="name"
            error={errors.name?.message}
          />
          <Input
            placeholder="Usuário"
            control={control}
            name="username"
            error={errors.username?.message}
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
