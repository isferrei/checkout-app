import Link from "next/link";

type HeaderProps = {
  href: string;
};

export function Header(props: HeaderProps) {
  return (
    <header className="flex flex-row w-full pt-[2.4rem] px-[4.2rem] items-center">
      <Link href={props.href}>
        <img src="/images/arrow.svg" alt="back arrow" />
      </Link>
      <nav className="mx-auto">
        <img src="/images/logo.svg" alt="whitebook" />
      </nav>
    </header>
  );
}
