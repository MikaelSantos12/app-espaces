import * as S from "./styles";

interface Props {
  count: string;
  icon: React.ReactNode;
}

export function Actions({ icon, count }: Props) {
  return (
    <S.Container>
      {icon && icon}
      <S.Count>{count}</S.Count>
    </S.Container>
  );
}
