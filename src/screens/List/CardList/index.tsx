import { Button } from "@/components/Button";
import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";
export function CardList({ data }) {
  const navigation = useNavigation();
  return (
    <S.Container onPress={() => navigation.navigate("listDetails" as never)}>
      <S.Top>
        <S.CoverPhoto source={{ uri: data.coverPhoto }} />
        <S.ProfilePic source={{ uri: data.profilePic }} />
      </S.Top>
      <S.Main>
        <S.TextWrapper>
          <S.Title>{data.listName}</S.Title>
          <S.Subtitle>
            por <S.Highlight>@usuario</S.Highlight>
          </S.Subtitle>
        </S.TextWrapper>
        <S.Subtitle>
          Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.
        </S.Subtitle>
        <Button title={"Seguir"} size="sm" />
      </S.Main>
    </S.Container>
  );
}
