import { createRow } from "../factory/createRow";

describe("Given the createRow funcion", () => {
  describe("When it recibes 3", () => {
    test("Then it should return the length of 3 rows in the board", () => {
      const columnsNumber = 3;

      const row = createRow(columnsNumber).length;

      expect(row).toBe(columnsNumber);
    });
  });
});
