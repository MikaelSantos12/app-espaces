import * as S from "./styles";
interface Props {
  data: {
    description: string;
  };
}
export function PublicationDescription({ data }: Props) {
  return <S.Descripton>{data.description}</S.Descripton>;
}
