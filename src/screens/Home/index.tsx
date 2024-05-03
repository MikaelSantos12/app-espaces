import { Header } from "@/components/Header";
import { Publications } from "./Publications";
import { Container, Content, Title } from "./styles";
export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Title>Home </Title>
        <Publications></Publications>
      </Content>
    </Container>
  );
}
