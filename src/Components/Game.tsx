import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { livingCell, nextGenLoop } from "../utils/function";
import { CellCoords, GridType } from "../utils/types";
import { Button } from "./Button";
import { Grid } from "./Grid";
import { Input } from "./Input";

export const Game = () => {
  const [cell, setCell] = useState<CellCoords[]>([
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 2, y: 2 },
    { x: 4, y: 0 },
  ]);

  const [grid, setGrid] = useState<GridType>({
    row: 5,
    col: 5,
  });

  const [luchedGame, setLunchedGame] = useState(false);

  const lunchGame = () => {
    setLunchedGame(true);
    // setCell(livingCell(cell, grid))
    setInterval(() => setCell(livingCell(cell, grid)), 2000);
  };

  const handleGridChange = (axe: keyof GridType, value: string | number | null | undefined) => {
    if (value) setGrid({ ...grid, [axe]: Number(value) });
  };

  const handleGetCoords = (coords: CellCoords) => setCell([...cell, coords]);

  // game, start and game end -> state that stop click on grid and button when game is lunched
  return (
    <Container $pointerEvent={luchedGame}>
      <InputContainer>
        <Input type="number" label="Colonne :" onChange={(value) => handleGridChange("col", value)} value={grid.col} />
        <Input type="number" label="Ligne :" onChange={(value) => handleGridChange("row", value)} value={grid.row} />
      </InputContainer>
      <GameContainer>
        <Button label="Lance le jeu" onClick={lunchGame} />
        <Grid row={grid.row} col={grid.col} getCoords={handleGetCoords} firstGen={cell} />
      </GameContainer>
    </Container>
  );
};

const Container = styled.div<{ $pointerEvent: boolean }>`
  font-family: Helvetica, sans-serif;
  padding: 2rem;
  pointer-events: ${({ $pointerEvent }) => $pointerEvent && "none"};
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 1rem;
`;

const GameContainer = styled.div`
  padding-block: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
