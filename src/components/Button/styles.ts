import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
interface Props {
  bgColor?: string;
  size?: "sm" | "lg" | "full";
}

const sizes = {
  sm: "8px 12px",
  lg: "8px 32px",
  full: "8px 8px",
};
export const Container = styled(TouchableOpacity)<Props>`
  background-color: ${({ theme, bgColor }) =>
    bgColor ? bgColor : theme.colors.main};
  border-radius: ${({ size }) => (size === "full" ? "16px" : "99px")};

  padding: ${({ size }) => (size ? sizes[size] : "8px")};
  flex: ${({ size }) => (size === "full" ? 1 : "none")};
  height: ${({ size }) => (size === "full" ? "60px" : "auto")};
  align-self: ${({ size }) => (size === "sm" ? "center" : "auto")};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<{ color?: string }>`
  color: ${({ theme, color }) => (color ? color : theme.colors.background)};
  font-family: ${({ theme }) => theme.font.nunito_700};
  font-size: ${({ theme }) => theme.font_size.md};
  text-align: center;
`;
