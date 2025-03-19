import { Board, Row } from "./types";
import { createCell } from "./data";

export const createRow = (columns: number): Row => {
  const row: Row = [];

  if (columns < 8) {
    throw new Error("¡Error 406:tamaño no aceptado! Elige un tamaño mayor");
  }

  for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
    row.push(createCell);
  }

  return row;
};

export const createBoard = (rows: number, columns: number): Board => {
  const board: Board = [];

  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    const row = createRow(columns);
    board.push(row);
  }

  return board;
};
