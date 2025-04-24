import Link from 'next/link';
import Image from 'next/image';
import { getInformationProductByUuid } from '@/actions/cart-service';
import PaginationBar from '@/components/feature/Pagination/PaginationBar';

export async function ProductList({
  uuidList,
  showBest,
  totalPages,
}: {
  uuidList: string[];
  showBest: boolean;
  totalPages?: number;
}) {
  const productPromises = uuidList.map(async (uuid) => {
    const product = await getInformationProductByUuid(uuid);
    return {
      ...product,
      productUuid: uuid,
    };
  });

  const products = await Promise.all(productPromises);

  return (
    <>
      <section className="grid grid-cols-2 gap-4 p-4 items-stretch">
        {products.map((p, index) => (
          <Link
            key={index}
            href={`/products/${p.productUuid}`}
            className="no-underline"
          >
            <div className="flex flex-col justify-between h-full relative border rounded-lg p-2 hover:shadow-md transition">
              <div className="relative aspect-square w-full">
                <Image
                  src={p.productThumbnailUrl}
                  alt={p.productName}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {showBest && (
                  <div className="absolute top-0 right-0 bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded-bl-lg rounded-tr-lg z-10">
                    {index + 1}
                  </div>
                )}
              </div>
              {showBest && (
                <div className="mt-2 text-xs text-rose-500 font-bold">Best</div>
              )}
              <div className="mt-2 text-sm">{p.productName}</div>
              <div className="mt-1 text-md font-semibold">
                {p.productPrice.toLocaleString()}원
              </div>
            </div>
          </Link>
        ))}
      </section>

      {typeof totalPages === 'number' && totalPages > 1 && (
        <div className="flex justify-center py-6">
          <PaginationBar totalPages={totalPages} />
        </div>
      )}
    </>
  );
}
