import { View } from "react-native";

const MockPhosphorIcon = () => <View />;

jest.mock(
  "phosphor-react-native",
  () => new Proxy({}, { get: () => MockPhosphorIcon })
);
