import React, { TdHTMLAttributes } from "react";
import styled from "styled-components";
import { Cell } from "./Cell";
import { CellCoords } from "../utils/types";
import { livingCell, nextGenLoop } from "../utils/function";
interface GridProps {
  row?: number;
  col?: number;
  firstGen: CellCoords[];

  getCoords: (coords: CellCoords) => void;
}

export const Grid = (props: GridProps) => {
  const { row = 50, col = 50, firstGen } = props;

  const selectedCell = (x: number, y: number) => {
    return props.getCoords({ x, y });
  };

  return (
    <Container>
      <table>
        <tbody>
          {Array(row)
            .fill(null)
            .map((row, rowIndex) => (
              <tr key={`col-${rowIndex}`}>
                {Array(col)
                  .fill(null)
                  .map((col, colIndex) => (
                    <td key={`row-${colIndex}`} onClick={(e) => selectedCell(colIndex, rowIndex)}>
                      {firstGen.map(
                        (cell) =>
                          cell.x === colIndex &&
                          cell.y === rowIndex && <Cell key={`${cell.x}-${cell.y}`} color="black" />
                      )}
                    </td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  table {
    margin: 1em 0;
  }
  td {
    border: 1px solid #a0a0a0;
    height: 2rem;
    width: 2rem;
    padding: 1px;
  }
`;

// <tbody>
//           {rows.map((row, rowIndex) => (
//             <tr key={`row-${rowIndex}`}>
//               {console.log('row === rowIndex:', row !== null)}

//               {/* {console.log('rowIndex:', rowIndex)}
//               {console.log('row:', row)} */}
//               {cols.map((col, colIndex) => (
//                 <td key={`col-${colIndex}`}>
//                     {/* {row === rowIndex && col === colIndex ? <Cell color="black" /> : <Cell /> }
//                     {console.log('row :', row, ' ',  row === rowIndex, ' rowIndex ', rowIndex)} */}
//                     {/* {console.log('row : ', row, ' = ', row !== null && col !== null, " = col", col)} */}
//                     {/* <Cell x={row} y={col} /> */}
//                     {/* {row === colIndex ? row : ""}
//                     {console.log('colIndex:', colIndex, ' ' , row , ': row')} */}
//                     {/* {firstGen[colIndex] && firstGen[colIndex].x === colIndex ? "1" : ""}
//                     {console.log('{firstGen[colIndex]', firstGen[colIndex] && firstGen[colIndex].x === colIndex)}
//                   {console.log('firstGen[colIndex].x:', firstGen[colIndex].x)} */}
//                   {/* {props.started && props.started[0] === rowIndex && props.started[1] === colIndex ? ( */}

//                   {/* {console.log('rows[colIndex]:', rows[colIndex])} */}
//                   {/* colIndex = 0 */}

//                   {/* {cols[colIndex] === colIndex && <Cell x={row} y={col} color="black" />} */}

//                   {/* {(cols.includes(rowIndex) && rows.includes(colIndex)) && <Cell x={row} y={col} color="black" />} */}
//                   {rows.includes(colIndex) && <Cell x={row} y={col} color="black" />}

//                   {/* {row === colIndex && <Cell x={row} y={col} color="black" />} */}

//                   {/* {console.log('col:', col, 'colIndex:', colIndex, "===", col === colIndex)} */}
//                   {/* {console.log('row:', row, 'colIndex:', colIndex, "===", row === colIndex,)} */}

//                   {/* {console.log('row:', row)}
//                   {console.log('col:', col)} */}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
