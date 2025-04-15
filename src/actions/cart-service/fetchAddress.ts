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
      // next: {
      //   tags: ['cart:address-uuids-list'],
      // },
      cache: 'no-cache',
    }
  );
  // console.log(await response.json());
  // if (!response.ok) {
  //   throw new Error('데이터 패치 실패! 야외취침 확정!');
  // }
  const data = (await response.json()) as commonResponseType<
    shippingAddressType[]
  >;
  console.log(data, '==============================================data');
  return data.result;
}

export async function fetchAddressdetail(
  addressUuid: string,
  signal?: AbortSignal
): Promise<AddressDetailType> {
  const session = await getServerSession(options);

  const accessToken = session?.user?.accessToken;

  if (!accessToken) {
    throw new Error('Access token 없음. 로그인 상태 확인 필요.');
  }
  const response = await fetch(
    `${process.env.API_BASE_URL}/cart/get-address?deliveryUuid=${addressUuid}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      signal,
      // next: {
      //   tags: ['cart:address-detail', addressUuid],
      // },
    }
  );

  if (!response.ok) {
    throw new Error('데이터 패치 실패! 야외취침 확정!');
  }

  const data = await response.json();
  return data;
}

export const prefetchAddressdetail = async (
  addressUuids: string[]
): Promise<void> => {
  try {
    await Promise.all(
      addressUuids.map((addressUuids) =>
        fetchAddressdetail(addressUuids).catch(() => null)
      )
    );
  } catch (error) {
    console.error('프리패칭 실패 :', error);
  }
};
