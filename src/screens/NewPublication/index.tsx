import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { faker } from "@faker-js/faker";
import { Slider } from "@miblanchard/react-native-slider";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import { Tag } from "phosphor-react-native";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, KeyboardAvoidingView, Platform } from "react-native";
import { useTheme } from "styled-components/native";
import { CompanyCard } from "../CompanySelection/CompanyCard";
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
const company = {
  image: faker.image.url(),
  company: faker.company.name(),
  location: faker.location.streetAddress(),
};
export function NewPublication() {
  const [value, setValue] = useState(0);

  const theme = useTheme();

  const [images, setImages] = useState(Array(6).fill(null));

  const handlePress = async (index: number) => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        console.log(result);
        const novasImagens = [...images];
        novasImagens[index] = result.assets[0].uri;
        setImages(novasImagens);
      }
    } catch (error: any) {
      Alert.alert("Erro ao selecionar a imagem", error.message);
    }
  };

  const handleRemove = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };
  const { control } = useForm();
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
            <TagButton>
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
                handlePress={() => handlePress(index)}
                url={item}
                key={index}
              />
            ))}
          </PhotosWrapper>

          <Input
            name="evaluate"
            control={control}
            placeholder="Escreva sua avaliação"
            isTextArea
          />
          <Button title="Publicar" size="full" style={{ marginTop: 12 }} />
        </KeyboardAvoidingView>
      </Content>
    </Container>
  );
}
