import { Button } from "@/components/Button";
import { ChatCircle, Heart } from "phosphor-react-native";
import {
  Actions,
  Comment,
  Container,
  Count,
  Header,
  Row,
  User,
  UserName,
  UserPhoto,
} from "./styles";

interface Props {
  data: {
    photo: string;
    name: string;
    comment: string;
    likeCount: string;
    commentsCount: string;
  };
}

export function Comments({ data }: Props) {
  return (
    <Container>
      <Header>
        <User>
          <UserPhoto source={{ uri: data.photo }} />
          <UserName>@{data.name}</UserName>
        </User>

        <Button title="Seguir" size="sm" />
      </Header>
      <Comment>{data.comment}</Comment>
      <Actions>
        <Row>
          <Heart size={28} weight="thin" />
          <Count>{data.likeCount}</Count>
        </Row>
        <Row>
          <ChatCircle size={28} weight="thin" />
          <Count>{data.commentsCount}</Count>
        </Row>
      </Actions>
    </Container>
  );
}
