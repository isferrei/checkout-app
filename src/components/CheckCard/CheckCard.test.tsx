import { render, screen, fireEvent } from "@testing-library/react";
import { CheckCard } from "./CheckCard";

describe("CheckCard", () => {
  const props = {
    id: "card1",
    title: "Premium Anual",
    description: "Parcelado",
    fullPrice: 100,
    discountAmount: 10,
    installments: 3,
    discountPercentage: 0.1,
    checked: false,
    periodLabel: "month",
    onChange: jest.fn(),
    value: "card1",
  };

  test("renders CheckCard component with correct props", () => {
    const { container } = render(<CheckCard discountAmmount={0} {...props} />);

    expect(screen.getByTestId("checkcard-title-description")).toHaveTextContent(
      "Premium Anual | Parcelado"
    );

    expect(
      screen.getByTestId("checkcard-full-price-discount")
    ).toHaveTextContent("De R$ 100,00 | Por R$ 100,00");

    expect(screen.getByTestId("checkcard-installments")).toHaveTextContent(
      "3x de R$ 33,33/month"
    );

    expect(screen.getByText("-10%")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("checkcard"));

    expect(props.onChange).toHaveBeenCalledTimes(1);
    expect(props.onChange).toHaveBeenCalledWith("card1");

    expect(container.firstChild).toMatchSnapshot();
  });
});
