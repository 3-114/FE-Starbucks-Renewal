import {
  fetchMainCategory,
  getProductUuidsByCategory,
} from '@/actions/product-service';
import { ProductList } from '@/components/feature/list/ProductList';
import EventNav from '@/components/layout/navs/EventNav';
import { EventNavMenuType } from '@/types/Initial/InitialDataTypes';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    category?: string | undefined;
    page?: string | undefined;
  }>;
}) {
  const { category = '', page = '1' } = await searchParams;

  const NavDataRaw = await fetchMainCategory();
  const NavData: EventNavMenuType[] = NavDataRaw.map(
    (item: { mainCategoryUuid: string; mainCategoryName: string }) => ({
      eventUuid: item.mainCategoryUuid,
      eventName: item.mainCategoryName,
    })
  );

  const CartUuid = await getProductUuidsByCategory();

  return (
    <>
      <EventNav NavData={NavData} />
      {/* <ProductList uuidList={uuidList} showBest={false} /> */}
    </>
  );
}
