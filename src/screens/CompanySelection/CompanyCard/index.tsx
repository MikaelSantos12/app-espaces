import {
  CompanyImage,
  Container,
  Subtitle,
  TextWrapper,
  Title,
} from "./styles";

interface Props {
  data: {
    PHOTO: string;
    NAME: string;
    LOGRADOURO: string;
  };
  handlePress?: () => void;
}

export function CompanyCard({ data, handlePress }: Props) {
  return (
    <Container onPress={handlePress}>
      <CompanyImage source={{ uri: data.PHOTO }} />
      <TextWrapper>
        <Title>{data.NAME}</Title>
        <Subtitle>{data.LOGRADOURO}</Subtitle>
      </TextWrapper>
    </Container>
  );
}
