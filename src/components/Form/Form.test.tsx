import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { Form } from "./Form";

describe("Form", () => {
  const mockInstallments = [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
    { label: "Option 3", value: 3 },
  ];

  test("calls onSubmit handler with form data on submission", () => {
    const mockOnSubmit = jest.fn();
    render(<Form onSubmit={mockOnSubmit} installments={mockInstallments} />);

    act(() => {
      userEvent.type(
        screen.getByLabelText(/Número do cartão/i),
        "1234567890123456"
      );
      userEvent.type(screen.getByLabelText(/Validade/i), "12/23");
      userEvent.type(screen.getByLabelText(/CVV/i), "123");
      userEvent.type(
        screen.getByLabelText(/Nome impresso no cartão/i),
        "John Doe"
      );
      userEvent.type(screen.getByLabelText(/CPF/i), "123.456.789-00");
      userEvent.type(screen.getByLabelText(/Cupom/i), "ABC123");

      userEvent.click(screen.getByText(/Finalizar pagamento/i));
    });

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);

    expect(screen.getByLabelText(/Número do cartão/i)).toMatchSnapshot();
    expect(screen.getByLabelText(/Validade/i)).toMatchSnapshot();
    expect(screen.getByLabelText(/CVV/i)).toMatchSnapshot();
    expect(screen.getByLabelText(/Nome impresso no cartão/i)).toMatchSnapshot();
    expect(screen.getByLabelText(/CPF/i)).toMatchSnapshot();
    expect(screen.getByLabelText(/Cupom/i)).toMatchSnapshot();
    expect(screen.getByText(/Finalizar pagamento/i)).toMatchSnapshot();

    expect(screen.getByLabelText(/Número do cartão/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Validade/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/CVV/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/Nome impresso no cartão/i)
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/CPF/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Cupom/i)).toBeInTheDocument();
    expect(screen.getByText(/Finalizar pagamento/i)).toBeInTheDocument();
  });
});
