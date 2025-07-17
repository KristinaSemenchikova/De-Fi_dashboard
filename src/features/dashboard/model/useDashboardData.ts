import { useState, useEffect } from 'react';
import { fetchDashboardData } from '../api/fetchDashboardData';
import { PriceGetResponse } from '@/entities/crypto/model/crypto';

export function useDashboardData(ids: string[]) {
  const [data, setData] = useState<PriceGetResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetchDashboardData(ids);
        setData(res);
      } catch (err: unknown) {
        const error = err as Error;
        setError(error.message ?? 'Ошибка загрузки данных');
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, [ids]);

  return { data, isLoading, error };
} 