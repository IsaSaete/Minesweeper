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
      cellElement.ariaLabel = "board cell";
      cellElement.className = "cell";
      if (cell.hasMine === true) {
        cellElement.innerHTML =
          "<img class=mario-mine src=/images/supermario_mine.svg alt=mario-mine width=20 heigth=28>";
      }

      const listElement = document.createElement("li");
      listElement.className = "cells";
      listElement.appendChild(cellElement);
      boardElement.appendChild(listElement);
    });
  });

  boardContainerElement.appendChild(boardElement);
};
