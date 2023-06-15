import InputMask from "react-input-mask";

type InputProps = {
  placeholder: string;
  onChange: (event: React.FormEvent<HTMLFormElement>) => void;
  mask: string;
  type?: string;
  defaultValue?: string;
  label?: string;
};

export function Input(props: InputProps) {
  return (
    <label>
      {props.label || ""}
      <InputMask
        mask={props.mask}
        className="w-full text-red-500	 border-b-[1px] font-sans border-[#EBEBEB] py-[0.62rem] pl-1 focus:outline-none focus:ring-2"
        type={props.type ?? "text"}
        placeholder={props.placeholder}
        onChange={() => props.onChange}
        defaultValue={props.defaultValue ?? ""}
      />
    </label>
  );
}
