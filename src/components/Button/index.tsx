import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  size?: "sm" | "lg" | "full";
  title: string;
}

export function Button({ title, size = "lg", ...rest }: Props) {
  return (
    <Container {...rest} size={size}>
      <Title>{title}</Title>
    </Container>
  );
}
