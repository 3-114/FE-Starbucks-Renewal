import EventNav from '@/components/layout/navs/EventNav';

import { ProductList } from '@/components/feature/list/ProductList';
import { getProductUuidsByCategory } from '@/actions/product-service';
import { EventNavMenuType } from '@/types/Initial/InitialDataTypes';

export default async function BestPage({
  category,
  NavData,
}: {
  category: string;
  NavData: EventNavMenuType[];
}) {
  const uuidList = await getProductUuidsByCategory(category);

  return (
    <main>
      <EventNav NavData={NavData} />
      <ProductList uuidList={uuidList} showBest={true} />
    </main>
  );
}
