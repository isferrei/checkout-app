import { useState } from "react";

type CheckCardProps = {
  label?: string;
  price: string;
  discount: string;
  description: string;
  checked: boolean;
  onChange: (newValue: string) => void;
  value: string;
};

export function CheckCard(props: CheckCardProps) {
  const [isChecked, setIsChecked] = useState(props.checked);

  const handleOnChange = (event: { target: { checked: any } }) => {
    const newValue = event.target.checked;
    setIsChecked(newValue);
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  return (
    <label
      htmlFor="radio"
      className="border-[1px] flex justify-between flex-row font-sans items-center w-[20rem] border-blue rounded-[0.93rem] p-[1.25rem] cursor-pointer focus:outline-none focus:ring-2 hover:border-2 transition-all"
    >
      <div className="flex gap-[0.75rem] flex-row justify-center items-center">
        <section className="text-blue font-normal">
          <h2 className="font-bold text-[0.87rem]">{props.label}</h2>
          <p className="text-[0.75rem]">{props.price}</p>
          <p className="text-[0.65rem] text-orange">{props.description}</p>
        </section>
        <section className="flex justify-center items-center h-[1rem] w-[2.5rem] px-[0.3rem] py-[0.25rem] text-white text-[0.63rem] rounded-[0.56rem] bg-orange">
          {props.discount}
        </section>
      </div>
      <label>
        <input
          type="radio"
          id="radio"
          value={props.value}
          checked={isChecked}
          onChange={handleOnChange}
          className="hidden"
        />
        <span className="w-[16px] h-[16px] rounded-full border-2 border-lightGray flex items-center justify-center">
          {isChecked && (
            <span className="w-[8px] h-[8px] rounded-full bg-blue"></span>
          )}
        </span>
      </label>
    </label>
  );
}
