import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';

export async function getEventNavData() {
  const session = await getServerSession(options);

  const accessToken = session?.user?.accessToken;

  const url = `${process.env.API_BASE_URL}/event/nav`;
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
    next: {
      tags: ['event-nav'],
      revalidate: 360000,
    },
  });

  if (!res.ok) {
    const text = await res.text();
    console.error('❌ Fetch failed:', {
      status: res.status,
      statusText: res.statusText,
      url,
      body: text,
    });

    throw new Error('네비게이션 데이터를 불러오는 데 실패');
  }

  const data = await res.json();
  return data.result;
}
