import Image from 'next/image';

import { dummyProducts } from '@/data/ProductData';

export function ProductList({ uuidList }: { uuidList: string[] }) {
  const products = uuidList.map((uuid) => dummyProducts[uuid]).filter(Boolean);

  return (
    <section className="grid grid-cols-2 gap-4 p-4">
      {products.map((p, index) => (
        <div key={p.uuid} className="relative border rounded-lg p-2">
          <div className="relative aspect-square w-full">
            <Image
              src={p.image}
              alt={p.name}
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
          <div className="mt-2 text-sm">{p.name}</div>
          <div className="mt-1 text-md font-semibold">
            {p.price.toLocaleString()}원
          </div>
        </div>
      ))}
    </section>
  );
}
