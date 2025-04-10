'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

interface Address {
  id: string;
  name: string;
  zipcode: number;
  addressLine: string;
  isDefault?: boolean;
}

export default function AddressCarousel({
  addresses = [],
}: {
  addresses: Address[];
}) {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAddAddress = () => {
    console.log('새 배송지 추가');
  };

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    onSelect();
    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  const totalSlides = addresses.length + 1;

  return (
    <section>
      {addresses.length > 0 ? (
        <Carousel
          setApi={setApi}
          className="h-22 px-7 text-xs/normal tracking-normal bg bg-muted/50 shadow-inner"
        >
          <CarouselContent>
            {addresses.map((address) => (
              <CarouselItem key={address.id}>
                <article className="py-4">
                  <div className="flex items-start space-x-2">
                    <p className="font-semibold text-sm">{address.name}</p>
                    {address.isDefault && (
                      <p className="my-auto px-1 bg-green-100 text-green-600 text-[8px] rounded-xs leading-4">
                        기본
                      </p>
                    )}
                  </div>
                  <div className="flex items-start gap-0 text-gray-600">
                    <p>({address.zipcode})</p>
                    <p>{address.addressLine}</p>
                  </div>
                </article>
              </CarouselItem>
            ))}

            <CarouselItem className="sm:basis-1/2 md:basis-1/3">
              <Button
                variant="ghost"
                color="transparent"
                size="lg"
                onClick={handleAddAddress}
                className="h-22 w-full border border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center gap-2 cursor-pointer bg-muted/20"
              >
                <div className="bg-gray-100 rounded-full p-2">
                  <Plus size={20} className="text-gray-500" />
                </div>
                <p className="text-gray-500 text-sm/normal tracking-normal font-semibold">
                  배송지 등록
                </p>
              </Button>
            </CarouselItem>
          </CarouselContent>

          {currentIndex > 0 && (
            <CarouselPrevious
              variant="ghost"
              size="icon"
              color="transparent"
              className="left-0 bg-none border-none shadow-none text-gray-500 hover:text-black"
            />
          )}
          {currentIndex < totalSlides - 1 && (
            <CarouselNext
              variant="ghost"
              size="icon"
              color="transparent"
              className="right-0 bg-none border-none shadow-none text-gray-500 hover:text-black"
            />
          )}
        </Carousel>
      ) : (
        <div className="p-6 text-sm bg-muted/50 flex items-start justify-between shadow-inner tracking-normal">
          <div className="font-semibold">
            <p>등록된 배송지가 없습니다.</p>
            <p>배송지를 등록해주세요.</p>
          </div>
          <Link
            href="/account/addresses/new"
            className="text-[#9F7147] text-xs whitespace-nowrap"
          >
            배송지 등록
          </Link>
        </div>
      )}
    </section>
  );
}
