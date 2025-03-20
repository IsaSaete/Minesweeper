import { createBoard } from "./gameBoard/createBoard.js";
import { positionMines } from "./gameBoard/positionMines.js";

const gameBoard = createBoard(6, 6);
positionMines(gameBoard);
