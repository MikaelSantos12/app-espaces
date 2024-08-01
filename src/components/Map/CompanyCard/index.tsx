import { MapPin } from "phosphor-react-native";
import { View } from "react-native";
import {
  CompanyImage,
  Container,
  Row,
  Subtitle,
  Tag,
  TagText,
  TagsArea,
  Title,
  Wrapper,
} from "./styles";

export function CompanyCard({ data }) {
  return (
    <Container>
      <CompanyImage source={{ uri: data.FOTO }} />
      <Wrapper>
        <View style={{ flex: 1 }}>
          <Title>{data.NAME}</Title>
          <Row>
            <MapPin color="#a1a1a1" size={20} />
            <Subtitle style={{ flex: 1 }}>{data.LOGRADOURO}</Subtitle>
          </Row>
        </View>
        <TagsArea>
          <Tag>
            <TagText>Bar</TagText>
          </Tag>
          <Tag>
            <TagText>Cafe</TagText>
          </Tag>
          <Tag>
            <TagText>Pizza</TagText>
          </Tag>
          <Tag>
            <TagText>Italiana</TagText>
          </Tag>
        </TagsArea>
      </Wrapper>
    </Container>
  );
}
