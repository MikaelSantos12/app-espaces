import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { faker } from "@faker-js/faker";
import {
  MagnifyingGlass,
  PencilSimpleLine,
  Trash,
} from "phosphor-react-native";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Switch, TouchableOpacity } from "react-native";
import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";
import { Swipeable } from "react-native-gesture-handler";
import { useTheme } from "styled-components/native";
import { CardCompany } from "./CardCompany";
import {
  Container,
  Content,
  ListInfo,
  Row,
  SearchContainer,
  SwipeableRemove,
  Title,
} from "./styles";

type Company = {
  id: string;
  photo: string;
  name: string;
};
const companies = [
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
export function NewList() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [data, setData] = useState(companies);
  const { control } = useForm();
  const theme = useTheme();

  const renderRightActions = useCallback(
    (item: Company) => (
      <SwipeableRemove>
        <TouchableOpacity onPress={() => removeItem(item)}>
          <Trash color={theme.colors.background} />
        </TouchableOpacity>
      </SwipeableRemove>
    ),
    [theme.colors.background]
  );

  const removeItem = useCallback(
    (item: Company) => {
      setData((prevState) => prevState.filter((el) => el.id !== item.id));
    },
    [data]
  );

  const renderItem = useCallback(
    ({ item, drag }: RenderItemParams<Company>) => (
      <Swipeable
        renderRightActions={() => renderRightActions(item)}
        friction={1}
        rightThreshold={40}
        overshootRight={false}
      >
        <CardCompany data={item} drag={drag} />
      </Swipeable>
    ),
    [renderRightActions]
  );
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

        <DraggableFlatList
          scrollEnabled={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          onDragEnd={({ data }) => setData(data)}
          contentContainerStyle={{
            gap: 8,
            marginBottom: 24,
          }}
        />
        <Button title="Publicar" size="full" />
      </Content>
    </Container>
  );
}
