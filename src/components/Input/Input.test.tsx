import { render, screen } from "@testing-library/react";
import { Input } from "./Input";

describe("Input component", () => {
  it("should have the provided mask", () => {
    const placeholder = "DD/MM/AAAA";
    const mask = "99/99/9999";
    const type = "text";
    const onChange = jest.fn();

    render(
      <Input
        placeholder={placeholder}
        mask={mask}
        type={type}
        onChange={onChange}
      />
    );

    const inputElement = screen.getByPlaceholderText(placeholder);
    expect(inputElement).toHaveValue(mask);
  });
});
