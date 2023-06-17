import { render, screen } from "@testing-library/react";
import type { ReactNode } from "react";

import { Button } from "./Button";

// Mock `next/head`: https://bradgarropy.com/blog/mocking-nextjs
jest.mock(
  "next/head",
  () =>
    function Head(props: { children: ReactNode }) {
      // eslint-disable-next-line testing-library/no-node-access
      return props.children;
    }
);

describe("Button component", () => {
  describe("Render method", () => {
    it("should have label, variation, and type", async () => {
      render(<Button variation="primary">Procurar</Button>);

      const button = screen.getByText(/Procurar/);

      expect(button).toHaveTextContent("Procurar");
      expect(button).toHaveClass("bg-blue");
    });

    it("should have correct class for secondary variation", () => {
      render(<Button variation="secondary">Secondary Button</Button>);

      const button = screen.getByText(/Secondary Button/);

      expect(button).toHaveTextContent("Secondary Button");
      expect(button).toHaveClass("text-blue");
    });

    it("should have custom height and fontWeight styles", () => {
      render(
        <Button variation="primary" type="button" height={3} weight={700}>
          Custom Button
        </Button>
      );

      const button = screen.getByText(/Custom Button/);

      expect(button).toHaveStyle({ height: "3rem", fontWeight: "700" });
    });
  });
});
