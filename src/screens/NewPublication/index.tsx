import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { api } from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Slider } from "@miblanchard/react-native-slider";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import { Tag } from "phosphor-react-native";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { KeyboardAvoidingView, Platform } from "react-native";
import Toast from "react-native-toast-message";
import { useTheme } from "styled-components/native";
import { z } from "zod";

import { CompanyCard } from "@/components/CompanyCard";
import { Photos } from "./Photos";
import {
  Container,
  Content,
  Evaluate,
  PhotosWrapper,
  Rating,
  RatingContainer,
  Row,
  SliderWrapper,
  TagButton,
  Title,
} from "./styles";

const publicationSchema = z.object({
  content: z.string(),
});
type PublicationSchema = z.infer<typeof publicationSchema>;
type NewPublicationRouteProp = RouteProp<
  { params: { company: { ID: number }; selectedTags: string[] } },
  "params"
>;
export function NewPublication({}) {
  const route = useRoute<NewPublicationRouteProp>();
  const company = route.params.company;
  const [isLoading, setIsLoading] = useState<number | null>(null);
  const navigation = useNavigation();

  const [value, setValue] = useState(0);
  const theme = useTheme();

  const [images, setImages] = useState(Array(6).fill(null));

  const { mutate: mutatePhoto } = useMutation({
    mutationFn: async (index: number) => {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        const fileExtension = result.assets[0].uri.split(".").pop();
        const file = {
          uri: result.assets[0].uri,
          name: result.assets[0].uri.split("/").pop(), // Extract file name
          type: `${result.assets[0].type}/${fileExtension}`,
        };

        const formData = new FormData();

        formData.append("file", file);
        setIsLoading(index);
        const { data } = await api.feed.post("/post/images", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        const novasImagens = [...images];
        novasImagens[index] = data.url;
        setImages(novasImagens);
        return data;
      }
    },
    onSuccess: () => {
      setIsLoading(null);
    },
  });
  const handlePress = async (index: number) => {};
  const queryClient = useQueryClient();
  const handleRemove = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };
  const { control, handleSubmit } = useForm<PublicationSchema>({
    resolver: zodResolver(publicationSchema),
  });
  const tags = route?.params?.selectedTags;

  const { mutate, isPending: isPendingCreation } = useMutation({
    mutationFn: async (data: PublicationSchema) => {
      const postImages = images.filter((item) => item !== null);

      return api.feed.post("/post/create", {
        content: data.content,
        rating: value,
        postImages,
        companyId: company.ID,
        postTags: tags,
      });
    },
    onSuccess: (res) => {
      Toast.show({
        type: "success",
        text1: "Seu post esta sendo criado!",
      });
      queryClient.invalidateQueries({
        queryKey: ["useFeed"],
      });
      navigation.navigate("feed" as never);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleSendEmail = (data: PublicationSchema) => {
    mutate(data);
  };
  const handleTags = () => {
    navigation.navigate("tags", { ...route.params });
  };
  console.log();
  return (
    <Container>
      <Header title="Nova publicação" />
      <Content>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <CompanyCard data={company} />
          <Row>
            <TagButton>
              <Tag color={theme.colors.main} weight="fill" />
              <Title>Adicionar a uma lista</Title>
            </TagButton>
            <TagButton onPress={handleTags}>
              <Tag color={theme.colors.main} weight="fill" />
              <Title>Etiquetas</Title>
            </TagButton>
          </Row>
          <RatingContainer>
            <Title>Como foi sua experiência?</Title>
            <Evaluate>
              <Rating>
                <Title>{value}</Title>
              </Rating>
              <SliderWrapper style={{}}>
                <Slider
                  minimumTrackTintColor={"transparent"}
                  maximumTrackTintColor={"transparent"}
                  maximumValue={10}
                  minimumValue={0}
                  step={0.5}
                  onValueChange={(e) => setValue(+e)}
                  value={value}
                  renderTrackMarkComponent={() => (
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      colors={[theme.colors.secondary, "#020422"]}
                      style={{
                        borderRadius: 20,
                        width: "100%",
                        flex: 1,
                        height: 15, // Ajuste a altura conforme necessário
                        justifyContent: "center",
                        minWidth: "100%",
                      }}
                    />
                  )}
                  thumbStyle={{
                    backgroundColor: theme.colors.secondary,
                    borderColor: theme.colors.main,
                    borderRadius: 30,
                    borderWidth: 5,
                    height: 25,
                    width: 25,
                  }}
                />
              </SliderWrapper>
            </Evaluate>
          </RatingContainer>
          <Title>Escolha uma foto</Title>
          <PhotosWrapper horizontal contentContainerStyle={{ gap: 8 }}>
            {images.map((item, index) => (
              <Photos
                isLoading={isLoading === index}
                handlePress={() => mutatePhoto(index)}
                url={item}
                key={index}
              />
            ))}
          </PhotosWrapper>

          <Input
            name="content"
            control={control}
            placeholder="Escreva sua avaliação"
            isTextArea
          />
          <Button
            title="Publicar"
            size="full"
            style={{ marginTop: 12 }}
            onPress={handleSubmit(handleSendEmail)}
            isLoading={isPendingCreation}
          />
        </KeyboardAvoidingView>
      </Content>
    </Container>
  );
}
