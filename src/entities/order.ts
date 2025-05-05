export interface Order {
  id: number;
  userid: number | null;
  instrumentid: number | null;
  side: string | null;
  type: string | null;
  size: number | null;
  price: number | string | null;
  status: string | null;
}

export interface CreateOrder {
  userId: number;
  instrumentId: number;
  side: "BUY" | "SELL" | "CASH_IN" | "CASH_OUT";
  type: "MARKET" | "LIMIT";
  size?: number; // cantidad de acciones
  amount?: number; // monto en pesos
  price?: number; // solo para LIMIT
}
