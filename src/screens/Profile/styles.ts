import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.ScrollView`
  padding: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font.inter_400};
`;

export const Top = styled.View`
  flex-direction: row;
  margin-top: 32px;
  gap: 32px;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 999px;
`;

export const ProfileWrapper = styled.View``;

export const Name = styled.Text`
  font-size: ${({ theme }) => theme.font_size.xl};
  font-family: ${({ theme }) => theme.font.nunito_700};
  color: ${({ theme }) => theme.colors.main};
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.font_size.lg};
  font-family: ${({ theme }) => theme.font.inter_400};
  color: ${({ theme }) => theme.colors.main};
`;
