import { useState } from "react";
import type {
  GroupBase,
  IndicatorSeparatorProps,
  StylesConfig,
} from "react-select";
import ReactSelect, { components } from "react-select";

export type Option = {
  value: string;
  label: string;
};

export type ISelectProps = {
  label: string;
  options: Array<{
    label: string | number;
    value: string | number;
  }>;
  placeholder: string;
  onSelect: (selected: Option | Option[]) => void;
};

const indicatorSeparatorStyle = {
  width: 0,
};

const IndicatorSeparator = ({
  innerProps,
}: IndicatorSeparatorProps<unknown, boolean, GroupBase<unknown>>) => {
  return <span style={indicatorSeparatorStyle} {...innerProps} />;
};

const CustomSelect = (props: ISelectProps) => {
  const [selected, setSelected] = useState<Option>();

  const handleChange = (option: Option) => {
    setSelected(option);
    props.onSelect(option);
  };

  const customStyles: StylesConfig = {
    control: (styles, state) => ({
      ...styles,
      borderRadius: 0,
      border: "none",
      borderBottom: "1px solid #F4F3F6",
      color: "#666173",
      fontSize: "0.93rem",
    }),
    option: (styles) => ({
      ...styles,
      color: "#666173",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "#666173",
    }),
    placeholder: (styles) => ({
      ...styles,
      color: "#C9C5D4",
      fontSize: "1rem",
    }),
    container: (styles) => ({
      ...styles,
      width: "100%",
    }),
  };

  return (
    <div>
      <label id="select-label" className="text-darkGray text-[0.8rem]">
        {props.label || ""}
      </label>
      <ReactSelect
        name="Select"
        value={selected}
        options={props.options}
        onChange={() => handleChange}
        placeholder={props.placeholder}
        components={{ IndicatorSeparator }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
        })}
        styles={customStyles}
      />
    </div>
  );
};

export function Select(props: ISelectProps) {
  return (
    <CustomSelect
      data-testid="select-element"
      onSelect={props.onSelect}
      options={props.options}
      placeholder={props.placeholder}
      label={props.label}
    />
  );
}
