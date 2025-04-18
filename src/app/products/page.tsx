import { fetchMainCategory } from '@/actions/product-service';
import { ProductList } from '@/components/feature/list/ProductList';
import EventNav from '@/components/layout/navs/EventNav';
import { EventNavMenuType } from '@/types/Initial/InitialDataTypes';

const uuidList = [
  '36d9999b-d542-491e-9f7a-05dc0547b4b0',
  'df722299-c399-424d-8b68-efe6ec3c3151',
  'a2d85397-51b4-459e-a416-af00c39936f4',
  '5b7ba4fe-4e87-44ff-8352-935148cfe8f1',
  '70486ddc-918d-46f2-a309-79d1c25119f5',
  '1e77796d-06ed-4d64-ac81-47e617dc494e',
  'c0383bab-956d-4700-a7f4-2291b518faa3',
  '9882346d-f6ba-4083-8168-f510ac55c6cc',
  'd1669191-ec58-40ce-adca-cc1705ba4318',
];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ category?: string | undefined }>;
}) {
  const category = (await searchParams).category ?? '';
  console.log(category);
  const NavDataRaw = await fetchMainCategory();
  const NavData: EventNavMenuType[] = NavDataRaw.map(
    (item: { mainCategoryUuid: string; mainCategoryName: string }) => ({
      eventUuid: item.mainCategoryUuid,
      eventName: item.mainCategoryName,
    })
  );

  return (
    <>
      <EventNav NavData={NavData} />
      <ProductList uuidList={uuidList} showBest={false} />
    </>
  );
}
