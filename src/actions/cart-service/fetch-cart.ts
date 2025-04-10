'use server';

import { revalidateTag } from 'next/cache';

export async function fetchCartProductUuids(tabId?: number): Promise<string[]> {
  const suffix = tabId === 1 ? '/1' : '';
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/cart${suffix}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Member-UUID': process.env.MEMBER_UUID ?? '',
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
  console.log(data.productUuidList);

  return data.productUuidList;
}

export async function setActiveCartTab(prevTabId: number, nextTabId: number) {
  if (prevTabId !== nextTabId) {
    revalidateTag('cart:product-uuids');
  }

  return true;
}
