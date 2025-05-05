export interface Portfolio {
  cash: number | string;
  totalValue: number | string;
  positions: PortfolioPosition[];
}

export interface PortfolioPosition {
  instrumentId: number;
  ticker: string;
  name: string;
  type: string;
  quantity: number;
  marketValue: number | string;
  performance: number | null;
}
