'use server';

import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

class AuthError extends Error {
  constructor(message = '로그인이 필요합니다.') {
    super(message);
    this.name = 'AuthError';
  }
}

class CartError extends Error {
  constructor(message = '장바구니 추가 실패') {
    super(message);
    this.name = 'CartError';
  }
}

export async function fetchCartUuids(
  cartType: string
): Promise<{ cartUuid: string }[]> {
  const session = await getServerSession(options);
  const accessToken = session?.user?.accessToken;

  const response = await fetch(
    `${process.env.API_BASE_URL}/cart/uuid-list?cartType=${cartType}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      next: {
        tags: [`CartUuidsList-${cartType}`],
      },
    }
  );

  if (!response.ok) {
    throw new Error('데이터 패치 실패! 야외취침 확정!');
  }

  const data = await response.json();
  return data.result;
}

export async function getInformationProductByUuid(uuid: string): Promise<{
  productName: string;
  productPrice: number;
  productThumbnailUrl: string;
  isThumbnail: boolean;
  shippingFee: number;
}> {
  const response = await fetch(
    `${process.env.API_BASE_URL}/products/preview/${uuid}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        tags: [`Product-${uuid}`],
      },
    }
  );
  if (!response.ok) {
    throw new Error('단 건 조회 데이터 패치 실패! 야외취침 확정!');
  }

  const data = await response.json();

  return data.result;
}

export async function getCartCount(cartType: string): Promise<number> {
  const session = await getServerSession(options);
  const accessToken = session?.user?.accessToken;

  const response = await fetch(
    `${process.env.API_BASE_URL}/cart/count/${cartType}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      next: {
        tags: [`${cartType}CartCount`],
      },
    }
  );

  if (!response.ok) {
    throw new Error(`패치 실패! ${cartType}의 count`);
  }

  const data = await response.json();
  return data.result.totalCount;
}

export async function fetchCartTabCount(tabId: number): Promise<number> {
  const suffix = tabId === 2 ? 'reservation' : 'general';

  const session = await getServerSession(options);

  const accessToken = session?.user?.accessToken;

  const res = await fetch(`${process.env.API_BASE_URL}/cart/count/${suffix}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    console.error('count fetch 실패');
    return 0;
  }

  const data = await res.json();
  return data.result?.totalCount ?? 0;
}

export async function getCartProductByUuid(
  uuid: string
): Promise<{ quantity: number; selected: boolean }> {
  const session = await getServerSession(options);
  const accessToken = session?.user?.accessToken;

  const response = await fetch(
    `${process.env.API_BASE_URL}/cart/by-product/${uuid}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error('단 건 조회 데이터 패치 실패! 야외취침 확정!');
  }

  const data = await response.json();
  return data.result;
}

export async function AddCartItem({
  productUuid,
  quantity,
}: {
  productUuid: string;
  quantity: number;
}): Promise<void> {
  const session = await getServerSession(options);
  const accessToken = session?.user?.accessToken;

  if (!accessToken) {
    throw new AuthError();
  }

  const response = await fetch(`${process.env.API_BASE_URL}/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ productUuid, quantity }),
  });

  if (!response.ok) {
    throw new CartError('장바구니 서버 응답 실패');
  }
}
