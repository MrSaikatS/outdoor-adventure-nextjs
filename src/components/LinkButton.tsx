import Link from "next/link";
import { ReactNode } from "react";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

const LinkButton = ({ href, children, className }: LinkButtonProps) => {
  return (
    <Link
      href={href}
      className={`bg-primary-crimson hover:bg-primary-crimson-hover flex items-center justify-center gap-2 rounded-full px-8 py-3 text-base font-bold text-white uppercase transition-all duration-300 ease-in-out ${className}`}>
      {children}
    </Link>
  );
};

export default LinkButton;
