import { Header } from "@/components/Header";
import { useCallback } from "react";
import { EventsCarrousel } from "./EventsCarrousel";

import { Publication } from "@/components/Publications";
import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";

import { Post } from "@/dtos/PostDTO";
import { ActivityIndicator, View } from "react-native";

import { LikeProvider } from "@/context/LikeContext";
import { useFeed } from "../../hooks/useFeed";

import { Container, Content, itemSeparator } from "./styles";

export function Home() {
  const navigation = useNavigation();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useFeed();

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const renderItem = useCallback(
    ({ item }: { item: Post }) => (
      <LikeProvider>
        <Publication.Root>
          <Publication.Header data={item} onPress={() => {}} />
          <Publication.Image data={item} />
          <Publication.Actions data={item} />
          <Publication.Description data={item} />
        </Publication.Root>
      </LikeProvider>
    ),
    []
  );

  const renderFooter = () => {
    if (!isFetchingNextPage) return null;
    return (
      <View style={{ padding: 10 }}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  return (
    <Container>
      <Header />

      <Content>
        <FlashList
          data={data?.pages.flatMap((page) => page) || []}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            paddingBottom: 48,
          }}
          ItemSeparatorComponent={itemSeparator}
          estimatedItemSize={361}
          onEndReached={loadMore}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
          ListHeaderComponent={
            <View style={{ marginBottom: 16 }}>
              <EventsCarrousel />
            </View>
          }
        />
      </Content>
    </Container>
  );
}
