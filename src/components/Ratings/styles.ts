import styled from "styled-components/native";

interface Props {
  filled: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const RatingButton = styled.TouchableOpacity<Props>`
  width: 16px;
  height: 16px;
  border-radius: 999px;
  background-color: ${({ theme, filled }) =>
    filled ? theme.colors.main : theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.main};
`;

export const RatingsContainer = styled.View`
  flex-direction: row;
  gap: 2px;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font.nunito_400};
  font-size: ${({ theme }) => theme.font_size.md};
  color: ${({ theme }) => theme.colors.main};
`;
export const Main = styled.View`
  align-items: flex-end;
  gap: 4px;
`;

export const RatingCircle = styled.View`
  border-radius: 999px;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border: 2px solid ${({ theme }) => theme.colors.text};
  padding: 10px;
`;

export const RatingText = styled.Text`
  font-family: ${({ theme }) => theme.font.nunito_700};
  font-size: ${({ theme }) => theme.font_size.md};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;
