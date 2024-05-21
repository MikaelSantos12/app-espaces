import styled from "styled-components/native";
import { Platform } from 'react-native'

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.main};
  width: 100%;
`;

export const Content = styled.View<{ isTab?: boolean; logoOnly?: boolean }>`
  flex-direction: row;
  padding: 16px;
  padding-top: ${Platform.OS === "android" ? "40px" : "32px"};
  align-items: center;
  justify-content: ${({ isTab, logoOnly }) =>
    logoOnly ? "center" : isTab ? "space-between" : ""};
  gap: 8px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.font.nunito_700};
  font-size: ${({ theme }) => theme.font_size.lg};
`;

export const Icons = styled.View`
  flex-direction: row;
  gap: 8px;
`;
