import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { useLocation } from "@/context/LocationContext";
import { Company } from "@/dtos/CompanieDTO";
import { useCompanies } from "@/hooks/useCompanies";
import { useSearchCompanies } from "@/hooks/useSearchCompanies";
import { useNavigation } from "@react-navigation/native";
import { BookmarkSimple, MagnifyingGlass } from "phosphor-react-native";
import { useForm } from "react-hook-form";
import { ActivityIndicator, FlatList, View } from "react-native";
import { useTheme } from "styled-components/native";

import { CompanyCard } from "@/components/CompanyCard";
import { CompanySkeleton } from "@/components/CompanyCard/CompanySkeleton";
import { Card, Container, Content, Title } from "./styles";

export function CompanySelection() {
  const theme = useTheme();
  const { control, watch } = useForm();
  const navigation = useNavigation();

  const { location } = useLocation();
  console.log(location);

  const {
    data: companies,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
  } = useCompanies({
    latitude: location?.coords.latitude,
    longitude: location?.coords.longitude,
  });

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const renderFooter = () => {
    if (!isFetchingNextPage) return null;
    return (
      <View style={{ padding: 10 }}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  const handlePress = (item) => {
    navigation.navigate("newPublication", {
      company: item,
    });
  };

  const renderItem = ({ item }: { item: Company }) => (
    <CompanyCard data={item} handlePress={() => handlePress(item)} />
  );

  const q = watch("search");

  const {
    data: searchData,

    isLoading: isLoadingSearch,
  } = useSearchCompanies({
    q,
  });

  const loading = isLoading || isLoadingSearch;
  const dataToRender = q ? searchData : companies;
  const loadMoreFunction = loadMore;
  const isFetchingNextPageToRender = isFetchingNextPage;

  const renderFlatList = () => {
    if (q) {
      return (
        <FlatList
          data={dataToRender}
          renderItem={renderItem}
          keyExtractor={(item) => item.ID}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 16,
            gap: 8,
            paddingBottom: 128,
          }}
        />
      );
    }
    return (
      <FlatList
        data={dataToRender}
        renderItem={renderItem}
        keyExtractor={(item) => item.ID}
        onEndReached={loadMoreFunction}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
        contentContainerStyle={{
          gap: 8,
          paddingBottom: 128,
        }}
      />
    );
  };
  return (
    <Container>
      <Header />
      <Content>
        <View style={{ paddingBottom: 40 }}>
          <Card onPress={() => navigation.navigate("newList" as never)}>
            <BookmarkSimple size={32} color={theme.colors.main} weight="fill" />
            <Title>Crie uma nova lista</Title>
          </Card>

          <Input
            control={control}
            name="search"
            placeholder="Pesquisar por um espaço"
            style={{ borderRadius: 999, marginTop: 16 }}
            Icon={<MagnifyingGlass color="#929292" weight="bold" />}
          />
        </View>
        {loading ? <CompanySkeleton /> : renderFlatList()}
      </Content>
    </Container>
  );
}
