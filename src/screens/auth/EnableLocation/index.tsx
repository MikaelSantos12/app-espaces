import Locations from "@/assets/locations.svg";
import Map from "@/assets/map.svg";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { useLocation } from "@/context/LocationContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import { useEffect } from "react";
import { Linking } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import * as C from "./styles";

export const EnableLocation = ({ route }) => {
  const translation = useSharedValue(0);
  const { location } = useLocation();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
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
  useEffect(() => {
    async function verifyLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      const loginType = await AsyncStorage.getItem("loginType");
      const nextRoute = loginType == "sms" ? "birthday" : "sendSmsOtp";
      if (status === "granted") {
        await AsyncStorage.removeItem("loginType");
        navigation.navigate(nextRoute, { ...route.params });
      }
    }
    verifyLocation();
  }, [isFocused]);

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

        <Button
          title="Ative a localização"
          onPress={() => Linking.openSettings()}
        />
      </C.Center>
    </C.Container>
  );
};
