import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Map } from "@/components/Map";
import { Publication } from "@/components/Publications";
import { useBottomSheet } from "@/context/BottomSheetContext";
import { CompanyListDTO, ListDTO } from "@/dtos/ListDetailsDTO";
import { useListDetails } from "@/hooks/useListDetails";
import { api } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Compass } from "phosphor-react-native";
import { useCallback } from "react";
import { FlatList, View } from "react-native";
import { useTheme } from "styled-components/native";
import { Rating } from "./Rating";
import { Skeleton } from "./skeleton";
import {
  Container,
  Content,
  Gap,
  ListImage,
  ListName,
  ListWrapper,
  MapButton,
  NameWrapper,
  Row,
  Subtitle,
  Title,
  Top,
  UserWrapper,
} from "./styles";

export function ListDetails({ route }) {
  const listId = route.params?.listId;
  const queryClient = useQueryClient();
  const { data, isLoading } = useListDetails({ listId });

  const updateCache = (companyId: string, isFollowed: boolean) => {
    queryClient.setQueryData(["useListDetails", listId], (oldData: ListDTO) => {
      if (!oldData) return oldData;
      return {
        ...oldData,
        companyList: oldData.companyList.map((company) =>
          company.company_id === companyId
            ? { ...company, isFollowed }
            : company
        ),
      };
    });
  };
  const { mutate } = useMutation({
    mutationFn: (companyId: string) => {
      return api.list.post(`follow/${companyId}`);
    },
    onSuccess: (res, variables) => {
      updateCache(variables, true);
    },
  });
  const { mutate: mutateUnfollow } = useMutation({
    mutationFn: (companyId: string) => {
      return api.list.post(`unfollow/${companyId}`);
    },
    onSuccess: (res, variables) => {
      updateCache(variables, false);
    },
  });

  const renderItem = useCallback(
    ({ item }: { item: CompanyListDTO }) => (
      <Publication.Root>
        <Row>
          <Gap>
            <NameWrapper>
              <View>
                <ListName>{item.name}</ListName>
                {/* <AvaliationBadge>
                  <Star color="#FFD700" weight="fill" size={16} />
                  <Subtitle>4</Subtitle>
                </AvaliationBadge> */}
                <Rating rating={3} />
              </View>
            </NameWrapper>
          </Gap>

          <Button
            variant={item.isFollowed ? "outline" : "default"}
            onPress={() =>
              item.isFollowed
                ? mutateUnfollow(item.company_id)
                : mutate(item.company_id)
            }
            title={item.isFollowed ? "Seguindo" : "Seguir"}
            size="sm"
            style={{ alignSelf: "center", marginBottom: 12 }}
          />
        </Row>

        {/* <Ratings rating={5} withoutCircle /> */}
        <Publication.ListCompanyImage images={item.listImages} />
        <Gap />
        <Publication.Description data={item} />
      </Publication.Root>
    ),
    []
  );
  const theme = useTheme();
  const { setComponent, openBottomSheet } = useBottomSheet();

  const handleOpenMap = () => {
    setComponent(<Map companies={data?.companyList} />);
    openBottomSheet();
  };
  return (
    <Container>
      <Header title="Lista 1" />

      <Content>
        {isLoading ? (
          <Skeleton />
        ) : (
          <>
            <Top>
              <ListWrapper>
                <ListImage source={{ uri: data?.author?.userPhoto?.image }} />
                <UserWrapper>
                  <ListName>{data?.name}</ListName>
                  <Subtitle>de @{data?.author?.username}</Subtitle>
                </UserWrapper>
              </ListWrapper>

              <Button title="Seguir" size="sm" />
            </Top>
            {data?.updated_at !== null && (
              <Subtitle>Atualizado em {data?.updated_at}</Subtitle>
            )}

            <MapButton onPress={handleOpenMap}>
              <Compass color={theme.colors.main} weight="fill" size={28} />
              <Title>Ver espaços no mapa</Title>
            </MapButton>

            <Subtitle>{data?.description}</Subtitle>

            <FlatList
              scrollEnabled={false}
              data={data?.companyList}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{
                gap: 24,
                paddingBottom: 48,
                marginTop: 32,
              }}
            />
          </>
        )}
      </Content>
    </Container>
  );
}
