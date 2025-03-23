import { Board } from "../../../types.js";

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
        cellElement.innerHTML = `<img class="hidden mine-black" src="/images/mine_black.svg" 
        alt="Icono de una bomba del juego minesweeper" width=38" height="38">`;

        const imageCellElement = cellElement.querySelector(".hidden");

        cellElement.addEventListener("click", () => {
          if (imageCellElement) {
            imageCellElement.classList.remove("hidden");
          }
        });
      }

      if (!cell.hasMine) {
        const adjacentMinesTotalElement = document.createElement("span");
        adjacentMinesTotalElement.textContent =
          cell.adjacentMinesTotal.toString();
        adjacentMinesTotalElement.className = "hidden";
        cellElement.appendChild(adjacentMinesTotalElement);

        cellElement.addEventListener("click", () => {
          adjacentMinesTotalElement.classList.remove("hidden");
        });
      }

      const listElement = document.createElement("li");
      listElement.appendChild(cellElement);

      boardElement.appendChild(listElement);
    });
  });

  boardContainerElement.appendChild(boardElement);
};
