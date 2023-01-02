import React from "react";

type SquareProps = {
  isHovered: boolean;
  onMouseEnter: () => void;
};

export const Square: React.FC<SquareProps> = ({ isHovered, onMouseEnter }) => {
  return (
    <div
      className={`h-12 w-12 border-r border-t border-black transition-colors ease-popup ${isHovered ? "bg-primary-500" : ""}`}
      onMouseEnter={onMouseEnter}
    />
  );
};
