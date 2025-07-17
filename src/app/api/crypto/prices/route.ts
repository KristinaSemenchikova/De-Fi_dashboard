import { NextResponse } from 'next/server';
import { client } from '@/entities/crypto/api/coingeckoClient';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const ids = searchParams.get('ids') || '';
  if (!ids) {
    return NextResponse.json({ error: 'Не указаны ids' }, { status: 400 });
  }
  try {
    const data = await client.simple.price.get({ vs_currencies: 'usd', ids });
    return NextResponse.json(data);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: errorMessage }, { status: 502 });
  }
} 