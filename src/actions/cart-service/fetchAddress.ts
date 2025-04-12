'use server'

import { AddressDetailType } from "@/types/ResponseDataTypes";

export async function fetchAddressUuidsList(): Promise<string[]> {
  const response = await fetch(
    `${process.env.API_BASE_URL}/deliveries/cart`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Member-Uuid': process.env.MEMBER_UUID ?? '',
      },
      next: {
        tags: ['cart:address-uuids-list'],
      },
    }
  );
  if (!response.ok) {
    throw new Error('데이터 패치 실패! 야외취침 확정!');
  }

  const data = await response.json();
  return data.result;
}

export async function fetchAddressdetail(addressUuid:string): Promise<AddressDetailType> {
  const response = await fetch(
    `${process.env.API_BASE_URL}/deliveries/cart-detail`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Member-Uuid': process.env.MEMBER_UUID ?? '',
      },
      next: {
        tags: ['cart:address-uuids'],
      },
    }
  );
  if (!response.ok) {
    throw new Error('데이터 패치 실패! 야외취침 확정!');
  }

  const data = await response.json();
  return data.result;
}

export const prefetchAddressdetail = async (addressUuids: string[]): Promise<void> => {
  try {
    await Promise.all(addressUuids.map(addressUuids => fetchAddressdetail(addressUuids).catch(() => null)));
  } catch (error) {
    console.error('프리패칭 실패 :', error);
  }
};
