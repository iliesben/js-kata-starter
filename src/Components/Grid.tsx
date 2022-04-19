import React from "react";
import styled from "styled-components";

export const Grid = () => {
  const rows = Array(100).fill(0);
  const columns = Array(100).fill(0);

  return (
    <Container>
      <table>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`row-${index}`}>
              {columns.map((column, index) => (
                <td key={`column-${index}`}>cxxc</td>
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
    border: 1px solid #ddd;
    height: 1em;
    width: 1em;
  }
`;
