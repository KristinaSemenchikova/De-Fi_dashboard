
import { client } from '@/features/dashboard/api/coingeckoClient';

export async function getPrice(ids: string[]) {
  if (!ids) {
    return { error: 'Не указаны ids' };
  }
  try {
    const data = await client.simple.price.get({ vs_currencies: 'usd', ids: ids.join(',') });
    return data;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return { error: errorMessage };
  }
} 