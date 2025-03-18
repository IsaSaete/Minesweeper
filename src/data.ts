import { Cell } from "./types.js";
import { Board } from "./types.js";

const boardCell: Cell = {
  status: "closed",
  hasMine: false,
  adjacentMinesTotal: 0,
};

const gameBoard: Board = {
  rowsTotal: 9,
  columnsTotal: 9,
};
