import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)<{ size?: string }>`
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 99px;
  padding: 8px;

  align-self: ${({ size }) => (size === "sm" ? "center" : "auto")};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.font.inter_400};
  font-size: ${({ theme }) => theme.font_size.md};
  text-align: center;
`;
