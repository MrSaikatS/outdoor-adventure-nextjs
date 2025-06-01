import Image from "next/image";
import Link from "next/link";
import LinkButton from "../LinkButton";

const Header = () => {
  return (
    <>
      <header className="absolute right-0 left-0 mx-auto flex max-w-7xl items-center justify-between p-6">
        <Link
          href={`/`}
          className="">
          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={42}
          />
        </Link>

        <nav className="flex items-center gap-8 text-lg text-white">
          <Link
            href={`/`}
            className="">
            Home
          </Link>

          <Link
            href={`/about`}
            className="">
            About
          </Link>

          <Link
            href={`/services`}
            className="">
            Services
          </Link>

          <Link
            href={`/projects`}
            className="">
            Projects
          </Link>

          <Link
            href={`/contact`}
            className="">
            Contact
          </Link>

          <LinkButton href="/">Take Action</LinkButton>
        </nav>
      </header>
    </>
  );
};

export default Header;
