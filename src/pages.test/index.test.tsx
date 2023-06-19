import { render, waitFor } from "@testing-library/react";
import { getPage } from "next-page-tester";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import { TextEncoder } from "util";
import fetchMock from "jest-fetch-mock";

beforeEach(() => {
  fetchMock.resetMocks();
});

global.TextEncoder = TextEncoder;

describe("Success component", () => {
  test("renders the page content correctly", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: "Mocked Data" }));

    const { render } = await getPage({
      route: "/",
    });

    const mockFetch = jest.spyOn(global, "fetch");
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce({ data: "Mocked Data" }),
    });

    const { asFragment } = render(<Home />);

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledTimes(1);
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
