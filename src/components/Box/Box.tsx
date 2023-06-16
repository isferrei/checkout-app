/* eslint-disable react/Box-has-type */
import classNames from "classnames";
import type { ReactNode } from "react";

type BoxTheme = "shadow" | "default";

type BoxProps = {
  variation: BoxTheme;
  height?: number;
  width?: number;
  bg?: string;
  children: ReactNode;
};

const Box = (props: BoxProps) => {
  const handleThemes = (BoxTheme: BoxTheme) => {
    switch (BoxTheme) {
      case "shadow":
        return "drop-shadow-[0_4px_20px_rgba(0,0,0,0.05)]";
      default:
        return "";
    }
  };

  return (
    <div
      {...props}
      style={{
        height: props.height ? `${props.height}rem` : "5rem",
        width: props.width ? `${props.width}rem` : "23.75rem",
        background: props.bg ? props.bg : "#fff",
      }}
      className={classNames(
        "flex justify-center items-center w-full rounded-[15px] text-[0.94rem]",
        handleThemes(props.variation)
      )}
    >
      {props.children}
    </div>
  );
};

export { Box };
