export const getPriceChange = (high: number, markPrice: number) =>
  Number((((markPrice - high) / high) * 100).toFixed(2));
