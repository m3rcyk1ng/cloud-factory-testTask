export const getPriceChange = (high: number, markPrice: number) => {
  return Number(
    (((markPrice - high) / high) * 100).toFixed(2),
  );
}