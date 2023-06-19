import InputMask from "react-input-mask"

export type InputProps = {
    placeholder: string
    onChange: (value: string) => void
    mask: string
    type?: string
    defaultValue?: string
    label?: string
    value?: string
    name: string
    required?: boolean
}

import React from "react"

export function Input(props: InputProps) {
    return (
        <div>
            <label className="text-darkGray text-[0.8rem]" htmlFor={props.name}>
                {props.label || ""}
            </label>
            <InputMask
                required={props.required ?? false}
                mask={props.mask}
                className="w-full border-b-[1px] text-[1rem] text-darkGray font-sans border-[#F4F3F6] py-[0.25rem] pl-1 placeholder:text-lightGray focus:outline-none focus:ring-2"
                type={props.type ?? "text"}
                placeholder={props.placeholder}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    props.onChange(e.target.value)
                }
                defaultValue={props.defaultValue ?? ""}
                value={props.value}
                name={props.name}
                id={props.name}
            />
        </div>
    )
}
