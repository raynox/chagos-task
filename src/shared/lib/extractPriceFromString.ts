export const extractPriceFromString = (price: string) => {
  const priceMatch = price.match(/\$(\d+)/);
  if (priceMatch && priceMatch[1]) {
    return Number.parseInt(priceMatch[1], 10);
  }

  return 0;
};
