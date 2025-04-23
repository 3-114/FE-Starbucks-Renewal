export async function getEventImageList(uuid: string): Promise<
  {
    eventUrl: string;
    eventUrlIndex: number;
  }[]
> {
  const response = await fetch(
    `${process.env.API_BASE_URL}/event-image/${uuid}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        tags: ['event:ImageList'],
      },
    }
  );

  if (!response.ok) {
    throw new Error('데이터 패치 실패! 야외취침 확정!');
  }

  const data = await response.json();
  return data.result as { eventUrl: string; eventUrlIndex: number }[];
}

export async function getEventProductList(uuid: string): Promise<
  {
    eventUrl: string;
    eventUrlIndex: number;
  }[]
> {
  const response = await fetch(
    `${process.env.API_BASE_URL}/event-image/${uuid}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        tags: ['event:ImageList'],
      },
    }
  );

  if (!response.ok) {
    throw new Error('데이터 패치 실패! 야외취침 확정!');
  }

  const data = await response.json();
  return data.result;
}
