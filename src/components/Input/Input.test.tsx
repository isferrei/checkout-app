import { render, screen } from "@testing-library/react";
import type { ReactNode } from "react";

import { Input } from "./Input";

// Mock `next/head`: https://bradgarropy.com/blog/mocking-nextjs
jest.mock(
  "next/head",
  () =>
    function Head(props: { children: ReactNode }) {
      // eslint-disable-next-line testing-library/no-node-access
      return props.children;
    }
);

describe("Input component", () => {
  describe("Render method", () => {
    it("should have mask", async () => {
      const placeholder = "DD/MM/AAAA";
      const mask = "99/99/9999";
      const type = "text";
      const onChange = () => false;

      render(
        <Input
          placeholder={placeholder}
          mask={mask}
          type={type}
          onChange={onChange}
        />
      );

      const inputElement = screen.getByPlaceholderText(placeholder);
      expect(inputElement).toHaveAttribute("mask", mask);
    });
  });
});
