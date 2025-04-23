import Link from 'next/link';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export default function ProductCarousel({
  productDataList,
}: {
  productDataList: { id: number; title: string; price: number; url: string }[];
}) {
  return (
    <Carousel
      opts={{ loop: true, align: 'start', slidesToScroll: 1 }}
      className="w-full"
    >
      <CarouselContent className="-ml-4 flex space-x-4">
        {productDataList.map((product) => (
          <CarouselItem key={product.id} className="flex-none">
            <Link
              href={`/products/${encodeURIComponent(product.title)}`}
              className="block p-2 w-40 break-words"
            >
              <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center w-40 h-40 relative">
                <Image
                  src={product.url}
                  alt={product.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex justify-items-start gap-2">
                <p className="mt-2 text-red-500 text-xs font-bold uppercase">
                  Best
                </p>
                <p className="mt-2 text-green-500 text-xs font-bold uppercase">
                  New
                </p>
              </div>
              <p className="mt-1 text-sm text-gray-900">{product.title}</p>
              <p className="mt-1 text-md font-semibold pt-2">
                {product.price.toLocaleString()}원
              </p>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
