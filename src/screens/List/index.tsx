import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { useBottomSheet } from "@/context/BottomSheetContext";
import { ListDTO } from "@/dtos/ListDTO";
import { useFilterList } from "@/hooks/useFilterList";
import { useLists } from "@/hooks/useLists";
import { useSearchLists } from "@/hooks/useSearchLists";
import { FadersHorizontal, MagnifyingGlass } from "phosphor-react-native";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ActivityIndicator, FlatList, View } from "react-native";
import { useTheme } from "styled-components/native";
import { CardList } from "./CardList";
import { Skeleton } from "./CardList/Skeleton";
import {
  ButtonFilter,
  Container,
  Content,
  SearchContainer,
  Title,
} from "./styles";
import { TagsBottomSheet } from "./TagsBottomSheet";

export function Lists() {
  const theme = useTheme();
  const { control, watch } = useForm();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const q = watch("search");

  const { data, isFetchingNextPage, fetchNextPage, hasNextPage, isLoading } =
    useLists();
  const {
    data: searchData,
    isFetchingNextPage: isFetchingNextPageSearch,
    fetchNextPage: fetchNextPageSearch,
    hasNextPage: hasNextPageSearch,
    isLoading: isLoadingSearch,
  } = useSearchLists({ q });

  const {
    data: filteredData,
    isLoading: isFiltering,
    refetch,
  } = useFilterList({ tags: selectedTags, cuisines: selectedCuisines });

  const renderItem = useCallback(
    ({ item }: { item: ListDTO }) => <CardList data={item} />,
    []
  );

  const loadMore = () => {
    if (hasNextPage && !q) {
      fetchNextPage();
    }
    if (hasNextPageSearch && q) {
      fetchNextPageSearch();
    }
  };

  const renderFooter = () => {
    if (!isFetchingNextPage && !isFetchingNextPageSearch) return null;
    return (
      <View style={{ padding: 10 }}>
        <ActivityIndicator />
      </View>
    );
  };

  const ItemSeparator = () => <View style={{ height: 8, width: 0 }} />;

  const { setComponent, openBottomSheet } = useBottomSheet();
  const listData = q
    ? searchData
    : selectedTags.length > 0
    ? filteredData
    : data;

  const openFilter = () => {
    setComponent(
      <TagsBottomSheet
        selectedCuisines={selectedCuisines}
        setSelectedCuisines={setSelectedCuisines}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
    );
    openBottomSheet();
  };

  useEffect(() => {
    setComponent(
      <TagsBottomSheet
        selectedCuisines={selectedCuisines}
        setSelectedCuisines={setSelectedCuisines}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
    );
    refetch();
  }, [selectedTags, setComponent, refetch, selectedCuisines]);
  const loading = isLoading || isFiltering || isLoadingSearch;

  return (
    <Container>
      <Header />
      <Content>
        <SearchContainer>
          <View style={{ flex: 1 }}>
            <Input
              control={control}
              name="search"
              placeholder="Busque por um tema"
              Icon={<MagnifyingGlass color={theme.colors.main} weight="bold" />}
            />
          </View>
          <ButtonFilter onPress={openFilter}>
            <Title>Filtrar</Title>
            <FadersHorizontal color={theme.colors.main} />
          </ButtonFilter>
        </SearchContainer>
        {loading ? (
          <Skeleton />
        ) : (
          <FlatList
            numColumns={2}
            data={listData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            onEndReached={loadMore}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.1}
            ListFooterComponent={renderFooter}
            contentContainerStyle={{
              marginTop: 16,

              paddingBottom: 250,
            }}
            ItemSeparatorComponent={ItemSeparator}
          />
        )}
      </Content>
    </Container>
  );
}
