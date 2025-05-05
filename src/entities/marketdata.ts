export interface MarketData {
  instrumentid: number | null;
  close?: number | string | null;
  previousclose?: number | string | null;
  date: Date | null;
}
