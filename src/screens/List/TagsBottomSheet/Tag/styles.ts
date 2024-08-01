import styled from "styled-components/native";

export const Container = styled.TouchableOpacity<{ isSelected: boolean }>`
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.main : theme.colors.card};
  border-radius: 999px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-right: 8px;
`;

export const Title = styled.Text<{ isSelected: boolean }>`
  font-size: ${({ theme }) => theme.font_size.sm};
  font-family: ${({ theme }) => theme.font.nunito_400};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.card : theme.colors.main};
`;

export const RemoveButton = styled.TouchableOpacity`
  margin-left: 8px;
`;

export const RemoveButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.card};
  font-size: ${({ theme }) => theme.font_size.sm};
`;
