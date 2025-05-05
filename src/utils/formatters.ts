export const formatNumberToCurrency = (
  number: number,
  currency: {
    locale: Intl.LocalesArgument;
    currency: string;
  }
) => {
  return new Intl.NumberFormat(currency.locale).format(number);
};
