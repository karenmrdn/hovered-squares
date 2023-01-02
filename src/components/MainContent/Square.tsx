import React from "react";

type SquareProps = {
  isHovered: boolean;
  onMouseEnter: () => void;
  selectedDiffLvlValue: number;
};

export const Square: React.FC<SquareProps> = ({ isHovered, onMouseEnter, selectedDiffLvlValue }) => {
  return (
    <div
      className={`h-${selectedDiffLvlValue}-squares w-${selectedDiffLvlValue}-squares border-r border-t border-black transition-colors ease-popup ${
        isHovered ? "bg-primary-500" : ""
      }`}
      onMouseEnter={onMouseEnter}
    />
  );
};
