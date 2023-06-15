import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

jest.mock("next/router", () => ({
  useRouter: () => ({
    pathname: "/",
  }),
}));

describe("Header component", () => {
  describe("Render method", () => {
    it("should have a href", async () => {
      render(<Header href="/" />);

      const headerElement = screen.getByRole("link");
      expect(headerElement).toBeInTheDocument();
    });
  });
});
