import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProviderProps } from "../types/app";
import { Spinner } from "../components/Elements/Spinner/Spinner";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../lib/react-query";

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <Spinner size="xl" />
        </div>
      }
    >
      <QueryClientProvider client={queryClient}>
        <Router>{children}</Router>
      </QueryClientProvider>
    </React.Suspense>
  );
};
