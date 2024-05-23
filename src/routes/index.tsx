import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./stack.routes";

export function Routes() {
  const linking = {
    prefixes: ["exp://192.168.1.6:8081/--/app-espaces"],
    config: {
      screens: {
        home: {
          screens: {
            map: "map",
          },
        },
        signIn: "signIn",
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <AppRoutes />
    </NavigationContainer>
  );
}
