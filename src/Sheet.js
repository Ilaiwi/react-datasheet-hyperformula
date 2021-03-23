import { useContext, useState } from "react";
import ReactDataSheet from "react-datasheet";
import "react-datasheet/lib/react-datasheet.css";
import { Context } from "./Provider";
import { colName } from "./utils";
import { Resizable } from "re-resizable";

const SheetRenderer = (props) => {
  const { dimensions } = useContext(Context);
  return (
    <table className={props.className + " my-awesome-extra-class"}>
      <thead>
        <tr>
          <th />
          {new Array(dimensions.width).fill(undefined).map((col, index) => (
            <th
              style={{
                background: "#f5f5f5",
                border: "1px solid rgb(221, 221, 221)",
              }}
              key={colName(index)}
            >
              <Resizable
                enable={{
                  right: true,
                  bottom: false,
                  left: false,
                  topRight: false,
                  bottomRight: false,
                  bottomLeft: false,
                  topLeft: false,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    height: "100%",
                  }}
                >
                  {colName(index)}
                </div>
              </Resizable>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
};

const RowRenderer = (props) => (
  <tr>
    <td>
      <Resizable
        enable={{
          right: false,
          bottom: true,
          left: false,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false,
        }}
      >
        {props.row}
      </Resizable>
    </td>
    {props.children}
  </tr>
);

const Sheet = () => {
  const { data, onCellsChanged, dimensions } = useContext(Context);
  const [selected, setSelected] = useState();
  return (
    <>
      <ReactDataSheet
        data={data}
        valueRenderer={(cell) => {
          if (typeof cell.value === "object") {
            return cell.value.value;
          } else return cell.value;
        }}
        onCellsChanged={onCellsChanged}
        selected={selected}
        onSelect={setSelected}
        sheetRenderer={SheetRenderer}
        rowRenderer={RowRenderer}
        attributesRenderer={(cell) => ({ colSpan: cell.colSpan || {} })}
      />
      {selected ? (
        <>
          <div>
            {selected.start.i}:{selected.start.j}
          </div>
          <div>
            {selected.end.i}:{selected.end.j}
          </div>
        </>
      ) : null}
    </>
  );
};

export default Sheet;
