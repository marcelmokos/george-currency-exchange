import React from "react";
import {Card, Statistic, Skeleton, Empty} from "antd";
import flags from "../constants/flags";
import {useExchangeRate} from "../hooks/ExchangeRateContext";

import {Currency, ExchangeRateDto} from "../service/exchangeRateService";
import styled from "@emotion/styled";

const defaultProps = {
  Wrapper: styled.div`
    display: flex;
    column-gap: 1rem;
    row-gap: 1rem;
    flex-direction: column;
  `,
  Title: styled.span`
    display: flex;
    align-items: baseline;
    flex-direction: row;
  `,
  CurrencyFlag: styled.span<Readonly<{currency: Currency}>>`
    background-image: url("${({currency}) => getCurrencyImage(currency)}");
    background-size: cover;
    display: inline-block;
    height: 1rem;
    width: 1.5rem;
    margin: 0 0.25rem;
  `,
  RatesRow: styled.div`
    display: flex;
    column-gap: 2rem;
    row-gap: 2rem;
    justify-content: space-between;
  `,
};
export type Props = typeof defaultProps;

const getCurrencyImage = (ccy: string) => flags[ccy.toLowerCase()] ?? flags.$$$;

export const ExchangeRates = ({
  Wrapper,
  Title,
  CurrencyFlag,
  RatesRow,
}: Props) => {
  const {search, exchangeRateQuery} = useExchangeRate();

  if (exchangeRateQuery.isLoading) {
    return (
      <Card>
        <Skeleton loading={true} />
      </Card>
    );
  }

  const exchangeRates = exchangeRateQuery?.data?.data as ExchangeRateDto;
  const filteredExchangeRates = exchangeRates.fx
    .filter((unit) => unit.exchangeRate)
    .filter(
      (unit) =>
        unit.currency.toLocaleLowerCase().includes(search) ||
        (unit.nameI18N ?? "").toLocaleLowerCase().includes(search),
    );

  return (
    <Wrapper>
      {filteredExchangeRates.map((unit) => (
        <Card
          title={
            <Title>
              <CurrencyFlag currency={unit.currency} />
              {unit.nameI18N
                ? `${unit.currency} - ${unit.nameI18N}`
                : unit.currency}
            </Title>
          }
        >
          {unit.exchangeRate && (
            <RatesRow>
              <Statistic
                title="buy"
                value={unit.exchangeRate.buy}
                suffix={exchangeRates.baseCurrency}
                precision={unit.precision ?? 2}
              />
              <Statistic
                title="middle"
                value={unit.exchangeRate.middle}
                suffix={exchangeRates.baseCurrency}
                precision={unit.precision ?? 2}
              />
              <Statistic
                title="sell"
                value={unit.exchangeRate.sell}
                suffix={exchangeRates.baseCurrency}
                precision={unit.precision ?? 2}
              />
            </RatesRow>
          )}
        </Card>
      ))}

      {filteredExchangeRates.length === 0 && (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="Unfortunately there are no currency exchange rates for your search
          request."
        />
      )}
    </Wrapper>
  );
};

ExchangeRates.defaultProps = defaultProps;
