import { Header } from "@/components/Header";
import * as C from "./styles";
import Map from "../../assets/map.svg";
import Locations from "../../assets/locations.svg";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from "react-native-reanimated";
import { useEffect } from "react";
import { Button } from "@/components/Button";

export const EnableLocation = () => {
  const translation = useSharedValue(0);

  useEffect(() => {
    translation.value = withRepeat(
      withSequence(
        withTiming(0, { duration: 3000 }),
        withTiming(120, { duration: 3000 })
      ),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translation.value }],
    };
  });

  return (
    <C.Container>
      <Header logoOnly />

      <C.Center>
        <Animated.View style={[animatedStyle]}>
          <Locations style={{ marginTop: 24 }} />
        </Animated.View>
        <Map />

        <C.Title>Encontre seu espaço</C.Title>
        <C.SubTitle>em qualquer lugar</C.SubTitle>

        <Button activeOpacity={0.9} title="Ative a localização" />
      </C.Center>

    </C.Container>
  );
};
