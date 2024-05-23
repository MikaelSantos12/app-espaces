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
      supportsTablet: true,
      config: {
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
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
    plugins: ["expo-font"],
    extra: {
      eas: {
        projectId: "762fc348-5559-4ebc-8c8e-7da3c70cc3ca",
      },
    },
  },
};
