import { getAdjacentMinesNumber } from "./getAdjacentMinesNumber.js";
import { Board } from "../../types.js";

export const setAdjacentMinesTotal = (board: Board): Board => {
  board.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      if (!cell.hasMine) {
        cell.adjacentMinesTotal = getAdjacentMinesNumber(
          rowIndex,
          columnIndex,
          board
        );
      }
    });
  });

  return board;
};
