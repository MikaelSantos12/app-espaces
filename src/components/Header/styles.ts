import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.main};
  width: 100%;
`;

export const Content = styled.View`
  flex-direction: row;
  padding: 16px;
  padding-top: 32px;
  justify-content: space-between;
`;

export const Title = styled.Text``;

export const Icons = styled.View`
  flex-direction: row;
  gap: 8px;
`;
