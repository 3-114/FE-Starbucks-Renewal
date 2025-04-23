'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

export default function EventCarousel({
  eventData,
}: {
  eventData: { id: number; imgUrl: string; eventName: string }[];
}) {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    if (!api) return;

    setTotalSlides(api.scrollSnapList().length);

    setCurrentIndex(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <Carousel
      opts={{
        loop: true,
        align: 'start',
        containScroll: 'keepSnaps',
      }}
      setApi={setApi}
      className="w-full overflow-hidden"
    >
      <CarouselContent>
        {eventData.map((item, index) => (
          <CarouselItem key={item.id} className="w-full">
            <Link
              href={`/event?category=${encodeURIComponent(item.eventName)}`}
            >
              <div className="relative w-full aspect-[400/300]">
                <Image
                  src={item.imgUrl}
                  alt={`이벤트 ${item.id}`}
                  fill
                  className="object-cover object-top"
                  priority={index === 0}
                />
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === index ? 'bg-black w-4' : 'bg-gray-300'
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`${index + 1}번 슬라이드로 이동`}
          />
        ))}
      </div>
    </Carousel>
  );
}
