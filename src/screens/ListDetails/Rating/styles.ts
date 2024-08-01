import styled from "styled-components/native";

interface Props {
  filled: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const RatingButton = styled.TouchableOpacity<Props>`
  width: 10px;
  height: 10px;
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
  font-size: ${({ theme }) => theme.font_size.sm};
  color: ${({ theme }) => theme.colors.main};
`;
export const Main = styled.View`
  align-items: center;
  gap: 4px;
  flex-direction: row;
`;

export const RatingCircle = styled.View``;

export const RatingText = styled.Text`
  font-family: ${({ theme }) => theme.font.nunito_700};
  font-size: ${({ theme }) => theme.font_size.md};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;
