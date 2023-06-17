import { render, screen, fireEvent } from "@testing-library/react";
import { Form } from "./Form";

describe("Form", () => {
  const mockInstallments = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
  ];

  test("calls onSubmit handler with form data on submission", () => {
    const mockOnSubmit = jest.fn();
    render(<Form onSubmit={mockOnSubmit} installments={mockInstallments} />);

    fireEvent.change(screen.getByLabelText(/Número do cartão/i), {
      target: { value: "1234567890123456" },
    });
    fireEvent.change(screen.getByLabelText(/Validade/i), {
      target: { value: "12/23" },
    });
    fireEvent.change(screen.getByLabelText(/CVV/i), {
      target: { value: "123" },
    });
    fireEvent.change(screen.getByLabelText(/Nome impresso no cartão/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/CPF/i), {
      target: { value: "123.456.789-00" },
    });
    fireEvent.change(screen.getByLabelText(/Cupom/i), {
      target: { value: "ABC123" },
    });
    fireEvent.change(screen.getByLabelText(/Número de parcelas/i), {
      target: { value: "2" },
    });

    fireEvent.submit(screen.getByTestId("form"));

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith({
      "Número do cartão": "1234567890123456",
      Validade: "12/23",
      CVV: "123",
      "Nome impresso no cartão": "John Doe",
      CPF: "123.456.789-00",
      Cupom: "ABC123",
      "Número de parcelas": "2",
    });
  });
});
