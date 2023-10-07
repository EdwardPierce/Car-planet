"use client";

import { store } from "@/global-store/store";
import React from "react";
import { Provider } from "react-redux";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
};

export default Providers;
