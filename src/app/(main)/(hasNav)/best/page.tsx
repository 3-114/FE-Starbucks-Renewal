import BestPage from '@/components/page/BestPage';
import { EventNavMenuType } from '@/types/Initial/InitialDataTypes';

const dummyNavData: EventNavMenuType[] = [
  {
    id: 1,
    eventName: '텀블러/보온병',
  },
  {
    id: 2,
    eventName: '머그/컵',
  },
  {
    id: 3,
    eventName: '라이프스타일',
  },
  {
    id: 4,
    eventName: '티/커피용품',
  },
  {
    id: 5,
    eventName: '케이크',
  },
  {
    id: 6,
    eventName: '초콜릿스낵',
  },
];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ category?: string | undefined }>;
}) {
  const category = (await searchParams).category ?? dummyNavData[0].eventName;
  return (
    <>
      <BestPage category={category} NavData={dummyNavData} />
    </>
  );
}
