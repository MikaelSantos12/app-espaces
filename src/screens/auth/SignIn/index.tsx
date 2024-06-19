import { Header } from "@/components/Header";

import { useAppleSignIn } from "@/hooks/useAppleSignIn";
import { useNavigation } from "@react-navigation/native";
import {
  AppleLogo,
  EnvelopeSimple,
  GoogleLogo,
  Phone,
} from "phosphor-react-native";
import React, { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import CustomButton from "./customButton";
import * as C from "./styles";

export const SignIn = () => {
  const rotation = useSharedValue(0);
  const navigation = useNavigation();
  const { signInWithApple } = useAppleSignIn();
  // const { signInWithGoogle } = useGoogleSignIn();

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
          source={require("@/assets/astronaut.png")}
          style={[{ width: 215, height: 280, marginTop: 54 }, animatedStyle]}
        />
        <C.Column>
          <CustomButton
            Icon={GoogleLogo}
            title="Conectar com google"
            // onPress={signInWithGoogle}
          />
          <CustomButton
            Icon={AppleLogo}
            title="Conectar com apple"
            onPress={signInWithApple}
          />
          <CustomButton
            Icon={EnvelopeSimple}
            title="Conectar com email"
            onPress={() => navigation.navigate("sendEmailAuth" as never)}
          />
          <CustomButton
            Icon={Phone}
            title="Conectar com telefone"
            onPress={() => navigation.navigate("sendSmsAuth" as never)}
          />
        </C.Column>
      </C.Content>
    </C.Container>
  );
};
