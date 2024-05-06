import { fireEvent, render, screen } from "@/__tests__/utils/customRender";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "./";

const FormMock = () => {
  const { control } = useForm();
  return (
    <Input
      control={control}
      placeholder="teste 123"
      name="test"
      testID="input"
    />
  );
};
describe("Component: Input", () => {
  it("should be able to render correctly", () => {
    const input = render(<FormMock />);
    expect(screen.getByPlaceholderText(/teste 123/i)).toBeTruthy();
  });
  it("should update value when typing", () => {
    const { queryByTestId } = render(<FormMock />);
    const input = queryByTestId("input");

    fireEvent.changeText(input, "Test Input");
    expect(input.props.value).toBe("Test Input");
  });
});
