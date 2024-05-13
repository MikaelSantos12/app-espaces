import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  position: relative;
`;

export const Content = styled.ScrollView`
  padding: 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme }) => theme.font.nunito_700};
  font-size: ${({ theme }) => theme.font_size.lg};
  margin-top: 32px;
`;

export const Bottom = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  padding-bottom: 48px;
  background-color: ${({ theme }) => theme.colors.background};
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.card};
`;

export const UserPhoto = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 999px;
`;
