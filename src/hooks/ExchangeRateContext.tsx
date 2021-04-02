import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
} from "react";
import qs from "qs";
import {UseQueryResult} from "react-query";
import {useSearchParam} from "react-use";
import {
  CurrencyByCountry,
  ExchangeRateDto,
} from "../service/exchangeRateService";
import {AxiosResponse} from "axios";

export type Context = Readonly<{
  search: string;
  setSearch: (value: string) => void;
  exchangeRateQuery: UseQueryResult<AxiosResponse<ExchangeRateDto>>;
}>;

export const useExchangeRate = (): Context =>
  useContext(ExchangeRateContext) as Context;

export const ExchangeRateContext = createContext<
  Omit<Context, "exchangeRateQuery">
>({
  search: "",
  setSearch: (value: string) => {},
});

export const ExchangeRateProvider = ({
  children,
  exchangeRateQuery,
}: PropsWithChildren<{
  exchangeRateQuery: UseQueryResult<AxiosResponse<ExchangeRateDto>>;
}>) => {
  const search = useSearchParam("search") ?? "";
  const setSearch = useCallback((search: string) => {
    if (search === "") {
      global.history.pushState({}, "", global.location.pathname);

      return;
    }
    global.history.pushState(
      {},
      "",
      `${global.location.pathname}?${qs.stringify({search})}`,
    );
  }, []);

  const value = useMemo(
    () => ({
      exchangeRateQuery,
      search,
      setSearch,
    }),
    [exchangeRateQuery, search, setSearch],
  );

  return (
    <ExchangeRateContext.Provider value={value}>
      {children}
    </ExchangeRateContext.Provider>
  );
};
