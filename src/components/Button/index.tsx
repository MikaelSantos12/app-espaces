import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  size?: "sm" | "lg" | "full";
  title: string;
  bgColor?: string;
  color?: string;
  isLoading?: boolean;
}

export function Button({
  title,
  size = "lg",
  bgColor,
  color,
  isLoading,
  ...rest
}: Props) {
  return (
    <Container {...rest} size={size} bgColor={bgColor} disabled={isLoading}>
      {isLoading ? <ActivityIndicator /> : <Title color={color}>{title}</Title>}
    </Container>
  );
}
