import InputMask from "react-input-mask";

type InputProps = {
  placeholder: string;
  onChange: (event: React.FormEvent<HTMLFormElement>) => void;
  mask: string;
  type?: string;
  defaultValue?: string;
};

export function Input(props: InputProps) {
  const handleCreateNewCheckout = () => {};

  return (
    <InputMask
      mask={props.mask}
      className="w-full rounded-full border border-blackBlue py-2 pl-4 pr-12 drop-shadow-[0_5px_10px_#101E3224] focus:outline-none focus:ring-2"
      type={props.type ?? "text"}
      placeholder={props.placeholder}
      onChange={() => props.onChange}
      defaultValue={props.defaultValue ?? ""}
    />
  );
}
