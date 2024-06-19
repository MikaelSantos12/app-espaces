import * as dotenv from "dotenv";
dotenv.config();
module.exports = {
  expo: {
    name: "app-espaces",
    slug: "app-espaces",
    scheme: "app-espaces",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./src/assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./src/assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      bundleIdentifier: "com.eshows.appespaces",
      supportsTablet: true,
      usesAppleSignIn: true,
      config: {
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
      },
      package: "com.eshows.appespaces",
      infoPlist: {
        CFBundleURLTypes: [
          {
            CFBundleURLSchemes: [
              "com.googleusercontent.apps.782600279407-cgtifm6c5g1ln9v9jkk1a43pj5vu8g8t",
            ],
          },
        ],
        NSUserTrackingUsageDescription:
          "Este aplicativo usará suas notificações para...",
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./src/assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.eshows.appespaces",
    },

    web: {
      favicon: "./src/assets/favicon.png",
    },
    plugins: [
      "expo-font",
      [
        "@react-native-google-signin/google-signin",
        {
          iosUrlScheme: "com.googleusercontent.apps._some_id_here_",
        },
      ],
      ["expo-notifications"],
    ],
    extra: {
      eas: {
        projectId: "762fc348-5559-4ebc-8c8e-7da3c70cc3ca",
      },
    },
  },
};
