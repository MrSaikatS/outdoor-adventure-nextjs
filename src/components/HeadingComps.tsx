import { cn } from "@/lib/utils";
import { HTMLAttributes, PropsWithChildren } from "react";

type HeadingCompsProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

const HeadingComps = ({ children, className, ...props }: HeadingCompsProps) => {
  return (
    <div
      className={cn("font-montserrat font-bold", className)}
      {...props}>
      {children}
    </div>
  );
};

export default HeadingComps;
