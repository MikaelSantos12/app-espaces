import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  padding: 16px;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.lg};
  font-family: ${({ theme }) => theme.font.nunito_700};
  color: ${({ theme }) => theme.colors.main};
  text-align: center;
`;

export const Main = styled.View`
  margin-top: 32px;
  gap: 16px;
  height: auto;
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.font_size.md};
  font-family: ${({ theme }) => theme.font.inter_400};
  color: ${({ theme }) => theme.colors.main};
`;

export const IconWrapper = styled.View`
  align-items: center;
`;
