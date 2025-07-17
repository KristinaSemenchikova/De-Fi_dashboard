'use client';
import React from 'react';
import { useDashboardData } from '../model/useDashboardData';
import { CryptoCard } from '@/entities/crypto/ui/CryptoCard';
import { Loader } from '@/shared/ui/Loader';
import { ErrorMessage } from '@/shared/ui/ErrorMessage';
import styles from '@/styles/dashboard.module.css';

const ids = ['bitcoin', 'ethereum', 'litecoin'];

export const Dashboard: React.FC = () => {
  const { data, isLoading, error } = useDashboardData(ids);

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!data) return null;

  return (
    <div className={styles['dashboard-grid']}>
      {Object.entries(data).map(([id, { usd }]) => (
        <CryptoCard key={id} id={id} priceUsd={usd} />
      ))}
    </div>
  );
}; 