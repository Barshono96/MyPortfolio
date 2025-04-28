"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { LoadingScreen } from "@/components/loading";

type LoadingContextType = {
  startLoading: () => void;
  stopLoading: () => void;
  isLoading: boolean;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return (
    <LoadingContext.Provider value={{ startLoading, stopLoading, isLoading }}>
      {children}
      {isLoading && <LoadingScreen />}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}
