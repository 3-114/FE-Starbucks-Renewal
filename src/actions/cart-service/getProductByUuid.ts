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
    next: { tags: ['getCartItem'] },
  });
  if (!response.ok) {
    throw new Error('단 건 조회 데이터 패치 실패! 야외취침 확정!');
  }

  const data = (await response.json()) as commonResponseType<CartItemType>;

  return data.result as CartItemType;
}

export async function removeItem(uuid: string) {
  const session = await getServerSession(options);
  const accessToken = session?.user?.accessToken;

  const response = await fetch(
    `${process.env.API_BASE_URL}/cart/${uuid}/get-selected`,
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

  return data.result.selected;
}

export async function updateQuantity(id: string, quantity: number) {
  console.log(id, quantity);
  await new Promise((resolve) => setTimeout(resolve, 300));
  return { success: true };
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
  revalidateTag('getCartItem');
}
