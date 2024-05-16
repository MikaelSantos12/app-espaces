import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled(Animated.View)`
  flex: 1;

  padding: 8px 8px;
  justify-content: center;
  align-items: center;
  border-bottom-width: 3px;
  flex-direction: row;
  gap: 8px;
`;

export const Title = styled(Animated.Text)<{
  color?: string;
  size?: string;
  mt?: string;
}>`
  font-size: ${({ theme }) => theme.font_size.lg};

  font-family: ${({ theme }) => theme.font.nunito_700};
  align-items: center;
`;
