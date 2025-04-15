import EventNav from '@/components/layout/navs/EventNav';
import { EventNavMenuType } from '@/types/Initial/InitialDataTypes';

import { ProductList } from '../feature/list/ProductList';
import { getProductUuidsByCategory } from '@/actions/product-service';

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

export default async function BestPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const category = searchParams.category ?? dummyNavData[0].eventName;
  const uuidList = await getProductUuidsByCategory(category);

  return (
    <main>
      <EventNav NavData={dummyNavData} />
      <ProductList uuidList={uuidList} />
    </main>
  );
}
