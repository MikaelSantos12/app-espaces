import { Input } from "@/components/Input";
import { faker } from "@faker-js/faker";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { FlatList, KeyboardAvoidingView, Platform, View } from "react-native";
import { Bottom } from "../styles";
import { UserPhoto } from "./styles";

type Comments = {
  photo: string;
  name: string;
  comment: string;
  likeCount: string;
  commentsCount: string;
};
interface Props {
  comments: Comments[];
}

export function Comments({ comments }: Props) {
  const { control } = useForm();
  const renderItem = useCallback(
    ({ comment, commentsCount, likeCount, name, photo }: Comments) => {
      return (
        <></>
        // <Container>
        //   <Header>
        //     <User>
        //       <UserPhoto source={{ uri: data.photo }} />
        //       <UserName>@{data.name}</UserName>
        //     </User>

        //     <Button title="Seguir" size="sm" />
        //   </Header>
        //   <Comment>{data.comment}</Comment>
        //   <Actions>
        //     <Row>
        //       <Heart size={28} weight="thin" />
        //       <Count>{data.likeCount}</Count>
        //     </Row>
        //     <Row>
        //       <ChatCircle size={28} weight="thin" />
        //       <Count>{data.commentsCount}</Count>
        //     </Row>
        //   </Actions>
        // </Container>
      );
    },
    []
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Content>
        <View style={{ marginTop: 32 }}>
          <FlatList
            scrollEnabled={false}
            data={comments}
            renderItem={renderItem}
            keyExtractor={(item) => item?.photo}
            contentContainerStyle={{
              paddingBottom: 128,
              gap: 16,
            }}
          />
        </View>
      </Content>

      <Bottom>
        <Input
          Icon={<UserPhoto source={{ uri: faker.image.avatar() }} />}
          style={{ borderRadius: 999, width: "100%" }}
          name="comment"
          placeholder="Escreva seu comentário"
          control={control}
        />
      </Bottom>
    </KeyboardAvoidingView>
  );
}
