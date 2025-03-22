import { Row, Cell } from "../../../types.js";

export const createRow = (size: number): Row => {
  if (size < 3) {
    throw new Error("¡Elige un tamaño mayor!");
  }

  const row: Row = [];

  for (let columnIndex = 0; columnIndex < size; columnIndex++) {
    const cell: Cell = {
      hasMine: false,
      adjacentMinesTotal: 0,
      isOpen: false,
    };

    row.push(cell);
  }

  return row;
};
