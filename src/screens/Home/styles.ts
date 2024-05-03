import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const Content = styled.ScrollView`
  padding: 0 16px;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font.regular};
`;
