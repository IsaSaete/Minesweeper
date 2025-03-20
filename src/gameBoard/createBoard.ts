import { createRow } from "./createRow.js";
import { Board } from "../types.js";

export const createBoard = (size: number): Board => {
  const rows = size;
  const columns = size;

  const board: Board = [];

  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    const row = createRow(columns);
    board.push(row);
  }

  return board;
};
