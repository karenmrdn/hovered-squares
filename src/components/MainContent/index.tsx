import { useState, useMemo } from "react";
import ReactSelect, { ActionMeta, SingleValue } from "react-select";

import { SelectOption } from "models";

import { Button } from "../Button";
import { Square } from "./Square";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const FIELD = 5;

// TODO: https://react-select.com/async

export const MainContent = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [hoveredSquares, setHoveredSquares] = useState<number[]>([]);
  const [history, setHistory] = useState<{ id: string; value: string }[]>([]);
  // TODO: pass size of a field in both array length and dependencies array
  const arrOfSquares = useMemo(() => [...new Array(FIELD * FIELD)], []);

  const handleChange = (newValue: SingleValue<SelectOption>, actionMeta: ActionMeta<SelectOption>) => {
    setSelectedOption(newValue as SelectOption);
  };

  const handleMouseEnter = (index: number) => {
    const hoveredSquareRow = Math.ceil((index + 1) / FIELD);
    const hoveredSquareCol = index - FIELD * (hoveredSquareRow - 1) + 1;
    setHistory((prev) => [
      { id: window.crypto.randomUUID(), value: `row ${hoveredSquareRow}, col ${hoveredSquareCol}` },
      ...prev,
    ]);

    setHoveredSquares((prev) => {
      const prevCopy = [...prev];
      const currentSquareIndexInArr = prevCopy.indexOf(index);

      if (currentSquareIndexInArr === -1) {
        prevCopy.push(index);
      } else {
        prevCopy.splice(currentSquareIndexInArr, 1);
      }

      return prevCopy;
    });
  };

  return (
    <main className="mx-auto min-h-screen70 max-w-3xl px-4">
      <h1 className="mb-4 text-xl font-bold">Hover over squares!</h1>
      <main className="grid grid-cols-squares-board gap-6">
        <div>
          <div className="mb-4 flex items-center gap-4">
            <ReactSelect value={selectedOption} options={options} onChange={handleChange} />
            <Button title="Start" />
          </div>
          <div className="grid grid-cols-squares-board items-start gap-4">
            <div className="grid grid-cols-5 border-l border-b border-black">
              {arrOfSquares.map((_, index) => (
                <Square key={index} isHovered={hoveredSquares.includes(index)} onMouseEnter={() => handleMouseEnter(index)} />
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-xs">
          <h2 className="mb-2 font-bold">History</h2>
          <div className="flex max-h-64 flex-col gap-2 overflow-auto">
            {history.length > 0
              ? history.map((historyItem) => (
                  <p
                    key={historyItem.id}
                    // eslint-disable-next-line max-len
                    className="max-w-[160px] animate-slide-in rounded border border-secondary bg-primary-100 p-2 text-xs font-bold text-secondary"
                  >
                    {historyItem.value}
                  </p>
                ))
              : "No hovered squares yet"}
          </div>
        </div>
      </main>
    </main>
  );
};
