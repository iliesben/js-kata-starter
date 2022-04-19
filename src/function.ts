import { Cell } from "./model/cell.model"

export function getInitialGrid() {
}

export function emptyCell(): boolean {
    return true
}

export function cellHaveMoreThanThreeNeighbour(cellule: Cell): boolean {
    return true
}

export function cellHaveOneNeighbour(cellule: Cell): boolean {
    return true
}

export function checkWhereToAddCell(cellule: Cell): string {
    return "left"
}

export function fillCell(cellule: Cell, color: string) {

}