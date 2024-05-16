import { useCallback } from "react";
import { FlatList } from "react-native";
import Banners from "./Banners";
import { Container, ShowsWrapper, Title } from "./styles";

export function Events() {
  const imageUrl =
    "https://eshows.com.br/_next/image?url=https%3A%2F%2Fs3.us-east-2.amazonaws.com%2Fepm-blue%2Feshows%2FT_ATRACOES%2F1505%2F638230607572053170_perfil.png&w=1920&q=50";
  const banners = [
    {
      id: 1,
      cover: imageUrl,
      date: "Sex - 12/04",
      title: "testeee",
    },
    {
      id: 2,
      cover: imageUrl,
      date: "Sex - 14/04",
      title: "Despedida do Mika",
    },
    {
      id: 3,
      cover: imageUrl,
      date: "Sex - 13/04",
      title: "Cospe veneno",
    },
  ];

  const renderItem = useCallback(
    ({ item }: any) => <Banners item={item} />,
    []
  );

  const renderItemBanner = useCallback(
    ({ item }: any) => <Banners item={item} full />,
    []
  );
  return (
    <Container>
      <ShowsWrapper>
        <Title>Shows em espaços que você segue</Title>

        <FlatList
          horizontal
          data={banners}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ gap: 8, marginTop: 12, marginBottom: 16 }}
        />

        <Title>Espaços sugeridos</Title>
        <FlatList
          scrollEnabled={false}
          data={banners}
          renderItem={renderItemBanner}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ gap: 8, marginTop: 12 }}
        />
      </ShowsWrapper>
    </Container>
  );
}
