import { Routes } from "@/routes";
import { Inter_400Regular } from "@expo-google-fonts/inter";
import { Nunito_700Bold } from "@expo-google-fonts/nunito";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator } from "react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_700Bold, Inter_400Regular });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      {fontsLoaded ? <Routes /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
