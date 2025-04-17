import Image from 'next/image';
import { getInformationProductByUuid } from '@/actions/cart-service';

export async function ProductList({ uuidList }: { uuidList: string[] }) {
  const productPromises = uuidList.map((uuid) =>
    getInformationProductByUuid(uuid)
  );
  const products = await Promise.all(productPromises);

  console.log(products);

  console.log(products);
  return (
    <section className="grid grid-cols-2 gap-4 p-4">
      {products.map((p, index) => (
        <div key={index} className="relative border rounded-lg p-2">
          <div className="relative aspect-square w-full">
            <Image
              src={p.productThumbnailUrl}
              alt={p.productName}
              fill
              className="object-cover rounded-md"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute top-0 right-0 bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded-bl-lg rounded-tr-lg z-10">
              {index + 1}
            </div>
          </div>
          <div className="absolute bottom-14 left-2 z-10">
            <p className="text-rose-500 font-bold">Best</p>
          </div>
          <div className="mt-2 text-sm">{p.productName}</div>
          <div className="mt-1 text-md font-semibold">
            {p.productPrice.toLocaleString()}원
          </div>
        </div>
      ))}
    </section>
  );
}
