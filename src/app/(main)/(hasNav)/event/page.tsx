import EventNav from '@/components/layout/navs/EventNav';
import {
  getEventNavData,
  getEventImageList,
  getEventProductList,
} from '@/actions/event-service';
import { ProductList } from '@/components/feature/list/ProductList';
import ImageList from '@/components/feature/list/ImageList';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const NavData = await getEventNavData();
  const { category = '' } = await searchParams;
  const matchedCategory =
    category === '' || category === '전체'
      ? NavData[0].eventUuid
      : (NavData.find((item) => item.eventName === category)?.eventUuid ??
        NavData[0].eventUuid);

  const eventImageList = await getEventImageList(matchedCategory);
  const rawProductList = await getEventProductList(matchedCategory);
  const eventproductList = rawProductList.map((item) => item.productUuid);
  return (
    <>
      <EventNav NavData={NavData} />
      <ImageList eventImages={eventImageList} />
      <ProductList uuidList={eventproductList} showBest={false} />
    </>
  );
}
