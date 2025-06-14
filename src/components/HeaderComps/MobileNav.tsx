import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";
import LinkButton from "../LinkButton";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="bg-primary-crimson p-2">
        <Menu
          color="white"
          size={24}
        />
      </SheetTrigger>

      <SheetContent className="bg-background/70 font-noto-sans flex flex-col items-center gap-4 border-0 p-2 text-lg backdrop-blur-xl">
        <SheetHeader>
          <SheetTitle className="text-primary-crimson-hover text-center text-2xl font-bold tracking-[.2rem] uppercase">
            Menu
          </SheetTitle>
        </SheetHeader>

        <SheetDescription></SheetDescription>

        {/* <div className="bg-primary-crimson h-0.5 w-1/2"></div> */}

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
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
