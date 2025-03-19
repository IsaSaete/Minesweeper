import { createBoard } from "./gameBoard/createBoard";
import { placeMines } from "./gameBoard/positionMines";

const gameBoard = createBoard(6, 6);
placeMines(gameBoard);
