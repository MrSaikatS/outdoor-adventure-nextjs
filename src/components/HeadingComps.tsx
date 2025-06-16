import { ReactNode } from "react";

type HeadingCompsProps = {
  children: ReactNode;
  classname?: string;
};

const HeadingComps = ({ children, classname }: HeadingCompsProps) => {
  return (
    <div className={`${classname} font-montserrat font-bold`}>{children}</div>
  );
};

export default HeadingComps;
