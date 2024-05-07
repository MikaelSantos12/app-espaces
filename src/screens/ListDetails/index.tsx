import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { formatPublicationDate } from "@/utils/format-post-date";
import { faker } from "@faker-js/faker";
import { Compass } from "phosphor-react-native";
import { useCallback } from "react";
import { FlatList } from "react-native";
import { useTheme } from "styled-components/native";
import { Publication } from "../Home/Publications";
import {
  Container,
  Content,
  Gap,
  ListImage,
  ListName,
  ListWrapper,
  Map,
  Subtitle,
  Title,
  Top,
  UserWrapper,
} from "./styles";

export function ListDetails() {
  const data = {
    listName: faker.lorem.word(),
    listImage: faker.image.url(),
    user: faker.person.firstName(),
    description: faker.lorem.paragraphs(),
  };

  const publication = [
    {
      id: faker.string.uuid(),
      companyPhoto: faker.image.url(),
      userPhoto: faker.image.url(),
      companyName: faker.company.name(),
      createdAt: formatPublicationDate(faker.date.recent()),
      description: faker.lorem.paragraphs(),
      post: faker.image.url(),
      username: faker.person.firstName(),
    },
    {
      id: faker.string.uuid(),
      companyPhoto: faker.image.url(),
      userPhoto: faker.image.url(),
      companyName: faker.company.name(),
      createdAt: formatPublicationDate(faker.date.recent()),
      description: faker.lorem.paragraphs(),
      post: faker.image.url(),
      username: faker.person.firstName(),
    },
  ];
  const renderItem = useCallback(
    ({ item }: any) => (
      <Publication.Root>
        <Gap>
          <ListName>{item.companyName}</ListName>

          <Subtitle>@{item.username}</Subtitle>
        </Gap>

        <Button
          title="Seguir"
          size="sm"
          style={{ alignSelf: "flex-start", marginBottom: 12 }}
        />
        <Publication.Image data={item} />
        <Gap />
        <Publication.Description data={item} />
      </Publication.Root>
    ),
    []
  );
  const theme = useTheme();
  return (
    <Container>
      <Header title="Lista 1" />
      <Content>
        <Top>
          <ListWrapper>
            <ListImage source={{ uri: data.listImage }} />
            <UserWrapper>
              <ListName>{data.listName}</ListName>
              <Subtitle>de @{data.user}</Subtitle>
            </UserWrapper>
          </ListWrapper>

          <Button title="Seguir" size="lg" />
        </Top>
        <Subtitle>Atualizado em 05/04/2024</Subtitle>
        <Map>
          <Compass color={theme.colors.main} weight="fill" size={28} />
          <Title>Ver espaços no mapa</Title>
        </Map>

        <Subtitle>{data.description}</Subtitle>

        <FlatList
          scrollEnabled={false}
          data={publication}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            gap: 24,
            paddingBottom: 48,
            marginTop: 32,
          }}
        />
      </Content>
    </Container>
  );
}
