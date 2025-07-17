export type PriceGetResponse = Record<string, { usd: number }>;

export interface CryptoPrice {
  id: string;
  priceUsd: number;
} 