import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { Calendar } from "phosphor-react-native";
import { useCallback, useMemo } from "react";
import Event from "../../Event";
import { Action, Container, Content, Row, Subtitle, Title } from "./styles";

interface Props {
  bottomSheetModalRef: any;
}

export function BottomSheetShow({ bottomSheetModalRef }: Props) {
  // ref

  // variables
  const snapPoints = useMemo(() => ["50%", "80%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {}, []);
  const renderBackdrop = useCallback(
    (props) => <BottomSheetBackdrop {...props} />,
    []
  );
  return (
    <BottomSheetModalProvider>
      <Container>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          backdropComponent={renderBackdrop}
        >
          <Content>
            <Title>Espaço AbAb</Title>
            <Subtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              faucibus posuere risus, id blandit massa tempor eget. Integer
              cursus gravida tincidunt.
            </Subtitle>
            <Row>
              <Action>
                <Calendar />
                <Subtitle>sex, 05/04</Subtitle>
              </Action>
              <Action>
                <Calendar />
                <Subtitle>Ver no mapa</Subtitle>
              </Action>
            </Row>
            <Event
              data={{
                id: 4,
                cover:
                  "https://eshows.com.br/_next/image?url=https%3A%2F%2Fs3.us-east-2.amazonaws.com%2Fepm-blue%2Feshows%2FT_ATRACOES%2F1505%2F638230607572053170_perfil.png&w=1920&q=50",
                space: "Espaço 1",
                date: "Sexta, 05/04",
                hour: "22:00",
                title: "Snake",
                tags: ["Balada", "Bar Balada", "Restaurante"],
              }}
            />
          </Content>
        </BottomSheetModal>
      </Container>
    </BottomSheetModalProvider>
  );
}
