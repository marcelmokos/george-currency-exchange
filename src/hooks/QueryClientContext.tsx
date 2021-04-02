import React, {FunctionComponent} from "react";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: true,
    },
  },
});

export const ReactQueryClientProvider: FunctionComponent = ({children}) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
