type UnderLinePropsType = {
  className?: string;
};

const Underline = ({ className }: UnderLinePropsType) => {
  return (
    <div className={`bg-primary-crimson h-0.5 lg:h-[.2rem] ${className}`}></div>
  );
};

export default Underline;
