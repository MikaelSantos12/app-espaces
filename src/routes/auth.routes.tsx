import { EmailSended } from "@/screens/auth/EmailSended";
import { SendEmailAuth } from "@/screens/auth/SendEmailAuth";
import { SignIn } from "@/screens/auth/SignIn";
import { createStackNavigator } from "@react-navigation/stack";

type StackRoutes = {
  sendEmailAuth: undefined;
  signIn: undefined;
  emailSended: undefined;
};

// Crie o navegador de stack
const Stack = createStackNavigator<StackRoutes>();

export function AuthRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="signIn" component={SignIn} />
      <Stack.Screen name="sendEmailAuth" component={SendEmailAuth} />
      <Stack.Screen name="emailSended" component={EmailSended} />
    </Stack.Navigator>
  );
}
