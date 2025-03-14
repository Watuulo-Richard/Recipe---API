// import { create } from "zustand";
// import {  fetchCountryExchangeRates } from "@/actions/fetchrecipes";
// import { ExchangeRateType } from "@/Types/types";

// type CurrencyStoreType = {
//   baseCurrency: string;
//   exchangeRates: ExchangeRateType | null;
//   isLoading: boolean;
//   setBaseCurrency: (currency: string) => void;
// };

// export const useCurrencyStore = create<CurrencyStoreType>((set) => ({
//   baseCurrency: "USD",
//   exchangeRates: null,
//   isLoading: false,

//   setBaseCurrency: async (value) => {
//     set({ isLoading: true });

//     const newRates = await fetchCountryExchangeRates(value);
//     set({
//       baseCurrency: value,
//       exchangeRates: newRates,
//       isLoading: false,
//     });
//   },
// }));
