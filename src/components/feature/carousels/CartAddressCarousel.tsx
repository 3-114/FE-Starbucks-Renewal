'use client';

import { useState, useEffect, useTransition } from 'react';
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
import { prefetchAddressdetail } from '@/actions/cart-service';
import router from 'next/router';
import AddressItemBox from '@/components/feature/boxs/AddressItemBox';

export default function CartAddressCarousel({
  addressUuidList = [],
}: {
  addressUuidList: string[];
}) {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [visibleUuids, setVisibleUuids] = useState<string[]>([]);

  const handleAddAddress = () => {
    router.push('/account/addresses/new');
  };

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const index = api.selectedScrollSnap();

      startTransition(() => {
        setCurrentIndex(index);

        const prefetchUuids = [];
        if (addressUuidList[index - 1])
          prefetchUuids.push(addressUuidList[index - 1]);
        if (addressUuidList[index]) prefetchUuids.push(addressUuidList[index]);
        if (addressUuidList[index + 1])
          prefetchUuids.push(addressUuidList[index + 1]);

        setVisibleUuids(prefetchUuids);
        prefetchAddressdetail(prefetchUuids).catch(console.error);
      });
    };

    const onSettled = () => {
      setIsTransitioning(false);
    };

    onSelect();
    api.on('select', onSelect);
    api.on('settle', onSettled);

    return () => {
      api.off('select', onSelect);
      api.off('settle', onSettled);
    };
  }, [api, addressUuidList]);

  const totalSlides = addressUuidList.length + 1;

  return (
    <section>
      {addressUuidList.length > 0 ? (
        <Carousel
          setApi={setApi}
          className="h-22 px-7 text-xs/normal tracking-normal bg bg-muted/50 shadow-inner"
          opts={{
            skipSnaps: false,
            dragFree: false,
          }}
        >
          <CarouselContent>
            {addressUuidList.map((uuid, index) => (
              <CarouselItem key={uuid}>
                <AddressItemBox
                  uuid={uuid}
                  isActive={currentIndex === index}
                  prefetch={visibleUuids.includes(uuid)}
                />
              </CarouselItem>
            ))}

            <CarouselItem className="sm:basis-1/2 md:basis-1/3">
              <Button
                variant="ghost"
                color="transparent"
                size="lg"
                onClick={handleAddAddress}
                className="h-22 w-full border border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center gap-2 cursor-pointer bg-muted/20"
                disabled={isTransitioning || isPending}
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
              disabled={isTransitioning || isPending}
            />
          )}
          {currentIndex < totalSlides - 1 && (
            <CarouselNext
              variant="ghost"
              size="icon"
              color="transparent"
              className="right-0 bg-none border-none shadow-none text-gray-500 hover:text-black"
              disabled={isTransitioning || isPending}
            />
          )}
        </Carousel>
      ) : (
        <aside className="p-6 text-sm bg-muted/50 flex items-start justify-between shadow-inner tracking-normal">
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
        </aside>
      )}
    </section>
  );
}
