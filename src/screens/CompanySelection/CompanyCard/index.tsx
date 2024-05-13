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
  handlePress?: () => void;
}

export function CompanyCard({ data, handlePress }: Props) {
  return (
    <Container onPress={handlePress}>
      <CompanyImage source={{ uri: data.image }} />
      <TextWrapper>
        <Title>{data.company}</Title>
        <Subtitle>{data.location}</Subtitle>
      </TextWrapper>
    </Container>
  );
}
