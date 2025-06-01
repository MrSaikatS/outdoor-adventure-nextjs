import Link from "next/link";
import { ReactNode } from "react";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
};

const LinkButton = ({ href, children }: LinkButtonProps) => {
  return (
    <Link
      href={href}
      className="bg-primary hover:bg-primary-hover flex items-center justify-center gap-2 rounded-full px-8 py-3 text-base font-bold text-white uppercase transition-all duration-300 ease-in-out">
      {children}
    </Link>
  );
};

export default LinkButton;
