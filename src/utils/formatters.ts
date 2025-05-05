export const formatNumberToCurrency = (
  number: number,
  currency: {
    locale: Intl.LocalesArgument;
    currency: string;
  }
) => {
  return new Intl.NumberFormat(currency.locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: "currency",
    currency: currency.currency,
  }).format(number);
};
