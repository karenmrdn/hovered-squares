import { useState, useMemo } from "react";
import ReactSelect, { ActionMeta, SingleValue } from "react-select";

import Button from "./Button";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

// TODO: https://react-select.com/async

const MainContent = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [hoveredSquares, setHoveredSquares] = useState<number[]>([]);
  // TODO: pass size of a field in both array length and dependencies array
  const arrOfSquares = useMemo(() => [...new Array(25)], []);

  const handleChange = (
    newValue: SingleValue<{ value: string; label: string }>,
    actionMeta: ActionMeta<{ value: string; label: string }>
  ) => {
    setSelectedOption(newValue as { value: string; label: string });
  };

  const handleMouseEnter = (index: number) =>
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

  return (
    <main className="mx-auto h-screen max-w-3xl p-4">
      <h1 className="mb-4 text-xl font-bold">Hover over squares!</h1>
      <div className="mb-4 flex items-center gap-4">
        <ReactSelect value={selectedOption} options={options} onChange={handleChange} />
        <Button title="Start" />
      </div>
      <div className="grid grid-cols-squares-board gap-4">
        <div className="grid grid-cols-5 border-l border-b border-black">
          {arrOfSquares.map((_, index) => (
            <div
              className={`h-12 w-12 border-r border-t border-black ${hoveredSquares.includes(index) ? "bg-primary-500" : ""}`}
              onMouseEnter={() => handleMouseEnter(index)}
            />
          ))}
        </div>
        <div>
          <h2>History</h2>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
