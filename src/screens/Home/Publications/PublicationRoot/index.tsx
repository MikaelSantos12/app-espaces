import * as S from "./styles";
interface Props {
  children: React.ReactNode;
}
export function PublicationRoot({ children }: Props) {
  return <S.Container>{children}</S.Container>;
}
