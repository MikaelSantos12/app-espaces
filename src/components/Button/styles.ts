import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const sizes = {
  sm: "8px 12px",
  lg: "8px 32px",
  full: "8px 8px",
};
export const Container = styled(TouchableOpacity)<{
  size?: string | undefined;
}>`
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 99px;

  padding: ${({ size }) => (size ? sizes[size] : "8px")};
  flex: ${({ size }) => (size === "full" ? 1 : "none")};
  height: ${({ size }) => (size === "full" ? "60px" : "auto")};
  align-self: ${({ size }) => (size === "sm" ? "center" : "auto")};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.font.inter_400};
  font-size: ${({ theme }) => theme.font_size.md};
  text-align: center;
`;
