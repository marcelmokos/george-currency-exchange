import React from "react";
import "antd/dist/antd.css";
import styled from "@emotion/styled";

import {ExchangeRateProvider} from "./hooks/ExchangeRateContext";
import {Header} from "./components/Header";
import {SearchHeader} from "./components/SearchHeader";
import {ExchangeRates} from "./components/ExchangeRates";
import {useQuery} from "react-query";
import {exchangeRateService} from "./service/exchangeRateService";

const App = () => {
  const exchangeRateQuery = useQuery(["getExchangeRates"], () =>
    exchangeRateService.getExchangeRates(),
  );

  return (
    <ExchangeRateProvider exchangeRateQuery={exchangeRateQuery}>
      <Page>
        <Header />
        <SearchHeader />
        <main>
          <ExchangeRates />
        </main>
      </Page>
    </ExchangeRateProvider>
  );
};

const Page = styled.div`
  margin: 0;

  @media screen and (min-width: 321px) {
    margin: 0 1rem;
  }

  html {
    touch-action: manipulation;
  }

  @media screen and (min-width: 1200px) {
    margin: auto;
    max-width: 1024px;
  }
`;

export default App;
