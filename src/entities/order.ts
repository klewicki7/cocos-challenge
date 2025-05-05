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