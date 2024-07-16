import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import InputAutocomplete from "@/components/InputAutocomplete";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, Content, Main, Title } from "./styles";

export function SelectCity({ route }) {
  const navigation = useNavigation();
  const theme = useTheme();
  const [selectedCity, setSelectedCity] = useState("");
  const handleSelect = (data: any) => {
    setSelectedCity(data.city);
  };
  const handlePress = () => {
    navigation.navigate("username", {
      address: selectedCity,
      ...route.params,
    });
  };
  console.log(selectedCity);
  return (
    <Container>
      <Header logoOnly />
      <Content>
        <Title>Escolha sua cidade</Title>

        <Main>
          <InputAutocomplete
            placeholder="Selecione sua cidade"
            handlePress={handleSelect}
          />
          <View style={{ height: 60 }}>
            <Button
              title="Enviar"
              size="full"
              onPress={handlePress}
              disabled={selectedCity === ""}
            />
          </View>
        </Main>
      </Content>
    </Container>
  );
}
