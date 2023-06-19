import React from "react"
import type { ReactNode } from "react"
import { render, screen } from "@testing-library/react"

import { Button } from "./Button"

jest.mock(
    "next/head",
    () =>
        function Head(props: { children: ReactNode }) {
            return props.children
        }
)

describe("Button component", () => {
    describe("Render method", () => {
        it("should have label, variation, and type", async () => {
            render(<Button variation="primary">Procurar</Button>)

            const button = screen.getByText(/Procurar/)

            expect(button).toHaveTextContent("Procurar")
            expect(button).toHaveClass("bg-blue")

            expect(button).toMatchSnapshot()
        })

        it("should have correct class for secondary variation", () => {
            render(<Button variation="secondary">Secondary Button</Button>)

            const button = screen.getByText(/Secondary Button/)

            expect(button).toHaveTextContent("Secondary Button")
            expect(button).toHaveClass("text-blue")

            expect(button).toMatchSnapshot()
        })

        it("should have custom height and fontWeight styles", () => {
            render(
                <Button
                    variation="primary"
                    type="button"
                    height={3}
                    weight={700}
                >
                    Custom Button
                </Button>
            )

            const button = screen.getByText(/Custom Button/)

            expect(button).toHaveStyle({ height: "3rem", fontWeight: "700" })

            expect(button).toMatchSnapshot()
        })
    })
})
