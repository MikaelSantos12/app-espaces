import * as S from "./styles";
interface Props {
  data: {
    post: string;
  };
}
export function PublicationImage({ data }: Props) {
  return (
    <S.PostImage
      source={{
        uri: data.post,
      }}
    />
  );
}
