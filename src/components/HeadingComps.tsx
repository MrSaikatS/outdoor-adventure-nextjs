import { HTMLAttributes, PropsWithChildren } from "react";

type HeadingCompsProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

const HeadingComps = ({ children, className, ...props }: HeadingCompsProps) => {
  return (
    <div
      className={`${className} font-montserrat font-bold`}
      {...props}>
      {children}
    </div>
  );
};

export default HeadingComps;
