import { Header } from "@/components/Header";
import * as C from "./styles";
import {
  InstagramLogo,
  MagnifyingGlass,
  Phone,
  TwitterLogo,
} from "phosphor-react-native";
import { Input } from "@/components/Input";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components/native";
import { FlatList } from "react-native";
import { faker } from "@faker-js/faker";
import { Button } from "@/components/Button";

const lists = [
  {
    id: faker.string.uuid(),
    coverPhoto: faker.image.url(),
    profilePic:
      "https://loremflickr.com/cache/resized/65535_53484419758_fe4c4ff16a_320_240_nofilter.jpg",
    listName: faker.person.fullName(),
  },
  {
    id: faker.string.uuid(),
    coverPhoto: faker.image.url(),
    profilePic:
      "https://loremflickr.com/cache/resized/65535_53484419758_fe4c4ff16a_320_240_nofilter.jpg",
    listName: faker.person.fullName(),
  },
  {
    id: faker.string.uuid(),
    coverPhoto: faker.image.url(),
    profilePic:
      "https://loremflickr.com/cache/resized/65535_53484419758_fe4c4ff16a_320_240_nofilter.jpg",
    listName: faker.person.fullName(),
  },
  {
    id: faker.string.uuid(),
    coverPhoto: faker.image.url(),
    profilePic:
      "https://loremflickr.com/cache/resized/65535_53484419758_fe4c4ff16a_320_240_nofilter.jpg",
    listName: faker.person.fullName(),
  },
  {
    id: faker.string.uuid(),
    coverPhoto: faker.image.url(),
    profilePic:
      "https://loremflickr.com/cache/resized/65535_53484419758_fe4c4ff16a_320_240_nofilter.jpg",
    listName: faker.person.fullName(),
  },
  {
    id: faker.string.uuid(),
    coverPhoto: faker.image.url(),
    profilePic:
      "https://loremflickr.com/cache/resized/65535_53484419758_fe4c4ff16a_320_240_nofilter.jpg",
    listName: faker.person.fullName(),
  },
];

export const ConectFriends = () => {
  const { control } = useForm();
  const theme = useTheme();

  return (
    <C.Container>
      <Header />
      <C.Content>
        <C.Title>Conectar</C.Title>

        <C.Row>
          <C.Tag>
            <Phone size={18} weight="fill" color="#fff" />
            <C.TagName>Contatos</C.TagName>
          </C.Tag>
          <C.Tag>
            <InstagramLogo size={18} weight="fill" color="#fff" />
            <C.TagName>Instagram</C.TagName>
          </C.Tag>
          <C.Tag>
            <TwitterLogo size={18} weight="fill" color="#fff" />
            <C.TagName>Twitter</C.TagName>
          </C.Tag>
        </C.Row>
        <C.Row>
          <Input
            control={control}
            name="search"
            placeholder="Pesquise por um espaço"
            Icon={<MagnifyingGlass color={theme.colors.main} weight="bold" />}
          />
        </C.Row>
        <C.SubTitle>Talvez você conheça</C.SubTitle>

        <FlatList
          data={lists}
          numColumns={2}
          keyExtractor={(item) => item.id}
          style={{ marginTop: 8 }}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          renderItem={({ item }) => (
            <C.UserCard>
              <C.UserPic source={{ uri: item.profilePic }} />
              <C.UserName numberOfLines={1}>{item.listName}</C.UserName>
              <C.UserRow>
                <C.UserName>@{item.listName.split(" ")[0]}</C.UserName>
              </C.UserRow>
              <C.UserRow>
                <C.UserName>São Paulo, SP</C.UserName>
              </C.UserRow>
              <C.UserRow>
                <C.UserName>200 avaliações</C.UserName>
              </C.UserRow>
              <Button title="Seguir" />
            </C.UserCard>
          )}
        />
      </C.Content>
    </C.Container>
  );
};
