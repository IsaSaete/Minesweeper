import { getAdjacentMinesNumber } from "../getAdjacentMinesNumber";
import { createBoard } from "../../board/factory/createBoard";

describe("Given the getAdjacentMinesNumber function", () => {
  describe("When you receive a board without mines and the position of a cell", () => {
    test("Then it should return that the number of adjacent mines is 0.", () => {
      const boardWithoutMines = createBoard(3);
      const rowIndex = 2;
      const columnIndex = 2;

      const adjacentMinesTotal = getAdjacentMinesNumber(
        rowIndex,
        columnIndex,
        boardWithoutMines
      );

      expect(adjacentMinesTotal).toBe(0);
    });
  });
});

describe("Given the getAdjacentMinesNumber function", () => {
  describe("When you receive a board and the position of a cell with an adjacent mine", () => {
    test("Then it should return that the number of adjacent mines is 1.", () => {
      const board = createBoard(3);
      const rowIndex = 2;
      const columnIndex = 2;
      board[rowIndex][columnIndex].hasMine = true;

      const adjacentMinesTotal = getAdjacentMinesNumber(1, 2, board);

      expect(adjacentMinesTotal).toBe(1);
    });
  });
});
