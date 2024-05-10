import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { faker } from "@faker-js/faker";
import { MagnifyingGlass, PencilSimpleLine } from "phosphor-react-native";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FlatList, Switch } from "react-native";
import { useTheme } from "styled-components/native";
import { CardCompany } from "./CardCompany";
import {
  Container,
  Content,
  ListInfo,
  Row,
  SearchContainer,
  Title,
} from "./styles";
export function NewList() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const { control } = useForm();
  const theme = useTheme();

  const data = [
    {
      id: faker.string.uuid(),
      photo: faker.image.avatarGitHub(),
      name: faker.person.fullName(),
    },

    {
      id: faker.string.uuid(),
      photo: faker.image.avatarGitHub(),
      name: faker.person.fullName(),
    },

    {
      id: faker.string.uuid(),
      photo: faker.image.avatarGitHub(),
      name: faker.person.fullName(),
    },
  ];
  const renderItem = ({ item }: any) => <CardCompany data={item} />;
  return (
    <Container>
      <Header title="Nova lista" />
      <Content>
        <ListInfo>
          <Row>
            <Title>Nova lista</Title>
            <PencilSimpleLine color={theme.colors.main} weight="fill" />
          </Row>

          <Row>
            <Switch />
            <Title style={{ maxWidth: 100 }}>Tornar lista privada</Title>
          </Row>
        </ListInfo>
        <Input
          control={control}
          name="description"
          placeholder="Escreva uma descrição"
          isTextArea
        />

        <SearchContainer>
          <Title>Adicione espaços à sua lista</Title>

          <Input
            control={control}
            name="search"
            placeholder="Pesquise por um espaço"
            Icon={<MagnifyingGlass color={theme.colors.main} weight="bold" />}
          />
        </SearchContainer>

        <FlatList
          scrollEnabled={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            gap: 8,
          }}
        />
      </Content>
    </Container>
  );
}
