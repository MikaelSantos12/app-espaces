import { Header } from "@/components/Header";
import { useCallback } from "react";
import { EventsCarrousel } from "./EventsCarrousel";

import { Publication } from "@/components/Publications";
import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";

import { Post } from "@/dtos/PostDTO";
import { RefreshControl, View } from "react-native";

import { LikeProvider } from "@/context/LikeContext";
import { useFeed } from "../../hooks/useFeed";

import { SkeletonPublication } from "@/components/Publications/PublicationSkeleton";
import { useQueryClient } from "@tanstack/react-query";
import { Container, Content, itemSeparator } from "./styles";

export function Home() {
  const navigation = useNavigation();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isRefetching,
  } = useFeed();

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
        <SkeletonPublication />
      </View>
    );
  };
  const renderSkeleton = useCallback(() => <SkeletonPublication />, []);
  const queryClient = useQueryClient();
  const refetch = () => {
    queryClient.invalidateQueries({
      queryKey: ["useFeed"],
    });
  };
  return (
    <Container>
      <Header />

      <Content>
        <FlashList
          refreshControl={
            <RefreshControl
              refreshing={isLoading || isRefetching}
              onRefresh={refetch}
            />
          }
          data={data?.pages.flatMap((page) => page) || []}
          renderItem={isLoading ? renderSkeleton : renderItem}
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
