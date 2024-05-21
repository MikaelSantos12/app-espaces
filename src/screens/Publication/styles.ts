import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
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
  padding: 24px 16px;

  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.card};
`;

export const UserPhoto = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 999px;
`;
