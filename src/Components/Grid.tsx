import React from "react";
import styled from "styled-components";
import { Cell } from "./Cell";
import { CellCoords } from "../utils/types";
import { livingCell } from "../utils/function";
interface GridProps {
  row?: number;
  col?: number;
  started?: Readonly<[number, number]>;
  firstGen: CellCoords[];
}

export const Grid = (props: GridProps) => {
  const { row = 50, col = 50 } = props;
  livingCell(props.firstGen, row);;;

  return (
    <Container>
      <table>
        <tbody>
          {Array(row).map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
              {Array(col).map((column, colIndex) => (
                <td key={`column-${colIndex}`}>
                  {props.started && props.started[0] === rowIndex && props.started[1] === colIndex ? (
                    <Cell color="black" />
                  ) : (
                    <Cell />
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
    height: 1rem;
    width: 1rem;
    padding: 1px;
  }
`;
