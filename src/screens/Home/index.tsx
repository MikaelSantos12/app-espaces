import { Header } from "@/components/Header";
import { Publications } from "./Publications";
import { Container, Content } from "./styles";
export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Publications></Publications>
      </Content>
    </Container>
  );
}
