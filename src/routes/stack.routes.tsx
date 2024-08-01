import { Banner } from "@/screens/Banner";
import { Company } from "@/screens/Company";
import { ListDetails } from "@/screens/ListDetails";
import { NewList } from "@/screens/NewList";
import { NewPublication } from "@/screens/NewPublication";
import { Publication } from "@/screens/Publication";
import { ShowsAndEvents } from "@/screens/ShowsAndEvents";

import { CompanyInList } from "@/screens/CompanyInList";
import { Tags } from "@/screens/Tags";
import { createStackNavigator } from "@react-navigation/stack";
import { TabStack } from "./app.routes";

type StackRoutes = {
  home: undefined;
  listDetails: undefined;
  newPublication: undefined;
  newList: undefined;
  publications: undefined;
  company: undefined;
  showsAndEvents: undefined;
  banner: undefined;
  signIn: undefined;
  tags: { company: { ID: number } };
  companyInList: { company: {} };
};

const Stack = createStackNavigator<StackRoutes>();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={TabStack} />
      <Stack.Screen name="listDetails" component={ListDetails} />
      <Stack.Screen name="newPublication" component={NewPublication} />
      <Stack.Screen name="newList" component={NewList} />
      <Stack.Screen name="publications" component={Publication} />
      <Stack.Screen name="company" component={Company} />
      <Stack.Screen name="showsAndEvents" component={ShowsAndEvents} />
      <Stack.Screen name="banner" component={Banner} />
      <Stack.Screen name="companyInList" component={CompanyInList} />
      <Stack.Screen
        name="tags"
        component={Tags}
        options={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
}
