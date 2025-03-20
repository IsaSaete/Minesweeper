import { createRow } from "./createRow.js";
import { Board } from "../types.js";

export const createBoard = (rows: number, columns: number): Board => {
  const board: Board = [];

  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    const newRow = createRow(columns);
    board.push(newRow);
  }

  return board;
};
