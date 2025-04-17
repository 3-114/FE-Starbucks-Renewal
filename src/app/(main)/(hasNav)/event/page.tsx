import {
  getEventNavData,
  getEventProductList,
} from '@/actions/event-service/nav';
import { ProductList } from '@/components/feature/list/ProductList';
import { EventNavMenuType } from '@/types/Initial/InitialDataTypes';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const category = params.category ?? '';

  const navData: EventNavMenuType[] = await getEventNavData();

  const eventItem = navData.find((i) => i.eventName === category);
  if (!eventItem) {
    throw new Error(`유효하지 않은 카테고리입니다: ${category}`);
  }
  const eventUuid = eventItem.eventUuid;
  const navListData: string[] = await getEventProductList(eventUuid);
  return (
    <>
      <ProductList uuidList={navListData} />
    </>
  );
}
