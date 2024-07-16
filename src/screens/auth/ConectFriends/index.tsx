import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { useAuth } from "@/context/AuthContext";
import { FollowRecommendationDTO } from "@/dtos/FollowRecommendationDTO";
import { useFollowRecommendation } from "@/hooks/useFollowRecommendation";
import { api } from "@/services/api";
import { setFirstLogin } from "@/storage/storageAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { User } from "phosphor-react-native";
import { useForm } from "react-hook-form";
import { FlatList } from "react-native";
import { useTheme } from "styled-components/native";
import * as C from "./styles";

export const ConnectFriends = () => {
  const { control } = useForm();
  const { user, updateUser, setUser } = useAuth();
  const theme = useTheme();
  const { data, error, isError } = useFollowRecommendation();
  const queryClient = useQueryClient();
  const handlePress = () => {
    updateUser(
      user.firstLoginProps?.access_token,
      user.firstLoginProps?.refresh_token
    );
    setFirstLogin();
  };
  const { mutate } = useMutation({
    mutationFn: (user: FollowRecommendationDTO) => {
      return api.feed.post(`follow/${user.id}`);
    },
    onSuccess: (data, variables) => {
      queryClient.setQueryData(
        ["useFollowRecommendation"],
        (oldData: FollowRecommendationDTO[]) => {
          return oldData.map((user) =>
            user.id === variables.id ? { ...user, isFollowing: true } : user
          );
        }
      );
    },
  });
  const handleFollow = (data: FollowRecommendationDTO) => {
    mutate(data);
  };
  return (
    <C.Container>
      <Header title="Conectar" />
      <C.Content>
        <C.Title>Talvez você conheça</C.Title>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          style={{ marginTop: 8, marginBottom: 24 }}
          showsVerticalScrollIndicator={false}
          horizontal={true}
          renderItem={({ item }: { item: FollowRecommendationDTO }) => (
            <C.UserCard>
              <C.UserPhotoWrapper>
                {item.UserPhoto.length > 0 ? (
                  <C.UserPic source={{ uri: item.UserPhoto[0]?.image }} />
                ) : (
                  <User size={40} />
                )}
              </C.UserPhotoWrapper>
              <C.UserSection>
                <C.Name numberOfLines={1}>{item.name.split(" ")[0]}</C.Name>

                <C.UserName>@{item.username}</C.UserName>
              </C.UserSection>
              <C.UserRow style={{ marginTop: 12 }}>
                <C.SubTitle>{item.city}</C.SubTitle>
              </C.UserRow>
              <C.UserRow style={{ marginBottom: 12 }}>
                <C.SubTitle>{item.postCount} avaliações</C.SubTitle>
              </C.UserRow>
              <Button
                title={item.isFollowing === false ? "Seguir" : "Seguindo"}
                onPress={() => handleFollow(item)}
              />
            </C.UserCard>
          )}
        />
        <Button title="Continuar" size="full" onPress={handlePress} />
      </C.Content>
    </C.Container>
  );
};
