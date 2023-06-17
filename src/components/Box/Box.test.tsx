import { render } from "@testing-library/react";
import { Box, BoxProps } from "./Box";

describe("Box component", () => {
  const renderBox = (props: BoxProps) => {
    return render(<Box {...props} />);
  };

  test("renders with default props", () => {
    const { getByTestId } = renderBox({
      variation: "default",
      children: "Content",
    });

    const boxElement = getByTestId("box");
    expect(boxElement).toBeInTheDocument();
    expect(boxElement).toHaveClass(
      "flex justify-center items-center w-full rounded-[15px]"
    );
    expect(boxElement).not.toHaveClass(
      "drop-shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
    );
    expect(boxElement).toHaveTextContent("Content");
  });

  test("renders with shadow variation", () => {
    const { getByTestId } = renderBox({
      variation: "shadow",
      children: "Content",
    });

    const boxElement = getByTestId("box");
    expect(boxElement).toHaveClass("drop-shadow-[0_4px_20px_rgba(0,0,0,0.05)]");
  });

  test("renders with custom styles", () => {
    const { getByTestId } = renderBox({
      variation: "default",
      children: "Content",
      height: 10,
      width: 20,
      bg: "#ccc",
      className: "custom-class",
    });

    const boxElement = getByTestId("box");
    expect(boxElement).toHaveStyle("height: 10rem");
    expect(boxElement).toHaveStyle("width: 20rem");
    expect(boxElement).toHaveStyle("background: #ccc");
    expect(boxElement).toHaveClass("custom-class");
  });
});
