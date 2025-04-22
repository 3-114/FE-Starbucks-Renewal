import { getEventNavData } from '@/actions/event-service/nav';
import EventNav from '@/components/layout/navs/EventNav';
import { ProductList } from '@/components/feature/list/ProductList';
import { EventNavMenuType } from '@/types/Initial/InitialDataTypes';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category = '' } = await searchParams;

  const navData: EventNavMenuType[] = await getEventNavData();

  const matchedCategory =
    category === '' || category === '전체'
      ? undefined
      : navData.find((item) => item.eventName === category);

  const eventUuid = matchedCategory?.eventUuid;

  const data = await getEventProductList({
    eventUuid,
  });

  const uuidList = data.content.map((item) => item.productUuid);

  return (
    <>
      <EventNav NavData={navData} resetPageOnCategoryChange />
      <ProductList uuidList={uuidList} showBest={false} />
    </>
  );
}
