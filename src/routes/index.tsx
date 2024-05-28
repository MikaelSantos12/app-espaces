import { useAuth } from "@/context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./stack.routes";

export function Routes() {
  const { user } = useAuth();
  const linking = {
    prefixes: ["exp://192.168.1.6:8081/--/app-espaces"],
    config: {
      screens: {
        home: {
          screens: {
            map: "map",
          },
        },
        emailSended: "emailSended/:token",
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      {!user?.token ? <AuthRoutes /> : <AppRoutes />}
    </NavigationContainer>
  );
}
