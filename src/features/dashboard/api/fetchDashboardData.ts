import { PriceGetResponse } from '@/entities/crypto/model/crypto';

export async function fetchDashboardData(ids: string[]): Promise<PriceGetResponse> {
  const query = ids.join(',');
  const res = await fetch(`/api/crypto/prices?ids=${encodeURIComponent(query)}`);
  if (!res.ok) {
    throw new Error(`Ошибка запроса: ${res.status}`);
  }
  return res.json();
} 