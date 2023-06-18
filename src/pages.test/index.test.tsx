import { render } from "@testing-library/react";
import Home from "../pages/index";

describe("Index Page", () => {
  test("renders the page content correctly", () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
