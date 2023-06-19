import { render } from "@testing-library/react"
import React from "react"
import { Loader } from "./Loader"

describe("Loader component", () => {
    it("should render correctly", () => {
        const { container } = render(<Loader />)
        expect(container).toMatchSnapshot()
    })
})
