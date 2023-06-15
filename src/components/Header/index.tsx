import { ActiveLink } from "../Activelink";

export function Header() {
    return (
        <header className="flex flex-row w-full pt-[2.4rem] px-[4.2rem] items-center">
            <ActiveLink href="/" prefetch activeClassName="">
                <img src="/images/arrow.svg" alt="back arrow" />
            </ActiveLink>
            <nav className="mx-auto">
                <img src="/images/logo.svg" alt="whitebook" />
            </nav>
        </header>
    );
}
