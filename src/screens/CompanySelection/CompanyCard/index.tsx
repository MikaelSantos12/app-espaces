import {
  CompanyImage,
  Container,
  Subtitle,
  TextWrapper,
  Title,
} from "./styles";

interface Props {
  data: {
    image: string;
    company: string;
    location: string;
  };
}

export function CompanyCard({ data }: Props) {
  return (
    <Container>
      <CompanyImage source={{ uri: data.image }} />
      <TextWrapper>
        <Title>{data.company}</Title>
        <Subtitle>{data.location}</Subtitle>
      </TextWrapper>
    </Container>
  );
}
