import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, Image } from "./styles";

interface Props {
  isLoading: boolean;
  url: string;
  handlePress: () => void;
}
export function Photos({ url, handlePress, isLoading }: Props) {
  const theme = useTheme();
  return (
    <Container onPress={handlePress}>
      {isLoading && <ActivityIndicator color={theme.colors.main} />}
      {url && <Image source={{ uri: url }} />}
    </Container>
  );
}
