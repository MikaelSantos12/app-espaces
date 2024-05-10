import { ListDetails } from "@/screens/ListDetails";
import { NewList } from "@/screens/NewList";
import { NewPublication } from "@/screens/NewPublication";
import { createStackNavigator } from "@react-navigation/stack";
import { TabStack } from "./app.routes";

type StackRoutes = {
  home: undefined;
  listDetails: undefined;
  newPublication: undefined;
  newList: undefined;
};

// Crie o navegador de stack
const Stack = createStackNavigator<StackRoutes>();

// Função para renderizar as telas de stack
export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={TabStack} />
      <Stack.Screen name="listDetails" component={ListDetails} />
      <Stack.Screen name="newPublication" component={NewPublication} />
      <Stack.Screen name="newList" component={NewList} />
    </Stack.Navigator>
  );
}
