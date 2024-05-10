import { List, PencilSimpleLine, X } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import {
  Action,
  Actions,
  CompanyPhoto,
  Container,
  Info,
  Title,
} from "./styles";
7;
interface Props {
  data: {
    photo: string;
    name: string;
  };
}

export function CardCompany({ data }: Props) {
  const theme = useTheme();
  return (
    <Container>
      <Info>
        <CompanyPhoto source={{ uri: data.photo }} />
        <Title>{data.name}</Title>
      </Info>
      <Actions>
        <Action>
          <PencilSimpleLine color={"#4F4F4F"} weight="fill" size={18} />
        </Action>
        <Action>
          <X color={"#4F4F4F"} size={18} />
        </Action>
        <Action>
          <List color={"#4F4F4F"} weight="fill" size={18} />
        </Action>
      </Actions>
    </Container>
  );
}
