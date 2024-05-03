import { Header } from "@/components/Header";
import { Publications } from "./Publications";
import { Container, Content } from "./styles";
export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Publications
          data={{
            companyPhoto:
              "https://images.pexels.com/photos/941864/pexels-photo-941864.jpeg?auto:compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            userPhoto:
              "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            companyName: "@teste",
            createdAt: "ha um ano atras",
            description: "dasda",
            post: "https://images.pexels.com/photos/20107590/pexels-photo-20107590/free-photo-of-cidade-meio-urbano-estrada-via.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            username: "oie",
          }}
        />
      </Content>
    </Container>
  );
}
