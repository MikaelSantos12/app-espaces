import { useAuth } from "@/context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./stack.routes";

export function Routes() {
  const { user } = useAuth();

  const linking = {
    prefixes: ["exp://172.16.0.139:8081/--/app-espaces"],
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
  console.log(user);
  return (
    <NavigationContainer linking={linking}>
      {!user?.token ? <AuthRoutes /> : <AppRoutes />}
    </NavigationContainer>
  );
}
