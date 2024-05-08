import { Ratings } from "@/components/Ratings";
import * as S from "./styles";
interface Props {
  data: {
    userPhoto: string;
    companyPhoto: string;
    username: string;
    companyName: string;
    createdAt: string;
  };
}
export function PublicationHeader({ data }: Props) {
  return (
    <>
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
    </>
  );
}
