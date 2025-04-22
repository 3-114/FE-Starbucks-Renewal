'use server';

import { ProductDetail } from '@/types/ResponseDataTypes';
import { ProductListByCategoryResponse } from '@/types/ResponseDataTypes';

export async function fetchProductListByCategory({
  category,
  page,
}: {
  category?: string;
  page?: string;
}): Promise<ProductListByCategoryResponse> {
  const queryParams = new URLSearchParams();

  if (category) queryParams.append('mainCategoryUuid', category);
  if (page) queryParams.append('page', page);

  const response = await fetch(
    `${process.env.API_BASE_URL}/product-category/uuid-list?${queryParams.toString()}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error('카테고리별 상품 리스트 조회 실패!!! 야외취침 확정!');
  }

  const data = await response.json();
  return data.result as ProductListByCategoryResponse;
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
