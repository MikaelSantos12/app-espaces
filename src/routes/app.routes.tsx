import { Home } from "@/screens/Home";
import { List } from "@/screens/List";
import { Map } from "@/screens/Map";
import { Post } from "@/screens/Post";
import { Profile } from "@/screens/Profile";
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import {
  Bookmarks,
  Compass,
  House,
  PlusSquare,
  User,
} from "phosphor-react-native";
import { Platform } from "react-native";
import { useTheme } from "styled-components";

type AppRoutes = {
  home: undefined;

  list: undefined;
  post: undefined;
  map: undefined;
  profile: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();
export function AppRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        // tabBarActiveTintColor: colors.green[500],
        // tabBarInactiveTintColor: colors.gray[200],
        tabBarStyle: {
          backgroundColor: theme.colors.main,
          borderTopWidth: 0,
          height: Platform.OS === "android" ? "auto" : 96,
          paddingBottom: 16,
          paddingTop: 8,
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <House
              color={theme.colors.secondary}
              weight={focused ? "fill" : "regular"}
              size={32}
            />
          ),
        }}
      />
      <Screen
        name="list"
        component={List}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Bookmarks
              color={theme.colors.secondary}
              weight={focused ? "fill" : "regular"}
              size={32}
            />
          ),
        }}
      />

      <Screen
        name="post"
        component={Post}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <PlusSquare
              color={theme.colors.secondary}
              weight={focused ? "fill" : "regular"}
              size={32}
            />
          ),
        }}
      />

      <Screen
        name="map"
        component={Map}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Compass
              color={theme.colors.secondary}
              weight={focused ? "fill" : "regular"}
              size={32}
            />
          ),
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <User
              color={theme.colors.secondary}
              weight={focused ? "fill" : "regular"}
              size={32}
            />
          ),
        }}
      />
    </Navigator>
  );
}
