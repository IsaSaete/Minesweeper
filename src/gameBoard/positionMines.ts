import { Board } from "../types.js";

export const placeMines = (board: Board, probability: number = 0.15): void => {
  board.forEach((row) => {
    row.forEach((cell) => {
      if (Math.random() < probability) {
        cell.hasMine = true;
      }
    });
  });
};
