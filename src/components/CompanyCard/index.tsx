import DefaultImage from "@/assets/default.webp";
import { Company } from "@/dtos/CompanieDTO";
import {
  CompanyImage,
  Container,
  Subtitle,
  TextWrapper,
  Title,
} from "./styles";

interface Props {
  data: Company;
  handlePress?: () => void;
  icon: React.ReactNode;
}

export function CompanyCard({ data, handlePress, icon }: Props) {
  return (
    <Container onPress={handlePress}>
      <CompanyImage source={data.PHOTO ? { uri: data.PHOTO } : DefaultImage} />
      <TextWrapper>
        <Title>{data.NAME}</Title>
        <Subtitle>
          {data.ADDRESS} - {data.NEIGHBORHOOD}, {data.CITY}
        </Subtitle>
      </TextWrapper>
      {!!icon && icon}
    </Container>
  );
}
