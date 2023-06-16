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
    it("should have label", async () => {
      render(
        <Button variation="primary" type="button">
          Procurar
        </Button>
      );

      const text = screen.getByText(/Procurar/);

      expect(text).toHaveTextContent("Procurar");
    });
  });
});
