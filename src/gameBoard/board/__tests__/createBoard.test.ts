import { createBoard } from "../factory/createBoard";

describe("Given the createBoard function", () => {
  describe("When it receive 3", () => {
    test("Then you should give us back the size of the board which is 3", () => {
      const size = 3;
      const boardExpectedLength = 3;

      const boardLength = createBoard(size).length;

      expect(boardLength).toBe(boardExpectedLength);
    });
  });
});
