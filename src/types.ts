export type Cell = {
  hasMine: boolean;
  adjacentMinesTotal: number;
  isOpen: boolean;
  columnIndex: number;
  rowIndex?: number;
};

export type Row = Cell[];

export type Board = Row[];
