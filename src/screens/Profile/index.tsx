import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { faker } from "@faker-js/faker";
import {
  Container,
  Content,
  Name,
  ProfileImage,
  ProfileWrapper,
  Row,
  Subtitle,
  Top,
} from "./styles";
export function Profile() {
  const data = {
    name: faker.person.fullName(),
    photo: faker.image.avatar(),
  };
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
      </Content>
    </Container>
  );
}
