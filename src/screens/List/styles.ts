import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const Content = styled.View`
  padding: 16px;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font.inter_400};
`;

export const SearchContainer = styled.View`
  flex-direction: row;

  justify-content: space-between;
  gap: 16px;
`;

export const ButtonFilter = styled.TouchableOpacity`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.card};
  padding: 8px;
  border-radius: 8px;
`;
