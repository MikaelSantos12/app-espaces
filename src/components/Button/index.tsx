import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  size?: "sm" | "lg" | "full";
  title: string;
  bgColor?: string;
  color?: string;
}

export function Button({ title, size = "lg", bgColor, color, ...rest }: Props) {
  return (
    <Container {...rest} size={size} bgColor={bgColor}>
      <Title color={color}>{title}</Title>
    </Container>
  );
}
