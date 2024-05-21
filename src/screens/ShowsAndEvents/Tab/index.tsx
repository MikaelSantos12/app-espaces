import theme from "@/theme";
import { useEffect } from "react";
import { Pressable } from "react-native";
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Container, Title } from "./styles";

interface Props {
  title: string;
  isActive: boolean;
  onPress: () => void;
}

export function Tab({ title, isActive = false, ...rest }: Props) {
  const scale = useSharedValue(1);
  const checked = useSharedValue(1);

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      borderBottomColor: interpolateColor(
        checked.value,
        [0, 1],
        [theme.colors.card, theme.colors.main]
      ),
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        checked.value,
        [0, 1],
        ["#d9d9d9", theme.colors.main]
      ),
    };
  });

  useEffect(() => {
    checked.value = withTiming(isActive ? 1 : 0);
  }, [isActive]);

  return (
    <Pressable style={{ flex: 1 }} {...rest}>
      <Container style={[animatedContainerStyle]}>
        <Title style={[animatedTextStyle]}>{title}</Title>
      </Container>
    </Pressable>
  );
}
