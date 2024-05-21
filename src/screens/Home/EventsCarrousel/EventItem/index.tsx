import { useNavigation } from "@react-navigation/native";
import { Sparkle } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components";
import { Container, Title } from "./styles";
interface Props {
  isFirst?: boolean;
  data: any;
}

export function EventItem({ data, isFirst }: Props) {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("showsAndEvents")}>
      <Container
        isFirst={isFirst}
        source={!isFirst ? { uri: data.photo } : {}}
        imageStyle={{ borderRadius: 8 }}
      >
        {isFirst && <Sparkle color={theme.colors.secondary} />}

        <Title>{data.title}</Title>
      </Container>
    </TouchableOpacity>
  );
}
