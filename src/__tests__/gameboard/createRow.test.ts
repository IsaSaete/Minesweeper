import { createRow } from "../gameBoard/createRow";
import { Cell } from "../types";

describe("Given the createRow funcion", () => {
  describe("When it recibes 3", () => {
    test("Then it should return [Cell,Cell,Cell]", () => {
      const columns = 3;
      const expectedResult = [
        {
          hasMine: false,
          adjacentMinesTotal: 0,
          isOpen: false,
        },
        {
          hasMine: false,
          adjacentMinesTotal: 0,
          isOpen: false,
        },
        {
          hasMine: false,
          adjacentMinesTotal: 0,
          isOpen: false,
        },
      ];

      const actualResult = createRow(columns);

      expect(actualResult).toStrictEqual(expectedResult);
    });
  });
});
