import React from "react";
import classNames from "classnames";

type ButtonProps = {
  title: string;
  onClick: () => void;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ title, ...restProps }, ref) => {
  return (
    <button
      ref={ref}
      className={classNames(
        "rounded bg-primary-500 py-1.5 px-4 font-bold uppercase text-white transition-colors hover:bg-primary-700",
        "hover:bg-primary-700 focus:bg-primary-700 focus:outline-none focus:ring"
      )}
      {...restProps}
    >
      {title}
    </button>
  );
});
