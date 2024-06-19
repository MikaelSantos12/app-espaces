import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Center = styled.View`
  justify-content: center;
  align-items: center;
  margin: 64px 0;
  position: relative;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.lg};
  font-family: ${({ theme }) => theme.font.nunito_700};
  margin: 8px 0;
`;

export const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.font_size.md};
  font-family: ${({ theme }) => theme.font.nunito_400};
  margin: 8px 0 24px 0;
`;
