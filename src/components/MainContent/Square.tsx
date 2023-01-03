import React from "react";
import classNames from "classnames";

type SquareProps = {
  isHovered: boolean;
  onMouseEnter: () => void;
  selectedDiffLvlValue: number;
};

export const Square: React.FC<SquareProps> = ({ isHovered, onMouseEnter, selectedDiffLvlValue }) => {
  return (
    <div
      className={classNames(
        `h-${selectedDiffLvlValue}-squares w-${selectedDiffLvlValue}-squares border-r border-t border-black transition-colors ease-popup`,
        { "bg-primary-500": isHovered }
      )}
      onMouseEnter={onMouseEnter}
    />
  );
};
