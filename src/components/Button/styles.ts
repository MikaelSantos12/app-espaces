import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const sizes = {
  sm: "8px 8px",
  lg: "8px 32px",
  full: "8px 8px",
};
export const Container = styled(TouchableOpacity)<{
  size?: string | undefined;
}>`
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 99px;

  padding: ${({ size }) => (size ? sizes.lg : "8px")};
  flex: ${({ size }) => (size === "full" ? 1 : "none")};

  align-self: ${({ size }) => (size === "sm" ? "center" : "auto")};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.font.inter_400};
  font-size: ${({ theme }) => theme.font_size.md};
  text-align: center;
`;
