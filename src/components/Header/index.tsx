import Logo from "@/assets/LOGO.svg";

import { useNavigation } from "@react-navigation/native";
import { Bell, CaretLeft, UserPlus } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";
import * as S from "./styles";

interface Props {
  title?: string;
}

export function Header({ title }: Props) {
  const theme = useTheme();
  const navigate = useNavigation();
  const isTab = navigate.getState()?.type === "tab";

  return (
    <S.Container testID="header">
      <S.Content isTab={isTab}>
        {isTab && (
          <>
            <Logo />
            <S.Icons>
              <UserPlus
                weight="fill"
                size={32}
                color={theme.colors.secondary}
              />
              <Bell weight="fill" size={32} color={theme.colors.secondary} />
            </S.Icons>
          </>
        )}

        {!isTab && (
          <>
            <TouchableOpacity
              onPress={() => navigate.goBack()}
              testID="back-button"
            >
              <CaretLeft size={32} color={theme.colors.secondary} />
            </TouchableOpacity>

            <S.Title>{title}</S.Title>
          </>
        )}
      </S.Content>
    </S.Container>
  );
}
