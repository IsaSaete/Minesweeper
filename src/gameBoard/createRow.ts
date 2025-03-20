import { Row, Cell } from "../types.js";

export const createRow = (columns: number): Row => {
  if (columns < 3) {
    throw new Error("¡Elige un tamaño mayor!");
  }

  const row: Row = [];

  for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
    const cell: Cell = {
      hasMine: false,
      adjacentMinesTotal: 0,
      isOpen: false,
    };

    row.push(cell);
  }

  return row;
};
