import {
  fetchMainCategory,
  fetchProductListByCategory,
} from '@/actions/product-service';
import { ProductList } from '@/components/feature/list/ProductList';
import EventNav from '@/components/layout/navs/EventNav';
import { EventNavMenuType } from '@/types/Initial/InitialDataTypes';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; page?: string }>;
}) {
  const { category = '', page = '1' } = await searchParams;

  const NavDataRaw = await fetchMainCategory();
  const NavData: EventNavMenuType[] = NavDataRaw.map(
    (item: { mainCategoryUuid: string; mainCategoryName: string }) => ({
      eventUuid: item.mainCategoryUuid,
      eventName: item.mainCategoryName,
    })
  );

  const matchedCategory =
    category === '' || category === '전체'
      ? undefined
      : NavData.find((item) => item.eventName === category);

  const categoryUuid = matchedCategory?.eventUuid;

  const data = await fetchProductListByCategory({
    category: categoryUuid,
    page,
  });

  const uuidList = data.content.map((item) => item.productUuid);

  return (
    <>
      <EventNav NavData={NavData} resetPageOnCategoryChange={true} />
      <ProductList
        uuidList={uuidList}
        showBest={false}
        totalPages={data.totalPages}
      />
    </>
  );
}
