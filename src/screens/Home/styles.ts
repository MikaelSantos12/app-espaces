import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const Content = styled.View`
  padding: 16px;
  flex: 1;
`;

export const itemSeparator = styled.View`
  height: 24px;
  width: 100%;
`;
