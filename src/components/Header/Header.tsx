import React from "react"
import Link from "next/link"

type HeaderProps = {
    href: string
}

export function Header(props: HeaderProps) {
    return (
        <header className="flex flex-row w-full pt-[2.4rem] px-[4.2rem] items-center">
            <Link href={props.href}>
                <img src="/assets/arrow.svg" alt="back arrow" />
            </Link>
            <nav className="mx-auto">
                <img src="/assets/logo.svg" alt="whitebook" />
            </nav>
        </header>
    )
}
