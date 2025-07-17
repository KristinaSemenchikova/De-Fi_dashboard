import React from 'react';

interface CryptoCardProps {
  id: string;
  priceUsd: number;
}

export const CryptoCard: React.FC<CryptoCardProps> = ({ id, priceUsd }) => (
  <div className="crypto-card">
    <h3>{id}</h3>
    <p>${priceUsd.toFixed(2)}</p>
  </div>
); 