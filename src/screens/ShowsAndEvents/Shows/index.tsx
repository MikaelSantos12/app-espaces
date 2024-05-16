import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";
import { FlatList } from "react-native";
import Event from "../Event";
import { BottomSheetShow } from "./BottomSheetShow";
import { Container, ShowsWrapper, Title } from "./styles";

export function Shows() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const imageUrl =
    "https://eshows.com.br/_next/image?url=https%3A%2F%2Fs3.us-east-2.amazonaws.com%2Fepm-blue%2Feshows%2FT_ATRACOES%2F1505%2F638230607572053170_perfil.png&w=1920&q=50";
  const events = [
    {
      id: 4,
      cover: imageUrl,
      space: "Espaço 1",
      date: "Sexta, 05/04",
      hour: "22:00",
      title: "Teste 1331",
      tags: ["Balada", "Bar Balada", "Restaurante"],
    },
    {
      id: 5,
      cover: imageUrl,
      space: "Espaço 2",
      date: "Sexta, 05/04",
      hour: "22:00",
      title: "adasdasdsad",
      tags: ["Balada", "Bar Balada", "Restaurante"],
    },
  ];

  const renderItem = useCallback(
    ({ item }: any) => (
      <Event
        data={item}
        handlePress={() => bottomSheetModalRef.current?.present()}
      />
    ),
    []
  );

  return (
    <>
      <Container>
        <ShowsWrapper>
          <Title>Shows sugeridos</Title>

          <FlatList
            scrollEnabled={false}
            data={events}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ gap: 8, marginTop: 12 }}
          />
        </ShowsWrapper>

        <ShowsWrapper>
          <Title>Shows em espaços que você segue</Title>

          <FlatList
            scrollEnabled={false}
            data={events}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ gap: 8, marginTop: 12 }}
          />
        </ShowsWrapper>
      </Container>
      <BottomSheetShow bottomSheetModalRef={bottomSheetModalRef} />
    </>
  );
}
