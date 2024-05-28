import { AuthContextProvider } from "@/context/AuthContext";
import { Routes } from "@/routes";
import { Inter_400Regular } from "@expo-google-fonts/inter";
import {
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useFonts } from "expo-font";
import { createURL } from "expo-linking";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator } from "react-native";
import Toast from "react-native-toast-message";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
dayjs.locale("pt-br");
export default function App() {
  const url = createURL("app-espaces");
  const queryClient = new QueryClient();
  const [fontsLoaded] = useFonts({
    Nunito_700Bold,
    Nunito_500Medium,
    Nunito_400Regular,
    Inter_400Regular,
  });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="transparent" translucent />
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          {fontsLoaded ? <Routes /> : <ActivityIndicator />}
          <Toast />
        </AuthContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
