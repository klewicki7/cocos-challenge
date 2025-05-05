export interface Portfolio {
  cash: number;
  totalValue: number;
  positions: PortfolioPosition[];
}

export interface PortfolioPosition {
  instrumentId: number;
  ticker: string;
  name: string;
  type: string;
  quantity: number;
  marketValue: number;
  performance: number | null;
}
