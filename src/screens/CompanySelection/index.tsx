import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { faker } from "@faker-js/faker";
import { BookmarkSimple, MagnifyingGlass } from "phosphor-react-native";
import { useForm } from "react-hook-form";
import { FlatList } from "react-native";
import { useTheme } from "styled-components/native";
import { CompanyCard } from "./CompanyCard";
import { Card, Container, Content, InputContainer, Title } from "./styles";

export function CompanySelection() {
  const theme = useTheme();
  const { control } = useForm();

  const companies = [
    {
      image: faker.image.url(),
      company: faker.company.name(),
      location: faker.location.streetAddress(),
    },
    {
      image: faker.image.url(),
      company: faker.company.name(),
      location: faker.location.streetAddress(),
    },
    {
      image: faker.image.url(),
      company: faker.company.name(),
      location: faker.location.streetAddress(),
    },
    {
      image: faker.image.url(),
      company: faker.company.name(),
      location: faker.location.streetAddress(),
    },
    {
      image: faker.image.url(),
      company: faker.company.name(),
      location: faker.location.streetAddress(),
    },
  ];

  const renderItem = ({ item }: any) => <CompanyCard data={item} />;
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <BookmarkSimple size={32} color={theme.colors.main} weight="fill" />
          <Title>Crie uma nova lista</Title>
        </Card>
        <InputContainer>
          <Input
            control={control}
            name="search"
            placeholder="Pesquisar por um espaço"
            style={{ borderRadius: 999 }}
            Icon={<MagnifyingGlass color="#929292" weight="bold" />}
          />
        </InputContainer>
        <FlatList
          scrollEnabled={false}
          data={companies}
          renderItem={renderItem}
          keyExtractor={(item) => item.company}
          contentContainerStyle={{ marginTop: 16, gap: 8 }}
        />
      </Content>
    </Container>
  );
}
