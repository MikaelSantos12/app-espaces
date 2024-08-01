import Logo from "@/assets/LOGO.svg";

import { useNavigation } from "@react-navigation/native";
import { Bell, CaretLeft, UserPlus } from "phosphor-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";
import * as S from "./styles";

interface Props {
  title?: string;
  logoOnly?: boolean;
}

export function Header({ title, logoOnly = false }: Props) {
  const theme = useTheme();
  const navigate = useNavigation();
  const isTab = navigate.getState()?.type === "tab";

  return (
    <S.Container testID="header">
      <S.Content isTab={isTab} logoOnly={logoOnly}>
        {logoOnly && <Logo />}
        {!logoOnly && (
          <React.Fragment>
            {isTab && (
              <React.Fragment>
                <Logo />
                <S.Icons>
                  <UserPlus
                    weight="fill"
                    size={32}
                    color={theme.colors.secondary}
                  />
                  <Bell
                    weight="fill"
                    size={32}
                    color={theme.colors.secondary}
                  />
                </S.Icons>
              </React.Fragment>
            )}

            {!isTab && (
              <React.Fragment>
                <TouchableOpacity
                  onPress={() => navigate.goBack()}
                  testID="back-button"
                >
                  <CaretLeft size={32} color={theme.colors.secondary} />
                </TouchableOpacity>

                <S.Title>{title}</S.Title>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </S.Content>
    </S.Container>
  );
}
