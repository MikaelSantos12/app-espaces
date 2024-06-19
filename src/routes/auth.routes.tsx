import { Birthday } from "@/screens/auth/Birthday";
import { ConfirmOTP } from "@/screens/auth/ConfirmOTP";
import { Email } from "@/screens/auth/Email";
import { EmailSended } from "@/screens/auth/EmailSended";
import { EnableLocation } from "@/screens/auth/EnableLocation";
import { EnableNotifications } from "@/screens/auth/EnableNotifications";
import { SelectCity } from "@/screens/auth/SelectCity";
import { SendEmailAuth } from "@/screens/auth/SendEmailAuth";
import { SendSmsAuth } from "@/screens/auth/SendSmsAuth";
import { SendSmsOtp } from "@/screens/auth/SendSmsOtp";
import { SignIn } from "@/screens/auth/SignIn";
import { Username } from "@/screens/auth/Username";
import { createStackNavigator } from "@react-navigation/stack";

type StackRoutes = {
  sendEmailAuth: undefined;
  signIn: undefined;
  emailSended: undefined;
  enableNotifications: undefined;
  enableLocation: undefined;
  sendSmsOtp: undefined;
  confirmOTP: undefined;
  birthday: undefined;
  username: undefined;
  selectCity: undefined;
  sendSmsAuth: undefined;
  email: undefined;
};

// Crie o navegador de stack
const Stack = createStackNavigator<StackRoutes>();

export function AuthRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="signIn" component={SignIn} />
      <Stack.Screen name="sendEmailAuth" component={SendEmailAuth} />
      <Stack.Screen name="emailSended" component={EmailSended} />
      <Stack.Screen
        name="enableNotifications"
        component={EnableNotifications}
      />
      <Stack.Screen name="enableLocation" component={EnableLocation} />
      <Stack.Screen name="sendSmsOtp" component={SendSmsOtp} />
      <Stack.Screen name="confirmOTP" component={ConfirmOTP} />
      <Stack.Screen name="birthday" component={Birthday} />
      <Stack.Screen name="username" component={Username} />
      <Stack.Screen name="selectCity" component={SelectCity} />
      <Stack.Screen name="sendSmsAuth" component={SendSmsAuth} />
      <Stack.Screen name="email" component={Email} />
    </Stack.Navigator>
  );
}
