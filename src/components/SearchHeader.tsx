import React from "react";
import {Sticky} from "./Sticky";
import {Search} from "./Search";

import styled from "@emotion/styled";

const defaultProps = {
  Sticky,
  Search: styled(Search)`
    background: white;
    padding: 0.5rem 0 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  `,
};

export type Props = typeof defaultProps;

export const SearchHeader = ({Sticky, Search}: Props) => {
  return (
    <Sticky>
      <Search />
    </Sticky>
  );
};

SearchHeader.defaultProps = defaultProps;
