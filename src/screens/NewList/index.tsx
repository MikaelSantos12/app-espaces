import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { useBottomSheet } from "@/context/BottomSheetContext";
import { Company } from "@/dtos/CompanieDTO";
import { api } from "@/services/api";
import { saveStorageTooltipList } from "@/storage/listStorage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Lock, LockOpen, PlusCircle, Trash } from "phosphor-react-native";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TouchableOpacity, View } from "react-native";
import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";
import { Swipeable } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import { useTheme } from "styled-components/native";
import { z } from "zod";
import { BottomSheetCompanies } from "./BottomSheetCompanies";
import { CardCompany } from "./CardCompany";
import {
  AddButton,
  ButtonText,
  Container,
  Content,
  Label,
  ListInfo,
  Row,
  SearchContainer,
  SwipeableRemove,
  Title,
} from "./styles";

type NewListSchema = z.infer<typeof newListSchema>;

interface Data extends Company {
  content: string;
  images: string[];
}

type MutateSubmit = {
  form: NewListSchema;
  companies: {
    id: string;
    content: string;
    images: string[];
  }[];
};

const newListSchema = z.object({
  description: z.string(),
  title: z.string(),
});

export function NewList({ route }) {
  const {
    control,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<NewListSchema>({
    resolver: zodResolver(newListSchema),
  });

  const [isPrivate, setIsPrivate] = useState(false);
  const toggleSwitch = () => setIsPrivate((previousState) => !previousState);
  const [data, setData] = useState<Data[]>([]);
  const navigation = useNavigation();
  const theme = useTheme();
  const { setComponent, openBottomSheet, closeBottomSheet } = useBottomSheet();

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ companies, form }: MutateSubmit) => {
      return api.list.post("/list", {
        name: form.title,
        description: form.description,
        companies,
        isPrivate,
      });
    },
    onSuccess: (response, variables) => {
      saveStorageTooltipList();
      Toast.show({
        type: "success",
        text1: "Lista criada!",
      });

      navigation.replace("listDetails", { listId: response.data.list.id });
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        console.log(err.response?.data.message.errors.details);
      }
    },
  });

  const handleCreateList = (payload: NewListSchema) => {
    const companies = data.map((item, i) => {
      return {
        id: item.ID,
        content: item.content,
        images: item.images.filter((item) => item !== null),
        order: i + 1,
      };
    });
    mutate({ companies, form: payload });
  };
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
      setData((prevState) => prevState.filter((el) => el.ID !== item.ID));
    },
    [data]
  );

  const renderItem = useCallback(
    ({ item, drag, getIndex }: RenderItemParams<Company>) => (
      <Swipeable
        renderRightActions={() => renderRightActions(item)}
        friction={1}
        rightThreshold={40}
        overshootRight={false}
      >
        <CardCompany data={item} drag={drag} isFirstItem={getIndex() == 0} />
      </Swipeable>
    ),
    [renderRightActions]
  );

  const handleSelect = useCallback(
    (item: Data) => {
      setData((prevState) => {
        const updatedData = [...prevState, item];
        return updatedData;
      });
      closeBottomSheet();
    },
    [setData, closeBottomSheet]
  );

  useEffect(() => {
    const company = route.params?.company;
    if (company) {
      setData((prevState) => [
        ...prevState.filter((item) => item.ID !== company.ID),
        company,
      ]);
    }
  }, [route]);

  useEffect(() => {
    setComponent(<BottomSheetCompanies handleSelect={handleSelect} />);
  }, []);
  return (
    <Container>
      <Header title="Nova lista" />
      <Content>
        <Row style={{ justifyContent: "flex-end" }}>
          <TouchableOpacity onPress={toggleSwitch}>
            {isPrivate ? <Lock /> : <LockOpen />}
          </TouchableOpacity>
          <Label>{isPrivate ? "Privada" : "Pública"}</Label>
        </Row>
        <ListInfo>
          <View style={{ width: "100%" }}>
            <Input
              control={control}
              name="title"
              placeholder="Nome da lista"
              label="Titulo da lista"
              error={errors.title?.message}
            />
          </View>
        </ListInfo>

        <Input
          control={control}
          label="Descrição"
          name="description"
          placeholder="Escreva uma descrição"
          isTextArea
          error={errors.description?.message}
        />

        <SearchContainer>
          <Title>Adicione espaços à sua lista</Title>
          <AddButton onPress={openBottomSheet}>
            <ButtonText>Adicionar um espaço</ButtonText>
            <PlusCircle color={theme.colors.main} />
          </AddButton>
        </SearchContainer>

        <DraggableFlatList
          scrollEnabled={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.ID}
          onDragEnd={({ data }) => setData(data)}
          contentContainerStyle={{
            gap: 8,
            marginBottom: 12,
          }}
        />
        <Button
          isLoading={isPending}
          title="Publicar"
          size="full"
          onPress={handleSubmit(handleCreateList)}
        />
      </Content>
    </Container>
  );
}
