import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.main};
  width: 100%;
`;

export const Content = styled.View`
  flex-direction: row;
  padding: 16px;
`;

export const Title = styled.Text``;
