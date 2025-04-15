'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { EventNavMenuType } from '@/types/Initial/InitialDataTypes';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function EventNav({ NavData }: { NavData: EventNavMenuType[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const currentCategory = searchParams.get('category');
    const firstCategory = NavData[0]?.eventName;

    if (!currentCategory && firstCategory) {
      const query = new URLSearchParams(searchParams.toString());
      query.set('category', firstCategory);
      router.replace(`?${query.toString()}`);
    }
  }, [searchParams, NavData, router]);

  const handleClick = (eventName: string) => {
    const query = new URLSearchParams(searchParams.toString());
    query.set('category', eventName);
    router.push(`?${query.toString()}`);
  };

  return (
    <Carousel
      opts={{ loop: false, align: 'start', dragFree: true }}
      className="w-full"
    >
      <CarouselContent>
        {NavData.map((item) => (
          <CarouselItem key={item.id} className="!basis-auto">
            <Button
              onClick={() => handleClick(item.eventName)}
              variant="navcarousel"
              size="navcarousel"
              color="transparent"
              className={cn(
                (searchParams.get('category') ?? NavData[0]?.eventName) ===
                  item.eventName
                  ? 'text-[#01A862]'
                  : 'text-[#838383]'
              )}
            >
              {item.eventName}
            </Button>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
