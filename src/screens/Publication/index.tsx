import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { Publication as PublicationC } from "@/components/Publications";
import { formatPublicationDate } from "@/utils/format-post-date";
import { faker } from "@faker-js/faker";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FlatList, Keyboard, KeyboardEvent, View } from "react-native";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";
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
  const bottomValue = useSharedValue(0);

  const navigation = useNavigation();
  const { control } = useForm();

  useEffect(() => {
    Keyboard.addListener("keyboardWillShow", _keyboardWillShow);
    Keyboard.addListener("keyboardWillHide", _keyboardWillHide);

    // cleanup function
    return () => {
      Keyboard.removeAllListeners("keyboardWillShow");
      Keyboard.removeAllListeners("keyboardWillHide");
    };
  }, []);

  const _keyboardWillShow = (e: KeyboardEvent) => {
    const keyboardHeight = e?.startCoordinates?.height || 0;

    bottomValue.value = withTiming(keyboardHeight + 80);
  };

  const _keyboardWillHide = () => {
    bottomValue.value = withTiming(0);
  };

  const renderItem = ({ item }: any) => <Comments data={item} />;

  return (
    <Container>
      <Header />
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
      <Animated.View
        style={{
          width: "100%",

          backgroundColor: "violet",
          position: "absolute",
          bottom: bottomValue,
        }}
      >
        <Bottom>
          <Input
            Icon={<UserPhoto source={{ uri: faker.image.avatar() }} />}
            style={{ borderRadius: 999 }}
            name="comment"
            placeholder="Escreva seu comentário"
            control={control}
          />
        </Bottom>
      </Animated.View>
    </Container>
  );
}
