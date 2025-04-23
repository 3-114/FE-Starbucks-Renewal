'use server';

import { options } from '@/app/api/auth/[...nextauth]/options';
import { CartItemType, commonResponseType } from '@/types/ResponseDataTypes';
import { getServerSession } from 'next-auth';
import { revalidateTag } from 'next/cache';

export async function getProductByCartUuid(
  uuid: string
): Promise<CartItemType> {
  const session = await getServerSession(options);
  const accessToken = session?.user?.accessToken;

  const response = await fetch(`${process.env.API_BASE_URL}/cart/${uuid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
    next: {
      tags: [`CartItem:${uuid}`],
    },
  });
  if (!response.ok) {
    throw new Error('단 건 조회 데이터 패치 실패! 야외취침 확정!');
  }

  const data = (await response.json()) as commonResponseType<CartItemType>;

  return data.result as CartItemType;
}

export async function ToggleCheckbox(uuid: string) {
  const session = await getServerSession(options);
  const accessToken = session?.user?.accessToken;

  const response = await fetch(
    `${process.env.API_BASE_URL}/cart/${uuid}/toggle-selection`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error('체크박스 변경에 실패!!');
  }
  revalidateTag(`CartItem:${uuid}`);
}

export async function increaseQuantity(uuid: string) {
  const session = await getServerSession(options);
  const accessToken = session?.user?.accessToken;

  const response = await fetch(
    `${process.env.API_BASE_URL}/cart/${uuid}/item-increase`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error('체크박스 변경에 실패!!');
  }
  revalidateTag('getCartItem');
}

export async function decreaseQuantity(uuid: string) {
  const session = await getServerSession(options);
  const accessToken = session?.user?.accessToken;

  const response = await fetch(
    `${process.env.API_BASE_URL}/cart/${uuid}/item-decrease`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error('체크박스 변경에 실패!!');
  }
  revalidateTag('getCartItem');
}

export async function removeItem(uuid: string, cartType: string) {
  const session = await getServerSession(options);
  const accessToken = session?.user?.accessToken;

  const response = await fetch(`${process.env.API_BASE_URL}/cart/${uuid}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
  });
  if (!response.ok) {
    throw new Error('체크박스 변경에 실패!!');
  }
  revalidateTag('getCartItem');
  revalidateTag(`${cartType}CartCount`);
}

export async function allToggleCheckbox(): Promise<void> {
  const session = await getServerSession(options);
  const accessToken = session?.user?.accessToken;

  const response = await fetch(
    `${process.env.API_BASE_URL}/cart/all/toggle-selection`,
    {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error('전체 토글 실패');
  }

  const data = await response.json();

  const cartUuids: string[] =
    data.result?.map((item: { cartUuid: string }) => item.cartUuid) ?? [];

  for (const uuid of cartUuids) {
    revalidateTag(`CartItem:${uuid}`);
  }
}

export async function removeAllItems(cartType: string): Promise<boolean> {
  const session = await getServerSession(options);
  const accessToken = session?.user?.accessToken;

  const response = await fetch(
    `${process.env.API_BASE_URL}/cart/${cartType}/all`,
    {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error('전체 토글 실패');
  }

  revalidateTag(`CartUuidsList-${cartType}`);

  return response.ok;
}
