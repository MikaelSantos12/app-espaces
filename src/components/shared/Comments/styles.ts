import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled.View`
  gap: 8px;
`;

export const Bottom = styled(Animated.View)`
  padding: 24px 16px;
  background-color: ${({ theme }) => theme.colors.background};
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.card};
`;
export const Content = styled.ScrollView`
  padding: 16px;
  flex: 1;
`;
