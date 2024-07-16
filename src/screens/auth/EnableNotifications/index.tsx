import NotificationsSvg from "@/assets/notifications.svg";
import Sign from "@/assets/sign.svg";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import React, { useEffect, useState } from "react";
import { AppState, Linking, Platform } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

import {
  CommonActions,
  useIsFocused,
  useNavigation,
} from "@react-navigation/native";
import * as C from "./styles";

export const EnableNotifications = ({ route }) => {
  const [notificationStatus, setNotificationStatus] =
    useState<Notifications.PermissionStatus>();
  const rotation = useSharedValue(0);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    rotation.value = withRepeat(
      withSequence(
        withTiming(15, { duration: 1500 }),
        withTiming(-15, { duration: 1500 })
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

  async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      setNotificationStatus(finalStatus);
      if (finalStatus !== "granted") {
        alert("Ative as notificações");
        return;
      }

      try {
        const projectId = "762fc348-5559-4ebc-8c8e-7da3c70cc3ca";
        if (!projectId) {
          throw new Error("Project ID not found");
        }
        token = (
          await Notifications.getExpoPushTokenAsync({
            projectId,
          })
        ).data;
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: "enableLocation",
                params: {
                  ...route.params,
                },
              },
            ],
          })
        );
      } catch (e) {
        token = `${e}`;
      }
    } else {
      navigation.navigate("enableLocation" as never);
      alert("Must use physical device for Push Notifications");
    }

    return token;
  }
  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (nextAppState === "active") {
        registerForPushNotificationsAsync();
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);
  return (
    <C.Container>
      <Header logoOnly />

      <C.Center>
        <Animated.View
          style={[
            { position: "absolute", zIndex: 1, left: 50, top: -15 },
            animatedStyle,
          ]}
        >
          <Sign />
        </Animated.View>
        <NotificationsSvg />

        <C.Title>Não perca um passo!</C.Title>
        <C.SubTitle>Receba notificações de eventos e listas</C.SubTitle>
        {notificationStatus !== "granted" && (
          <Button
            activeOpacity={0.9}
            title="Receba notificações"
            onPress={() => Linking.openSettings()}
          />
        )}
      </C.Center>
    </C.Container>
  );
};
