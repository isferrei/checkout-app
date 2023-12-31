import React from "react"
import { Header } from "../components/Header/Header"
import "../styles/globals.css"

import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header href="/" />
            <Component {...pageProps} />
        </>
    )
}
