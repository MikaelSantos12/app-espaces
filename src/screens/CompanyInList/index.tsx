import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { api } from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useTheme } from "styled-components/native";
import { z } from "zod";

import { CompanyCard } from "@/components/CompanyCard";
import { Photos } from "./Photos";
import { Container, Content, PhotosWrapper, Title } from "./styles";

const publicationSchema = z.object({
  content: z.string(),
});
type PublicationSchema = z.infer<typeof publicationSchema>;
type NewPublicationRouteProp = RouteProp<
  {
    params: {
      company: { ID: number; content: string; images: string[] };
      selectedTags: string[];
    };
  },
  "params"
>;

export function CompanyInList({}) {
  const route = useRoute<NewPublicationRouteProp>();
  const company = route.params.company;
  const [isLoading, setIsLoading] = useState<number | null>(null);
  const navigation = useNavigation();

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
        const { data } = await api.list.post("/list/images", formData, {
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

  const queryClient = useQueryClient();
  const handleRemove = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };
  const { control, handleSubmit, setValue } = useForm<PublicationSchema>({
    resolver: zodResolver(publicationSchema),
  });
  const tags = route?.params?.selectedTags;

  const { mutate, isPending: isPendingCreation } = useMutation({
    mutationFn: async (data: PublicationSchema) => {
      const postImages = images.filter((item) => item !== null);
    },
    onSuccess: (res) => {
      navigation.navigate("feed" as never);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleSendEmail = (data: PublicationSchema) => {
    const company = route.params.company;
    company.content = data.content;
    company.images = images;

    navigation.navigate("newList", { company });
  };
  const handlePress = () => {
    // navigation.navigate("newList", { ...route.params });
  };
  useEffect(() => {
    if (route.params.company.images) {
      setImages(route.params.company?.images);
    }
    if (route.params.company.content) {
      setValue("content", route.params.company.content);
    }
  }, [route.params.company]);
  console.log();
  return (
    <Container>
      <Header title="Nova publicação" />
      <Content>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <CompanyCard data={company} />

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
