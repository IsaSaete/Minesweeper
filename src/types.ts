export type Cell = {
  status: "open" | "closed";
  hasMine: boolean;
  adjacentMinesTotal: number;
};

export type Board = Cell[][];
