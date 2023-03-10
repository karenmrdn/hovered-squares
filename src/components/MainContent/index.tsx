import { useState, useMemo, useRef } from "react";
import ReactSelect, { ActionMeta, SingleValue } from "react-select";

import { HistoryItem, SelectOption } from "models";
import { useDifficultyLvls } from "hooks";
import { Button } from "components/Button";

import { Square } from "./Square";
import { History } from "./History";

export const MainContent = () => {
  const startBtnRef = useRef() as React.MutableRefObject<HTMLButtonElement>;
  const [hoveredSquares, setHoveredSquares] = useState<{ [key: string]: boolean }>({});
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const { isDiffLvlsLoading, diffLvlOptions, selectedDiffLvl, setSelectedDiffLvl, setCurrDiffLvl, currDiffLvlValue } =
    useDifficultyLvls();

  const arrOfSquares = useMemo(() => [...new Array(currDiffLvlValue * currDiffLvlValue)], [currDiffLvlValue]);

  const handleStart = () => {
    setCurrDiffLvl(selectedDiffLvl);
    setHistory([]);
    setHoveredSquares({});
  };

  const handleDiffLvlChange = (newValue: SingleValue<SelectOption>, actionMeta: ActionMeta<SelectOption>) => {
    setSelectedDiffLvl(newValue as SelectOption);
    startBtnRef.current.focus();
  };

  const handleMouseEnter = (index: number, isHovered: boolean) => {
    const hoveredSquareRow = Math.ceil((index + 1) / currDiffLvlValue);
    const hoveredSquareCol = index - currDiffLvlValue * (hoveredSquareRow - 1) + 1;
    setHistory((prev) => [
      { id: window.crypto.randomUUID(), value: `row ${hoveredSquareRow}, col ${hoveredSquareCol}` },
      ...prev,
    ]);

    setHoveredSquares((prev) => {
      prev[index] = !isHovered;
      return prev;
    });
  };

  return (
    <main className="mx-auto min-h-screen70 max-w-3xl px-4 ">
      <h1 className="mb-4 text-xl font-bold">Hover over squares!</h1>
      <div className="grid grid-cols-squares-board gap-6 sm:grid-cols-1">
        <div>
          <div className="mb-4 flex gap-4">
            {!isDiffLvlsLoading ? (
              <ReactSelect
                value={selectedDiffLvl}
                options={diffLvlOptions}
                onChange={handleDiffLvlChange}
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    minWidth: "120px",
                  }),
                }}
              />
            ) : (
              <div className="min-w-[120px] animate-pulse rounded bg-gray-300 opacity-70" />
            )}
            <Button ref={startBtnRef} title="Start" onClick={handleStart} />
          </div>
          <div className={`grid grid-cols-${currDiffLvlValue} w-fit border-l border-b border-black`}>
            {arrOfSquares.map((_, index) => (
              <Square
                key={index}
                isHovered={hoveredSquares[index]}
                onMouseEnter={() => handleMouseEnter(index, hoveredSquares[index])}
                selectedDiffLvlValue={currDiffLvlValue}
              />
            ))}
          </div>
        </div>
        <History currDiffLvlValue={currDiffLvlValue} history={history} />
      </div>
    </main>
  );
};
