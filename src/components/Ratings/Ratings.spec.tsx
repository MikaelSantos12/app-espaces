import { render, screen } from "@/__tests__/utils/customRender";
import { Ratings } from ".";

describe("Component: Ratings", () => {
  it("should be able to show title and value", () => {
    render(<Ratings rating={9.5} />);
    expect(screen.getByText("Avaliação")).toBeTruthy();
    expect(screen.getByText("9.5")).toBeTruthy();
  });
});
