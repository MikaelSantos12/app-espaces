import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  padding: 16px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.md};
  font-family: ${({ theme }) => theme.font.nunito_400};
  color: ${({ theme }) => theme.colors.main};
`;

export const Card = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  padding: 12px 8px;
  flex-direction: row;
  gap: 12px;
  align-items: center;
`;
export const InputContainer = styled.View`
  margin: 16px 0px;
`;
