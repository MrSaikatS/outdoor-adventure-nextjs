import Link from "next/link";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Image from "next/image";

const Header = () => {
  return (
    <header className="absolute right-0 left-0 mx-auto flex max-w-7xl items-center justify-between p-6">
      <Link
        href={`/`}
        className="">
        <Image
          src="/logo.png"
          alt="logo"
          width={150}
          height={42}
          className="h-7 w-24 lg:h-[42px] lg:w-[150px]"
        />
      </Link>

      <div className="hidden items-center lg:flex">
        <DesktopNav />
      </div>

      <div className="flex items-center lg:hidden">
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
