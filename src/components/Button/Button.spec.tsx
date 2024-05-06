import { fireEvent, render, screen } from "@/__tests__/utils/customRender";
import { Button } from ".";

describe("Component: Button", () => {
  it("should be able to render correctly", () => {
    render(<Button title="Button teste" />);
    expect(screen.getByText(/button teste/i)).toBeTruthy();
  });

  it("should call onPress callback when pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button title="Test Button" onPress={onPressMock} />
    );
    fireEvent.press(getByText("Test Button"));
    expect(onPressMock).toHaveBeenCalled();
  });

  it("should not be call onPress callback when pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button title="Test Button" onPress={onPressMock} disabled />
    );
    const button = getByText("Test Button");

    fireEvent.press(button);
    expect(onPressMock).not.toHaveBeenCalled();
  });
});
