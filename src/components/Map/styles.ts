import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const Content = styled.View`
  position: relative;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font.inter_400};
`;

export const Top = styled.SafeAreaView`
  position: absolute;
  top: ${Platform.OS === "android" ? "40px" : "42px"};

  left: 10px;

  right: 10px;
`;

export const Bottom = styled.View`
  position: absolute;

  left: 10px;
  right: 10px;

  bottom: 10px;
`;
