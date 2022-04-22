import { Cell } from "../model/cell.model";

export function getInitialGrid() {}

export function emptyCell(): boolean {
  return true;
}

export function cellHasMoreThanThreeNeighbours(cellule: Cell): boolean {
  return true;
}

export function cellHasLessThanTwoNeighbours(cellule: Cell): boolean {
  return true;
}

export function cellHasTwoNeighbours(cellule: Cell): boolean {
  return true;
}

export function cellHasThreeNeighbours(cellule: Cell): boolean {
  return true;
}

export function checkWhereToAddCell(cellule: Cell): string {
  return "left";
}

export function fillCell(cellule: Cell, color: string) {}
