import { useEffect, useMemo, useState } from "react";

import { getDifficultyLevels } from "api";
import { DifficultyLevel } from "models";

export const useDifficultyLvls = () => {
  const [difficultyLevels, setDifficultyLevels] = useState<DifficultyLevel[]>([]);
  const diffLvlOptions = useMemo(
    () => difficultyLevels.map((diffLvlItem) => ({ value: diffLvlItem.field, label: diffLvlItem.name })),
    [difficultyLevels]
  );
  const [selectedDiffLvl, setSelectedDiffLvl] = useState(diffLvlOptions[0]);
  const [currDiffLvl, setCurrDiffLvl] = useState(selectedDiffLvl);
  const currDiffLvlValue = currDiffLvl?.value || 5;

  useEffect(() => {
    getDifficultyLevels().then((levels) => {
      if (levels) {
        setDifficultyLevels(levels);
        setSelectedDiffLvl({ value: levels[0].field, label: levels[0].name });
      }
    });
  }, []);

  return {
    diffLvlOptions,
    selectedDiffLvl,
    setSelectedDiffLvl,
    setCurrDiffLvl,
    currDiffLvlValue,
  };
};
