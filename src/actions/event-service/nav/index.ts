export async function getEventNavData(): Promise<
  {
    eventUuid: string;
    eventName: string;
  }[]
> {
  const response = await fetch(`${process.env.API_BASE_URL}/event/nav`, {
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
    }
  );

  if (!response.ok) {
    throw new Error('데이터 패치 실패! 야외취침 확정!');
  }

  const data = await response.json();
  return data.result;
}
