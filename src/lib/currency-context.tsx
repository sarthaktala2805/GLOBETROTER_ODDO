"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type CurrencyCode = "INR" | "USD" | "EUR" | "GBP";

interface CurrencyInfo {
  code: CurrencyCode;
  symbol: string;
  rateToInr: number; // 1 unit of this currency = X INR
}

export const currencies: Record<CurrencyCode, CurrencyInfo> = {
  INR: { code: "INR", symbol: "₹", rateToInr: 1 },
  USD: { code: "USD", symbol: "$", rateToInr: 86.5 },
  EUR: { code: "EUR", symbol: "€", rateToInr: 92.0 },
  GBP: { code: "GBP", symbol: "£", rateToInr: 110.0 },
};

interface CurrencyContextType {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
  formatPrice: (amountInInr: number) => string;
  convertPrice: (amountInInr: number) => number;
  symbol: string;
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: "INR",
  setCurrency: () => {},
  formatPrice: (amt) => `₹${amt.toLocaleString("en-IN")}`,
  convertPrice: (amt) => amt,
  symbol: "₹",
});

const STORAGE_KEY = "bharatyatra_currency";

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("INR");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as CurrencyCode;
      if (saved && currencies[saved]) {
        setCurrencyState(saved);
      }
    } catch {
      // ignore SSR or storage exceptions
    }
  }, []);

  const setCurrency = (code: CurrencyCode) => {
    setCurrencyState(code);
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch {
      // ignore
    }
  };

  const convertPrice = (amountInInr: number): number => {
    if (currency === "INR") return Math.round(amountInInr);
    const rate = currencies[currency].rateToInr;
    return Math.round(amountInInr / rate);
  };

  const formatPrice = (amountInInr: number): string => {
    const cur = currencies[currency];
    const converted = convertPrice(amountInInr);
    if (currency === "INR") {
      return `₹${amountInInr.toLocaleString("en-IN")}`;
    }
    return `${cur.symbol}${converted.toLocaleString("en-US")}`;
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
        convertPrice,
        symbol: currencies[currency].symbol,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
