import axios from "./axiosInstance";

export type DateIsoString = string;
export type Currency = string;

export type ExchangeRateDto = Readonly<{
  institute: number; // 198;
  lastUpdated: DateIsoString; // "2018-11-09T15:07:00Z";
  comparisonDate: DateIsoString; // "2018-11-09T12:45:00Z";
  baseCurrency: Currency; // "EUR";
  fx: Fx[];
}>;

export type Fx = Readonly<{
  currency: Currency; // "MXN",
  precision: number; // 2,
  nameI18N?: string; //"Mexican Peso",
  denominations?: number[];
  exchangeRate?: ExchangeRate;
  banknoteRate?: BanknoteRate;
  flags: string[];
}>;

export type ExchangeRate = Readonly<{
  buy: number; // 22.38;
  middle: number; // 22.98;
  sell: number; // 23.58;
  indicator: number; // 0;
  lastModified: DateIsoString; // "2018-11-08T23:00:00Z";
}>;

export type BanknoteRate = Readonly<{
  buy: number; // 21.1;
  middle: number; // 22.6;
  sell: number; // 24.1;
  indicator: number; // 0;
  lastModified: DateIsoString; // "2018-11-06T23:00:00Z";
}>;

type Country = string;
export type CurrencyByCountry = Record<Country, Currency>;

export const exchangeRateService = {
  getExchangeRates: () => axios.get<ExchangeRateDto>(""),
  getCurrencyByCountry: () => axios.get<CurrencyByCountry>(""),
};
