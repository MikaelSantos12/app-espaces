import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import InputAutocomplete from "@/components/InputAutocomplete";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, Content, Main, Title } from "./styles";

export function SelectCity({ route }) {
  const navigation = useNavigation();
  const theme = useTheme();

  const handlePress = (data: any) => {
    navigation.navigate("username", {
      address: data,
      ...route.params,
    });
  };
  return (
    <Container>
      <Header logoOnly />
      <Content>
        <Title>Escolha sua cidade</Title>

        <Main>
          <InputAutocomplete
            placeholder="Selecione sua cidade"
            handlePress={handlePress}
          />
          <View style={{ height: 60 }}>
            <Button title="Enviar" size="full" />
          </View>
        </Main>
      </Content>
    </Container>
  );
}
