import { Row, Cell } from "../types";

export const createRow = (columns: number): Row => {
  const row: Row = [];

  if (columns < 3) {
    throw new Error("¡Error 406:tamaño no aceptado! Elige un tamaño mayor");
  }

  for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
    const newCell: Cell = {
      hasMine: false,
      adjacentMinesTotal: 0,
      isOpen: false,
    };
    row.push(newCell);
  }

  return row;
};
