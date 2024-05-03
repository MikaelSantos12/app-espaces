import { render, screen } from "@/__tests__/utils/customRender";
import { Header } from "./index";
describe("Component: Header", () => {
  it("Should be able to render a header", () => {
    render(<Header />);
    const header = screen.getByTestId("header");
    expect(header).toBeTruthy();
  });
});
