import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { faker } from "@faker-js/faker";
import { MagnifyingGlass } from "phosphor-react-native";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { FlatList } from "react-native";
import { useTheme } from "styled-components/native";
import { CardList } from "./CardList";
import { Container, Content } from "./styles";
export function List() {
  const theme = useTheme();
  const { control, watch } = useForm();
  const q = watch("search");
  const lists = [
    {
      id: faker.string.uuid(),
      coverPhoto: faker.image.url(),
      profilePic: faker.image.url(),
      listName: faker.person.fullName(),
    },
    {
      id: faker.string.uuid(),
      coverPhoto: faker.image.url(),
      profilePic: faker.image.avatar(),
      listName: faker.person.fullName(),
    },
    {
      id: faker.string.uuid(),
      coverPhoto: faker.image.url(),
      profilePic: faker.image.avatar(),
      listName: faker.person.fullName(),
    },
    {
      id: faker.string.uuid(),
      coverPhoto: faker.image.url(),
      profilePic: faker.image.avatar(),
      listName: faker.person.fullName(),
    },
  ];
  const renderItem = useCallback(({ item }) => <CardList data={item} />, []);
  return (
    <Container>
      <Header />

      <Content>
        <Input
          control={control}
          name="search"
          placeholder="Busque por um tema"
          Icon={<MagnifyingGlass color={theme.colors.main} weight="bold" />}
        />
        <FlatList
          scrollEnabled={false}
          data={lists}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            marginTop: 16,
            gap: 8,
          }}
          columnWrapperStyle={{
            gap: 8,
          }}
        />
      </Content>
    </Container>
  );
}
