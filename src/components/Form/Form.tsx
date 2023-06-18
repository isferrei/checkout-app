import { FormEvent, useState } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { Select } from "../Select/Select";

type FormData = {
  [key: string]: string;
};

type FormProps = {
  onSubmit: (data: FormData) => Promise<void>;
  installments: Array<{
    label: string | number;
    value: string | number;
  }>;
};

export function Form(props: FormProps) {
  const [formData, setFormData] = useState({});
  const [installment, setInstallment] = useState({});

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-[1.87rem]"
      data-testid="form"
    >
      <Input
        required
        label="Número do cartão"
        mask="9999 9999 9999 9999"
        placeholder="0000 0000 0000 0000"
        onChange={(value) => handleInputChange("creditCardNumber", value)}
        name="creditCardNumber"
      />
      <div className="flex flex-row gap-[3.12rem]">
        <Input
          required
          label="Validade"
          mask="99/99"
          placeholder="MM/AA"
          onChange={(value) =>
            handleInputChange("creditCardExpirationDate", value)
          }
          name="creditCardExpirationDate"
        />
        <Input
          required
          label="CVV"
          mask="999"
          placeholder="000"
          onChange={(value) => handleInputChange("creditCardCVV", value)}
          name="creditCardCVV"
        />
      </div>
      <Input
        required
        label="Nome impresso no cartão"
        mask=""
        placeholder="Seu nome"
        onChange={(value) => handleInputChange("creditCardHolder", value)}
        name="creditCardHolder"
      />
      <Input
        required
        label="CPF"
        mask="999.999.999-99"
        placeholder="000.000.000-00"
        onChange={(value) => handleInputChange("creditCardCPF", value)}
        name="creditCardCPF"
      />
      <Input
        required
        label="Cupom"
        mask=""
        type="text"
        placeholder="Insira aqui"
        onChange={(value) => handleInputChange("couponCode", value)}
        name="couponCode"
      />
      <Select
        data-testid="select-element"
        label="Número de parcelas"
        options={props.installments}
        placeholder={"Selecionar"}
        onSelect={(option: {
          label: string | number;
          value: string | number;
        }) => handleSelectChange("installments", option.value as string)}
      />

      <div className="mt-[0.62rem]">
        <Button variation="primary" type="submit">
          Finalizar pagamento
        </Button>
      </div>
    </form>
  );
}
