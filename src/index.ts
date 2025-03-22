import { createBoard } from "./gameBoard/board/factory/createBoard.js";
import { getRandomPositionMines } from "./gameBoard/mines/getPositionMines.js";

const gameBoard = createBoard(6);
getRandomPositionMines(gameBoard);
