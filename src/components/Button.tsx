import React from "react";

type ButtonProps = {
  title: string;
  className?: string;
  onClick: () => void;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ title, className, ...restProps }, ref) => {
  return (
    <button
      ref={ref}
      className={`rounded bg-primary-500 py-1.5 px-4 font-bold uppercase text-white transition-colors hover:bg-primary-700 ${
        className ?? ""
      }`}
      {...restProps}
    >
      {title}
    </button>
  );
});
