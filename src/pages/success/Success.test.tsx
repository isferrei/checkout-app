import { render } from "@testing-library/react";
import Success from "./index";

describe("Success component", () => {
  test("renders correctly", () => {
    const { asFragment } = render(<Success />);
    expect(asFragment()).toMatchSnapshot();
  });
});
