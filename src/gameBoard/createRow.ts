import { Row } from "../types";
import { createCell } from "../data";

export const createRow = (columns: number): Row => {
  const row: Row = [];

  if (columns < 3) {
    throw new Error("¡Error 406:tamaño no aceptado! Elige un tamaño mayor");
  }

  for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
    row.push(createCell);
  }

  return row;
};
