import Link from "next/link";
import LinkButton from "../LinkButton";

const DesktopNav = () => {
  return (
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
  );
};

export default DesktopNav;
