import * as S from "./styles";

interface Props {
  count?: number;
  icon: React.ReactNode;
}

export function Actions({ icon, count }: Props) {
  return (
    <S.Container>
      {icon && icon}
      {!!count && <S.Count>{count}</S.Count>}
    </S.Container>
  );
}
