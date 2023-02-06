"use client";

import { client } from "@/utils/graphql";

// Divegent
import {
  DivergentClientProvider,
  getDivergentClient,
} from "@0xvaibhav/--divergent-client-lens/dist";

// Urql
import { Provider } from "urql";

// React-query
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

const PackageProvider: React.FC<Props> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());

  const [provider] = useState(() => getDivergentClient());

  return (
    <DivergentClientProvider value={provider}>
      <Provider value={client}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </Provider>
    </DivergentClientProvider>
  );
};

export default PackageProvider;
