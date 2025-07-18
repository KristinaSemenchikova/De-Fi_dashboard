import React from 'react';

interface CryptoCardProps {
  id: string;
  priceUsd: number;
}

export const CryptoCard: React.FC<CryptoCardProps> = ({ id, priceUsd }) => (
  <div className="flex flex-col items-center justify-center">
    <h3>{id}</h3>
    <p>${priceUsd.toFixed(2)}</p>
  </div>
); 