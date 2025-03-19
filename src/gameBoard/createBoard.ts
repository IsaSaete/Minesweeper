import { createRow } from "./createRow";
import { Board } from "../types";

export const createBoard = (rows: number, columns: number): Board => {
  const board: Board = [];

  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    const newRow = createRow(columns);
    board.push(newRow);
  }

  return board;
};
