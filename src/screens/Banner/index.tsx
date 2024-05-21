import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import theme from "@/theme";
import { faker } from "@faker-js/faker";
import { Compass, Plus } from "phosphor-react-native";
import { Content } from "../Company/styles";
import {
  BannerImage,
  ButtonWrapper,
  CompanyPhoto,
  CompanyWrapper,
  Container,
  Date,
  DateWrapper,
  FriendsPhotos,
  Map,
  PhotosArea,
  Row,
  Tag,
  TagsArea,
  Text,
  Title,
} from "./styles";

export function Banner() {
  return (
    <Container>
      <Header title="Banner" />
      <Content contentContainerStyle={{ paddingBottom: 48 }}>
        <BannerImage source={{ uri: faker.image.urlPicsumPhotos() }} />
        <Row>
          <CompanyPhoto source={{ uri: faker.image.url() }} />
          <CompanyWrapper>
            <Title>Bar brahma</Title>
            <TagsArea>
              <Tag>
                <Text color={theme.colors.background}>balada</Text>
              </Tag>
              <Tag>
                <Text color={theme.colors.background}>balada</Text>
              </Tag>
              <Tag>
                <Text color={theme.colors.background}>balada</Text>
              </Tag>
              <Tag>
                <Text color={theme.colors.background}>balada</Text>
              </Tag>
              <Tag>
                <Text color={theme.colors.background}>balada</Text>
              </Tag>
              <Tag>
                <Text color={theme.colors.background}>balada</Text>
              </Tag>
            </TagsArea>
          </CompanyWrapper>
        </Row>
        <Text mt="24px">{faker.lorem.paragraph()}</Text>
        <Map>
          <Compass color={theme.colors.main} weight="fill" />
          <Text>Ver no mapa</Text>
        </Map>
        <DateWrapper>
          <Date>
            <Text font={theme.font.nunito_700} size={theme.font_size.xl}>
              Sexta, 05/04
            </Text>
            <Text font={theme.font.nunito_700} size={theme.font_size.xl}>
              22:00
            </Text>
          </Date>
          <PhotosArea>
            <FriendsPhotos source={{ uri: faker.image.avatar() }} />
            <FriendsPhotos source={{ uri: faker.image.avatar() }} />
            <FriendsPhotos source={{ uri: faker.image.avatar() }} />
            <FriendsPhotos source={{ uri: faker.image.avatar() }} />
            <FriendsPhotos source={{ uri: faker.image.avatar() }} />
            <Plus />
          </PhotosArea>
        </DateWrapper>
        <ButtonWrapper>
          <Button title="Confirmar presença" size="full" />
          <Button
            title="Tenho Interesse"
            size="full"
            color={theme.colors.main}
            bgColor={theme.colors.background}
            style={{ borderColor: theme.colors.main, borderWidth: 1 }}
          />
        </ButtonWrapper>
      </Content>
    </Container>
  );
}
