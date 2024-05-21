import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const Content = styled.ScrollView``;

export const TabWrapper = styled.View`
  flex-direction: row;
  align-items: center;

  padding: 16px;
`;
