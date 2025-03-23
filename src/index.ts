import { createBoard } from "./gameBoard/board/factory/createBoard.js";
import { getRandomPositionMines } from "./gameBoard/mines/getPositionMines.js";
import { renderBoard } from "./gameBoard/board/ui/renderBoard.js";
import { setAdjacentMinesTotal } from "./gameBoard/mines/setAdjacentMines.js";

const gameBoard = createBoard(8);
const radonmMinesBoard = getRandomPositionMines(gameBoard);

renderBoard(setAdjacentMinesTotal(radonmMinesBoard));
