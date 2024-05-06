import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { MagnifyingGlass } from "phosphor-react-native";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components/native";
import { Container, Content } from "./styles";
export function List() {
  const theme = useTheme();
  const { control, watch } = useForm();
  const q = watch("search");
  console.log(q);
  return (
    <Container>
      <Header />

      <Content>
        <Input
          control={control}
          name="search"
          placeholder="Busque por um tema"
          Icon={<MagnifyingGlass color={theme.colors.main} weight="bold" />}
        />
      </Content>
    </Container>
  );
}
