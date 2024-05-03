import Logo from "@/assets/LOGO.svg";
import { Bell, UserPlus } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import * as S from "./styles";
export function Header() {
  const theme = useTheme();
  return (
    <S.Container testID="header">
      <S.Content>
        <Logo />
        <S.Icons>
          <UserPlus weight="fill" size={32} color={theme.colors.secondary} />
          <Bell weight="fill" size={32} color={theme.colors.secondary} />
        </S.Icons>
      </S.Content>
    </S.Container>
  );
}
