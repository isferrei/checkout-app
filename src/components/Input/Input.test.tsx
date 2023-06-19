import React from "react"
import { render, screen } from "@testing-library/react"
import type { ReactNode } from "react"

import { Input } from "./Input"

jest.mock(
    "next/head",
    () =>
        function Head(props: { children: ReactNode }) {
            return props.children
        }
)

describe("Input component", () => {
    describe("Render method", () => {
        it("should match the snapshot", () => {
            const placeholder = "DD/MM/AAAA"
            const mask = "99/99/9999"
            const type = "text"
            const onChange = () => false

            const { container } = render(
                <Input
                    placeholder={placeholder}
                    mask={mask}
                    type={type}
                    onChange={onChange}
                    name={""}
                />
            )

            expect(container).toMatchSnapshot()
        })
    })
})
