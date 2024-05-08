import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Publication } from "@/components/Publications";
import { formatPublicationDate } from "@/utils/format-post-date";
import { faker } from "@faker-js/faker";
import { BookmarkSimple, HouseLine, Link } from "phosphor-react-native";
import { useCallback } from "react";
import { FlatList } from "react-native";
import { useTheme } from "styled-components/native";
import {
  Container,
  Content,
  Followers,
  Name,
  ProfileImage,
  ProfileSection,
  ProfileWrapper,
  Row,
  Subtitle,
  Top,
  Widget,
  WidgetWrapper,
} from "./styles";
export function Profile() {
  const theme = useTheme();

  const data = {
    name: faker.person.fullName(),
    photo: faker.image.avatar(),
    location: faker.location.city(),
    blog: faker.word.words(),
    bio: faker.lorem.paragraph(),
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
        <Top>
          <ProfileImage source={{ uri: data.photo }} />
          <ProfileWrapper>
            <Name>{data.name}</Name>
            <Row>
              <Subtitle>@usuario</Subtitle>
              <Button title="Seguir" size="sm" />
            </Row>
          </ProfileWrapper>
        </Top>
        <ProfileSection>
          <Row>
            <HouseLine color={theme.colors.main} weight="fill" />
            <Subtitle>{data.location}</Subtitle>
          </Row>
          <Row>
            <Link color={theme.colors.main} />
            <Subtitle>{data.blog}</Subtitle>
          </Row>
        </ProfileSection>
        <Subtitle>{data.bio}</Subtitle>

        <WidgetWrapper>
          <Widget>
            <Subtitle style={{ textAlign: "center" }}>200</Subtitle>
            <Followers>Seguindo</Followers>
          </Widget>
          <Widget>
            <Subtitle style={{ textAlign: "center" }}>200</Subtitle>
            <Followers>Seguindo</Followers>
          </Widget>
          <Widget>
            <Subtitle style={{ textAlign: "center" }}>200 </Subtitle>
            <Followers>Seguindo</Followers>
          </Widget>
        </WidgetWrapper>
        <Widget>
          <Row>
            <BookmarkSimple size={48} color={theme.colors.main} weight="fill" />
            <Name>Listas</Name>
          </Row>
        </Widget>

        <FlatList
          scrollEnabled={false}
          data={publication}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            gap: 24,
            marginTop: 32,
            paddingBottom: 48,
          }}
        />
      </Content>
    </Container>
  );
}
