import { render } from "@testing-library/react";
import { Box, BoxProps } from "./Box";

describe("Box component", () => {
  const renderBox = (props: BoxProps) => {
    return render(<Box {...props} />);
  };

  test("renders with default props", () => {
    const { container } = renderBox({
      variation: "default",
      children: "Content",
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders with shadow variation", () => {
    const { container } = renderBox({
      variation: "shadow",
      children: "Content",
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders with custom styles", () => {
    const { container } = renderBox({
      variation: "default",
      children: "Content",
      height: 10,
      width: 20,
      bg: "#ccc",
      className: "custom-class",
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
