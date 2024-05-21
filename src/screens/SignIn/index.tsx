import React, { useEffect } from "react";
import * as C from "./styles";
import { Header } from "@/components/Header";
import CustomButton from "./customButton";
import {
  AppleLogo,
  EnvelopeSimple,
  GoogleLogo,
  Phone,
} from "phosphor-react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from "react-native-reanimated";

export const SignIn = () => {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withSequence(
        withTiming(10, { duration: 2000 }),
        withTiming(-10, { duration: 2000 })
      ),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
    };
  });

  return (
    <C.Container>
      <Header logoOnly />

      <C.Content
        contentContainerStyle={{ flex: 1, alignItems: "center", padding: 8 }}
      >
        <Animated.Image
          source={require("../../assets/astronaut.png")}
          style={[{ width: 215, height: 280, marginTop: 54 }, animatedStyle]}
        />
        <C.Column>
          <CustomButton Icon={GoogleLogo} title="Conectar com google" />
          <CustomButton Icon={AppleLogo} title="Conectar com apple" />
          <CustomButton Icon={EnvelopeSimple} title="Conectar com email" />
          <CustomButton Icon={Phone} title="Conectar com telefone" />
        </C.Column>
      </C.Content>
    </C.Container>
  );
};
