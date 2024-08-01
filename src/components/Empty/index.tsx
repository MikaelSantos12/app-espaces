import { Container, Title } from "./styles";

interface Props {
  title: string;
  icon: React.ReactNode;
}
export function Empty({ icon, title }: Props) {
  return (
    <Container>
      {icon}
      <Title>{title}</Title>
    </Container>
  );
}
