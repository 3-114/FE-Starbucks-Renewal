'use server';

import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';

export async function getCartProductByUuid(
  uuid: string
): Promise<{ quantity: number; selected: boolean; valid: boolean }> {
  const session = await getServerSession(options);
  const accessToken = session?.user?.accessToken;

  console.log(uuid);

  const response = await fetch(`${process.env.API_BASE_URL}/cart/${uuid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
  });
  if (!response.ok) {
    throw new Error('단 건 조회 데이터 패치 실패! 야외취침 확정!');
  }

  const data = await response.json();
  return data.result;
}

export async function getInformationProductByUuid(uuid: string): Promise<{
  productName: string;
  productPrice: string;
  productThumbnailUrl: string;
  isThumbnail: boolean;
}> {
  const session = await getServerSession(options);
  const accessToken = session?.user?.accessToken;

  const response = await fetch(
    `${process.env.API_BASE_URL}/products/preview/${uuid}`,
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

export async function removeItem(uuid: string) {
  console.log(uuid);
  await new Promise((resolve) => setTimeout(resolve, 500));

  return { success: true };
}

export async function updateQuantity(id: string, quantity: number) {
  console.log(id, quantity);
  await new Promise((resolve) => setTimeout(resolve, 300));
  return { success: true };
}

export async function ToggleCheckbox(uuid: string, checked: boolean) {
  console.log(`[ToggleCheckbox] ${uuid} → ${checked}`);
  await new Promise((res) => setTimeout(res, 200));
  return { success: true };
}
