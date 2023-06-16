import InputMask from "react-input-mask";

export type InputProps = {
  placeholder: string;
  onChange: (event: React.FormEvent<HTMLFormElement>) => void;
  mask: string;
  type?: string;
  defaultValue?: string;
  label?: string;
  value?: string;
};

export function Input(props: InputProps) {
  return (
    <div>
      <label className="text-darkGray text-[0.8rem]">{props.label || ""}</label>
      <InputMask
        mask={props.mask}
        className="w-full border-b-[1px] text-[1rem] text-darkGray font-sans border-[#EBEBEB] py-[0.25rem] pl-1 placeholder:text-lightGray focus:outline-none focus:ring-2"
        type={props.type ?? "text"}
        placeholder={props.placeholder}
        onChange={() => props.onChange}
        defaultValue={props.defaultValue ?? ""}
        value={props.value}
      />
    </div>
  );
}
