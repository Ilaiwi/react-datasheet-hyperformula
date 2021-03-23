import React, { createContext, useEffect, useRef } from "react";
import HyperFormula from "hyperformula";
import { useUpdate } from "react-use";

export const Context = createContext({
  data: [],
  onDataChange: () => {},
  dimensions: { width: 0, height: 0 }
});

const options = {
  precisionRounding: 4,
  licenseKey: "agpl-v3"
};

function buildHf(data, options) {
  return HyperFormula.buildFromArray(
    data.map((i) => i.map((x) => x.value)),
    options
  );
}

function getHfValues(hf) {
  const calculated = hf.getSheetValues(0);
  const formulas = hf.getSheetFormulas(0);
  return calculated.map((y, yIndex) =>
    y.map((x, xIndex) => {
      return { expr: formulas[yIndex][xIndex], value: x };
    })
  );
}

const Provider = ({ initData = [], children }) => {
  const forceUpdate = useUpdate();
  const hfRef = useRef(buildHf(initData, options));
  const data = getHfValues(hfRef.current);
  const handleCellsChanged = (changes) => {
    hfRef.current.batch(() => {
      changes.forEach(({ row, col, value }) => {
        hfRef.current.setCellContents({ col: col, row: row, sheet: 0 }, [
          [value]
        ]);
      });
    });
  };
  useEffect(() => {
    hfRef.current.on("valuesUpdated", forceUpdate);
  }, []);
  return (
    <Context.Provider
      value={{
        data: data,
        onCellsChanged: handleCellsChanged,
        dimensions: hfRef.current.getSheetDimensions(0)
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
