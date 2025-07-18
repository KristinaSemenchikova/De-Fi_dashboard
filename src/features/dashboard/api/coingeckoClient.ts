import Coingecko from '@coingecko/coingecko-typescript';

export const client = new Coingecko({
  demoAPIKey: process.env.NEXT_PUBLIC_COINGECKO_API_KEY,
  environment: 'demo',
}); 
