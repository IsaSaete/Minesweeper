import { Board } from "../types.js";

export const positionMines = (
  board: Board,
  probability: number = 0.15
): Board => {
  board.forEach((row) => {
    row.forEach((cell) => {
      if (Math.random() < probability) {
        cell.hasMine = true;
      }
    });
  });

  return board;
};
