import { Header } from "@/components/Header";
import { formatPublicationDate } from "@/utils/format-post-date";
import { faker } from "@faker-js/faker";
import { useCallback } from "react";
import { FlatList } from "react-native";
import { EventsCarrousel } from "./EventsCarrousel";
import { Publication } from "./Publications";
import { Container, Content } from "./styles";
export function Home() {
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
    ({ item }) => (
      <Publication.Root>
        <Publication.Header data={item} />
        <Publication.Image data={item} />
        <Publication.Actions />
        <Publication.Description data={item} />
      </Publication.Root>
    ),
    []
  );

  return (
    <Container>
      <Header />
      <Content>
        <EventsCarrousel />
        <FlatList
          scrollEnabled={false}
          data={publication}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            gap: 24,
            paddingBottom: 48,
          }}
        />
      </Content>
    </Container>
  );
}
