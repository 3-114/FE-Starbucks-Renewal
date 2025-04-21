'use server';

export async function getProductUuidsByCategory({
  mainCategoryUuid,
  page = 1,
  size = 10,
}: {
  mainCategoryUuid?: string;
  page?: number;
  size?: number;
} = {}) {
  const params = new URLSearchParams();
  if (mainCategoryUuid) {
    params.set('mainCategoryUuid', mainCategoryUuid);
  }
  params.set('page', String(page));
  params.set('size', String(size));

  const baseURL = `${process.env.API_BASE_URL}/api/v1/product-category/uuid-list`;

  const query = params.toString();
  const url = query ? `${baseURL}?${query}` : baseURL;

  const res = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!res.ok) {
    throw new Error(`네트워크 오류: ${res.status}`);
  }
  const data = await res.json();
  return data.result;
}
