import { Board } from "../../types.js";

export const getAdjacentMinesNumber = (
  rowIndex: number,
  columnIndex: number,
  board: Board
): number => {
  let adjacentMinesTotal = 0;

  const adjacentOffsets = [
    { rowOffSet: -1, columnOffSet: -1 },
    { rowOffSet: -1, columnOffSet: 0 },
    { rowOffSet: -1, columnOffSet: +1 },
    { rowOffSet: 0, columnOffSet: -1 },
    { rowOffSet: 0, columnOffSet: +1 },
    { rowOffSet: +1, columnOffSet: -1 },
    { rowOffSet: +1, columnOffSet: 0 },
    { rowOffSet: +1, columnOffSet: +1 },
  ];

  adjacentOffsets.forEach((adjacentOffSet) => {
    const adjacentRowPosition = rowIndex + adjacentOffSet.rowOffSet;
    const adjacentColumnPosition = columnIndex + adjacentOffSet.columnOffSet;

    if (
      adjacentRowPosition >= 0 &&
      adjacentRowPosition < board.length &&
      adjacentColumnPosition >= 0 &&
      adjacentColumnPosition < board[adjacentRowPosition].length &&
      board[adjacentRowPosition][adjacentColumnPosition].hasMine
    ) {
      adjacentMinesTotal++;
    }
  });

  return adjacentMinesTotal;
};
