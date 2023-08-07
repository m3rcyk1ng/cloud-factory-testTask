import { IQuote } from '../../utils/interfaces';

export interface ITableProps {
  data: IQuote[];
  selectedQuote: (name: string) => void;
}