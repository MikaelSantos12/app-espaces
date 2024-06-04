import { Header } from "@/components/Header";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

import { useAuth } from "@/context/AuthContext";
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

  const { signInWithGoogle } = useAuth();

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
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "782600279407-sbgbq57tcukta7na24doqgi4mdnqhfct.apps.googleusercontent.com",
      iosClientId:
        "782600279407-cgtifm6c5g1ln9v9jkk1a43pj5vu8g8t.apps.googleusercontent.com",

      offlineAccess: true,
    });
  }, []);
  const handleSignInGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (!userInfo) {
        return;
      }
      const data = await signInWithGoogle(userInfo?.idToken);
      console.log(data.status);
    } catch (err) {
      console.log("err", err);
    }
  };
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
            onPress={handleSignInGoogle}
          />
          <CustomButton Icon={AppleLogo} title="Conectar com apple" />
          <CustomButton
            Icon={EnvelopeSimple}
            title="Conectar com email"
            onPress={() => navigation.navigate("sendEmailAuth" as never)}
          />
          <CustomButton Icon={Phone} title="Conectar com telefone" />
        </C.Column>
      </C.Content>
    </C.Container>
  );
};
