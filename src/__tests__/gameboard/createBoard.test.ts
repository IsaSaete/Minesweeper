import { createBoard } from "../../gameBoard/createBoard";

describe("Given the createBoard function", () => {
  describe("When it recibes 3,3", () => {
    test("Then it should return the number of rows and columns of the board", () => {
      const rows = 3;
      const columns = 3;
      const expectedResult = 3;

      const actualResult = createBoard(rows, columns).length;

      expect(actualResult).toBe(expectedResult);
    });
  });
});
