import { FormEvent, useState } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { Select } from "../Select/Select";

type FormData = {
  [key: string]: string;
};

type FormProps = {
  onSubmit: (data: FormData) => void;
  installments: Array<{
    label: string | number;
    value: string | number;
  }>;
};

export function Form(props: FormProps) {
  const [formData, setFormData] = useState({});

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
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
        label="Número do cartão"
        mask="9999 9999 9999 9999"
        placeholder="0000 0000 0000 0000"
        onChange={() => {}}
        name="cardNumber"
      />
      <div className="flex flex-row gap-[3.12rem]">
        <Input
          label="Validade"
          mask="99/99"
          placeholder="MM/AA"
          onChange={() => {}}
          name="cardValidate"
        />
        <Input
          label="CVV"
          mask="999"
          placeholder="000"
          onChange={() => {}}
          name="cardCvv"
        />
      </div>
      <Input
        label="Nome impresso no cartão"
        mask=""
        placeholder="Seu nome"
        onChange={() => {}}
        name="name"
      />
      <Input
        label="CPF"
        mask="999.999.999-99"
        placeholder="000.000.000-00"
        onChange={() => {}}
        name="cpf"
      />
      <Input
        label="Cupom"
        mask=""
        type="text"
        placeholder="Insira aqui"
        onChange={() => {}}
        name="cupom"
      />
      <Select
        label="Número de parcelas"
        options={props.installments}
        placeholder={"Selecionar"}
        onSelect={() => {}}
      />

      <div className="mt-[0.62rem]">
        <Button variation="primary">Finalizar pagamento</Button>
      </div>
    </form>
  );
}
