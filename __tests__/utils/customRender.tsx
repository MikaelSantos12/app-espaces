import theme from "@/theme";
import { RenderOptions, render } from "@testing-library/react-native";
import { ReactElement } from "react";
import { ThemeProvider } from "styled-components/native";

function Providers({ children }: React.ReactNode) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react-native";
export { Providers, customRender as render };
