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
    next: {
      tags: ['event:NavData-list'],
    },
  });

  if (!response.ok) {
    throw new Error('데이터 패치 실패! 야외취침 확정!');
  }

  const data = await response.json();
  return data.result;
}
