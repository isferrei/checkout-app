import { useEffect, useState } from "react";

export type CheckCardProps = {
  id: string;
  title: string;
  description: string;
  fullPrice: number;
  discountAmmount: number;
  installments: number;
  discountPercentage: number;
  checked: boolean;
  periodLabel: string;
  onChange: (newValue: string) => void;
  value: string;
};

export function CheckCard(props: CheckCardProps) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(props.checked);
  }, [props.checked]);

  const handleOnChange = () => {
    setIsChecked(true);
    if (props.onChange) {
      props.onChange(props.value);
    }
  };

  const formatNumber = (number: number) => {
    return number.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <label
      htmlFor={props.id}
      className="border-[1px] flex justify-between flex-row font-sans items-center w-[20rem] border-blue rounded-[0.93rem] p-[1.25rem] cursor-pointer focus:outline-none focus:ring-2 hover:bg-[#F4F3F6] transition-all"
      data-testid="checkcard"
    >
      <div className="flex gap-[0.75rem] flex-row justify-center items-center">
        <section className="text-blue font-normal">
          <h2
            className="font-bold text-[0.87rem]"
            data-testid="checkcard-title-description"
          >
            {props.title} | {props.description}
          </h2>

          <p
            className="text-[0.75rem]"
            data-testid="checkcard-full-price-discount"
          >
            De R$ {formatNumber(props.fullPrice)} | Por R${" "}
            {formatNumber(props.fullPrice - props.discountAmmount)}
          </p>

          <p
            className="text-[0.65rem] text-orange"
            data-testid="checkcard-installments"
          >
            {props.installments}x de R${" "}
            {formatNumber(props.fullPrice / props.installments)}/
            {props.periodLabel}
          </p>
        </section>

        <section className="flex justify-center items-center h-[1rem] w-[2.5rem] px-[0.3rem] py-[0.25rem] text-white text-[0.63rem] rounded-[0.56rem] bg-orange">
          {`-${props.discountPercentage * 100}%`}
        </section>
      </div>

      <label>
        <input
          type="radio"
          id={props.id}
          value={props.value}
          checked={isChecked}
          onChange={handleOnChange}
          className="hidden"
          name="plan_card"
        />

        <span
          style={{ borderColor: isChecked ? "#C9C5D4" : "#EBEBEB" }}
          className="w-[16px] h-[16px] rounded-full border-2 flex items-center justify-center transition-all"
        >
          {isChecked && (
            <span className="w-[8px] h-[8px] rounded-full bg-blue" />
          )}
        </span>
      </label>
    </label>
  );
}
