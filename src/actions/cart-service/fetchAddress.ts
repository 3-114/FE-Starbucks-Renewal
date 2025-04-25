'use server';

import {
  AddressDetailType,
  commonResponseType,
  shippingAddressType,
} from '@/types/ResponseDataTypes';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

export async function fetchAddressUuidsList(): Promise<shippingAddressType[]> {
  const session = await getServerSession(options);

  const accessToken = session?.user?.accessToken;

  const response = await fetch(
    `${process.env.API_BASE_URL}/deliveries/cart/uuids`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      next: {
        tags: ['cart:address-uuids-list'],
      },
    }
  );

  if (!response.ok) {
    throw new Error('데이터 패치 실패! 야외취침 확정!');
  }

  const data = (await response.json()) as commonResponseType<
    shippingAddressType[]
  >;
  return data.result;
}

export async function fetchAddressdetail(
  addressUuid: string
): Promise<AddressDetailType> {
  const session = await getServerSession(options);

  const accessToken = session?.user?.accessToken;

  const response = await fetch(
    `${process.env.API_BASE_URL}/deliveries/cart/get-address/${addressUuid}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      next: {
        tags: [`cart:address-detail ${addressUuid}`],
      },
    }
  );

  const data = await response.json();
  return data.result;
}

export const prefetchAddressdetail = async (
  addressUuids: shippingAddressType[]
): Promise<void> => {
  try {
    await Promise.all(
      addressUuids.map((item) =>
        fetchAddressdetail(item.deliveryUuid).catch(() => null)
      )
    );
  } catch (error) {
    console.error('프리패칭 실패 :', error);
  }
};

export async function fetchUpdateAddress(
  deliveryUuid: string
): Promise<boolean> {
  const session = await getServerSession(options);
  const accessToken = session?.user?.accessToken;

  const response = await fetch(
    `${process.env.API_BASE_URL}/deliveries/cart/update-address`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        deliveryUuid,
      }),
    }
  );

  if (!response.ok) {
    throw new Error('주소 업데이트 실패');
  }
  return true;
}
