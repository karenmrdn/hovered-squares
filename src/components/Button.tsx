import React from "react";

type ButtonProps = {
  title: string;
};

const Button: React.FC<ButtonProps> = ({ title, ...restProps }) => {
  return (
    <button className="rounded bg-primary-500 py-1.5 px-4 font-bold uppercase text-white hover:bg-primary-700" {...restProps}>
      {title}
    </button>
  );
};

export default Button;
