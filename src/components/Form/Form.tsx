import { FormEvent, useState } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

type FormData = {
  [key: string]: string;
};

type FormProps = {
  onSubmit: (data: FormData) => void;
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-[1.87rem]">
      <Input
        label="Número do cartão"
        mask="9999 9999 9999 9999"
        placeholder="0000 0000 0000 0000"
        onChange={() => {}}
      />
      <div className="flex flex-row gap-[3.12rem]">
        <Input
          label="Validade"
          mask="99/99"
          placeholder="MM/AA"
          onChange={() => {}}
        />
        <Input label="CVV" mask="999" placeholder="000" onChange={() => {}} />
      </div>
      <Input
        label="Nome impresso no cartão"
        mask=""
        placeholder="Seu nome"
        onChange={() => {}}
      />
      <Input
        label="CPF"
        mask="999.999.999-99"
        placeholder="000.000.000-00"
        onChange={() => {}}
      />
      <Input
        label="Cupom"
        mask=" "
        placeholder="Insira aqui"
        onChange={() => {}}
      />

      <div className="mt-[0.62rem]">
        <Button variation="primary">Finalizar pagamento</Button>
      </div>
    </form>
  );
}
