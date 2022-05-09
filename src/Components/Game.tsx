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
    row: 15,
    col: 15,
  });

  const [speed, setSpeed] = useState(0.5);

  const [launchedGame, setLaunchedGame] = useState(false);

  useEffect(() => {
    if(cell.length === 0) setLaunchedGame(false)
    if(launchedGame){
      const interval = setInterval(() => setCell(livingCell(cell, grid)), speed * 1000)
      return () => clearInterval(interval);
    }
}, [launchedGame, cell]);

  const handleGridChange = (axe: keyof GridType, value: string | number | null | undefined) => {
    if (value) setGrid({ ...grid, [axe]: Number(value) });
  };

  const handleSpeed = (value: number) => setSpeed(value)

  const handleGetCoords = (coords: CellCoords[]) => setCell(coords)

  // game, start and game end -> state that stop click on grid and button when game is lunched
  return (
    <>

    <Container $pointerEvent={launchedGame}>
      <InputContainer>
        <Input type="number" label="Colonne :" onChange={(value) => handleGridChange("col", value)} value={grid.col} />
        <Input type="number" label="Ligne :" onChange={(value) => handleGridChange("row", value)} value={grid.row} />
        <Input type="number" label="Vitesse :" onChange={handleSpeed} value={speed} />
      </InputContainer>
      <GameContainer>
        <p>Le jeu est {launchedGame ? "lancé" : !launchedGame && cell.length === 0 ? "terminé ma couille" : "arreté"}</p>
        <Button label="Lance le jeu" onClick={() => setLaunchedGame(true)} />
        <Grid row={grid.row} col={grid.col} getCoords={handleGetCoords} firstGen={cell} />
      </GameContainer>
    </Container>
    <ButtonContainer>
      <Button label="Arreter le jeu" onClick={() => setLaunchedGame(false)} />
    </ButtonContainer>
    </>
  );
};

const Container = styled.div<{ $pointerEvent: boolean }>`
  font-family: Helvetica, sans-serif;
  padding: 2rem;
  padding-bottom: 0rem;
  pointer-events: ${({ $pointerEvent }) => $pointerEvent && "none"};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 1rem;
`;

const GameContainer = styled.div`
  padding-block: 2rem;
  padding-bottom: 0rem;
  display: flex;
  gap: .35rem;
  flex-direction: column;
  align-items: center;
`;
