'use server';

import { getServerSession } from 'next-auth';
import { revalidateTag } from 'next/cache';
import { options } from '@/app/api/auth/[...nextauth]/options';

export async function fetchCartProductUuids(tabId?: number): Promise<string[]> {
  const suffix = tabId === 1 ? '/reservation' : '/general';

  const session = await getServerSession(options);

  const accessToken = session?.user?.accessToken;

  if (!accessToken) {
    throw new Error('Access token 없음. 로그인 상태 확인 필요.');
  }

  const response = await fetch(
    `${process.env.API_BASE_URL}/cart/product${suffix}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      next: {
        tags: ['cart:product-uuids'],
      },
    }
  );
  if (!response.ok) {
    throw new Error('데이터 패치 실패! 야외취침 확정!');
  }

  const data = await response.json();
  return data.result;
}

export async function setActiveCartTab(prevTabId: number, nextTabId: number) {
  if (prevTabId !== nextTabId) {
    revalidateTag('cart:product-uuids');
  }

  return true;
}

export async function getCartTabCounts(): Promise<{
  general: number;
  reservation: number;
}> {
  const session = await getServerSession(options);

  const accessToken = session?.user?.accessToken;

  if (!accessToken) {
    throw new Error('Access token 없음. 로그인 상태 확인 필요.');
  }

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`,
  };

  const [generalRes, reservationRes] = await Promise.all([
    fetch(`${process.env.API_BASE_URL}/count/general`, {
      method: 'GET',
      headers,
    }),
    fetch(`${process.env.API_BASE_URL}/count/reservation`, {
      method: 'GET',
      headers,
    }),
  ]);

  const general = await generalRes.json();
  const reservation = await reservationRes.json();

  return {
    general: general.result,
    reservation: reservation.result,
  };
}

export async function fetchCartTabCount(tabId: number): Promise<number> {
  const suffix = tabId === 1 ? 'reservation' : 'general';

  const session = await getServerSession(options);

  const accessToken = session?.user?.accessToken;

  if (!accessToken) {
    throw new Error('Access token 없음. 로그인 상태 확인 필요.');
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/count/${suffix}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    console.error('count fetch 실패');
    return 0;
  }

  const data = await res.json();
  return data.result;
}
