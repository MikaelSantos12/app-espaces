import styled from "styled-components/native";

export const Container = styled.View`
  padding: 0px 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme }) => theme.font.nunito_700};
  font-size: ${({ theme }) => theme.font_size.lg};
`;

export const ShowsWrapper = styled.View`
  margin-top: 32px;
`;
