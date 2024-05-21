import React from "react";
import { ThemeProvider } from "styled-components/native";
import { ConectFriends } from "@/screens/ConectFriends";
import theme from "@/theme";
import { fireEvent, render } from "@/__tests__/utils/customRender";

jest.mock("@faker-js/faker", () => {
  return {
    faker: {
      string: {
        uuid: jest.fn(() => "unique-id-123"),
      },
      image: {
        url: jest.fn(() => "https://loremflickr.com/320/240"),
      },
      person: {
        fullName: jest.fn(() => "John Doe"),
      },
    },
  };
});

describe("ConectFriends Screen", () => {
  const renderComponent = () =>
    render(
      <ThemeProvider theme={theme}>
        <ConectFriends />
      </ThemeProvider>
    );

  it("should render header", () => {
    const { getByText } = renderComponent();
    expect(getByText("Conectar")).toBeTruthy();
  });

  it("should render tags", () => {
    const { getByText } = renderComponent();
    expect(getByText("Contatos")).toBeTruthy();
    expect(getByText("Instagram")).toBeTruthy();
    expect(getByText("Twitter")).toBeTruthy();
  });

  it("should render search input", () => {
    const { getByPlaceholderText } = renderComponent();
    expect(getByPlaceholderText("Pesquise por um espaço")).toBeTruthy();
  });

  it("should render list of users", () => {
    const { getAllByText } = renderComponent();
    expect(getAllByText("John Doe").length).toBeGreaterThan(0);
  });
});
