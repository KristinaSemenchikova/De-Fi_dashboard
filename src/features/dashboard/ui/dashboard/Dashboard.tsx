import React from 'react';
import { CryptoCard } from '@/features/dashboard/ui/crypto-card/CryptoCard';
import { getPrice } from '../../api/getPrice';

const ids = ['bitcoin', 'ethereum', 'litecoin'];

export const Dashboard: React.FC = async () => {
  const data = await getPrice(ids);
  console.log(data);

  return (
    <div className="grid grid-cols-3 gap-4">
      {Object.entries(data).map(([id, { usd }]) => (
        <CryptoCard key={id} id={id} priceUsd={usd} />
      ))}
    </div>
  );
}; 