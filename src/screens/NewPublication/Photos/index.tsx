import { Container, Image } from "./styles";

export function Photos({ url, handlePress }) {
  return (
    <Container onPress={handlePress}>
      {url && <Image source={{ uri: url }} />}
    </Container>
  );
}
