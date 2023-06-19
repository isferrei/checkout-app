import React from "react"
import { render, screen } from "@testing-library/react"
import { Header } from "./Header"

jest.mock("next/router", () => ({
    useRouter: () => ({
        pathname: "/",
    }),
}))

describe("Header component", () => {
    describe("Render method", () => {
        it("should match the snapshot", () => {
            render(<Header href="/" />)

            const { container } = render(<Header href="/" />)
            expect(container).toMatchSnapshot()
        })
    })
})
