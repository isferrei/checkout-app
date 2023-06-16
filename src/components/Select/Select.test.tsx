import { render, screen, fireEvent } from "@testing-library/react";
import { Select, ISelectProps } from "./Select";

describe("Select component", () => {
  const options: ISelectProps["options"] = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];

  test("renders the label correctly", () => {
    const label = "Select an option";
    render(
      <Select
        label={label}
        options={options}
        placeholder=""
        onSelect={() => {}}
      />
    );
    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();
  });

  test("selects an option correctly", () => {
    const handleSelect = jest.fn();
    render(
      <Select
        label=""
        options={options}
        placeholder="Select"
        onSelect={handleSelect}
      />
    );
    const selectElement = screen.getByPlaceholderText("Select");

    fireEvent.change(selectElement, { target: { value: "2" } });

    expect(handleSelect).toHaveBeenCalledTimes(1);
    expect(handleSelect).toHaveBeenCalledWith({
      value: "2",
      label: "Option 2",
    });
  });
});
