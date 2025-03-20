import { createRow } from "../createRow";

describe("Given the createRow funcion", () => {
  describe("When it recibes 3", () => {
    test("Then it should return the number of rows of the board", () => {
      const columns = 3;
      const expectedResult = 3;
      const actualResult = createRow(columns).length;

      expect(actualResult).toBe(expectedResult);
    });
  });
});
