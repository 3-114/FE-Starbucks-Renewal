'use server';

import { dummyProducts } from '@/data/ProductData';
import { ProductDetail } from '@/types/ResponseDataTypes';

export async function getProductUuidsByCategory(
  category: string
): Promise<string[]> {
  return Object.values(dummyProducts)
    .filter((product) => product.category === category)
    .map((product) => product.uuid);
}

export async function getProductDetail(uuid: string): Promise<ProductDetail> {
  const response = await fetch(`${process.env.API_BASE_URL}/products/${uuid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('개별데이터 불러오기 실패!!! 야외취침 확정!');
  }

  const data = await response.json();
  return data.result as ProductDetail;
}
