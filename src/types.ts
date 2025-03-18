export type Cell = {
  status: "open" | "closed";
  hasMine: boolean;
  adjacentMinesTotal: number;
};
export type Board = {
  rowsTotal: number;
  columnsTotal: number;
};
