import { createBoard } from "./gameBoard/createBoard.js";
import { placeMines } from "./gameBoard/positionMines.js";

const gameBoard = createBoard(6, 6);
placeMines(gameBoard);
