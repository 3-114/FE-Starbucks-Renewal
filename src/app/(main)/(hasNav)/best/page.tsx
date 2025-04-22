import BestPage from '@/components/page/BestPage';
import { fetchMainCategory } from '@/actions/product-service';
import { EventNavMenuType } from '@/types/Initial/InitialDataTypes';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; page?: string }>;
}) {
  const { category = '' } = await searchParams;

  const NavDataRaw = await fetchMainCategory();
  const NavData: EventNavMenuType[] = NavDataRaw.map(
    (item: { mainCategoryUuid: string; mainCategoryName: string }) => ({
      eventUuid: item.mainCategoryUuid,
      eventName: item.mainCategoryName,
    })
  );
  return <BestPage category={category} NavData={NavData} />;
}
