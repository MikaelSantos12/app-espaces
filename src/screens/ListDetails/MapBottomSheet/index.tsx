import { Map } from "@/components/Map";
import { Container } from "./styles";

export function MapBottomSheet({ companies }) {
  return (
    <Container>
      <Map companies={companies} />
    </Container>
  );
}
