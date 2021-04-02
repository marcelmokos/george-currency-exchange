import React, {ChangeEvent} from "react";
import {Input, InputProps} from "antd";
import {useExchangeRate} from "../hooks/ExchangeRateContext";

export const Search = (props: InputProps) => {
  const {search, setSearch} = useExchangeRate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget instanceof HTMLInputElement) {
      setSearch(event.currentTarget.value ?? "");
    }
  };

  return (
    <Input.Search
      value={search}
      onChange={handleChange}
      placeholder="search by currency name"
      {...props}
    />
  );
};
