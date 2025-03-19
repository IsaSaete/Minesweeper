import { createBoard } from "../gameBoard/createBoard";

describe("Given the createBoard function", () => {
  describe("When it recibes 3,3", () => {
    test("Then it should return [Cell,Cell,Cell], [Cell,Cell,Cell], [Cell,Cell,Cell]", () => {
      const rows = 3;
      const columns = 3;
      const expectedResult = [
        [
          { hasMine: false, adjacentMinesTotal: 0, isOpen: false },
          { hasMine: false, adjacentMinesTotal: 0, isOpen: false },
          { hasMine: false, adjacentMinesTotal: 0, isOpen: false },
        ],
        [
          { hasMine: false, adjacentMinesTotal: 0, isOpen: false },
          { hasMine: false, adjacentMinesTotal: 0, isOpen: false },
          { hasMine: false, adjacentMinesTotal: 0, isOpen: false },
        ],
        [
          { hasMine: false, adjacentMinesTotal: 0, isOpen: false },
          { hasMine: false, adjacentMinesTotal: 0, isOpen: false },
          { hasMine: false, adjacentMinesTotal: 0, isOpen: false },
        ],
      ];

      const actualResult = createBoard(rows, columns);

      expect(actualResult).toStrictEqual(expectedResult);
    });
  });
});
