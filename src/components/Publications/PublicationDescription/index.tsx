import * as S from "./styles";
interface Props {
  data: {
    content: string;
  };
}
export function PublicationDescription({ data }: Props) {
  return <S.Descripton>{data.content}</S.Descripton>;
}
