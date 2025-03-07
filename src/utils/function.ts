import { Cell } from "../model/cell.model";
import { CellCoords, GridType } from "./types";

export const getSurroundingCellCoords = (cell: CellCoords): CellCoords[] => {
  return [
    { x: cell.x - 1, y: cell.y },
    { x: cell.x + 1, y: cell.y },
    { x: cell.x, y: cell.y - 1 },
    { x: cell.x, y: cell.y + 1 },
    { x: cell.x - 1, y: cell.y - 1 },
    { x: cell.x + 1, y: cell.y - 1 },
    { x: cell.x - 1, y: cell.y + 1 },
    { x: cell.x + 1, y: cell.y + 1 },
  ];
};

export const getExistingSurroundingCellCoords = (neighbours: CellCoords[], grid: GridType): CellCoords[] => {
  return neighbours.filter(
    (neighbour) => neighbour.x >= 0 && neighbour.y >= 0 && neighbour.x <= grid.row && neighbour.y <= grid.col
  );
};

// vériifier que le x de surroundingCellCoords est égale au x du livingCells et que que le y de surroundingCellCoords est égale au y du livingCells
const getCellNeighbours = (existingSurroundingCellCoords: CellCoords[], livingCells: CellCoords[]): CellCoords[] =>
  existingSurroundingCellCoords.filter((cellCoord) =>
    livingCells.find((livingCell) => cellCoord.x === livingCell.x && cellCoord.y === livingCell.y)
  );
// vériifier que le x de surroundingCellCoords est égale au x du livingCells et que que le y de surroundingCellCoords est égale au y du livingCells
const existing = (tempGen: CellCoords[], cel: CellCoords): boolean => tempGen.some((nextGen) => nextGen.x === cel.x && nextGen.y === cel.y)

export const livingCell = (livingCells: CellCoords[], grid: GridType): CellCoords[] => {
  const nextGenCells: CellCoords[] = [];
  const tempGen: CellCoords[] = [];

  livingCells.map((cell, index) => {
    const surroundingCellCoords = getSurroundingCellCoords(cell);
    const existingSurroundingCellCoords = getExistingSurroundingCellCoords(surroundingCellCoords, grid);

    // voir si le voisin est viavnt ou non
    const cellNeighbours = getCellNeighbours(existingSurroundingCellCoords, livingCells);

    if (cellNeighbours.length === 2 || cellNeighbours.length === 3) nextGenCells.push(cell);

    if (cellNeighbours.length >= 2) {
      let difference = surroundingCellCoords.filter((x) => cellNeighbours.indexOf(x) < 0);
      difference.map((cell, index) => {
        // const deadCell = getSurroundingCellCoords(cell).length;
        const deadCell = getExistingSurroundingCellCoords(getSurroundingCellCoords(cell), grid)
        const deadCellNeigbours = getCellNeighbours(deadCell, livingCells);

        if (deadCellNeigbours.length === 3) {
          if (!existing(tempGen, cell)) {
            nextGenCells.push(cell);
            tempGen.push(cell);
          }
        }
      });
    }
  });

  livingCells = nextGenCells
  return nextGenCells;
};
// - Si dans les voisines ça vie
// - Meurt si moins de 2 voisines ou plus 3 de voisines
// - Spawn si exactement 3 voisines
// - Reste vivante si 2 ou 3 voisines exactement

// - passer en parametre de la fonction un tab des cellules vivantes
// - pour chaque cellules qui vie regarder ses voisins
// - verifie s'il vie ou s'il meurt ou s'il créer une nouvelle vie

export const nextGenLoop = (livingCells: CellCoords[], grid: GridType): CellCoords[] => {
  // do {

  const nextGenCells: CellCoords[] = livingCells;

  livingCells.forEach((cells, index) => {
    const surroundingCellCoords = getSurroundingCellCoords(cells);
    const existingSurroundingCellCoords = getExistingSurroundingCellCoords(surroundingCellCoords, grid);

    const cellNeighbours = getCellNeighbours(existingSurroundingCellCoords, nextGenCells);

    if (cellNeighbours.length < 2 || cellNeighbours.length > 3) {
      nextGenCells.splice(index, 1);
    }

    if (cellNeighbours.length === 3) {
      nextGenCells.push({ x: cells.x + 1, y: cells.y + 1 });
    }
  });

  return nextGenCells;
  // } while (livingCells != [])
};

export function cellLive(cellule: CellCoords): boolean {
  return true;
}

export function cellDie(cellule: CellCoords): boolean {
  return true;
}

export function cellHasLessThanTwoNeighbours(cellule: CellCoords): boolean {
  return true;
}

export function checkWhereToAddCell(cellule: CellCoords): string {
  return "left";
}

export function fillCell(cellule: CellCoords, color: string) { }

export function emptyCell(): boolean {
  return true;
}
