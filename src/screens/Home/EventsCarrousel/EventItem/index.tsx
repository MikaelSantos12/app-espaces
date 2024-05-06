import { Sparkle } from "phosphor-react-native";
import { useTheme } from "styled-components";
import { Container, Title } from "./styles";
interface Props {
  isFirst?: boolean;
}

export function EventItem({ isFirst }: Props) {
  const theme = useTheme();
  return (
    <Container isFirst={isFirst}>
      {isFirst && <Sparkle color={theme.colors.secondary} />}

      <Title>Próximos eventos</Title>
    </Container>
  );
}
