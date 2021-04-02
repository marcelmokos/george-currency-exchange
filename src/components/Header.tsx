import React, {PropsWithChildren} from "react";

export const Header = ({children}: PropsWithChildren<{}>) => (
  <header>
    <nav>
      <h1>Currency exchange</h1>
    </nav>

    {children}
  </header>
);
