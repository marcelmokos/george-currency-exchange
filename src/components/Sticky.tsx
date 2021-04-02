import React, {PropsWithChildren} from "react";
import styled from "@emotion/styled";

export const Sticky = ({children}: PropsWithChildren<{}>) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  position: sticky;
  top: 0;
`;
