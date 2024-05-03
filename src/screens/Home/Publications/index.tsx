import { Ratings } from "@/components/Ratings";
import { ChatCircle, Heart, PaperPlaneTilt } from "phosphor-react-native";
import { Actions } from "./Actions";
import * as S from "./styles";
interface Props {
  data: {
    userPhoto: string;
    companyPhoto: string;
    username: string;
    companyName: string;
    createdAt: string;
    post: string;
    description: string;
  };
}

export function Publications({ data }: Props) {
  return (
    <S.Container>
      <S.Header>
        <S.PhotoContainer>
          <S.CompanyPhoto
            source={{
              uri: data.companyPhoto,
            }}
          />
          <S.UserPhoto
            source={{
              uri: data.userPhoto,
            }}
          />
        </S.PhotoContainer>
        <S.Title>
          <S.Highlight>{data.username}</S.Highlight>
          {"\n"}
          em <S.Highlight>{data.companyName}</S.Highlight>
        </S.Title>
      </S.Header>
      <S.Rating>
        <S.Title>{data.createdAt}</S.Title>
        <Ratings rating={9.5} />
      </S.Rating>
      <S.PostImage
        source={{
          uri: data.post,
        }}
      />
      <S.ActionsContainer>
        <Actions count={"200"} icon={<Heart size={28} weight="thin" />} />
        <Actions count={"200"} icon={<ChatCircle size={28} weight="thin" />} />
        <Actions
          count={"200"}
          icon={<PaperPlaneTilt size={28} weight="thin" />}
        />
      </S.ActionsContainer>
      <S.Descripton>{data.description}</S.Descripton>
    </S.Container>
  );
}
