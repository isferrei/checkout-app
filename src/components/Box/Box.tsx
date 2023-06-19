import React from "react"
import classNames from "classnames"
import type { ReactNode } from "react"

type BoxTheme = "shadow" | "default"

type BoxProps = {
    variation: BoxTheme
    height?: number
    width?: number
    bg?: string
    children: ReactNode
    className?: string
}

const Box = (props: BoxProps) => {
    const handleThemes = (BoxTheme: BoxTheme) => {
        switch (BoxTheme) {
            case "shadow":
                return "drop-shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
            default:
                return ""
        }
    }

    return (
        <div
            {...props}
            data-testid="box" // Add data-testid attribute
            style={{
                height: props.height ? `${props.height}rem` : "max-content",
                width: props.width ? `${props.width}rem` : "max-content",
                background: props.bg ? props.bg : "#fff",
            }}
            className={classNames(
                `flex justify-center items-center w-full rounded-[15px] text-[0.94rem] ${props.className}`,
                handleThemes(props.variation)
            )}
        >
            {props.children}
        </div>
    )
}

export { Box, type BoxProps }
