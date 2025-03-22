import { Board } from "../../../types";

export const renderBoard = (board: Board): void => {
  const boardContainerElement = document.querySelector(".board-container");

  if (!boardContainerElement) {
    throw new Error("No existe el elemento boardCoainter");
  }

  const boardElement = document.createElement("ul");
  boardElement.className = "board";

  board.forEach((row) => {
    row.forEach((cell) => {
      const cellElement = document.createElement("button");
      cellElement.className = "cell";

      const listElement = document.createElement("li");
      listElement.className = "cells";
      listElement.appendChild(cellElement);
      boardElement.appendChild(listElement);
    });
  });

  boardContainerElement.appendChild(boardElement);
};
