import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { useAuth } from "@/context/AuthContext";
import { api } from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import * as ImagePicker from "expo-image-picker";
import { Camera, User, X } from "phosphor-react-native";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Toast from "react-native-toast-message";
import { useTheme } from "styled-components/native";
import { z } from "zod";
import {
  AddProfilePhoto,
  Container,
  Content,
  EditPhoto,
  IconContainer,
  Main,
  ProfileContainer,
  ProfilePhoto,
  ProfilePic,
} from "./styles";
dayjs.locale("pt-br");
const UsernameSchema = z.object({
  name: z.string(),
  username: z.string(),
});
type UsernameSchema = z.infer<typeof UsernameSchema>;

export function Username({ route }) {
  const [userPhoto, setUserPhoto] = useState(null);
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
      return api.auth.put("/user/update", {
        username: data.username,
        name: data.name,
        birthday: formattedInputDate,
        ...(loginType !== "sms" && { phone: params.phone }),
        photo: userPhoto.url,

        city: params.address,
      });
    },
    onSuccess: (res) => {
      navigation.navigate("connectFriends" as never);
      // updateUser(
      //   user.firstLoginProps?.access_token,
      //   user.firstLoginProps?.refresh_token
      // );
      // setFirstLogin();
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
  const handlePress = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const fileExtension = result.assets[0].uri.split(".").pop();
      const file = {
        uri: result.assets[0].uri,
        name: result.assets[0].uri.split("/").pop(), // Extract file name
        type: `${result.assets[0].type}/${fileExtension}`,
      };

      const formData = new FormData();

      formData.append("file", file);
      try {
        const { data } = await api.auth.post("/user/photo", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        setUserPhoto(data);
      } catch (err) {}
    }
  };
  return (
    <Container>
      <Header logoOnly />
      <Content>
        <Main>
          <ProfilePhoto>
            <ProfileContainer>
              {userPhoto ? (
                <ProfilePic source={{ uri: userPhoto?.url }} />
              ) : (
                <User size={64} />
              )}
              {userPhoto ? (
                <EditPhoto>
                  <IconContainer>
                    <X color="#fff" />
                  </IconContainer>
                </EditPhoto>
              ) : (
                <AddProfilePhoto onPress={handlePress}>
                  <Camera />
                </AddProfilePhoto>
              )}
            </ProfileContainer>
          </ProfilePhoto>
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
