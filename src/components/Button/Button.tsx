/* eslint-disable react/button-has-type */
import classNames from "classnames";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonTheme = "primary" | "secondary";

type ButtonProps = {
  variation: ButtonTheme;
  height?: number;
  weight?: number;
  type?: string;
};

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps & Props) => {
  const handleThemes = (buttonTheme: ButtonTheme) => {
    switch (buttonTheme) {
      case "primary":
        return "bg-blue text-white disabled:bg-gray hover:bg-lightBlue transition-all";
      case "secondary":
        return classNames("text-blue");
    }
  };

  return (
    <button
      type={props.type ?? "button"}
      style={{
        height: props.height ? `${props.height}rem` : "50px",
        fontWeight: props.weight ? "700" : "400",
      }}
      className={classNames(
        "flex justify-center items-center w-full rounded-[25px] text-[0.94rem]",
        handleThemes(props.variation)
      )}
    >
      {props.children}
    </button>
  );
};

export { Button };
