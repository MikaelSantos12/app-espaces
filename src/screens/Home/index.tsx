import { Header } from "@/components/Header";
import { useCallback } from "react";
import { FlatList } from "react-native";
import { EventsCarrousel } from "./EventsCarrousel";

import { Publication } from "@/components/Publications";

import { useNavigation } from "@react-navigation/native";

import { Post } from "@/dtos/PostDTO";
import { useFeed } from "../../hooks/useFeed";
import { Container, Content } from "./styles";
export function Home() {
  const navigation = useNavigation();
  const { data } = useFeed();
  const renderItem = useCallback(
    ({ item }: { item: Post }) => (
      <Publication.Root>
        <Publication.Header data={item} onPress={() => {}} />
        <Publication.Image postImages={item.postImages} />
        <Publication.Actions />
        <Publication.Description data={item} />
      </Publication.Root>
    ),
    [data]
  );
  console.log(data);
  return (
    <Container>
      <Header />
      <Content>
        <EventsCarrousel />
        <FlatList
          scrollEnabled={false}
          data={data?.posts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            gap: 24,
            paddingBottom: 48,
            flex: 1,
          }}
        />
      </Content>
    </Container>
  );
}
