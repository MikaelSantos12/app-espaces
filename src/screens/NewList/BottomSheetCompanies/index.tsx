import { CompanyCard } from "@/components/CompanyCard";
import { CompanySkeleton } from "@/components/CompanyCard/CompanySkeleton";
import { Empty } from "@/components/Empty";
import { Input } from "@/components/Input";
import { Company } from "@/dtos/CompanieDTO";
import { useSearchCompanies } from "@/hooks/useSearchCompanies";
import { MagnifyingGlass, PlusCircle } from "phosphor-react-native";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { FlatList, View } from "react-native";
import { useTheme } from "styled-components/native";
import { Container } from "./styles";

interface Props {
  handleSelect: (item: Company) => void;
}
export function BottomSheetCompanies({ handleSelect }: Props) {
  const { control, watch } = useForm();
  const theme = useTheme();
  const q = watch("search");
  const { data, isLoading } = useSearchCompanies({ q });
  const renderItem = useCallback(({ item }: { item: Company }) => {
    return (
      <CompanyCard
        data={item}
        icon={<PlusCircle />}
        handlePress={() => handleSelect(item)}
      />
    );
  }, []);
  return (
    <Container>
      <Input
        control={control}
        name="search"
        placeholder="Pesquise por um espaço"
        Icon={<MagnifyingGlass color={theme.colors.main} weight="bold" />}
      />
      {isLoading ? (
        <CompanySkeleton />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.ID}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 16,
          }}
          ItemSeparatorComponent={() => <View style={{ marginTop: 8 }} />}
          ListEmptyComponent={() => (
            <Empty
              title="Pesquise por um espaço..."
              icon={<MagnifyingGlass size={32} />}
            />
          )}
        />
      )}
    </Container>
  );
}
