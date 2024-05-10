import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { faker } from "@faker-js/faker";
import { useNavigation } from "@react-navigation/native";
import { BookmarkSimple, MagnifyingGlass } from "phosphor-react-native";
import { useForm } from "react-hook-form";
import { FlatList } from "react-native";
import { useTheme } from "styled-components/native";
import { CompanyCard } from "./CompanyCard";
import { Card, Container, Content, Title } from "./styles";

export function CompanySelection() {
  const theme = useTheme();
  const { control } = useForm();
  const navigation = useNavigation();
  const companies = [
    {
      image: faker.image.url(),
      company: faker.company.name(),
      location: "Av. São João, 677 - Centro Histórico de São Paulo, São Paulo",
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

  const handlePress = () => {
    navigation.navigate("newPublication" as never);
  };

  const renderItem = ({ item }: any) => (
    <CompanyCard data={item} handlePress={handlePress} />
  );
  return (
    <Container>
      <Header />
      <Content>
        <Card onPress={() => navigation.navigate("newList" as never)}>
          <BookmarkSimple size={32} color={theme.colors.main} weight="fill" />
          <Title>Crie uma nova lista</Title>
        </Card>
        <Input
          control={control}
          name="search"
          placeholder="Pesquisar por um espaço"
          style={{ borderRadius: 999, marginTop: 16 }}
          Icon={<MagnifyingGlass color="#929292" weight="bold" />}
        />

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
