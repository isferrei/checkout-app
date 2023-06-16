import { render, screen, fireEvent } from "@testing-library/react";
import { CheckCard } from "./CheckCard";

describe("CheckCard", () => {
  const props = {
    id: "card1",
    title: "Card Title",
    description: "Card Description",
    fullPrice: 100,
    discountAmmount: 10,
    installments: 3,
    discountPercentage: 0.1,
    checked: false,
    periodLabel: "month",
    onChange: jest.fn(),
    value: "card1",
  };

  test("renders CheckCard component with correct props", () => {
    render(<CheckCard {...props} />);

    // Assert that the component renders with the correct title and description
    expect(
      screen.getByText("Card Title | Card Description")
    ).toBeInTheDocument();

    // Assert that the component renders with the correct full price and discounted price
    expect(screen.getByText("De R$ 100.00 | Por R$ 90.00")).toBeInTheDocument();

    // Assert that the component renders with the correct installments information
    expect(screen.getByText("3x de R$ 33.33/month")).toBeInTheDocument();

    // Assert that the component renders with the correct discount percentage
    expect(screen.getByText("-10%")).toBeInTheDocument();

    // Assert that the component renders with an unchecked radio button
    const radioInput = screen.getByLabelText("Card Title | Card Description");
    expect(radioInput).toBeInTheDocument();
    expect(radioInput.checked).toBe(false);

    // Assert that the component renders with the correct radio input value
    expect(radioInput.value).toBe("card1");
  });

  test("calls onChange handler when radio button is checked", () => {
    render(<CheckCard {...props} />);

    const radioInput = screen.getByLabelText("Card Title | Card Description");

    // Simulate a change event to check the radio button
    fireEvent.change(radioInput, { target: { checked: true } });

    // Assert that the onChange handler is called with the correct value
    expect(props.onChange).toHaveBeenCalledTimes(1);
    expect(props.onChange).toHaveBeenCalledWith("card1");
  });
});
