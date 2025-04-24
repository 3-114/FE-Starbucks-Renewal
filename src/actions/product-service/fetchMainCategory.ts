export async function fetchMainCategory(): Promise<
  { mainCategoryUuid: string; mainCategoryName: string }[]
> {
  const response = await fetch(`${process.env.API_BASE_URL}/main-category`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('데이터 패치 실패! 야외취침 확정!');
  }

  const data = await response.json();
  return data.result;
}
