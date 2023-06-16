import { render, screen, fireEvent } from "@testing-library/react";
import { CheckCard } from "./CheckCard";

describe("CheckCard component", () => {
  it("should render correctly and call onChange when checked status changes", () => {
    const label = "Card Label";
    const price = "$9.99";
    const discount = "50% off";
    const description = "Card description";
    const checked = false;
    const onChange = jest.fn();
    const value = "card-value";

    render(
      <CheckCard
        label={label}
        price={price}
        discount={discount}
        description={description}
        checked={checked}
        onChange={onChange}
        value={value}
      />
    );

    const checkCardLabel = screen.getByText(label);
    const checkCardPrice = screen.getByText(price);
    const checkCardDiscount = screen.getByText(discount);
    const checkCardDescription = screen.getByText(description);
    const checkCardRadio = screen.getByRole("radio");

    expect(checkCardLabel).toBeInTheDocument();
    expect(checkCardPrice).toBeInTheDocument();
    expect(checkCardDiscount).toBeInTheDocument();
    expect(checkCardDescription).toBeInTheDocument();
    expect(checkCardRadio).toBeInTheDocument();
  });
});
