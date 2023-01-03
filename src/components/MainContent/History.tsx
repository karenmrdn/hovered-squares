import React from "react";

import { HistoryItem } from "models";

type HistoryProps = {
  currDiffLvlValue: number;
  history: HistoryItem[];
};

export const History: React.FC<HistoryProps> = ({ currDiffLvlValue, history }) => {
  return (
    <div className="max-w-xs">
      <h2 className="mb-2 font-bold">History</h2>
      <div className={`flex max-h-${currDiffLvlValue}-squares flex-col gap-2 overflow-y-auto overflow-x-clip`}>
        {history.length > 0
          ? history.map((historyItem) => (
              <p
                key={historyItem.id}
                className="max-w-[160px] animate-slide-in rounded border border-secondary bg-primary-100 p-2 text-xs font-bold text-secondary"
              >
                {historyItem.value}
              </p>
            ))
          : "No hovered squares yet"}
      </div>
    </div>
  );
};
