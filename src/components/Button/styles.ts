import theme from "@/theme";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

interface ContainerProps {
  bgColor?: string;
  size?: "sm" | "lg" | "full";
  variant?: "default" | "outline";
}

interface TitleProps {
  color?: string;
  size?: "sm" | "lg" | "full";
  variant?: "default" | "outline";
}

const sizes = {
  sm: "4px 12px",
  lg: "8px 32px",
  full: "8px 8px",
};

const fontSizes = {
  sm: theme.font_size.sm,
  lg: theme.font_size.md,
  full: theme.font_size.sm,
};

const variants = {
  default: {
    bgColor: theme.colors.main,
    textColor: theme.colors.background,
  },
  outline: {
    bgColor: theme.colors.background,
    textColor: theme.colors.main,
  },
};

export const Container = styled(TouchableOpacity)<ContainerProps>`
  background-color: ${({ theme, bgColor, variant }) =>
    variant ? variants[variant].bgColor : theme.colors.main};

  border-radius: ${({ size }) => (size === "full" ? "16px" : "99px")};
  padding: ${({ size }) => (size ? sizes[size] : "8px")};
  flex: ${({ size }) => (size === "full" ? 1 : "none")};
  height: ${({ size }) => (size === "full" ? "60px" : "auto")};
  align-self: ${({ size }) => (size === "sm" ? "center" : "auto")};
  align-items: center;
  justify-content: center;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  border: 1px solid
    ${({ variant }) =>
      variant ? variants[variant].textColor : theme.colors.main};
`;

export const Title = styled.Text<TitleProps>`
  color: ${({ theme, color, variant }) =>
    variant ? variants[variant].textColor : theme.colors.background};
  font-family: ${({ theme }) => theme.font.nunito_700};
  font-size: ${({ size }) => (size ? fontSizes[size] : "12px")};
  text-align: center;
`;
