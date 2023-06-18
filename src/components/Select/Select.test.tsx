import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select, ISelectProps } from "./Select";
import { act } from "react-dom/test-utils";

afterEach(cleanup);

describe("Select component", () => {
  it("selects an option correctly", () => {
    const options = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ];

    const onSelect = jest.fn();

    const selectProps: ISelectProps = {
      label: "Select",
      options,
      placeholder: "Select an option",
      onSelect,
    };

    render(<Select {...selectProps} />);

    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();

    act(() => {
      userEvent.click(selectElement);
    });

    const optionElement = screen.getByText(
      (content, element) =>
        content.startsWith("Option 2") &&
        element?.tagName.toLowerCase() === "div"
    );
    expect(optionElement).toBeInTheDocument();

    act(() => {
      userEvent.click(optionElement);
    });

    const selectedOption = screen.getByText(/Option 2/i);
    expect(selectedOption).toBeInTheDocument();

    expect(selectElement).toMatchSnapshot();
  });
});
