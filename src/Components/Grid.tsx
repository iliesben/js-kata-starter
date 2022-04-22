import React from "react";
import styled from "styled-components";
import { Cell } from "./Cell";
interface GridProps {
  row?: number;
  col?: number;
  started?: Readonly<[number, number]>;
}

export const Grid = (props: GridProps) => {

  const { row = 50, col = 50 } = props;

  const rows = Array(row).fill(0);
  const cols = Array(col).fill(0);

  return (
    <Container>
      <table>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
              {cols.map((column, colIndex) => (
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
