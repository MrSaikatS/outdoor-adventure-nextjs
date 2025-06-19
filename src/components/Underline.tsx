import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

const Underline = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={cn("bg-primary-crimson h-0.5 lg:h-[.2rem]", className)}
      {...props}></div>
  );
};

export default Underline;
