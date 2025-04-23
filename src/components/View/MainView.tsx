import { getEventProductList } from '@/actions/event-service';
import { getInformationProductByUuid } from '@/actions/cart-service';
import ProductCarousel from '@/components/feature/carousels/ProductCarousel';

export default async function MainView({
  MainTagData,
}: {
  MainTagData: { eventUuid: string; eventName: string }[];
}) {
  const productListMap = Object.fromEntries(
    await Promise.all(
      MainTagData.map(async ({ eventUuid }) => {
        const uuidList = await getEventProductList(eventUuid);

        const detailedProducts = await Promise.all(
          uuidList.map(async ({ productUuid }) => {
            const product = await getInformationProductByUuid(productUuid);
            return {
              id: productUuid,
              title: product.productName,
              price: product.productPrice,
              url: product.productThumbnailUrl,
            };
          })
        );

        return [eventUuid, detailedProducts];
      })
    )
  );

  return (
    <section className="space-y-16">
      {MainTagData.map(({ eventUuid, eventName }, idx) => (
        <article key={idx} className="items-start">
          <p className="text-2xl/normal font-semibold pb-3">{eventName}</p>
          <ProductCarousel productDataList={productListMap[eventUuid] ?? []} />
        </article>
      ))}
    </section>
  );
}
