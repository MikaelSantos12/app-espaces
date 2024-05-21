import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { Publication as PublicationC } from "@/components/Publications";
import { formatPublicationDate } from "@/utils/format-post-date";
import { faker } from "@faker-js/faker";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { FlatList, KeyboardAvoidingView, Platform, View } from "react-native";
import { Comments } from "./Comments";
import { Bottom, Container, Content, UserPhoto } from "./styles";
const item = {
  id: faker.string.uuid(),
  companyPhoto: faker.image.url(),
  userPhoto: faker.image.url(),
  companyName: faker.company.name(),
  createdAt: formatPublicationDate(faker.date.recent()),
  description: faker.lorem.paragraphs(),
  post: faker.image.url(),
  username: faker.person.firstName(),
};

const comments = [
  {
    photo: faker.image.url(),
    name: faker.person.firstName(),
    comment: faker.lorem.paragraph(),
    likeCount: "200",
    commentsCount: "200",
  },
  {
    photo: faker.image.url(),
    name: faker.person.firstName(),
    comment: faker.lorem.paragraph(),
    likeCount: "200",
    commentsCount: "200",
  },
  {
    photo: faker.image.url(),
    name: faker.person.firstName(),
    comment: faker.lorem.paragraph(),
    likeCount: "200",
    commentsCount: "200",
  },
];
export function Publication() {
  const navigation = useNavigation();
  const { control } = useForm();

  const renderItem = ({ item }: any) => <Comments data={item} />;

  return (
    <Container>
      <Header />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Content>
          <PublicationC.Root>
            <PublicationC.Header
              data={item}
              onPress={() => navigation.navigate("publications" as never)}
            />
            <PublicationC.Image data={item} />
            <PublicationC.Actions />
            <PublicationC.Description data={item} />
          </PublicationC.Root>

          <View style={{ marginTop: 32 }}>
            <FlatList
              scrollEnabled={false}
              data={comments}
              renderItem={renderItem}
              keyExtractor={(item) => item.photo}
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
    </Container>
  );
}
