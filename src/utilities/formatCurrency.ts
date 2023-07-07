const currencyFormatter = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export const formatCurrency = (number: number): string => {
  return currencyFormatter.format(number);
};
