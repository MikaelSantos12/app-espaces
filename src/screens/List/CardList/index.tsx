import { Button } from "@/components/Button";
import { ListDTO } from "@/dtos/ListDTO";
import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";
interface Props {
  data: ListDTO;
}
export function CardList({ data }: Props) {
  const navigation = useNavigation();
  return (
    <S.Container
      onPress={() =>
        navigation.navigate("listDetails", {
          listId: data.id,
        })
      }
    >
      <S.Top>
        {/* <S.CoverPhoto source={{ uri: data.coverPhoto }} /> */}
        <S.ProfilePic source={{ uri: data?.author?.userPhoto?.image }} />
      </S.Top>
      <S.Main>
        <S.TextWrapper>
          <S.Title>{data?.name}</S.Title>
          <S.Subtitle>
            por <S.Highlight>@{data?.author.username}</S.Highlight>
          </S.Subtitle>
        </S.TextWrapper>
        <S.Subtitle numberOfLines={2}>{data?.description}</S.Subtitle>
        <Button title={"Seguir"} size="sm" />
      </S.Main>
    </S.Container>
  );
}
