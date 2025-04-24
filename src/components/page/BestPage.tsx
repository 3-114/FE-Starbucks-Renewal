import EventNav from '@/components/layout/navs/EventNav';
import { ProductList } from '@/components/feature/list/ProductList';
import { fetchProductListByCategory } from '@/actions/product-service';
import { EventNavMenuType } from '@/types/Initial/InitialDataTypes';

export default async function BestPage({
  category,
  NavData,
}: {
  category: string;
  NavData: EventNavMenuType[];
}) {
  const matchedCategory =
    category === '' || category === '전체'
      ? undefined
      : NavData.find((item) => item.eventName === category);

  const categoryUuid = matchedCategory?.eventUuid;

  const data = await fetchProductListByCategory({
    category: categoryUuid,
  });

  const uuidList = data.content.map((item) => item.productUuid);

  return (
    <main>
      <EventNav NavData={NavData} resetPageOnCategoryChange />
      <ProductList uuidList={uuidList} showBest={true} />
    </main>
  );
}
