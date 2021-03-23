import { useContext, useState } from "react";
import ReactDataSheet from "react-datasheet";
import "react-datasheet/lib/react-datasheet.css";
import { Context } from "./Provider";
import { colName } from "./utils";

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
        sheetRenderer={(props) => (
          <table className={props.className + " my-awesome-extra-class"}>
            <thead>
              <tr>
                <th />
                {new Array(dimensions.width)
                  .fill(undefined)
                  .map((col, index) => (
                    <th>{colName(index)}</th>
                  ))}
              </tr>
            </thead>
            <tbody>{props.children}</tbody>
          </table>
        )}
        rowRenderer={(props) => (
          <tr>
            <td>{props.row}</td>
            {props.children}
          </tr>
        )}
        cellRenderer={(props) => {
          console.log(props);
          return <td {...props} />;
        }}
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
