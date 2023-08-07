export enum QuoteName {
  USDT = 'USDT',
  BTC = 'BTC',
}

export interface IQuote {
  displayName: string;
  high: string;
  amount: string;
  markPrice: string;
  symbol: string;
}
