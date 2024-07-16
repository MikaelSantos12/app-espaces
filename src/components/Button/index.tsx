import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  size?: "sm" | "lg" | "full";
  title: string;
  bgColor?: string;
  color?: string;
  isLoading?: boolean;
  disabled?: boolean;
}

export function Button({
  title,
  size = "lg",
  bgColor,
  color,
  isLoading,
  disabled,
  ...rest
}: Props) {
  return (
    <Container
      {...rest}
      size={size}
      bgColor={bgColor}
      disabled={isLoading || disabled}
    >
      {isLoading ? <ActivityIndicator /> : <Title color={color}>{title}</Title>}
    </Container>
  );
}
