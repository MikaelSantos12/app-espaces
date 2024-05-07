import { fireEvent, render, screen } from "@/__tests__/utils/customRender";
import { Header } from "./index";
describe("Component: Header", () => {
  it("Should be able to render a header", () => {
    jest.mock("@react-navigation/native", () => ({
      useNavigation: () => ({
        goBack: jest.fn(),
        getState: jest.fn().mockReturnValue({ type: "tab" }),
      }),
    }));
    render(<Header />);
    const header = screen.getByTestId("header");
    expect(header).toBeTruthy();
  });

  it("Should be able to render in a stack screen", () => {
    jest
      .spyOn(require("@react-navigation/native"), "useNavigation")
      .mockReturnValueOnce({
        goBack: jest.fn(),
        getState: jest.fn().mockReturnValue({ type: "stack" }),
      });

    render(<Header title="header title" />);
    const header = screen.getByText("header title");
    expect(header).toBeTruthy();
  });

  it("Should be to go back screen ", () => {
    const mock = jest
      .spyOn(require("@react-navigation/native"), "useNavigation")
      .mockReturnValueOnce({
        goBack: jest.fn(),
        getState: jest.fn().mockReturnValue({ type: "stack" }),
      });

    render(<Header title="header title" />);

    const backButton = screen.getByTestId("back-button");
    fireEvent.press(backButton);
    expect(mock).toHaveBeenCalled();
  });
});
