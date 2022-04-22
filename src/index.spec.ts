// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import {
  getInitialGrid,
  emptyCell,
  cellHasMoreThanThreeNeighbours,
  cellHasLessThanTwoNeighbours,
  checkWhereToAddCell,
} from "./utils/function";
expect.extend(matchers);

it("That's a test!", function () {
  expect(1 + 1).toEqual(2);
});

it("jest-extended is included", function () {
  expect([1, 0]).toIncludeSameMembers([0, 1]);
});

it("add cell", function () {
  const pos = "left";
  const cellule = { x: 0, y: 0, color: "white" as const };

  if (checkWhereToAddCell(cellule) === pos) {
    cellule.x += 10;
    cellule.y += 10;
  }

  expect([1, 0]).toIncludeSameMembers([0, 1]);
});

it("remove cell", function () {
  const cellule = { x: 0, y: 0, color: "white" as const };
  if (cellHasLessThanTwoNeighbours(cellule) || cellHasMoreThanThreeNeighbours(cellule)) {
    cellule.x -= 10;
    cellule.y -= 10;
  }

  expect([1, 0]).toIncludeSameMembers([0, 1]);
});

it("fill cell with right color", function () {
  expect([1, 0]).toIncludeSameMembers([0, 1]);
});

it("have one neighbour", function () {
  expect([1, 0]).toIncludeSameMembers([0, 1]);
});

it("have two neighbour", function () {
  expect([1, 0]).toIncludeSameMembers([0, 1]);
});

it("have three neighbour", function () {
  expect([1, 0]).toIncludeSameMembers([0, 1]);
});

it("cell empty have three neighbour", function () {
  expect([1, 0]).toIncludeSameMembers([0, 1]);
});

it("have more than three neighbour", function () {
  expect([1, 0]).toIncludeSameMembers([0, 1]);
});

it("add cell to left", function () {
  expect([1, 0]).toIncludeSameMembers([0, 1]);
});

it("add cell to right", function () {
  expect([1, 0]).toIncludeSameMembers([0, 1]);
});

it("add cell to top", function () {
  expect([1, 0]).toIncludeSameMembers([0, 1]);
});

it("add cell to bottom", function () {
  expect([1, 0]).toIncludeSameMembers([0, 1]);
});

it("empty cell", function () {
  expect([1, 0]).toIncludeSameMembers([0, 1]);
});
