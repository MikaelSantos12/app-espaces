import { ListDetails } from "@/screens/ListDetails";
import { createStackNavigator } from "@react-navigation/stack";
import { TabStack } from "./app.routes";

type StackRoutes = {
  home: undefined;
  listDetails: undefined;
};

// Crie o navegador de stack
const Stack = createStackNavigator<StackRoutes>();

// Função para renderizar as telas de stack
export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={TabStack} />
      <Stack.Screen name="listDetails" component={ListDetails} />
    </Stack.Navigator>
  );
}
