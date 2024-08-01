import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  size?: "sm" | "lg" | "full";
  title: string;
  bgColor?: string;
  color?: string;
  isLoading?: boolean;
  disabled?: boolean;
  variant?: "default" | "outline";
}

export function Button({
  title,
  size = "lg",
  bgColor,
  color,
  isLoading,
  disabled,
  variant = "default",
  ...rest
}: Props) {
  return (
    <Container
      {...rest}
      size={size}
      bgColor={bgColor}
      disabled={isLoading || disabled}
      variant={variant}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Title color={color} size={size} variant={variant}>
          {title}
        </Title>
      )}
    </Container>
  );
}
