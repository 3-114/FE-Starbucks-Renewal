import ProductCarousel from '@/components/feature/carousels/ProductCarousel';
import { dummyProductDataMap } from '@/data/ProductData';

export default function MainView({
  MainTagData,
}: {
  MainTagData: { id: number; title: string }[];
}) {
  return (
    <section className="space-y-16">
      {MainTagData.map((item) => (
        <article key={item.id} className="items-start">
          <p className="text-2xl/normal font-semibold pb-3">{item.title}</p>
          <ProductCarousel
            productDataList={dummyProductDataMap[item.title] ?? []}
          />
        </article>
      ))}
    </section>
  );
}
