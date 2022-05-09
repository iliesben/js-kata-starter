import React, { useState } from "react";
import styled from "styled-components";
import { livingCell } from "../utils/function";
import { CellCoords, GridType } from "../utils/types";
import { Button } from "./Button";
import { Grid } from "./Grid";
import { Input } from "./Input";

export const Game = () => {
  const [cell, setCell] = useState<CellCoords[]>([])
  const lunchGame = () => setCell(livingCell(cell, grid))

  const [grid, setGrid] = useState<GridType>({
    row: 5,
    col: 5
  });

  const handleGridChange = (axe: keyof GridType, value: string | number | null | undefined ) => {
    if(value) setGrid({...grid, [axe]: Number(value)})
  }

  const handleGetCoords = (coords: CellCoords) => setCell([...cell, coords])

  return (
    <Container>
      <InputContainer>
        <Input type="number" label="Colonne :" onChange={(value) => handleGridChange('col', value)} value={grid.col} />
        <Input type="number" label="Ligne :" onChange={(value) => handleGridChange('row', value)} value={grid.row} />
      </InputContainer>
      <GameContainer>
        <Button label="Lance le jeu" onClick={lunchGame} />
        <Grid row={grid.row} col={grid.col} getCoords={handleGetCoords} firstGen={cell} />
      </GameContainer>
    </Container>
  );
}

const Container = styled.div`
  font-family: Helvetica, sans-serif;
  padding: 2rem;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 1rem;
`;

const GameContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
